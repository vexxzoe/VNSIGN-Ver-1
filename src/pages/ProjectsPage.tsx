import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Building2, ChevronRight, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projects';
import { useContactModal } from '../contexts/ModalContext';
import { useLanguage } from '../contexts/LanguageContext';

const TAG_STYLES: Record<string, string> = {
  accent: 'bg-accent-400/20 text-accent-600 border border-accent-400/30',
  brand:  'bg-brand-50 text-brand-600 border border-brand-200',
};

const ProjectsPage = () => {
  const navigate = useNavigate();
  const { openContactModal } = useContactModal();
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[60vh] flex items-center overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=55" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(120deg,rgba(2,34,46,0.97) 0%,rgba(2,34,46,0.85) 60%,rgba(8,103,136,0.4) 100%)' }} />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full z-10 opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle,#ffc107 0%,transparent 70%)' }} />

        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-36 pb-28 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <motion.div initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <Building2 className="w-4 h-4 text-accent-400" />
              <span className="text-white/90 text-sm font-semibold tracking-wider">{t.projectsPage.hero.badge}</span>
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1, duration:0.65 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-6 text-white">
              {t.projectsPage.hero.title}<br />
              <span style={{ background:'linear-gradient(90deg,#ffc107 0%,#ffe066 50%,#ffc107 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', filter:'drop-shadow(0 2px 16px rgba(255,193,7,0.4))' }}>
                {t.projectsPage.hero.titleHighlight}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.22, duration:0.6 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl font-medium leading-relaxed">
              {t.projectsPage.hero.desc}
            </motion.p>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.38 }}
              className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {[
                ['500+', t.projectsPage.hero.stat1],
                ['150+', t.projectsPage.hero.stat2],
                ['12', t.projectsPage.hero.stat3]
              ].map(([num, label], i) => (
                <div key={i} className="flex items-center gap-2 text-white/65 text-sm font-semibold">
                  <span className="text-accent-400 font-black">{num}</span>
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-brand-50 text-brand-600 border border-brand-200">
            {t.projectsPage.featured.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-950 mb-4 leading-tight">
            {t.projectsPage.featured.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">{t.projectsPage.featured.titleHighlight}</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base font-medium">{t.projectsPage.featured.desc}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {PROJECTS_DATA.filter(p => p.featured).map((p, i) => (
            <motion.div key={p.id} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.12, duration:0.55 }}
              className="group relative rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(8,103,136,0.14)] cursor-pointer bg-white border border-brand-100 hover:shadow-[0_24px_60px_rgba(8,103,136,0.22)] hover:-translate-y-1 transition-all duration-400"
              onClick={() => navigate(`/projects/${p.id}`)}>
              <div className="relative h-64 overflow-hidden">
                <img src={p.image} alt={p.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent" />
                <div className={`absolute top-4 left-4 text-[11px] font-black px-3 py-1 rounded-full tracking-wider ${TAG_STYLES[p.tagColor]}`}>{p.tag[language]}</div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium mb-1"><MapPin className="w-3 h-3" />{p.location[language]}</div>
                  <h3 className="text-white font-black text-xl leading-snug">{p.title[language]}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-500 text-sm leading-relaxed mb-4 font-medium">{p.desc[language]}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">{p.model[language]}</span>
                  <button className="inline-flex items-center gap-1 text-brand-600 font-bold text-sm hover:text-brand-700 transition-colors">
                    {t.projectsPage.featured.viewDetail} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── PROJECT GRID ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.filter(p => !p.featured).map((p, i) => (
            <motion.div key={p.id} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1, duration:0.5 }}
              className="group rounded-3xl overflow-hidden bg-white border border-brand-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/projects/${p.id}`)}>
              <div className="relative h-48 overflow-hidden">
                <img src={p.image} alt={p.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 to-transparent" />
                <div className={`absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded-full tracking-wider ${TAG_STYLES[p.tagColor]}`}>{p.tag[language]}</div>
                <div className="absolute bottom-3 left-3 right-3">
                   <div className="flex items-center gap-1 text-white/65 text-xs mb-0.5"><MapPin className="w-3 h-3" />{p.location[language]}</div>
                   <h3 className="text-white font-bold text-base leading-snug">{p.title[language]}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-slate-500 text-sm leading-relaxed mb-3 line-clamp-2">{p.desc[language]}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-brand-400 uppercase tracking-wider">{p.model[language]}</span>
                  <ChevronRight className="w-4 h-4 text-brand-400 group-hover:text-brand-600 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
          className="bg-brand-950 rounded-[40px] overflow-hidden relative py-20 px-8 text-center shadow-[0_20px_50px_rgb(2,34,46,0.5)]">
          <div className="absolute inset-0 opacity-20 mix-blend-screen">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 pointer-events-none" style={{ background:'radial-gradient(ellipse,#ffc107 0%,transparent 70%)' }} />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-white/10 text-accent-400 border border-white/15">
              {t.projectsPage.cta.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {t.projectsPage.cta.title}<br /><span className="text-accent-400">{t.projectsPage.cta.titleHighlight}</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 font-medium leading-relaxed">
              {t.projectsPage.cta.desc}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button 
                onClick={() => openContactModal('Giải pháp VNSIGN')}
                className="bg-accent-400 text-brand-950 px-8 py-4 rounded-full font-black hover:bg-accent-500 transition-all text-lg shadow-xl shadow-accent-400/20 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Rocket className="w-5 h-5" /> {t.projectsPage.cta.button}
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg backdrop-blur hover:scale-105 active:scale-95">
                📞 0888 99 8181
              </button>
            </div>
            <p className="text-white/45 text-sm font-medium">{t.projectsPage.cta.footer}</p>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default ProjectsPage;
