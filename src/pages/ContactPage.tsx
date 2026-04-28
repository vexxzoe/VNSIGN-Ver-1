import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe, Smartphone, Mail, MapPin, CheckCircle2, Tv } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section className="relative w-full min-h-[45vh] flex items-center overflow-hidden bg-brand-950">
        {/* Background Image with Premium Overlay */}
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=60"
            alt="Contact Us Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(180deg, rgba(2,34,46,0.98) 0%, rgba(2,34,46,0.85) 50%, rgba(2,34,46,0.98) 100%)' }}
        />

        {/* Animated Decorative Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[140px] z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-400/10 rounded-full blur-[140px] z-10" />

        <div className="relative z-20 max-w-4xl mx-auto w-full px-6 md:px-12 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl"
          >
            <Mail className="w-4 h-4 text-accent-400" />
            <span className="text-white/90 text-[10px] font-black tracking-[0.25em] uppercase">{t.contactPage.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] mb-6 text-white tracking-tight"
          >
            {t.contactPage.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-lg text-white/70 mb-0 font-medium leading-relaxed"
          >
            {t.contactPage.hero.desc}
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT CONTENT
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left Side: Info & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-brand-950 mb-8 leading-tight">
              {t.contactPage.content.title} <br />
              <span className="text-brand-600">{t.contactPage.content.titleHighlight}</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 font-medium leading-relaxed">
              {t.contactPage.content.desc}
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="p-8 rounded-[32px] bg-white border border-brand-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-accent-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent-400/20 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-brand-950" />
                </div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{t.contactPage.content.hotlineLabel}</div>
                <div className="text-brand-950 text-xl font-bold">0888 998 181</div>
              </div>

              <div className="p-8 rounded-[32px] bg-white border border-brand-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 border border-brand-100 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-brand-600" />
                </div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{t.contactPage.content.emailLabel}</div>
                <div className="text-brand-950 text-xl font-bold">congnt@vndc.vn</div>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {t.contactPage.content.features.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-600 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: CRM Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-2 md:p-4 rounded-[48px] bg-brand-950 shadow-2xl overflow-hidden"
          >
            <div className="rounded-[32px] overflow-hidden bg-white shadow-2xl">
              <iframe
                src="https://znc.vncrm.net/crm/formdata?l=znc&s=b94a65f1-3b2e-4da8-9728-f8389d4249eb&d=6%2fqi1SbOFnz8JASKA0AXUFqw6ODBXZSq7SbSJna2IxBD001d4ADbRiWiCMEJ5Y6eX%2fqTgveHsUjZjYIyk6y%2bwt9Llm09RBB8skThNQQY%2fqdr0LkBScVOmg8eFjuaX%2bCXacWP%2fVGS0gi1I5pY%2fDeVug%2fD77dYoMwAHFRKmGZYVFGE%2btsSIbL5f05lYJZUXSC3tGvZuxjvm8VEIG1LkLlBJERiT2nITAvKmO3SLihTAmfQVTrB9edh0Y75g65wmrabdQodB8Ax8SYwYw4029if%2feaEBnnRFQwVPyFweoH%2fxGHIwXoGXJ9UHnHA00wfagAzMqz7p9dhTamnjeZTmn6Pfe4PdagU4ZrZUjy8wT0mu1PgwbEzr2eQLIja0kygx0Uqt5iePGaKbGs%2be5dYkMrFUl9ivUHuWC2YQoUjLj2a45BKWU8tdz37d30RCW3JfpUVkJ3Ajl9sTwt0kpod82HxGYS3jzuEOxC4%2foBD1lV%2fYyBfV1Iw6dbBgf50O%2fpeM7AINkwD2eez579Lb6oTXv4TEZoUqwqV1YI5ETeCOa4W5UO1n3BW3ufG6u%2bpphUrIHkDoKBL2lcH2rGJQcbp10YKl9IIj%2bQ2fvm5pyaM8JwEBW7b03wA%2fREgBYHh53apjSgmayQ6DAf0PMF0F2EaWJgnsRHMjGuX2lNjzM4XDaKk8IaeiGmGhZxOErfNjds8LLVyK5%2foeJ0zpB3mjcmsPJv6FbGWggwws2YYVyIMVHBg6GI1xxBQX54f7m2EKbcTFwRmBAeIUK0CRXDIwh%2fGiNFpOGVh7GoyzV%2bBHl9zhyrYkWwWcs4cfWXBRTwvdTtWOn52DvQlX92BvODWKfTb2ei%2b2wzZ1xLDfZFcZiYMUa%2bMZEH9Hr2DEepK%2buebFv%2fqc%2fPkts8h%2brjKfjyLNHDTiQpfZ2imyxuBbwD%2byJKqTf0FQFuF3bssjyBZbRSVJqqrj3eWd4jUmCqBFit3wY0Mm4b32kHlwRobLkb6INzlIDxAUbQ%3d"
                style={{ width: '100%', height: '100%', border: 'none', minHeight: '750px' }}
                frameBorder="0"
                scrolling="no"
                title="CRM Contact Form"
              />
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
