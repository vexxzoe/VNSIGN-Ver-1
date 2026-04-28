import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronLeft, MapPin, Building2, CheckCircle2, 
  ArrowLeft, Rocket, Target, Lightbulb, Zap, ArrowRight 
} from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/projects';
import { useContactModal } from '../contexts/ModalContext';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const { openContactModal } = useContactModal();
  const { t, language } = useLanguage();

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

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = PROJECTS_DATA.find(p => p.id === id);
    setProject(found || null);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl">
          <ArrowLeft className="w-10 h-10 text-brand-200" />
        </div>
        <h1 className="text-3xl font-black text-brand-950 mb-4">{t.project.detail.notFound}</h1>
        <p className="text-slate-500 mb-8 max-w-md">{t.project.detail.notFoundDesc}</p>
        <button 
          onClick={() => navigate('/projects')} 
          className="px-8 py-4 bg-brand-950 text-white rounded-full font-bold hover:bg-brand-600 transition-all"
        >
          {t.project.detail.backToList}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      
      {/* ── HERO SECTION ── */}
      <section className="relative w-full overflow-hidden bg-brand-950 pt-32 pb-24 md:pb-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src={project.image} alt={project.title[language]} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-950 via-brand-950/80 to-brand-950/40" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12">
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-white/50 hover:text-accent-400 mb-12 transition-colors font-bold uppercase tracking-widest text-xs group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.project.detail.back}
          </button>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl"
            >
              <Building2 className="w-4 h-4 text-accent-400" />
              <span className="text-white/90 text-[10px] font-black tracking-[0.25em] uppercase">{t.project.detail.featuredBadge} · {project.tag[language]}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-white tracking-tight"
            >
              {project.title[language]}
            </motion.h1>

            <div className="flex flex-wrap items-center gap-6 text-white/70 font-bold mb-12">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-400" />
                {project.location[language]}
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-accent-400" />
                {project.model[language]}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-3xl"
            >
              {project.desc[language]}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW & CHALLENGES ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-brand-950 mb-8 flex items-center gap-3">
              <span className="w-12 h-1.5 bg-brand-600 rounded-full" />
              {t.project.detail.overview}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium">
              {project.overview[language]}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[40px] bg-white border border-brand-100 shadow-sm">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-black text-brand-950 mb-4">{t.project.detail.challenge}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {project.challenge[language]}
                </p>
              </div>
              <div className="p-8 rounded-[40px] bg-white border border-brand-100 shadow-sm">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-black text-brand-950 mb-4">{t.project.detail.solution}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {project.solution[language]}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 p-8 rounded-[40px] bg-brand-950 text-white shadow-2xl">
              <h3 className="text-xl font-black mb-8 border-b border-white/10 pb-4">{t.project.detail.specs}</h3>
              <ul className="space-y-6">
                {project.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0 mt-1" />
                    <span className="text-white/80 font-medium leading-snug">{spec[language]}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-6 rounded-3xl bg-accent-400 text-brand-950">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 font-black" />
                  <span className="font-black text-xs uppercase tracking-widest">{t.project.detail.result}</span>
                </div>
                <p className="font-black leading-tight text-lg">
                  {project.result[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-brand-950 rounded-[56px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent-400/10 blur-[100px] rounded-full -ml-32 -mt-32" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-600/20 blur-[100px] rounded-full -mr-32 -mb-32" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
              {renderHighlightedText(t.project.detail.ctaTitle)}
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-medium">
              {t.project.detail.ctaSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => openContactModal(project.title[language])}
                className="bg-accent-400 text-brand-950 px-12 py-5 rounded-full font-black text-lg hover:bg-white transition-all shadow-xl shadow-accent-400/20 active:scale-95 cursor-pointer"
              >
                {t.project.detail.ctaButton}
              </button>
              <Link 
                to="/projects"
                className="bg-white/10 text-white border border-white/20 px-12 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-md active:scale-95 flex items-center justify-center gap-2"
              >
                {t.project.detail.viewMore} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default ProjectDetailPage;
