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
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
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
          <button 
            onClick={() => navigate('/projects')}
            className="bg-brand-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-brand-600/20 group flex items-center gap-2"
          >
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
              onClick={() => navigate(`/projects/${project.id}`)}
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


export default CaseStudies;
