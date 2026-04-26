import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ModalProvider, useContactModal } from './contexts/ModalContext';
import { QuoteModal } from './components/QuoteModal';
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

const CTA = React.lazy(() => import('./components/sections/CTA'));
const Testimonials = React.lazy(() => import('./components/sections/Testimonials'));
const Contact = React.lazy(() => import('./components/sections/Contact'));

const FeaturesPage = React.lazy(() => import('./pages/FeaturesPage'));
const DocsPage = React.lazy(() => import('./pages/DocsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const LCDPage = React.lazy(() => import('./pages/LCDPage'));
const LEDPage = React.lazy(() => import('./pages/LEDPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'));
const ProjectDetailPage = React.lazy(() => import('./pages/ProjectDetailPage'));
const QuotePage = React.lazy(() => import('./pages/QuotePage'));

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

const Home = () => {
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
          <CaseStudies />
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
  return (
    <div className="min-h-screen selection:bg-brand-200 selection:text-brand-700">
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/pricing" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <PricingPage />
          </Suspense>
        } />
        <Route path="/projects" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <ProjectsPage />
          </Suspense>
        } />
        <Route path="/projects/:id" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <ProjectDetailPage />
          </Suspense>
        } />
        <Route path="/lcd" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <LCDPage />
          </Suspense>
        } />
        <Route path="/led" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <LEDPage />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <ContactPage />
          </Suspense>
        } />
        <Route path="/quote" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <QuotePage />
          </Suspense>
        } />
        <Route path="/quote/:type" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <QuotePage />
          </Suspense>
        } />
        <Route path="/product/:slug" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <ProductDetailPage />
          </Suspense>
        } />
        <Route path="/lcd/:id" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <ProductDetailPage />
          </Suspense>
        } />
        <Route path="/led/:id" element={
          <Suspense fallback={<FallbackSkeleton />}>
            <ProductDetailPage />
          </Suspense>
        } />
      </Routes>
      <Footer />
      <Chatbot />
      <GlobalModal />
    </div>
  );
};

const GlobalModal = () => {
  const { isContactModalOpen, closeContactModal, productName } = useContactModal();

  return (
    <QuoteModal 
      isOpen={isContactModalOpen} 
      onClose={closeContactModal} 
      productName={productName} 
    />
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <ModalProvider>
        <MainContent />
      </ModalProvider>
    </LanguageProvider>
  );
}
