import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ChevronLeft, Maximize, Sun, ShieldCheck,
  ArrowLeft, FileDown, Tv, Monitor,
  Layout, Zap, Activity
} from 'lucide-react';
import { ALL_DATA, Product } from '../data/products';
import { useContactModal } from '../contexts/ModalContext';
import { useLanguage } from '../contexts/LanguageContext';

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const { openContactModal } = useContactModal();
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    const safeData = Array.isArray(ALL_DATA) ? ALL_DATA : [];
    const foundProduct = safeData.find(p => p.slug === slug);
    setProduct(foundProduct || null);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl">
          <ArrowLeft className="w-10 h-10 text-brand-200" />
        </div>
        <h1 className="text-3xl font-black text-brand-950 mb-4">{t.product.led.notFound.title}</h1>
        <p className="text-slate-500 mb-8 max-w-md">{t.product.led.notFound.desc}</p>
        <button 
          onClick={() => navigate(-1)} 
          className="px-8 py-4 bg-brand-950 text-white rounded-full font-bold hover:bg-brand-600 transition-all"
        >
          {t.product.led.notFound.back}
        </button>
      </div>
    );
  }

  const isLED = product.slug.includes('led') || product.category === 'display' || product.category === 'control';

  // Helper to get translated spec label
  const getSpecLabel = (key: string) => {
    // Using the new product.led.spec structure as requested
    const specLabels = t.product.led.spec;
    if (specLabels[key]) return specLabels[key];
    // Fallback to formatted key if not in translations
    return key.replace(/([A-Z])/g, ' $1').trim().toUpperCase();
  };

  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>

      {/* ══════════════════════════════════════
          1. HERO SECTION (Split Layout)
      ══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-brand-950 pt-32 pb-24 md:pb-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1800&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(180deg, rgba(2,34,46,0.98) 0%, rgba(2,34,46,0.85) 50%, rgba(2,34,46,0.98) 100%)' }}
        />

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[140px] z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-400/10 rounded-full blur-[140px] z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/50 hover:text-accent-400 mb-12 transition-colors font-bold uppercase tracking-widest text-xs group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.product.led.hero.back}
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl">
                {isLED ? <Tv className="w-4 h-4 text-accent-400" /> : <Monitor className="w-4 h-4 text-accent-400" />}
                <span className="text-white/90 text-[10px] font-black tracking-[0.25em] uppercase">{product.subcategory}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8 text-white tracking-tight">
                {typeof product.name === 'string' ? product.name : product.name[language]}
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-12 font-medium leading-relaxed max-w-xl">
                {product.description[language]}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openContactModal(typeof product.name === 'string' ? product.name : product.name[language])}
                  className="bg-accent-400 text-brand-950 px-10 py-4 rounded-full font-black text-sm hover:bg-white transition-all shadow-xl shadow-accent-400/20 active:scale-95 flex items-center justify-center gap-2"
                >
                  {t.product.led.hero.getQuote}
                </button>
                <button className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2 active:scale-95 backdrop-blur-md">
                  <FileDown className="w-5 h-5" /> {t.product.led.hero.videoDemo}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative aspect-[4/3] lg:aspect-square bg-white/5 rounded-[48px] border border-white/10 shadow-2xl overflow-hidden p-8 md:p-16 flex items-center justify-center backdrop-blur-sm group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
              <img
                src={product.image}
                alt={typeof product.name === 'string' ? product.name : product.name[language]}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. QUICK INFO
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-b border-brand-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-[10px] font-black text-brand-600 uppercase tracking-[0.3em] mb-4">{t.product.led.spec.sectionLabel}</h2>
            <h3 className="text-3xl font-black text-brand-950">{t.product.led.spec.sectionTitle}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-center">
            {Object.entries(product.specs).map(([key, value], i) => (
              <div key={i} className="p-8 rounded-[32px] bg-brand-50/50 border border-brand-100/50 flex flex-col items-center text-center group hover:bg-brand-50 hover:border-brand-200 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform group-hover:bg-brand-600">
                  {key === 'pixelPitch' || key === 'size' ? <Maximize className="w-6 h-6 text-brand-300 group-hover:text-white transition-colors" /> :
                    key === 'brightness' ? <Sun className="w-6 h-6 text-brand-300 group-hover:text-white transition-colors" /> :
                    key === 'resolution' ? <Layout className="w-6 h-6 text-brand-300 group-hover:text-white transition-colors" /> :
                    key === 'refreshRate' ? <Activity className="w-6 h-6 text-brand-300 group-hover:text-white transition-colors" /> :
                    key === 'power' ? <Zap className="w-6 h-6 text-brand-300 group-hover:text-white transition-colors" /> :
                      <ShieldCheck className="w-6 h-6 text-brand-300 group-hover:text-white transition-colors" />}
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{getSpecLabel(key)}</div>
                <div className="text-lg font-black text-brand-950">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. DETAILED SPECS
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto text-center">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="text-3xl font-black text-brand-950 mb-4">{t.product.led.details.sectionTitle}</h2>
          <div className="h-1.5 w-24 bg-accent-400 rounded-full" />
        </div>

        <div className="bg-white rounded-[40px] border border-brand-100 shadow-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <tbody>
              {product.details ? Object.entries(product.details).map(([key, value], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-50/30'}>
                  <td className="py-5 px-8 text-sm font-black text-brand-950 uppercase tracking-wider w-1/3 border-r border-brand-100/50">{getSpecLabel(key)}</td>
                  <td className="py-5 px-8 text-sm font-bold text-slate-600">{value[language]}</td>
                </tr>
              )) : (
                <tr>
                  <td className="py-10 px-8 text-center text-slate-400 italic" colSpan={2}>{t.product.led.details.updating}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. GALLERY
      ══════════════════════════════════════ */}
      {product.gallery && product.gallery.length > 0 && (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-brand-950">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-black text-white mb-4">{t.product.led.gallery.title}</h2>
              <p className="text-white/50 font-medium">{t.product.led.gallery.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.gallery.map((img, i) => (
                <div key={i} className="aspect-video rounded-[32px] overflow-hidden border border-white/10 group cursor-pointer">
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          5. CTA SECTION
      ══════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
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
              {t.product.led.cta.titleLine1} <br />
              <span className="text-accent-400">{t.product.led.cta.titleLine2}</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-medium">
              {t.product.led.cta.desc}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => openContactModal(typeof product.name === 'string' ? product.name : product.name[language])}
                className="bg-accent-400 text-brand-950 px-12 py-5 rounded-full font-black text-lg hover:bg-white transition-all shadow-xl shadow-accent-400/20 active:scale-95"
              >
                {t.product.led.cta.primary}
              </button>
              <button
                onClick={() => openContactModal(typeof product.name === 'string' ? product.name : product.name[language])}
                className="bg-white/10 text-white border border-white/20 px-12 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-md active:scale-95 cursor-pointer"
              >
                {t.product.led.cta.secondary}
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
