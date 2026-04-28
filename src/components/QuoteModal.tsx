import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Tv, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { QuoteForm } from './QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, productName }) => {
  const { t } = useLanguage();
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-950/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-[#0a0f18] rounded-[40px] border border-white/10 shadow-2xl overflow-hidden flex flex-col transform scale-90 md:scale-95 origin-center max-h-[90vh]"
          >
            <div className="flex flex-col h-full w-full overflow-hidden">
              {/* Header Area */}
              <div className="p-4 md:p-5 border-b border-white/5 relative z-10 shrink-0">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-accent-400/10 border border-accent-400/20">
                  <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-accent-400" />
                  <span className="text-accent-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest">{t.contact.form.badge}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                  {t.contact.form.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-white/50 font-medium mt-2">
                  <span>{t.contact.form.interested}</span>
                  <span className="text-accent-400 font-bold underline decoration-accent-400/30 underline-offset-4">{productName}</span>
                  <span className="mx-2 text-white/20 hidden sm:inline">|</span>
                  <Link
                    to={`/quote/${productName.toLowerCase().includes('lcd') ? 'lcd' : productName.toLowerCase().includes('led') ? 'led' : ''}`}
                    onClick={onClose}
                    className="text-xs text-brand-400 hover:text-brand-300 underline underline-offset-4 transition-colors"
                  >
                    {t.contact.form.viewFull}
                  </Link>
                </div>
              </div>

              {/* Form Component */}
              <div className="flex-1 w-full overflow-y-auto rounded-b-[40px] custom-scrollbar">
                <QuoteForm productName={productName} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
