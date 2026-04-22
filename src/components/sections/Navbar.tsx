import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const { openContactModal } = useContactModal();
  const navigate = useNavigate();
  const location = useLocation();
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
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/', { state: { scrollTo: id } });
      }
      setIsMobileMenuOpen(false);
    } else if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: t.nav.features, href: '/features' },
    { name: "Màn hình", href: '#solutions', dropdown: true },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.pricing, href: '/pricing' },
    { name: t.nav.resources, href: '/docs' },
    { name: "Giới thiệu", href: '/about' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const solutionItems = [
    {
      name: t.nav.lcd,
      href: '/lcd',
      desc: t.nav.lcdDesc,
      icon: Monitor
    },
    {
      name: t.nav.led,
      href: '/led',
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
        <Link to="/" className="flex-shrink-0">
          <Logo variant="image" logoUrl="/assets/logos/vnsign-white.png" />
        </Link>
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
                onClick={(e) => handleNavClick(e, link.href)}
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
                            onClick={(e) => { handleNavClick(e, item.href); setIsSolutionsOpen(false); }}
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
            <button 
              onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
              className="text-white hover:text-accent-400 transition-all flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/10 active:scale-95 group"
              title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
            >
              <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="text-xs font-black tracking-widest uppercase">{language}</span>
            </button>
            <a
              href="https://www.tiktok.com/@vnvar.vn?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/60 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/10 hover:border-white transition-all active:scale-95"
            >
              Xem Demo
            </a>
            <button
              onClick={() => openContactModal('Giải pháp VNSIGN')}
              className="px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-lg active:scale-95 cursor-pointer"
              style={{ 
                background: isScrolled ? '#086788' : 'rgba(255,193,7,1)', 
                color: isScrolled ? '#fff' : '#02222e',
                boxShadow: isScrolled ? '0 10px 15px -3px rgba(8,103,136,0.3)' : '0 10px 15px -3px rgba(255,193,7,0.3)'
              }}
            >
              Nhận báo giá
            </button>
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
                    onClick={(e) => handleNavClick(e, link.href)}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -10 }
                    }}
                    className="text-lg font-medium text-white/80 hover:text-white transition-colors"

                  >
                    {link.name}
                  </motion.a>
                  {link.dropdown && (
                    <div className="pl-4 flex flex-col gap-3 border-l border-white/10 ml-1">
                      {solutionItems.map((item) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          variants={{
                            open: { opacity: 1, x: 0 },
                            closed: { opacity: 0, x: -10 }
                          }}
                          className="text-sm font-medium text-white/50 hover:text-white"

                        >
                          {item.name}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
              <motion.button
                onClick={() => {
                  openContactModal('Giải pháp VNSIGN');
                  setIsMobileMenuOpen(false);
                }}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 10 }
                }}
                className="bg-accent-400 text-brand-600 px-6 py-3 rounded-xl text-center font-bold shadow-lg shadow-accent-400/20 active:scale-95 cursor-pointer"
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


export default Navbar;
