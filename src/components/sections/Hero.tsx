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
import { useContactModal } from '../../contexts/ModalContext';
import { LazyVideo } from '../LazyVideo';

const Hero = () => {
  const { t } = useLanguage();
  const { openContactModal } = useContactModal();

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
    >
      {/* ── Full-width video background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center center' }}
      >
        <source src="/assets/videos/vnsign-preview.mp4" type="video/mp4" />
      </video>

      <div 
        className="absolute inset-0 z-10" 
        style={{ 
          background: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.80) 25%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.15) 100%)' 
        }} 
      />

      {/* ── Subtle bottom gradient fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-10" style={{ background: 'linear-gradient(to top, rgba(2,34,46,0.6) 0%, transparent 100%)' }} />

      {/* ── Content ── */}
      <div className="relative z-20 w-full px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-start">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <Logo showText={false} logoUrl="/assets/logos/vnsign-white.png" iconClassName="h-6" />
          <div className="h-5 w-px bg-white/30" />
          <span className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">{t.hero.badge}</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] mb-6 max-w-4xl"
          style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
        >
          <span className="text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
            {t.hero.title}
          </span>
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #ffc107 0%, #ffe066 50%, #ffc107 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 12px rgba(255,193,7,0.35))',
            }}
          >
            {t.hero.titleHighlight}
          </span>
        </motion.h1>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed font-medium"
          style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
        >
          {t.hero.desc}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.34 }}
          className="flex flex-col sm:flex-row gap-4 mb-14"
        >
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white px-8 py-3.5 rounded-full text-base font-bold hover:bg-white/10 hover:border-white transition-all active:scale-95 backdrop-blur-sm"
          >
            <Play className="w-4 h-4" />
            {t.hero.ctaDemo}
          </a>
          <button
            onClick={() => openContactModal('Giải pháp VNSIGN')}
            className="inline-flex items-center justify-center gap-2 bg-accent-400 text-brand-950 px-8 py-3.5 rounded-full text-base font-black hover:bg-accent-500 hover:scale-105 transition-all shadow-xl shadow-accent-400/25 active:scale-95 cursor-pointer"
          >
            {t.hero.ctaQuote} →
          </button>
        </motion.div>

        {/* Tagline pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.46 }}
          className="flex flex-wrap gap-4"
        >
          {[t.hero.tagline1, t.hero.tagline2, t.hero.tagline3, t.hero.tagline4].map((tag, i) => (
            <div key={i} className="flex items-center gap-2 text-white/75 text-sm font-semibold">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
              {tag}
            </div>
          ))}
        </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-white/30 animate-pulse" />
        <span className="text-white/40 text-[10px] tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};


export default Hero;
