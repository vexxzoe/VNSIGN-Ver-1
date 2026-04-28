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
            <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.18em]">{t.usp.badgeLabel}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {t.usp.title}
          </h2>
          <div className="w-16 h-1 bg-accent-400 mx-auto rounded-full" />
        </motion.div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-16">
          {[
            { value: t.usp.stat1Value, label: t.usp.stat1Label },
            { value: t.usp.stat2Value, label: t.usp.stat2Label },
            { value: t.usp.stat3Value, label: t.usp.stat3Label },
            { value: t.usp.stat4Value, label: t.usp.stat4Label },
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


export default USP;
