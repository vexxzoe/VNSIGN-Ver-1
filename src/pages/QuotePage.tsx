import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { QuoteForm } from '../components/QuoteForm';

const QuotePage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  
  const isLCD = type === 'lcd';
  const isLED = type === 'led';
  
  const title = isLCD ? 'Nhận báo giá màn hình LCD' : isLED ? 'Nhận báo giá màn hình LED' : 'Nhận báo giá sản phẩm';
  const productName = isLCD ? 'Màn hình LCD' : isLED ? 'Màn hình LED' : 'Sản phẩm VNSIGN';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${title} | VNSIGN`;
  }, [title]);

  return (
    <div className="min-h-screen bg-[#0a0f18] pt-32 pb-20 font-['Be_Vietnam_Pro'] selection:bg-brand-200 selection:text-brand-700">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-6 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            <span>Về trang chủ</span>
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-400/10 border border-accent-400/20">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span className="text-accent-400 text-[10px] font-black uppercase tracking-widest">Yêu cầu báo giá</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-white/60">
            Vui lòng điền thông tin vào biểu mẫu dưới đây, đội ngũ chuyên gia của VNSIGN sẽ liên hệ tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
          <QuoteForm type={type} productName={productName} />
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
