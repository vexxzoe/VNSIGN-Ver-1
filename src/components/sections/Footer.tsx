import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
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

const Footer = () => {
  const { t } = useLanguage();
  const { openContactModal } = useContactModal();

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
          <button
            onClick={() => openContactModal('Giải pháp VNSIGN')}
            className="shrink-0 bg-accent-400 text-brand-950 px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-accent-500 hover:scale-105 transition-all shadow-lg shadow-accent-400/20 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            Liên hệ ngay →
          </button>
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
                { label: t.nav.features, href: '/features' },
                { label: t.nav.pricing, href: '/pricing' },
                { label: t.nav.projects, href: '/projects' },
                { label: t.nav.process, href: '#how-it-works' },
                { label: t.nav.contact, href: '/contact' },
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.href} 
                    className="hover:text-accent-400 transition-colors flex items-center gap-2 group"
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        const id = link.href.substring(1);
                        const element = document.getElementById(id);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
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

export default Footer;
