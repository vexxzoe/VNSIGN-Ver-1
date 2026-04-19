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


export default Solutions;
