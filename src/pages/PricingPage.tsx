import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2, X, Zap, Building2, Phone,
  ShieldCheck, Clock, Users, Cloud, BarChart3,
  Headphones, Star
} from 'lucide-react';
import { useContactModal } from '../contexts/ModalContext';
import { useLanguage } from '../contexts/LanguageContext';

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
const PricingPage = () => {
  const { openContactModal } = useContactModal();
  const { t } = useLanguage();

  const plans = [
    {
      id: 'basic',
      badge: t.pricingPage.plans.basic.badge,
      name: t.pricingPage.plans.basic.name,
      tagline: t.pricingPage.plans.basic.tagline,
      price: t.pricingPage.plans.basic.price,
      period: t.pricingPage.plans.basic.period,
      priceNote: t.pricingPage.plans.basic.priceNote,
      highlight: false,
      icon: Zap,
      color: 'brand',
      cta: t.pricingPage.plans.basic.cta,
      benefits: t.pricingPage.plans.basic.benefits,
    },
    {
      id: 'enterprise',
      badge: t.pricingPage.plans.enterprise.badge,
      name: t.pricingPage.plans.enterprise.name,
      tagline: t.pricingPage.plans.enterprise.tagline,
      price: t.pricingPage.plans.enterprise.price,
      period: t.pricingPage.plans.enterprise.period,
      priceNote: t.pricingPage.plans.enterprise.priceNote,
      highlight: true,
      icon: Building2,
      color: 'accent',
      cta: t.pricingPage.plans.enterprise.cta,
      benefits: t.pricingPage.plans.enterprise.benefits,
    },
  ];

  const trustItems = [
    { icon: ShieldCheck, label: t.pricingPage.trust.uptime },
    { icon: Clock, label: t.pricingPage.trust.delivery },
    { icon: Users, label: t.pricingPage.trust.clients },
    { icon: Headphones, label: t.pricingPage.trust.support },
  ];

  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative w-full min-h-[60vh] flex items-center overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(120deg, rgba(2,34,46,0.97) 0%, rgba(2,34,46,0.85) 60%, rgba(8,103,136,0.4) 100%)' }}
        />
        <div
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full z-10 opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ffc107 0%, transparent 70%)' }}
        />

        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-36 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
          >
            <BarChart3 className="w-4 h-4 text-accent-400" />
            <span className="text-white/90 text-sm font-semibold tracking-wider">{t.pricingPage.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-6 text-white"
          >
            {t.pricingPage.hero.title}<br />
            <span style={{
              background: 'linear-gradient(90deg, #ffc107 0%, #ffe066 50%, #ffc107 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 16px rgba(255,193,7,0.4))',
            }}>
              {t.pricingPage.hero.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            {t.pricingPage.hero.desc}
          </motion.p>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/65 text-sm font-semibold">
                <item.icon className="w-4 h-4 text-accent-400 shrink-0" />
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRICING CARDS
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative flex flex-col rounded-[40px] overflow-hidden border transition-all duration-500 ${plan.highlight
                  ? 'bg-brand-950 border-accent-400 shadow-[0_24px_60px_rgba(255,193,7,0.25)]'
                  : 'bg-white border-brand-100 shadow-[0_8px_32px_rgba(8,103,136,0.08)]'
                  }`}
              >
                {/* Top accent bar */}
                {plan.highlight && (
                  <div className="h-1.5 w-full bg-gradient-to-r from-accent-400 via-accent-500 to-accent-400" />
                )}

                <div className="p-10 flex flex-col flex-1">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black tracking-widest uppercase ${plan.highlight
                      ? 'bg-accent-400/20 text-accent-400 border border-accent-400/30'
                      : 'bg-brand-50 text-brand-600 border border-brand-200'
                      }`}>
                      <Star className="w-3 h-3" />
                      {plan.badge}
                    </div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${plan.highlight ? 'bg-accent-400/15' : 'bg-brand-50'
                      }`}>
                      <Icon className={`w-6 h-6 ${plan.highlight ? 'text-accent-400' : 'text-brand-600'}`} />
                    </div>
                  </div>

                  {/* Plan name & tagline */}
                  <div className={`text-xs font-black tracking-widest uppercase mb-2 ${plan.highlight ? 'text-accent-400' : 'text-brand-600'}`}>
                    {plan.name}
                  </div>
                  <div className={`text-sm font-medium mb-8 ${plan.highlight ? 'text-white/60' : 'text-slate-500'}`}>
                    {plan.tagline}
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <span className={`text-4xl md:text-5xl font-black ${plan.highlight ? 'text-white' : 'text-brand-950'}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-lg font-bold ml-1 ${plan.highlight ? 'text-white/50' : 'text-slate-400'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <div className={`text-xs font-medium mb-10 ${plan.highlight ? 'text-white/40' : 'text-slate-400'}`}>
                    {plan.priceNote}
                  </div>

                  {/* Divider */}
                  <div className={`h-px w-full mb-8 ${plan.highlight ? 'bg-white/10' : 'bg-brand-100'}`} />

                  {/* Benefits */}
                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlight ? 'text-accent-400' : 'text-brand-600'}`} />
                        <span className={`text-sm font-medium leading-relaxed ${plan.highlight ? 'text-white/80' : 'text-slate-600'}`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => openContactModal(plan.name)}
                    className={`w-full py-4 rounded-2xl font-black text-base transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${plan.highlight
                      ? 'bg-accent-400 text-brand-950 hover:bg-accent-500 shadow-xl shadow-accent-400/25 hover:scale-105'
                      : 'bg-brand-50 text-brand-600 border border-brand-200 hover:bg-brand-600 hover:text-white hover:border-brand-600'
                      }`}
                  >
                    <Phone className="w-4 h-4" />
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-slate-400 text-xs font-medium mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          {t.pricingPage.disclaimer}
        </motion.p>
      </section>



      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-950 rounded-[40px] overflow-hidden relative py-20 px-8 text-center shadow-[0_20px_50px_rgb(2,34,46,0.5)]"
        >
          <div className="absolute inset-0 opacity-20 mix-blend-screen">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, #ffc107 0%, transparent 70%)' }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-white/10 text-accent-400 border border-white/15">
              {t.pricingPage.cta.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {t.pricingPage.cta.title}<br />
              <span className="text-accent-400">{t.pricingPage.cta.titleHighlight}</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 font-medium leading-relaxed">
              {t.pricingPage.cta.desc}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button
                onClick={() => openContactModal('Giải pháp VNSIGN')}
                className="bg-accent-400 text-brand-950 px-8 py-4 rounded-full font-black hover:bg-accent-500 transition-all text-lg shadow-xl shadow-accent-400/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-5 h-5" /> {t.pricingPage.cta.buttonCall}
              </button>
              <button
                onClick={() => openContactModal('Dùng thử miễn phí')}
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg backdrop-blur hover:scale-105 active:scale-95 cursor-pointer"
              >
                {t.pricingPage.cta.buttonTry}
              </button>
            </div>
            <p className="text-white/45 text-sm font-medium">
              {t.pricingPage.cta.footer}
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default PricingPage;
