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


export default HowItWorks;
