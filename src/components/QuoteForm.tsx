import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface QuoteFormProps {
  productName?: string;
  type?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ productName, type }) => {
  return (
    <div className="flex flex-col w-full h-auto">
      {/* Iframe Body */}
      <div className="flex-1 overflow-y-auto custom-scrollbar bg-white/5 p-2 md:p-4 rounded-t-[32px] md:rounded-none w-full h-auto">
        <div className="rounded-[32px] overflow-hidden bg-white shadow-2xl w-full h-auto min-h-[650px]">
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
      <div className="p-6 bg-[#0a0f18] text-center border-t border-white/5 mt-auto">
        <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <CheckCircle2 className="w-3 h-3 text-accent-400" /> VNSIGN cam kết bảo mật thông tin khách hàng
        </p>
      </div>
    </div>
  );
};
