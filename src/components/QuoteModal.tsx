import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Tv, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, productName }) => {
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0a0f18] rounded-[40px] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header Area */}
            <div className="p-8 md:p-10 border-b border-white/5 relative z-10">
              <button
                onClick={onClose}
                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-accent-400/10 border border-accent-400/20">
                <ShieldCheck className="w-4 h-4 text-accent-400" />
                <span className="text-accent-400 text-[10px] font-black uppercase tracking-widest">Yêu cầu báo giá</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
                Nhận tư vấn giải pháp
              </h2>
              <div className="flex items-center gap-2 text-white/50 font-medium">
                <span>Bạn đang quan tâm:</span>
                <span className="text-accent-400 font-bold underline decoration-accent-400/30 underline-offset-4">{productName}</span>
              </div>
            </div>

            {/* Iframe Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-white/5 p-2 md:p-4">
              <div className="rounded-[32px] overflow-hidden bg-white shadow-2xl h-full min-h-[600px]">
                <iframe
                  src="https://znc.vncrm.net/crm/formdata?l=znc&s=b94a65f1-3b2e-4da8-9728-f8389d4249eb&d=6%2fqi1SbOFnz8JASKA0AXUFqw6ODBXZSq7SbSJna2IxBD001d4ADbRiWiCMEJ5Y6eX%2fqTgveHsUjZjYIyk6y%2bwt9Llm09RBB8skThNQQY%2fqdr0LkBScVOmg8eFjuaX%2bCXacWP%2fVGS0gi1I5pY%2fDeVug%2fD77dYoMwAHFRKmGZYVFGE%2btsSIbL5f05lYJZUXSC3tGvZuxjvm8VEIG1LkLlBJERiT2nITAvKmO3SLihTAmfQVTrB9edh0Y75g65wmrabdQodB8Ax8SYwYw4029if%2feaEBnnRFQwVPyFweoH%2fxGHIwXoGXJ9UHnHA00wfagAzMqz7p9dhTamnjeZTmn6Pfe4PdagU4ZrZUjy8wT0mu1PgwbEzr2eQLIja0kygx0Uqt5iePGaKbGs%2be5dYkMrFUl9ivUHuWC2YQoUjLj2a45BKWU8tdz37d30RCW3JfpUVkJ3Ajl9sTwt0kpod82HxGYS3jzuEOxC4%2foBD1lV%2fYyBfV1Iw6dbBgf50O%2fpeM7AINkwD2eez579Lb6oTXv4TEZoUqwqV1YI5ETeCOa4W5UO1n3BW3ufG6u%2bpphUrIHkDoKBL2lcH2rGJQcbp10YKl9IIj%2bQ2fvm5pyaM8JwEBW7b03wA%2fREgBYHh53apjSgmayQ6DAf0PMF0F2EaWJgnsRHMjGuX2lNjzM4XDaKk8IaeiGmGhZxOErfNjds8LLVyK5%2foeJ0zpB3mjcmsPJv6FbGWggwws2YYVyIMVHBg6GI1xxBQX54f7m2EKbcTFwRmBAeIUK0CRXDIwh%2fGiNFpOGVh7GoyzV%2bBHl9zhyrYkWwWcs4cfWXBRTwvdTtWOn52DvQlX92BvODWKfTb2ei%2b2wzZ1xLDfZFcZiYMUa%2bMZEH9Hr2DEepK%2buebFv%2fqc%2fPkts8h%2brjKfjyLNHDTiQpfZ2imyxuBbwD%2byJKqTf0FQFuF3bssjyBZbRSVJqqrj3eWd4jUmCqBFit3wY0Mm4b32kHlwRobLkb6INzlIDxAUbQ%3d"
                  style={{ width: '100%', height: '100%', border: 'none', minHeight: '650px' }}
                  frameBorder="0"
                  scrolling="no"
                  title="CRM Contact Form"
                />
              </div>
            </div>

            {/* Footer Note */}
            <div className="p-6 bg-[#0a0f18] text-center border-t border-white/5">
              <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-accent-400" /> VNSIGN cam kết bảo mật thông tin khách hàng
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
