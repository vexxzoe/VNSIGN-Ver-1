/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Monitor, 
  Layout, 
  Clock, 
  Cloud, 
  Shield, 
  Zap, 
  ChevronRight, 
  Menu, 
  X, 
  Play, 
  CheckCircle2, 
  ArrowLeft,
  AlertCircle,
  Tv, 
  Smartphone, 
  Globe,
  Settings,
  BarChart3,
  ChevronDown,
  FileText,
  Youtube,
  Award,
  Users,
  Rocket,
  HeartHandshake
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { Chatbot } from './components/Chatbot';
import { LazySection } from './components/LazySection';
import { Logo } from './components/Logo';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger after scrolling past hero section (approx 80vh)
      const heroHeight = window.innerHeight * 0.8;
      setIsScrolled(window.scrollY > heroHeight);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setIsSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: t.nav.features, href: '#features' },
    { name: t.nav.solutions, href: '#solutions', dropdown: true },
    { name: t.nav.projects, href: '#case-studies' },
    { name: t.nav.pricing, href: '#contact' },
    { name: t.nav.resources, href: '#resources' },
    { name: t.nav.process, href: '#how-it-works' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const solutionItems = [
    { 
      name: t.nav.lcd, 
      href: '#lcd-screens', 
      desc: t.nav.lcdDesc,
      icon: Monitor
    },
    { 
      name: t.nav.led, 
      href: '#led-screens', 
      desc: t.nav.ledDesc,
      icon: Tv
    },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 lg:px-24 py-4",
      isScrolled 
        ? "bg-brand-600/97 backdrop-blur-lg shadow-xl shadow-brand-950/20 py-3 border-b border-brand-500/30" 
        : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex-shrink-0" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <Logo variant="image" logoUrl="/assets/logos/vnsign-white.png" />
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={link.dropdown ? handleSolutionsEnter : undefined}
              onMouseLeave={link.dropdown ? handleSolutionsLeave : undefined}
            >
              <a 
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors flex items-center gap-1 py-2",
                  isScrolled ? "text-white hover:text-accent-400" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown className={cn("w-4 h-4 transition-transform", isSolutionsOpen ? "rotate-180" : "")} />}
              </a>

              {link.dropdown && (
                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white rounded-2xl shadow-2xl border border-brand-100 p-4 mt-2"
                    >
                      <div className="grid gap-2">
                        {solutionItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-brand-50/50 transition-colors group"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-600 transition-colors">
                              <item.icon className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-brand-950 mb-1">{item.name}</div>
                              <div className="text-xs text-brand-500 leading-relaxed">{item.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <div className="flex items-center gap-3">
            <button className="text-white hover:text-accent-400 transition-colors">
              <Globe className="w-5 h-5" />
            </button>
            <a
              href="https://www.tiktok.com/@vnvar.vn?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/60 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/10 hover:border-white transition-all active:scale-95"
            >
              Xem Demo
            </a>
            <a
              href="#contact"
              className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30 active:scale-95"
              style={{ background: isScrolled ? '#086788' : 'rgba(255,193,7,1)', color: isScrolled ? '#fff' : '#02222e' }}
            >
              Nhận báo giá
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white relative w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={isMobileMenuOpen ? 'close' : 'menu'}
              initial={{ opacity: 0, rotate: isMobileMenuOpen ? -90 : 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: isMobileMenuOpen ? 90 : -90 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-brand-600 border-t border-white/10 shadow-2xl md:hidden overflow-hidden"
          >
            <motion.div 
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="p-6 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <React.Fragment key={link.name}>
                  <motion.a 
                    href={link.href}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -10 }
                    }}
                    className="text-lg font-medium text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                  {link.dropdown && (
                    <div className="pl-4 flex flex-col gap-3 border-l border-white/10 ml-1">
                      {solutionItems.map((item) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          variants={{
                            open: { opacity: 1, x: 0 },
                            closed: { opacity: 0, x: -10 }
                          }}
                          className="text-sm font-medium text-white/50 hover:text-white"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
              <motion.button 
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 10 }
                }}
                className="bg-accent-400 text-brand-600 px-6 py-3 rounded-xl text-center font-bold shadow-lg shadow-accent-400/20"
              >
                {t.nav.tryNow}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();

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
            HỆ THỐNG QUẢN LÝ
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
            MÀN HÌNH TẬP TRUNG
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
            Xem Demo
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-400 text-brand-950 px-8 py-3.5 rounded-full text-base font-black hover:bg-accent-500 hover:scale-105 transition-all shadow-xl shadow-accent-400/25 active:scale-95"
          >
            Nhận báo giá →
          </a>
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

const FeatureCard = ({ icon: Icon, title, description, index, video }: { icon: any, title: string, description: string, index: number, video?: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="relative p-8 rounded-[40px] border border-white/20 overflow-hidden transition-all duration-500 group min-h-[220px] flex gap-6 shadow-2xl shadow-black/20"
  >
    {/* Video Background */}
    {video && (
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
        >
          <source src={video} type="video/mp4" />
        </video>
        {/* Lighter Overlay for better video visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/60 via-brand-600/30 to-black/40 group-hover:from-brand-600/20 transition-all duration-500" />
      </div>
    )}

    <div className="relative z-10 flex flex-col items-center">
      <div className="text-4xl font-black text-accent-400 opacity-40 group-hover:opacity-100 transition-opacity">
        {String(index).padStart(2, '0')}
      </div>
      <div className="w-px h-full bg-white/20 my-4" />
    </div>
    
    <div className="relative z-10">
      <div className="w-12 h-12 bg-accent-400 rounded-2xl flex items-center justify-center mb-6 text-brand-600 shadow-lg shadow-accent-400/30 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-black text-white mb-4 group-hover:text-accent-400 transition-colors uppercase tracking-tight leading-tight drop-shadow-lg">
        {title}
      </h3>
      <p className="text-white leading-relaxed text-sm font-bold pr-4 drop-shadow-md">{description}</p>
    </div>
  </motion.div>
);

const Features = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Cloud,
      title: t.features.cloud.title,
      description: t.features.cloud.desc,
      video: t.features.cloud.video
    },
    {
      icon: Layout,
      title: t.features.dragDrop.title,
      description: t.features.dragDrop.desc,
      video: t.features.dragDrop.video
    },
    {
      icon: Clock,
      title: t.features.schedule.title,
      description: t.features.schedule.desc,
      video: t.features.schedule.video
    },
    {
      icon: BarChart3,
      title: t.features.realtime.title,
      description: t.features.realtime.desc,
      video: t.features.realtime.video
    }
  ];

  return (
    <section id="features" className="section-padding bg-white relative overflow-hidden">
      {/* Background overlay nhẹ */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-16">
        
        {/* Tiêu đề section - giống ảnh bạn gửi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-400/30 bg-accent-400/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.18em]">TÍNH NĂNG CỐT LÕI</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-950 leading-[1.08] tracking-tight max-w-3xl">
              NỀN TẢNG <span className="text-accent-400">THÔNG MINH</span><br />
              CHO MỌI MÀN HÌNH
            </h2>
          </div>
          <p className="text-brand-600 text-base font-medium leading-relaxed max-w-sm md:text-right">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left: Video Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="sticky top-32">
              <div className="relative rounded-[40px] overflow-hidden border border-brand-100 shadow-2xl aspect-[4/5] bg-brand-950 group">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[5s]"
                >
                  <source src="/assets/case-studies/AEON-BETA/VIDEO/7517333053904.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Live badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-xs font-bold uppercase tracking-widest">LIVE SYSTEM</span>
                </div>

                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <div className="text-accent-400 text-xs font-black uppercase tracking-widest mb-2">VNSIGN CMS PLATFORM</div>
                  <h4 className="text-2xl md:text-3xl font-black leading-tight mb-3">
                    Quản lý tập trung — Điều khiển toàn bộ màn hình từ một nơi
                  </h4>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-7 h-7 rounded-full bg-brand-600 border-2 border-brand-950 flex items-center justify-center text-white text-[10px] font-black">{i}</div>
                      ))}
                    </div>
                    <span>500+ doanh nghiệp tin dùng</span>
                  </div>
                </div>
              </div>

              {/* Floating uptime badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-accent-400 px-7 py-5 rounded-3xl shadow-2xl z-20"
              >
                <div className="text-4xl font-black text-brand-950">99.9%</div>
                <div className="text-xs font-bold text-brand-950/70 uppercase tracking-widest">Uptime Cloud</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                {...feature} 
                index={index + 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const { t } = useLanguage();
  return (
    <section id="solutions" className="section-padding bg-brand-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <a href="#lcd-screens" className="space-y-4 group">
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4]">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  >
                    <source src="/assets/videos/VID_20260310_093518_HDR10PLUS.mp4" type="video/mp4" />
                  </video>
                </div>
              </a>
              <div className="space-y-4 pt-12">
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] group shadow-xl">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  >
                    <source src="/assets/case-studies/AEON-BETA/VIDEO/7517328967641.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-brand-950/60 group-hover:bg-brand-950/40 transition-colors p-6 flex flex-col justify-end">
                    <Smartphone className="w-8 h-8 mb-4 text-accent-400" />
                    <div className="text-2xl font-bold text-white uppercase tracking-tight">{t.solutions.kiosk}</div>
                    <div className="text-sm text-white/80">{t.solutions.kioskSub}</div>
                  </div>
                </div>
                <a href="#led-screens" className="relative overflow-hidden rounded-3xl aspect-[3/4] block group shadow-xl">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  >
                    <source src="/assets/videos/VID_20260310_093535_HDR10PLUS.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-2xl font-bold uppercase tracking-tight">LED & Large Scale</div>
                      <div className="text-sm opacity-80">{t.solutions.led}</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-950 mb-6">
              {t.solutions.title}
            </h2>
            <p className="text-brand-700 text-lg mb-8 leading-relaxed">
              {t.solutions.desc}
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { title: t.solutions.lcd, desc: t.solutions.lcdSub, href: "#lcd-screens" },
                { title: t.solutions.led, desc: t.solutions.ledSub, href: "#led-screens" },
                { title: t.solutions.menu, desc: t.solutions.menuSub, href: "#contact" },
                { title: t.solutions.kiosk, desc: t.solutions.kioskSub, href: "#contact" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-brand-50/50 transition-colors group cursor-pointer border border-transparent hover:border-slate-200"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-brand-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-950 group-hover:text-brand-600 transition-colors">{item.title}</h4>
                    <p className="text-brand-500 text-sm">{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 group"
            >
              {t.hero.ctaStart} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const LCDScreens = () => {
  const { t } = useLanguage();
  return (
    <section id="lcd-screens" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-950 mb-4">
            {t.lcd.title}
          </h2>
          <p className="text-brand-500 max-w-2xl mx-auto text-lg">
            {t.lcd.subtitle}
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl group aspect-[4/5]">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]"
              >
                <source src="/assets/case-studies/AEON-BETA/VIDEO/7517328916682.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-600/40 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xs uppercase tracking-widest">Digital Signage</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl group aspect-[4/5]">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]"
                >
                  <source src="/assets/case-studies/AEON-BETA/VIDEO/7517328935568.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="bg-brand-600 p-6 rounded-[32px] text-white shadow-xl">
                <div className="text-3xl font-black mb-1">4K</div>
                <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Resolution</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-3xl font-black text-brand-950 mb-6 uppercase tracking-tight">{t.lcd.featuresTitle}</h3>
              <p className="text-brand-500 mb-8 leading-relaxed">
                Hệ thống màn hình LCD của VNSIGN được tối ưu cho việc hiển thị nội dung quảng cáo sắc nét, 
                hoạt động bền bỉ trong môi trường trung tâm thương mại và cửa hàng bán lẻ.
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              {t.lcd.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span className="text-brand-700">{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 group"
            >
              {t.hero.requestConsult} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const LEDScreens = () => {
  const { t } = useLanguage();
  return (
    <section id="led-screens" className="section-padding bg-brand-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-950 mb-4">
            {t.led.title}
          </h2>
          <p className="text-brand-500 max-w-2xl mx-auto text-lg">
            {t.led.subtitle}
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-3xl font-black text-brand-950 mb-6 uppercase tracking-tight">{t.led.advantagesTitle}</h3>
              <p className="text-brand-500 mb-8 leading-relaxed">
                Giải pháp màn hình LED khổ lớn của VNSIGN mang đến khả năng hiển thị ấn tượng với độ sáng cực cao, 
                phù hợp cho cả không gian trong nhà và ngoài trời với kích thước không giới hạn.
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              {t.led.advantages.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span className="text-brand-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 group"
            >
              {t.hero.requestConsult} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 order-1 lg:order-2">
            <div className="space-y-4 pb-8">
              <div className="bg-accent-400 p-6 rounded-[32px] text-brand-600 shadow-xl">
                <div className="text-3xl font-black mb-1">IP65</div>
                <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Waterproof</div>
              </div>
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl group aspect-[4/5]">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]"
                >
                  <source src="/assets/case-studies/AEON-BETA/VIDEO/7517328953625.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl group aspect-[4/5]">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]"
              >
                <source src="/assets/case-studies/AEON-BETA/VIDEO/7517328820085.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xs uppercase tracking-widest">Outdoor LED Wall</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const USP = () => {
  const { t } = useLanguage();
  const advantages = [
    {
      icon: Zap,
      title: t.usp.tech.title,
      desc: t.usp.tech.desc
    },
    {
      icon: Award,
      title: t.usp.cost.title,
      desc: t.usp.cost.desc
    },
    {
      icon: Users,
      title: t.usp.channel.title,
      desc: t.usp.channel.desc
    },
    {
      icon: HeartHandshake,
      title: t.usp.support247.title,
      desc: t.usp.support247.desc
    }
  ];

  return (
    <section className="relative overflow-hidden bg-brand-950 border-y border-white/5" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,103,136,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-400/30 bg-accent-400/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
            <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.18em]">Tại sao chọn VNSIGN</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {t.usp.title}
          </h2>
          <div className="w-16 h-1 bg-accent-400 mx-auto rounded-full" />
        </motion.div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-16">
          {[
            { value: '500+', label: 'Màn hình triển khai' },
            { value: '99.9%', label: 'Uptime đảm bảo' },
            { value: '24/7', label: 'Hỗ trợ kỹ thuật' },
            { value: '3 năm', label: 'Bảo hành thiết bị' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-brand-900/60 px-8 py-8 text-center backdrop-blur-sm hover:bg-brand-800/60 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: '#ffc107' }}>{stat.value}</div>
              <div className="text-white/40 text-xs font-semibold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Advantage Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/8 hover:border-accent-400/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent-400/15 border border-accent-400/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-400 group-hover:border-accent-400 transition-all duration-300">
                <item.icon className="w-6 h-6 text-accent-400 group-hover:text-brand-950 transition-colors" />
              </div>
              <h4 className="font-black text-lg mb-3 text-white group-hover:text-accent-400 transition-colors uppercase tracking-tight leading-tight">{item.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const { t } = useLanguage();
  const plans = [
    {
      name: t.pricing.plans.basic.name,
      price: t.pricing.plans.basic.price,
      features: t.pricing.plans.basic.features,
      popular: false
    },
    {
      name: t.pricing.plans.enterprise.name,
      price: t.pricing.plans.enterprise.price,
      features: t.pricing.plans.enterprise.features,
      popular: true
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-brand-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#accent_400,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-950 mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-brand-500 max-w-2xl mx-auto text-sm font-medium">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={cn(
                "relative p-10 rounded-[40px] bg-white transition-all duration-500 overflow-hidden group",
                plan.popular ? "ring-4 ring-accent-400" : "border border-white/10"
              )}
            >
              <div className="mb-10 text-center">
                <div className="text-brand-600 text-sm font-black uppercase tracking-widest mb-4 opacity-60">
                  {plan.name}
                </div>
                <div className="text-brand-600 text-4xl font-black mb-2">
                  {plan.price}
                </div>
                {plan.price !== 'Liên hệ báo giá' && (
                  <div className="text-brand-600/40 text-xs font-bold uppercase tracking-tighter">Giá thuê theo năm</div>
                )}
              </div>

              <div className="w-full h-px bg-brand-600/10 mb-10" />

              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-brand-600/70 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-5 rounded-2xl font-black transition-all active:scale-95 text-lg uppercase tracking-tight",
                plan.popular 
                  ? "bg-accent-400 text-brand-600 hover:bg-black hover:text-white" 
                  : "bg-brand-600/5 text-brand-600 hover:bg-brand-600 hover:text-white"
              )}>
                Liên hệ ngay
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();
  return (
    <section className="section-padding bg-brand-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-600 mb-6">
            {t.testimonials.title}
          </h2>
          <p className="text-brand-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] p-8 border border-brand-100 shadow-xl shadow-brand-200/50 flex flex-col h-full"
            >
              <div className="mb-6 rounded-[24px] overflow-hidden aspect-video">
                <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Zap key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="text-brand-700 text-sm font-medium leading-relaxed italic mb-8 flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center text-white font-black text-xs">
                  {review.author[0]}
                </div>
                <div>
                  <div className="font-black text-brand-600 text-sm">{review.author}</div>
                  <div className="text-[10px] text-brand-400 font-bold uppercase tracking-widest">Customer</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = ({ onProjectClick }: { onProjectClick: (project: any) => void }) => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 'tan-son-nhat-t3',
      title: t.caseStudies.tanSonNhatT3.title,
      subtitle: t.caseStudies.tanSonNhatT3.model,
      desc: t.caseStudies.tanSonNhatT3.desc,
      image: t.caseStudies.tanSonNhatT3.image
    },
    {
      id: 'sun-group',
      title: t.caseStudies.sunGroup.title,
      subtitle: t.caseStudies.sunGroup.model,
      desc: t.caseStudies.sunGroup.desc,
      image: t.caseStudies.sunGroup.image
    },
    {
      id: 'toco-toco',
      title: t.caseStudies.tocoToco.title,
      subtitle: t.caseStudies.tocoToco.model,
      desc: t.caseStudies.tocoToco.desc,
      image: t.caseStudies.tocoToco.image
    }
  ];

  return (
    <section id="case-studies" className="section-padding bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-950 mb-6 uppercase tracking-tight">
              {t.caseStudies.title}
            </h2>
            <p className="text-brand-700 text-lg font-medium leading-relaxed">
              {t.caseStudies.subtitle}
            </p>
          </div>
          <button className="bg-brand-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-brand-600/20 group flex items-center gap-2">
            {t.caseStudies.viewAll} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onProjectClick(project)}
              className="group cursor-pointer bg-white rounded-[40px] overflow-hidden border border-brand-100 hover:shadow-[0_20px_50px_rgba(8,103,136,0.15)] transition-all duration-500"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-600 via-brand-600/20 to-transparent group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-6 left-6 text-[10px] font-black tracking-[0.2em] text-white/50 uppercase">Project #{i+1}</div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-white font-black text-2xl mb-2">{project.title}</div>
                  <div className="text-accent-400 text-xs font-black uppercase tracking-widest">{project.subtitle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectDetail = ({ project, onBack }: { project: any, onBack: () => void }) => {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-600/60 backdrop-blur-[2px]" />
        
        <div className="absolute top-10 left-10 md:left-24">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl hover:bg-accent-400 hover:text-brand-600 transition-all font-black text-xs uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại
          </button>
        </div>

        <div className="absolute bottom-20 left-10 md:left-24 right-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1 bg-accent-400 text-brand-600 text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em]">
              {project.subtitle}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-20">
            <section>
              <h2 className="text-3xl font-black text-brand-600 mb-8 uppercase tracking-tight">Về dự án</h2>
              <p className="text-brand-500 text-2xl font-medium leading-relaxed">
                {project.desc}
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="p-10 bg-brand-50/50 rounded-[40px] border border-brand-100">
                <div className="w-16 h-16 bg-brand-600 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-brand-600/20">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-brand-600 mb-4 tracking-tight">Thử thách</h3>
                <p className="text-brand-500 leading-relaxed font-medium">
                  Chúng tôi đối mặt với những yêu cầu khắt khe về hạ tầng và trải nghiệm người dùng trong môi trường đặc thù.
                </p>
              </div>

              <div className="p-10 bg-accent-400/10 rounded-[40px] border border-accent-400/20">
                <div className="w-16 h-16 bg-accent-400 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-accent-400/10">
                  <CheckCircle2 className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-2xl font-black text-brand-600 mb-4 tracking-tight">Giải pháp</h3>
                <p className="text-brand-600/70 leading-relaxed font-medium">
                  VNSIGN đã triển khai hệ thống quản lý tập trung trên nền tảng Cloud, đảm bảo tính ổn định và bảo mật cao nhất.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 p-10 bg-brand-600 rounded-[40px] text-white">
              <h3 className="text-xl font-black text-accent-400 mb-10 uppercase tracking-widest text-center">Thông tin chi tiết</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-white/40 text-[10px] mb-2 uppercase tracking-widest font-black">Khách hàng</div>
                  <div className="text-white font-black text-xl">{project.title}</div>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <div className="text-white/40 text-[10px] mb-2 uppercase tracking-widest font-black">Năm thực hiện</div>
                  <div className="text-white font-black text-xl">2023 - 2024</div>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <div className="text-white/40 text-[10px] mb-2 uppercase tracking-widest font-black">Dịch vụ</div>
                  <div className="text-white font-black text-xl">Cloud Digital Signage</div>
                </div>
              </div>
              <button className="w-full mt-12 bg-accent-400 text-brand-600 py-5 rounded-2xl font-black hover:bg-white transition-all shadow-xl shadow-accent-400/20 text-sm uppercase tracking-widest">
                Tư vấn dự án này
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Resources = () => {
  const { t } = useLanguage();
  const resources = [
    { title: t.resources.install, type: "PDF", icon: FileText },
    { title: t.resources.api, type: "Web", icon: Globe },
    { title: t.resources.video, type: "Video", icon: Play },
    { title: t.resources.tutorials, type: "Tutorial", icon: Youtube },
    { title: t.resources.assets, type: "Asset", icon: Layout }
  ];

  return (
    <section id="resources" className="section-padding bg-brand-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-950 mb-4">
            {t.resources.title}
          </h2>
          <p className="text-brand-500 max-w-2xl mx-auto text-lg">
            {t.resources.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {resources.map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-brand-100 hover:shadow-lg transition-all group cursor-pointer">
              <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-600 transition-colors">
                <item.icon className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold text-brand-950 mb-2">{item.title}</h4>
              <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">{item.type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const { t } = useLanguage();
  const steps = [
    {
      number: "01",
      title: t.howItWorks.steps[0].title,
      desc: t.howItWorks.steps[0].desc
    },
    {
      number: "02",
      title: t.howItWorks.steps[1].title,
      desc: t.howItWorks.steps[1].desc
    },
    {
      number: "03",
      title: t.howItWorks.steps[2].title,
      desc: t.howItWorks.steps[2].desc
    }
  ];

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #086788 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
            <span className="text-brand-600 text-xs font-bold uppercase tracking-[0.18em]">Quy trình triển khai</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-950 mb-4 tracking-tight">{t.howItWorks.title}</h2>
          <p className="text-brand-400 max-w-xl mx-auto font-medium">{t.howItWorks.subtitle}</p>
        </motion.div>
        
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative group text-center md:text-left"
              >
                {/* Step number circle */}
                <div className="relative inline-flex md:flex items-center justify-center w-14 h-14 rounded-full bg-brand-600 text-white font-black text-xl mb-8 shadow-lg shadow-brand-600/25 group-hover:bg-accent-400 group-hover:text-brand-950 transition-all duration-300 mx-auto md:mx-0">
                  {step.number}
                  {/* Pulse ring on hover */}
                  <div className="absolute inset-0 rounded-full bg-brand-600/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-0 transition-all duration-500" />
                </div>

                <div className="relative p-6 rounded-2xl bg-white border border-brand-100 shadow-sm hover:shadow-lg hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 group-hover:shadow-brand-100/60">
                  {/* Accent bar */}
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-600 to-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <h3 className="text-xl font-black text-brand-950 mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-brand-400 leading-relaxed text-sm font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-700 hover:scale-105 transition-all shadow-xl shadow-brand-600/20 active:scale-95"
          >
            Bắt đầu ngay <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative overflow-hidden" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      {/* Full-width video bg */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videos/VID_20260310_094906_HDR10PLUS.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(135deg, rgba(2,34,46,0.90) 0%, rgba(8,103,136,0.80) 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-400/40 bg-accent-400/10 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
            <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.18em]">Bắt đầu hành trình</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.08] tracking-tight max-w-4xl mx-auto">
            {t.cta.title}
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-400 text-brand-950 px-10 py-4 rounded-full text-base font-black hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-accent-400/25 active:scale-95"
            >
              {t.cta.primary} <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#features"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-10 py-4 rounded-full text-base font-bold hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm active:scale-95"
            >
              {t.cta.secondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', product: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const products = [
    { id: 'lcd', label: 'Màn hình LCD Signage' },
    { id: 'led', label: 'Màn hình LED Wall' },
    { id: 'kiosk', label: 'Kiosk Tương tác' },
    { id: 'standee', label: 'Standee Chân đứng' },
    { id: 'other', label: 'Giải pháp khác' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '', product: '' });
  };

  return (
    <section id="contact" className="section-padding bg-brand-950 relative overflow-hidden text-white pb-32 md:pb-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-400/10 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-block px-4 py-1 bg-accent-400/10 border border-accent-400/20 rounded-full text-accent-400 text-xs font-black uppercase tracking-widest mb-6">
              {t.contact.title}
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Bắt đầu hành trình <span className="text-accent-400">Vivid</span> của bạn
            </h2>
            <p className="text-white/60 text-xl mb-12 font-medium leading-relaxed max-w-lg lg:text-left text-center mx-auto lg:mx-0">
              {t.contact.subtitle}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 lg:mb-0">
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-accent-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent-400/20 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-brand-950" />
                </div>
                <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">{t.contact.hotline}</div>
                <div className="text-white text-xl font-bold">0888 998 181</div>
              </div>
              
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-accent-400" />
                </div>
                <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">{t.contact.email}</div>
                <div className="text-white text-xl font-bold">congnt@vndc.vn</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-1 md:p-1.5 rounded-[48px] bg-gradient-to-b from-white/20 to-transparent shadow-2xl"
          >
            <div className="bg-[#0a0f18] rounded-[42px] p-8 md:p-12 border border-white/5">
              {isSuccess ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-accent-400/40">
                    <CheckCircle2 className="w-12 h-12 text-brand-950" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">{t.contact.successTitle}</h3>
                  <p className="text-white/60 font-medium mb-10">{t.contact.successDesc}</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
                  >
                    Gửi lại yêu cầu mới
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4 relative">
                    <label className="text-sm font-black uppercase tracking-widest text-accent-400 ml-1">Tôi đang quan tâm đến:</label>
                    
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={cn(
                          "w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between transition-all",
                          isDropdownOpen ? "border-accent-400 bg-white/10" : "hover:border-white/20"
                        )}
                      >
                        <span className={cn("font-bold", formData.product ? "text-white" : "text-white/30")}>
                          {formData.product ? products.find(p => p.id === formData.product)?.label : "Chọn loại màn hình..."}
                        </span>
                        <ChevronDown className={cn("w-5 h-5 text-accent-400 transition-transform duration-300", isDropdownOpen ? "rotate-180" : "")} />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="absolute z-50 left-0 right-0 mt-3 bg-[#111827] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                          >
                            <div className="max-h-[220px] overflow-y-auto custom-scrollbar">
                              {products.map((p) => (
                                <button
                                  key={p.id}
                                  type="button"
                                  onClick={() => {
                                    setFormData({...formData, product: p.id});
                                    setIsDropdownOpen(false);
                                  }}
                                  className={cn(
                                    "w-full px-6 py-4 text-left transition-colors flex items-center justify-between group",
                                    formData.product === p.id ? "bg-accent-400 text-brand-950" : "text-white/60 hover:bg-white/5 hover:text-white"
                                  )}
                                >
                                  <span className="font-bold text-sm uppercase tracking-tight">{p.label}</span>
                                  {formData.product === p.id && <CheckCircle2 className="w-5 h-5" />}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder={t.contact.form.namePlaceholder}
                        required
                        className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-accent-400 focus:bg-white/10 transition-all font-bold text-white placeholder-white/30"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="tel" 
                        placeholder={t.contact.form.phonePlaceholder}
                        required
                        className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-accent-400 focus:bg-white/10 transition-all font-bold text-white placeholder-white/30"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <input 
                    type="email" 
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-accent-400 focus:bg-white/10 transition-all font-bold text-white placeholder-white/30"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <textarea 
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-accent-400 focus:bg-white/10 transition-all font-bold text-white placeholder-white/30 h-32 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-accent-400 text-brand-950 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-accent-400/30 disabled:opacity-50 group flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? "Đang gửi..." : (
                      <>
                        {t.contact.form.submit}
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative overflow-hidden bg-brand-950" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-400/60 to-transparent" />

      {/* Background ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[150px] pointer-events-none -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-400/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-10 relative z-10">
        {/* CTA Banner inside footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 p-8 rounded-2xl border border-white/8 bg-white/3">
          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Sẵn sàng triển khai?</p>
            <h3 className="text-white text-xl font-black">Nhận tư vấn & báo giá miễn phí hôm nay</h3>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-accent-400 text-brand-950 px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-accent-500 hover:scale-105 transition-all shadow-lg shadow-accent-400/20 active:scale-95 whitespace-nowrap"
          >
            Liên hệ ngay →
          </a>
        </div>

        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Logo variant="image" logoUrl="/assets/logos/vnsign-white.png" className="mb-8" />
            <p className="text-white/40 max-w-sm leading-relaxed mb-8 text-sm font-medium">
              {t.footer.desc}
            </p>
            <div className="flex gap-3">
              {[
                { label: 'FB', href: '#' },
                { label: 'LN', href: '#' },
                { label: 'YT', href: '#' },
                { label: 'TK', href: '#' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-accent-400 hover:text-brand-950 hover:border-accent-400 transition-all font-bold text-xs"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Company info */}
          <div className="md:col-span-4">
            <h4 className="font-black text-white text-xs uppercase tracking-[0.18em] mb-6">{t.footer.company}</h4>
            <div className="space-y-3 text-sm text-white/40 font-medium">
              <div className="text-white font-bold">{t.footer.companyInfo.name}</div>
              <p className="leading-relaxed">{t.footer.companyInfo.address1}</p>
              <p className="leading-relaxed">{t.footer.companyInfo.address2}</p>
              <p className="leading-relaxed">{t.footer.companyInfo.address3}</p>
              <div className="pt-4 space-y-2 border-t border-white/8">
                <a href="tel:0888998181" className="flex items-center gap-2 text-accent-400 font-black text-base hover:text-accent-500 transition-colors">
                  <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest w-14">Hotline</span>
                  0888 998 181
                </a>
                <a href="mailto:congnt@vndc.vn" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm">
                  <span className="text-[10px] font-bold uppercase tracking-widest w-14">Email</span>
                  congnt@vndc.vn
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="font-black text-white text-xs uppercase tracking-[0.18em] mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-white/40 text-sm font-medium">
              {[
                { label: t.nav.features, href: '#features' },
                { label: t.nav.pricing, href: '#contact' },
                { label: t.nav.projects, href: '#case-studies' },
                { label: t.nav.process, href: '#how-it-works' },
                { label: t.nav.contact, href: '#contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-accent-400 transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/20 text-[11px] font-medium">
            © 2024 VNSIGN — Member of VNDC. All rights reserved.
          </div>
          <div className="flex gap-6 text-white/20 text-[11px] font-medium">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/50 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

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

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}



