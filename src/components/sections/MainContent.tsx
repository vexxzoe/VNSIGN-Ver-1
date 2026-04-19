import React, { useState, useEffect, useRef, Suspense } from 'react';
import { 
  Monitor, Layout, Clock, Cloud, Shield, Zap, ChevronRight, Menu, X, Play, 
  CheckCircle2, ArrowLeft, AlertCircle, Tv, Smartphone, Globe, Settings, 
  BarChart3, ChevronDown, FileText, Youtube, Award, Users, Rocket, HeartHandshake
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { Logo } from '../Logo';
import { useLanguage } from '../../contexts/LanguageContext';
import { LazyVideo } from '../LazyVideo';

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
        <Hero />
        <LazySection>
          <Features />
        </LazySection>
        <LazySection>
          <Solutions />
        </LazySection>
        <LazySection>
          <LCDScreens />
        </LazySection>
        <LazySection>
          <LEDScreens />
        </LazySection>
        <LazySection>
          <CaseStudies onProjectClick={(p) => setSelectedProject(p)} />
        </LazySection>
        <LazySection>
          <HowItWorks />
        </LazySection>
        <LazySection>
          <USP />
        </LazySection>
        <LazySection>
          <Pricing />
        </LazySection>
        <LazySection>
          <CTA />
        </LazySection>
        <LazySection>
          <Testimonials />
        </LazySection>
        <LazySection>
          <Resources />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};


export default MainContent;
