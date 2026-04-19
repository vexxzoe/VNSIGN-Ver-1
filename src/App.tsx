import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
const Contact = React.lazy(() => import('./components/sections/Contact'));

const FeaturesPage = React.lazy(() => import('./pages/FeaturesPage'));
const DocsPage = React.lazy(() => import('./pages/DocsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

const FallbackSkeleton = () => (
  <div className="h-64 w-full animate-pulse bg-brand-50/20 rounded-[40px] my-8 max-w-7xl mx-auto" />
);

const ScrollToHash = () => {
  const { hash, state } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  useEffect(() => {
    const scrollState = state as { scrollTo?: string } | null;
    if (scrollState && scrollState.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollState.scrollTo!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [state]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const Home = ({ selectedProject, setSelectedProject }: any) => {
  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)} 
      />
    );
  }

  return (
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

      <LazySection id="contact">
        <Suspense fallback={<FallbackSkeleton />}>
          <Contact />
        </Suspense>
      </LazySection>
    </main>
  );
};

const MainContent = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (selectedProject) {
      window.scrollTo(0, 0);
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen selection:bg-brand-200 selection:text-brand-700">
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home selectedProject={selectedProject} setSelectedProject={setSelectedProject} />} />
        <Route path="/features" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <FeaturesPage />
          </Suspense>
        } />
        <Route path="/docs" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <DocsPage />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <AboutPage />
          </Suspense>
        } />
      </Routes>
      <Footer />
      {!selectedProject && <Chatbot />}
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
