import React from 'react';
import { motion } from 'motion/react';
import {
  Cloud, CheckCircle2, Play, BarChart3, Monitor,
  Rocket, ShieldCheck, Users, Shield, Lock,
  LayoutGrid, FileVideo, Calendar, FilePlus2,
  FileCheck2, Image, Layers
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/* ─────────────────────────────────────────────
   REUSABLE COMPONENTS
 ───────────────────────────────────────────── */
const SectionBadge = ({ label, color = 'brand' }: { label: string; color?: 'brand' | 'accent' }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${color === 'accent'
    ? 'bg-accent-400/15 text-accent-600 border border-accent-400/30'
    : 'bg-brand-50 text-brand-600 border border-brand-200'
    }`}>
    {label}
  </div>
);

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
  accentColor?: boolean;
}
const FeatureCard = ({ icon: Icon, title, desc, index, accentColor }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className="flex gap-4 items-start group"
  >
    <div className={`shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm transition-transform group-hover:scale-110 duration-300 ${accentColor ? 'bg-accent-400/15 text-accent-600' : 'bg-brand-50 text-brand-600'
      }`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="font-bold text-brand-950 mb-1 text-[15px]">{title}</div>
      <div className="text-slate-500 text-sm leading-relaxed">{desc}</div>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
 ───────────────────────────────────────────── */
const FeaturesPage = () => {
  const { t } = useLanguage();

  const mgmtFeatures = [
    { icon: Shield, title: t.featuresPage.mgmt.items[0].title, desc: t.featuresPage.mgmt.items[0].desc },
    { icon: Users, title: t.featuresPage.mgmt.items[1].title, desc: t.featuresPage.mgmt.items[1].desc },
    { icon: FileCheck2, title: t.featuresPage.mgmt.items[2].title, desc: t.featuresPage.mgmt.items[2].desc },
    { icon: Lock, title: t.featuresPage.mgmt.items[3].title, desc: t.featuresPage.mgmt.items[3].desc },
    { icon: BarChart3, title: t.featuresPage.mgmt.items[4].title, desc: t.featuresPage.mgmt.items[4].desc },
  ];

  const contentFeatures = [
    { icon: FileVideo, title: t.featuresPage.content.items[0].title, desc: t.featuresPage.content.items[0].desc },
    { icon: Calendar, title: t.featuresPage.content.items[1].title, desc: t.featuresPage.content.items[1].desc },
    { icon: Layers, title: t.featuresPage.content.items[2].title, desc: t.featuresPage.content.items[2].desc },
    { icon: LayoutGrid, title: t.featuresPage.content.items[3].title, desc: t.featuresPage.content.items[3].desc },
    { icon: Image, title: t.featuresPage.content.items[4].title, desc: t.featuresPage.content.items[4].desc },
  ];

  const playbackFeatures = [
    { icon: '⚡', title: t.featuresPage.playback.items[0].title, desc: t.featuresPage.playback.items[0].desc, highlight: true },
    { icon: '📦', title: t.featuresPage.playback.items[1].title, desc: t.featuresPage.playback.items[1].desc },
    { icon: '🛡️', title: t.featuresPage.playback.items[2].title, desc: t.featuresPage.playback.items[2].desc },
    { icon: '📊', title: t.featuresPage.playback.items[3].title, desc: t.featuresPage.playback.items[3].desc },
    { icon: '🔄', title: t.featuresPage.playback.items[4].title, desc: t.featuresPage.playback.items[4].desc },
    { icon: '🎬', title: t.featuresPage.playback.items[5].title, desc: t.featuresPage.playback.items[5].desc },
  ];

  const monitoringItems = [
    { icon: '🟢', title: t.featuresPage.monitoring.items[0].title, desc: t.featuresPage.monitoring.items[0].desc, badge: t.featuresPage.monitoring.items[0].badge },
    { icon: '🔒', title: t.featuresPage.monitoring.items[1].title, desc: t.featuresPage.monitoring.items[1].desc, badge: t.featuresPage.monitoring.items[1].badge },
    { icon: '📱', title: t.featuresPage.monitoring.items[2].title, desc: t.featuresPage.monitoring.items[2].desc },
    { icon: '🔑', title: t.featuresPage.monitoring.items[3].title, desc: t.featuresPage.monitoring.items[3].desc },
    { icon: '🔗', title: t.featuresPage.monitoring.items[4].title, desc: t.featuresPage.monitoring.items[4].desc, badge: t.featuresPage.monitoring.items[4].badge },
  ];

  const androidFeatures = [
    { icon: '⬆️', title: t.featuresPage.android.items[0].title, desc: t.featuresPage.android.items[0].desc, tag: t.featuresPage.android.items[0].tag },
    { icon: '🎞️', title: t.featuresPage.android.items[1].title, desc: t.featuresPage.android.items[1].desc },
    { icon: '🪟', title: t.featuresPage.android.items[2].title, desc: t.featuresPage.android.items[2].desc },
    { icon: '🔁', title: t.featuresPage.android.items[3].title, desc: t.featuresPage.android.items[3].desc },
    { icon: '📺', title: t.featuresPage.android.items[4].title, desc: t.featuresPage.android.items[4].desc },
  ];

  const statsData = [
    { num: '500+', label: t.featuresPage.stats.screens.label, sub: t.featuresPage.stats.screens.sub, icon: Monitor },
    { num: '70%', label: t.featuresPage.stats.savings.label, sub: t.featuresPage.stats.savings.sub, icon: BarChart3 },
    { num: '99.9%', label: t.featuresPage.stats.uptime.label, sub: t.featuresPage.stats.uptime.sub, icon: ShieldCheck },
    { num: '30s', label: t.featuresPage.stats.speed.label, sub: t.featuresPage.stats.speed.sub, icon: Rocket },
  ];

  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative w-full min-h-[88vh] flex items-center overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0 opacity-35">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(120deg, rgba(2,34,46,0.97) 0%, rgba(2,34,46,0.82) 55%, rgba(8,103,136,0.35) 100%)' }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-10 opacity-10"
          style={{ background: 'radial-gradient(circle, #ffc107 0%, transparent 70%)' }} />

        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-36 pb-28">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
            >
              <Cloud className="w-4 h-4 text-accent-400" />
              <span className="text-white/90 text-sm font-semibold tracking-wider">{t.featuresPage.hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 text-white"
            >
              {t.featuresPage.hero.title}<br />
              <span style={{
                background: 'linear-gradient(90deg, #ffc107 0%, #ffe066 50%, #ffc107 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 16px rgba(255,193,7,0.4))',
              }}>
                {t.featuresPage.hero.titleHighlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed font-medium max-w-2xl"
            >
              {t.featuresPage.hero.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.55 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-14"
            >
              <button className="inline-flex items-center justify-center gap-2 bg-accent-400 text-brand-950 px-8 py-3.5 rounded-full text-base font-black hover:bg-accent-500 hover:scale-105 transition-all shadow-xl shadow-accent-400/25 active:scale-95">
                {t.featuresPage.hero.btnTry}
              </button>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white px-8 py-3.5 rounded-full text-base font-bold hover:bg-white/10 hover:border-white transition-all active:scale-95 backdrop-blur-sm">
                <Play className="w-4 h-4 fill-white" /> {t.featuresPage.hero.btnDemo}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.46, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-x-6 gap-y-3"
            >
              {t.featuresPage.hero.tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2 text-white/65 text-sm font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <section className="relative z-30 -mt-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 border border-brand-100 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-100">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 w-full flex flex-col items-center text-center pt-6 md:pt-0 first:pt-0"
            >
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-black text-brand-950 mb-1">{stat.num}</div>
              <div className="text-brand-600 font-bold text-sm mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 1 — Centralized System Management
      ══════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(8,103,136,0.18)] group"
            >
              <img
                src="/assets/case-studies/CASE-KHAC/z7507825021044_0ae03fb13bd52cc35a2f340b21549b91.jpg"
                alt="Centralized management dashboard"
                className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-700/60 to-transparent mix-blend-multiply" />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-brand-600 font-bold text-sm flex items-center gap-2 shadow-lg">
                <Shield className="w-4 h-4" /> {t.featuresPage.mgmt.badge.split('·')[0].trim()}
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-brand-950/80 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10">
                <div className="text-accent-400 font-bold text-sm mb-1">✦ Highlight</div>
                <div className="text-white font-semibold text-sm">{t.featuresPage.mgmt.highlight}</div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge label={t.featuresPage.mgmt.badge} />
              <h2 className="text-3xl lg:text-4xl font-black text-brand-950 mb-4 leading-tight">
                {t.featuresPage.mgmt.title}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                  {t.featuresPage.mgmt.titleHighlight}
                </span>
              </h2>
              <p className="text-slate-500 mb-10 text-base font-medium leading-relaxed">
                {t.featuresPage.mgmt.desc}
              </p>
              <div className="space-y-6">
                {mgmtFeatures.map((f, i) => (
                  <FeatureCard key={i} index={i} icon={f.icon} title={f.title} desc={f.desc} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — Content Management
      ══════════════════════════════════════ */}
      <section className="bg-white border-t border-brand-100 py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(255,193,7,0.2)] group"
            >
              <img
                src="/assets/case-studies/CASE-KHAC/z7504464998053_c0c1b9a1ad9fb9cb3a4bb4a60f6a055c.jpg"
                alt="Content management and scheduling"
                className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-accent-500/40 to-transparent mix-blend-multiply" />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-accent-600 font-bold text-sm flex items-center gap-2 shadow-lg">
                <Calendar className="w-4 h-4" /> {t.featuresPage.content.badge.split('·')[0].trim()}
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-brand-950/80 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10">
                <div className="text-accent-400 font-bold text-sm mb-1">✦ Highlight</div>
                <div className="text-white font-semibold text-sm">{t.featuresPage.content.highlight}</div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge label={t.featuresPage.content.badge} color="accent" />
              <h2 className="text-3xl lg:text-4xl font-black text-brand-950 mb-4 leading-tight">
                {t.featuresPage.content.title}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-600">
                  {t.featuresPage.content.titleHighlight}
                </span>
              </h2>
              <p className="text-slate-500 mb-10 text-base font-medium leading-relaxed">
                {t.featuresPage.content.desc}
              </p>
              <div className="space-y-6">
                {contentFeatures.map((f, i) => (
                  <FeatureCard key={i} index={i} icon={f.icon} title={f.title} desc={f.desc} accentColor />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — Playback & Reliability
      ══════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-brand-50 text-brand-600 border border-brand-200">
            {t.featuresPage.playback.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-950 mb-4 leading-tight">
            {t.featuresPage.playback.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              {t.featuresPage.playback.titleHighlight}
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base font-medium leading-relaxed">
            {t.featuresPage.playback.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playbackFeatures.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.highlight
                ? 'bg-brand-600 border-brand-500 shadow-[0_16px_40px_rgba(8,103,136,0.3)]'
                : 'bg-white border-brand-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                }`}
            >
              {card.highlight && (
                <div className="absolute top-4 right-4 bg-accent-400 text-brand-950 text-[11px] font-black px-2.5 py-1 rounded-full tracking-wide">
                  KEY
                </div>
              )}
              <div className="text-3xl mb-5">{card.icon}</div>
              <h3 className={`font-black text-lg mb-2 ${card.highlight ? 'text-white' : 'text-brand-950'}`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed font-medium ${card.highlight ? 'text-white/75' : 'text-slate-500'}`}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — Device Monitoring & Connectivity
      ══════════════════════════════════════ */}
      <section className="bg-brand-950 py-28 px-6 md:px-12 lg:px-24 overflow-hidden relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #086788 0%, transparent 70%)' }} />
        <div className="absolute right-0 top-0 w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ffc107 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-white/10 text-accent-400 border border-white/15">
              {t.featuresPage.monitoring.badge}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              {t.featuresPage.monitoring.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                {t.featuresPage.monitoring.titleHighlight}
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base font-medium leading-relaxed">
              {t.featuresPage.monitoring.desc}
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-5">
              {monitoringItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex gap-4 items-start bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-6 py-5 transition-colors duration-300"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-white font-bold text-[15px]">{item.title}</span>
                      {item.badge && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-accent-400/20 text-accent-400 border border-accent-400/30 tracking-wider">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] group"
              >
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                  alt="Device monitoring network"
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 space-y-3">
                  {[
                    { label: t.featuresPage.monitoring.status.online, value: '486 / 492', ok: true },
                    { label: t.featuresPage.monitoring.status.sync, value: '100%', ok: true },
                    { label: t.featuresPage.monitoring.status.warning, value: `6 ${t.featuresPage.monitoring.status.devices}`, ok: false },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-2 h-2 rounded-full ${row.ok ? 'bg-emerald-400' : 'bg-accent-400'} animate-pulse`} />
                        <span className="text-white/80 text-sm font-medium">{row.label}</span>
                      </div>
                      <span className={`font-black text-sm ${row.ok ? 'text-emerald-400' : 'text-accent-400'}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — Android App for TV
      ══════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-brand-50 text-brand-600 border border-brand-200">
            {t.featuresPage.android.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-950 mb-4 leading-tight">
            {t.featuresPage.android.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              {t.featuresPage.android.titleHighlight}
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base font-medium leading-relaxed">
            {t.featuresPage.android.desc}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(8,103,136,0.18)] group"
            >
              <img
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80"
                alt="Android TV app for digital signage"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-700/55 to-transparent mix-blend-multiply" />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-brand-600 font-bold text-sm flex items-center gap-2 shadow-lg">
                📺 Android TV App
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-brand-950/80 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10">
                <div className="text-accent-400 font-bold text-sm mb-1">✦ Highlight</div>
                <div className="text-white font-semibold text-sm">{t.featuresPage.android.highlight}</div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              {androidFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="flex gap-4 items-start bg-white border border-brand-100 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-brand-950 font-bold text-[15px]">{item.title}</span>
                      {item.tag && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-brand-50 text-brand-600 border border-brand-200 tracking-wider">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, #ffc107 0%, transparent 70%)' }} />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-white/10 text-accent-400 border border-white/15">
              {t.featuresPage.cta.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {t.featuresPage.cta.title}{' '}
              <span className="text-accent-400">{t.featuresPage.cta.titleHighlight}</span>
              <br />{t.featuresPage.cta.titleEnd}
            </h2>
            <p className="text-xl text-white/75 mb-10 font-medium leading-relaxed">
              {t.featuresPage.cta.desc}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button className="bg-accent-400 text-brand-950 px-8 py-4 rounded-full font-black hover:bg-accent-500 transition-all text-lg shadow-xl shadow-accent-400/20 hover:scale-105 active:scale-95">
                {t.featuresPage.cta.btnStart}
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg backdrop-blur hover:scale-105 active:scale-95">
                {t.featuresPage.cta.btnExpert}
              </button>
            </div>
            <p className="text-white/50 text-sm font-medium">
              {t.featuresPage.cta.footer}
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default FeaturesPage;