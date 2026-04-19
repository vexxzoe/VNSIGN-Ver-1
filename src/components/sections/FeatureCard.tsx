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

const FeatureCard = ({ icon: Icon, title, description, index, video }: { icon: any, title: string, description: string, index: number, video?: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="relative p-8 rounded-[40px] border border-white/20 overflow-hidden transition-all duration-500 group min-h-[220px] flex gap-6 shadow-2xl shadow-black/20"
  >
    {/* Video Background */}
    {video && (
      <div className="absolute inset-0 z-0">
        <LazyVideo src={video} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
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


export default FeatureCard;
