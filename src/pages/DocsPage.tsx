import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, Globe, Play, Youtube, Layout, 
  BookOpen, Download, ExternalLink, ChevronRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const DocsPage = () => {
  const { t } = useLanguage();

  const resources = [
    { title: t.resources.install, type: "PDF", icon: FileText, link: "/assets/documents/HDCD.pdf", external: true },
    { title: t.resources.api, type: "Web", icon: Globe, link: "#" },
    { title: t.resources.video, type: "Video", icon: Play, link: "https://www.youtube.com/watch?v=msrHeSt3JjI", external: true },
    { title: t.resources.tutorials, type: "Tutorial", icon: Youtube, link: "#" },
    { title: t.resources.assets, type: "Asset", icon: Layout, link: "#" }
  ];

  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      {/* ── HERO ── */}
      <section className="relative w-full min-h-[60vh] flex items-center overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1800&q=80" 
            alt="Documentation background" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, rgba(2,34,46,0.95) 0%, rgba(2,34,46,0.8) 50%, rgba(2,34,46,0.4) 100%)' }} />
        
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-32 pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
            >
              <BookOpen className="w-4 h-4 text-accent-400" />
              <span className="text-white/90 text-sm font-semibold tracking-wider">{t.resources.heroBadge}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-6 text-white"
            >
              {t.resources.heroTitle} <br />
              <span 
                style={{
                  background: 'linear-gradient(90deg, #ffc107 0%, #ffe066 50%, #ffc107 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 2px 12px rgba(255,193,7,0.35))',
                }}
              >
                {t.resources.heroTitleHighlight}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-medium"
            >
              {t.resources.heroDesc}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a 
                href="/assets/documents/HDCD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent-400 text-brand-950 px-8 py-3.5 rounded-full text-base font-black hover:bg-accent-500 hover:scale-105 transition-all shadow-xl shadow-accent-400/25 active:scale-95"
              >
                <Download className="w-5 h-5" /> {t.resources.install}
              </a>
              <a 
                href="https://www.youtube.com/watch?v=msrHeSt3JjI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white px-8 py-3.5 rounded-full text-base font-bold hover:bg-white/10 hover:border-white transition-all active:scale-95 backdrop-blur-sm"
              >
                <Youtube className="w-5 h-5 fill-white" /> {t.resources.video}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RESOURCES GRID ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4">{t.resources.exploreLabel}</div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-950 mb-6">
            {t.resources.exploreTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">{t.resources.exploreTitleHighlight}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {resources.map((item, i) => (
            <motion.a 
              key={i}
              href={item.link}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white rounded-2xl border border-brand-100 hover:border-brand-300 hover:shadow-xl transition-all group cursor-pointer block relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.external ? <ExternalLink className="w-4 h-4 text-brand-400" /> : <ChevronRight className="w-4 h-4 text-brand-400" />}
              </div>
              
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold text-brand-950 mb-2 text-lg group-hover:text-brand-600 transition-colors">{item.title}</h4>
              <div className="text-xs font-bold text-brand-500 uppercase tracking-wider">{item.type}</div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
