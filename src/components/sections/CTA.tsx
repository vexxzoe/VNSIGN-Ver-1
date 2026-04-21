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

const CTA = () => {
  const { t } = useLanguage();
  const { openContactModal } = useContactModal();
  
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
            <button 
              onClick={() => openContactModal('Dùng thử VNSIGN')}
              className="inline-flex items-center justify-center gap-2 bg-accent-400 text-brand-950 px-10 py-4 rounded-full text-base font-black hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-accent-400/25 active:scale-95 cursor-pointer"
            >
              {t.cta.primary} <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => openContactModal('Tư vấn Giải pháp VNSIGN')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-10 py-4 rounded-full text-base font-bold hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm active:scale-95 cursor-pointer"
            >
              {t.cta.secondary}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default CTA;
