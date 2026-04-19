const fs = require('fs');
const path = require('path');

// 1. Update LazySection.tsx
const lazySectionCode = `import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ProgressBar } from './ProgressBar';

interface LazySectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  showProgress?: boolean;
  progressLabel?: string;
  minHeight?: string;
}

export const LazySection: React.FC<LazySectionProps> = ({ 
  id,
  children, 
  className = "", 
  threshold = 0.1,
  rootMargin = "100px",
  once = true,
  showProgress = false,
  progressLabel = "Loading Section",
  minHeight = "20vh"
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  useEffect(() => {
    if (isInView && showProgress) {
      const timer = setTimeout(() => setProgress(100), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, showProgress]);

  return (
    <section id={id} ref={ref} className={className} style={{ minHeight: isInView ? 'auto' : minHeight }}>
      {showProgress && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-4">
          <ProgressBar progress={progress} label={progressLabel} />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {isInView ? children : <div className="h-64 w-full animate-pulse bg-brand-50/10 rounded-2xl" />}
      </motion.div>
    </section>
  );
};
`;
fs.writeFileSync(path.join(__dirname, 'src/components/LazySection.tsx'), lazySectionCode);

// 2. Update Pricing.tsx (remove id="pricing" and change section to div)
const pricingPath = path.join(__dirname, 'src/components/sections/Pricing.tsx');
let pricingCode = fs.readFileSync(pricingPath, 'utf8');
pricingCode = pricingCode.replace(/<section id="pricing"([^>]*)>/, '<div$1>');
pricingCode = pricingCode.replace(/<\/section>/g, '</div>');
fs.writeFileSync(pricingPath, pricingCode);

// 3. Update App.tsx (add IDs to LazySections)
const appPath = path.join(__dirname, 'src/App.tsx');
let appCode = fs.readFileSync(appPath, 'utf8');
appCode = appCode.replace(/<LazySection>\s*<Suspense fallback=\{<FallbackSkeleton \/>\}>\s*<Features \/>/g, '<LazySection id="features">\n          <Suspense fallback={<FallbackSkeleton />}>\n            <Features />');
appCode = appCode.replace(/<LazySection>\s*<Suspense fallback=\{<FallbackSkeleton \/>\}>\s*<Solutions \/>/g, '<LazySection id="solutions">\n          <Suspense fallback={<FallbackSkeleton />}>\n            <Solutions />');
appCode = appCode.replace(/<LazySection>\s*<Suspense fallback=\{<FallbackSkeleton \/>\}>\s*<LCDScreens \/>/g, '<LazySection id="lcd-screens">\n          <Suspense fallback={<FallbackSkeleton />}>\n            <LCDScreens />');
appCode = appCode.replace(/<LazySection>\s*<Suspense fallback=\{<FallbackSkeleton \/>\}>\s*<LEDScreens \/>/g, '<LazySection id="led-screens">\n          <Suspense fallback={<FallbackSkeleton />}>\n            <LEDScreens />');
appCode = appCode.replace(/<LazySection>\s*<Suspense fallback=\{<FallbackSkeleton \/>\}>\s*<CaseStudies/g, '<LazySection id="case-studies">\n          <Suspense fallback={<FallbackSkeleton />}>\n            <CaseStudies');
appCode = appCode.replace(/<LazySection>\s*<Suspense fallback=\{<FallbackSkeleton \/>\}>\s*<HowItWorks \/>/g, '<LazySection id="how-it-works">\n          <Suspense fallback={<FallbackSkeleton />}>\n            <HowItWorks />');
appCode = appCode.replace(/<LazySection>\s*<Suspense fallback=\{<FallbackSkeleton \/>\}>\s*<Pricing \/>/g, '<LazySection id="pricing">\n          <Suspense fallback={<FallbackSkeleton />}>\n            <Pricing />');
appCode = appCode.replace(/<LazySection>\s*<Suspense fallback=\{<FallbackSkeleton \/>\}>\s*<Resources \/>/g, '<LazySection id="resources">\n          <Suspense fallback={<FallbackSkeleton />}>\n            <Resources />');
appCode = appCode.replace(/<LazySection>\s*<Suspense fallback=\{<FallbackSkeleton \/>\}>\s*<Contact \/>/g, '<LazySection id="contact">\n          <Suspense fallback={<FallbackSkeleton />}>\n            <Contact />');
fs.writeFileSync(appPath, appCode);

// 4. Update Navbar.tsx
const navbarPath = path.join(__dirname, 'src/components/sections/Navbar.tsx');
let navbarCode = fs.readFileSync(navbarPath, 'utf8');
const scrollFunc = `
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [`;

navbarCode = navbarCode.replace(/\s*const navLinks = \[/, scrollFunc);
navbarCode = navbarCode.replace(/href=\{link\.href\}/g, 'href={link.href}\n                onClick={(e) => handleNavClick(e, link.href)}');
// Fix the mobile menu buttons inside solutionItems loop as well
navbarCode = navbarCode.replace(/href=\{item\.href\}\s*onClick=\{\(\) => setIsSolutionsOpen\(false\)\}/g, 'href={item.href}\n                            onClick={(e) => { setIsSolutionsOpen(false); handleNavClick(e, item.href); }}');
navbarCode = navbarCode.replace(/onClick=\{\(\) => setIsMobileMenuOpen\(false\)\}/g, ''); // Handled by handleNavClick

// We will just do a simpler replace for handleNavClick since it's already added to `href={link.href}`
fs.writeFileSync(navbarPath, navbarCode);
