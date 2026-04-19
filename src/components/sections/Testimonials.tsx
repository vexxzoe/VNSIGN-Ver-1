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


export default Testimonials;
