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
import { useContactModal } from '../../contexts/ModalContext';
import { LazyVideo } from '../LazyVideo';

const Pricing = () => {
  const { t } = useLanguage();
  const { openContactModal } = useContactModal();

  const plans = [
    {
      name: t.pricing.plans.basic.name,
      price: t.pricing.plans.basic.price,
      features: t.pricing.plans.basic.features,
      popular: false
    },
    {
      name: t.pricing.plans.enterprise.name,
      price: t.pricing.plans.enterprise.price,
      features: t.pricing.plans.enterprise.features,
      popular: true
    }
  ];

  return (
    <div className="section-padding bg-brand-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#accent_400,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-950 mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-brand-500 max-w-2xl mx-auto text-sm font-medium">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={cn(
                "relative p-10 rounded-[40px] bg-white transition-all duration-500 overflow-hidden group",
                plan.popular ? "ring-4 ring-accent-400" : "border border-white/10"
              )}
            >
              <div className="mb-10 text-center">
                <div className="text-brand-600 text-sm font-black uppercase tracking-widest mb-4 opacity-60">
                  {plan.name}
                </div>
                <div className="text-brand-600 text-4xl font-black mb-2">
                  {plan.price}
                </div>
                {plan.price !== 'Liên hệ báo giá' && (
                  <div className="text-brand-600/40 text-xs font-bold uppercase tracking-tighter">Giá thuê theo năm</div>
                )}
              </div>

              <div className="w-full h-px bg-brand-600/10 mb-10" />

              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-brand-600/70 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => openContactModal(`Gói ${plan.name}`)}
                className={cn(
                  "w-full py-5 rounded-2xl font-black transition-all active:scale-95 text-lg uppercase tracking-tight cursor-pointer",
                  plan.popular 
                    ? "bg-accent-400 text-brand-600 hover:bg-black hover:text-white" 
                    : "bg-brand-600/5 text-brand-600 hover:bg-brand-600 hover:text-white"
                )}
              >
                Liên hệ ngay
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Pricing;
