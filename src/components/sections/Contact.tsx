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
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', product: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const products = [
    { id: 'lcd', label: 'Màn hình LCD Signage' },
    { id: 'led', label: 'Màn hình LED Wall' },
    { id: 'kiosk', label: 'Kiosk Tương tác' },
    { id: 'standee', label: 'Standee Chân đứng' },
    { id: 'other', label: 'Giải pháp khác' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '', product: '' });
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
              Bắt đầu hành trình <span className="text-accent-400">Vivid</span> của bạn
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
            <div className="bg-[#0a0f18] rounded-[42px] p-8 md:p-12 border border-white/5">
              {isSuccess ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-accent-400/40">
                    <CheckCircle2 className="w-12 h-12 text-brand-950" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">{t.contact.successTitle}</h3>
                  <p className="text-white/60 font-medium mb-10">{t.contact.successDesc}</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
                  >
                    Gửi lại yêu cầu mới
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4 relative">
                    <label className="text-sm font-black uppercase tracking-widest text-accent-400 ml-1">Tôi đang quan tâm đến:</label>
                    
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={cn(
                          "w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between transition-all",
                          isDropdownOpen ? "border-accent-400 bg-white/10" : "hover:border-white/20"
                        )}
                      >
                        <span className={cn("font-bold", formData.product ? "text-white" : "text-white/30")}>
                          {formData.product ? products.find(p => p.id === formData.product)?.label : "Chọn loại màn hình..."}
                        </span>
                        <ChevronDown className={cn("w-5 h-5 text-accent-400 transition-transform duration-300", isDropdownOpen ? "rotate-180" : "")} />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="absolute z-50 left-0 right-0 mt-3 bg-[#111827] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                          >
                            <div className="max-h-[220px] overflow-y-auto custom-scrollbar">
                              {products.map((p) => (
                                <button
                                  key={p.id}
                                  type="button"
                                  onClick={() => {
                                    setFormData({...formData, product: p.id});
                                    setIsDropdownOpen(false);
                                  }}
                                  className={cn(
                                    "w-full px-6 py-4 text-left transition-colors flex items-center justify-between group",
                                    formData.product === p.id ? "bg-accent-400 text-brand-950" : "text-white/60 hover:bg-white/5 hover:text-white"
                                  )}
                                >
                                  <span className="font-bold text-sm uppercase tracking-tight">{p.label}</span>
                                  {formData.product === p.id && <CheckCircle2 className="w-5 h-5" />}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder={t.contact.form.namePlaceholder}
                        required
                        className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-accent-400 focus:bg-white/10 transition-all font-bold text-white placeholder-white/30"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="tel" 
                        placeholder={t.contact.form.phonePlaceholder}
                        required
                        className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-accent-400 focus:bg-white/10 transition-all font-bold text-white placeholder-white/30"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <input 
                    type="email" 
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-accent-400 focus:bg-white/10 transition-all font-bold text-white placeholder-white/30"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <textarea 
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-accent-400 focus:bg-white/10 transition-all font-bold text-white placeholder-white/30 h-32 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-accent-400 text-brand-950 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-accent-400/30 disabled:opacity-50 group flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? "Đang gửi..." : (
                      <>
                        {t.contact.form.submit}
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
