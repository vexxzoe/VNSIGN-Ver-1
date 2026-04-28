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

const Contact = () => {
  const { t } = useLanguage();

  const renderHighlightedText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(<highlight>.*?<\/highlight>)/g);
    return parts.map((part, i) => {
      if (part.startsWith('<highlight>') && part.endsWith('</highlight>')) {
        const content = part.replace('<highlight>', '').replace('</highlight>', '');
        return <span key={i} className="text-accent-400">{content}</span>;
      }
      return part;
    });
  };

  return (
    <section id="contact" className="section-padding bg-brand-950 relative overflow-hidden text-white pb-32 md:pb-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-400/10 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-block px-4 py-1 bg-accent-400/10 border border-accent-400/20 rounded-full text-accent-400 text-xs font-black uppercase tracking-widest mb-6">
              {t.contact.title}
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              {renderHighlightedText(t.contact.ctaTitle)}
            </h2>
            <p className="text-white/60 text-xl mb-12 font-medium leading-relaxed max-w-lg lg:text-left text-center mx-auto lg:mx-0">
              {t.contact.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 lg:mb-0">
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-accent-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent-400/20 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-brand-950" />
                </div>
                <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">{t.contact.hotline}</div>
                <div className="text-white text-xl font-bold">0888 998 181</div>
              </div>

              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-accent-400" />
                </div>
                <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">{t.contact.email}</div>
                <div className="text-white text-xl font-bold">congnt@vndc.vn</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-1 md:p-1.5 rounded-[48px] bg-gradient-to-b from-white/20 to-transparent shadow-2xl"
          >
            <div className="bg-[#0a0f18] rounded-[42px] p-2 md:p-4 border border-white/5 overflow-hidden">
              <div className="rounded-[32px] overflow-hidden bg-white/5 shadow-2xl">
                <iframe
                  src="https://znc.vncrm.net/crm/formdata?l=znc&s=b94a65f1-3b2e-4da8-9728-f8389d4249eb&d=6%2fqi1SbOFnz8JASKA0AXUFqw6ODBXZSq7SbSJna2IxBD001d4ADbRiWiCMEJ5Y6eX%2fqTgveHsUjZjYIyk6y%2bwt9Llm09RBB8skThNQQY%2fqdr0LkBScVOmg8eFjuaX%2bCXacWP%2fVGS0gi1I5pY%2fDeVug%2fD77dYoMwAHFRKmGZYVFGE%2btsSIbL5f05lYJZUXSC3tGvZuxjvm8VEIG1LkLlBJERiT2nITAvKmO3SLihTAmfQVTrB9edh0Y75g65wmrabdQodB8Ax8SYwYw4029if%2feaEBnnRFQwVPyFweoH%2fxGHIwXoGXJ9UHnHA00wfagAzMqz7p9dhTamnjeZTmn6Pfe4PdagU4ZrZUjy8wT0mu1PgwbEzr2eQLIja0kygx0Uqt5iePGaKbGs%2be5dYkMrFUl9ivUHuWC2YQoUjLj2a45BKWU8tdz37d30RCW3JfpUVkJ3Ajl9sTwt0kpod82HxGYS3jzuEOxC4%2foBD1lV%2fYyBfV1Iw6dbBgf50O%2fpeM7AINkwD2eez579Lb6oTXv4TEZoUqwqV1YI5ETeCOa4W5UO1n3BW3ufG6u%2bpphUrIHkDoKBL2lcH2rGJQcbp10YKl9IIj%2bQ2fvm5pyaM8JwEBW7b03wA%2fREgBYHh53apjSgmayQ6DAf0PMF0F2EaWJgnsRHMjGuX2lNjzM4XDaKk8IaeiGmGhZxOErfNjds8LLVyK5%2foeJ0zpB3mjcmsPJv6FbGWggwws2YYVyIMVHBg6GI1xxBQX54f7m2EKbcTFwRmBAeIUK0CRXDIwh%2fGiNFpOGVh7GoyzV%2bBHl9zhyrYkWwWcs4cfWXBRTwvdTtWOn52DvQlX92BvODWKfTb2ei%2b2wzZ1xLDfZFcZiYMUa%2bMZEH9Hr2DEepK%2buebFv%2fqc%2fPkts8h%2brjKfjyLNHDTiQpfZ2imyxuBbwD%2byJKqTf0FQFuF3bssjyBZbRSVJqqrj3eWd4jUmCqBFit3wY0Mm4b32kHlwRobLkb6INzlIDxAUbQ%3d"
                  style={{ width: '100%', height: '100%', border: 'none', minHeight: '720px' }}
                  frameBorder="0"
                  scrolling="no"
                  title="CRM Contact Form"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
