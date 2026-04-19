import React, { useState, useEffect, Suspense } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Chatbot } from './components/Chatbot';
import { LazySection } from './components/LazySection';

// Static imports for above-the-fold content
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/sections/Footer';
import ProjectDetail from './components/sections/ProjectDetail';

// Lazy imports for below-the-fold content
const Features = React.lazy(() => import('./components/sections/Features'));
const Solutions = React.lazy(() => import('./components/sections/Solutions'));
const LCDScreens = React.lazy(() => import('./components/sections/LCDScreens'));
const LEDScreens = React.lazy(() => import('./components/sections/LEDScreens'));
const CaseStudies = React.lazy(() => import('./components/sections/CaseStudies'));
const HowItWorks = React.lazy(() => import('./components/sections/HowItWorks'));
const USP = React.lazy(() => import('./components/sections/USP'));
const Pricing = React.lazy(() => import('./components/sections/Pricing'));
const CTA = React.lazy(() => import('./components/sections/CTA'));
const Testimonials = React.lazy(() => import('./components/sections/Testimonials'));
const Resources = React.lazy(() => import('./components/sections/Resources'));
const Contact = React.lazy(() => import('./components/sections/Contact'));

const FallbackSkeleton = () => (
  <div className="h-64 w-full animate-pulse bg-brand-50/20 rounded-[40px] my-8 max-w-7xl mx-auto" />
);

const MainContent = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (selectedProject) {
      window.scrollTo(0, 0);
    }
  }, [selectedProject]);

  if (selectedProject) {
    return (
      <div className="min-h-screen selection:bg-brand-200 selection:text-brand-700">
        <Navbar />
        <ProjectDetail 
          project={selectedProject} 
          onBack={() => setSelectedProject(null)} 
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-brand-200 selection:text-brand-700">
      <Navbar />
      <main>
        {/* Above the fold, loaded immediately */}
        <Hero />
        
        {/* Below the fold, loaded lazily and only when scrolled into view */}
        <LazySection id="features">
          <Suspense fallback={<FallbackSkeleton />}>
            <Features />
          </Suspense>
        </LazySection>

        <LazySection id="solutions">
          <Suspense fallback={<FallbackSkeleton />}>
            <Solutions />
          </Suspense>
        </LazySection>

        <LazySection id="lcd-screens">
          <Suspense fallback={<FallbackSkeleton />}>
            <LCDScreens />
          </Suspense>
        </LazySection>

        <LazySection id="led-screens">
          <Suspense fallback={<FallbackSkeleton />}>
            <LEDScreens />
          </Suspense>
        </LazySection>

        <LazySection id="case-studies">
          <Suspense fallback={<FallbackSkeleton />}>
            <CaseStudies onProjectClick={(p: any) => setSelectedProject(p)} />
          </Suspense>
        </LazySection>

        <LazySection id="how-it-works">
          <Suspense fallback={<FallbackSkeleton />}>
            <HowItWorks />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<FallbackSkeleton />}>
            <USP />
          </Suspense>
        </LazySection>

        <LazySection id="pricing">
          <Suspense fallback={<FallbackSkeleton />}>
            <Pricing />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<FallbackSkeleton />}>
            <CTA />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<FallbackSkeleton />}>
            <Testimonials />
          </Suspense>
        </LazySection>

        <LazySection id="resources">
          <Suspense fallback={<FallbackSkeleton />}>
            <Resources />
          </Suspense>
        </LazySection>

        <LazySection id="contact">
          <Suspense fallback={<FallbackSkeleton />}>
            <Contact />
          </Suspense>
        </LazySection>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
