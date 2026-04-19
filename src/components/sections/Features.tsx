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
import FeatureCard from './FeatureCard';

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
                <LazyVideo src="/assets/case-studies/AEON-BETA/VIDEO/7517333053904.mp4" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[5s]" />
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
                      {[1, 2, 3].map(i => (
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


export default Features;
