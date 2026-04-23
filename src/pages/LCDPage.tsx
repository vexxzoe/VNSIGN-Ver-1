import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, ChevronRight, Maximize, Sun, ShieldCheck, FileDown } from 'lucide-react';
import { useContactModal } from '../contexts/ModalContext';
import { LCD_PRODUCTS } from '../data/products';
import { Link } from 'react-router-dom';

const LCD_CATEGORIES = [
  { id: 'man-treo-tuong', name: 'Màn treo tường' },
  { id: 'man-hinh-standee', name: 'Màn hình standee' },
  { id: 'man-hinh-tuong-tac', name: 'Màn hình tương tác' },
];

const ALL_PRODUCTS = Array.isArray(LCD_PRODUCTS) ? LCD_PRODUCTS : [];

const LCDPage = () => {
  const ITEMS_PER_PAGE = 8;
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [currentPage, setCurrentPage] = React.useState(1);
  const { openContactModal } = useContactModal();
  const productsRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('LCDPage mounted');
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    scrollToProducts();
  };

  const handlePageChange = (page: number) => {
    const safePage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(safePage);
    scrollToProducts();
  };

  const scrollToProducts = () => {
    if (productsRef.current) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = productsRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const filteredProducts = activeCategory === 'all'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  console.log("LCDPage - currentPage:", currentPage);
  console.log("LCDPage - filteredCount:", filteredProducts.length);
  console.log("LCDPage - paginatedProducts:", paginatedProducts);

  const handleQuote = (productName: string) => {
    openContactModal(productName);
  };

  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>

      {/* ══════════════════════════════════════
          HERO SECTION (Centered & Premium)
      ══════════════════════════════════════ */}
      <section className="relative w-full min-h-[50vh] flex items-center overflow-hidden bg-brand-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=60"
            alt="LCD Display Technology"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(180deg, rgba(2,34,46,0.95) 0%, rgba(2,34,46,0.85) 50%, rgba(2,34,46,0.95) 100%)' }}
        />

        {/* Decorative Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] z-10" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-400/10 rounded-full blur-[120px] z-10" />

        <div className="relative z-20 max-w-4xl mx-auto w-full px-6 md:px-12 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl"
          >
            <Monitor className="w-4 h-4 text-accent-400" />
            <span className="text-white/90 text-[10px] font-black tracking-[0.2em] uppercase">VNSIGN · HIỂN THỊ CHUYÊN NGHIỆP</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] mb-6 text-white tracking-tight"
          >
            Màn hình LCD<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-300 to-accent-400">
              Hiển thị chuyên nghiệp & tương tác hiệu quả
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-base md:text-lg text-white/70 mb-12 font-medium leading-relaxed"
          >
            Giải pháp hiển thị Digital Signage cao cấp. Độ phân giải 4K, độ bền công nghiệp 24/7 và hệ điều hành quản lý tập trung.
          </motion.p>

          {/* Feature Badges (Pricing-style) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4"
          >
            {[
              { label: 'Độ phân giải 4K Ultra HD', icon: Maximize },
              { label: 'Hoạt động bền bỉ 24/7', icon: ShieldCheck },
              { label: 'Cloud CMS Tích hợp', icon: Sun },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-white/60 text-sm font-bold">
                <item.icon className="w-4 h-4 text-accent-400" />
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CATALOG SECTION
      ══════════════════════════════════════ */}
      <section ref={productsRef} className="py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto scroll-mt-32">

        {/* Category Filter Tabs (Glassmorphism) */}
        <div className="flex flex-col items-center mb-20">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white/70 backdrop-blur-md p-2 rounded-[40px] border border-white shadow-2xl shadow-brand-900/5">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-8 py-4 rounded-full text-sm font-black transition-all duration-300 ${activeCategory === 'all' ? 'bg-brand-950 text-white shadow-xl shadow-brand-950/20' : 'text-slate-500 hover:bg-brand-50'}`}
            >
              TẤT CẢ SẢN PHẨM
            </button>
            {LCD_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-8 py-4 rounded-full text-sm font-black transition-all duration-300 ${activeCategory === cat.id ? 'bg-brand-950 text-white shadow-xl shadow-brand-950/20' : 'text-slate-500 hover:bg-brand-50'}`}
              >
                {cat.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="relative min-h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + currentPage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-12"
            >
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onQuote={handleQuote} />
                ))
              ) : (
                <div className="col-span-full py-40 text-center">
                  <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Monitor className="w-8 h-8 text-brand-200" />
                  </div>
                  <p className="text-brand-950 font-black text-xl mb-2">Không tìm thấy sản phẩm</p>
                  <p className="text-slate-400 font-medium">Vui lòng chọn danh mục khác hoặc liên hệ bộ phận hỗ trợ.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-24 flex justify-center items-center gap-3">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="w-14 h-14 flex items-center justify-center rounded-[20px] border border-brand-100 bg-white text-brand-950 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-brand-950 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-14 h-14 flex items-center justify-center rounded-[20px] text-sm font-black transition-all ${currentPage === page ? 'bg-brand-950 text-white shadow-xl shadow-brand-950/30 scale-110' : 'bg-white border border-brand-100 text-slate-500 hover:border-brand-300'}`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-14 h-14 flex items-center justify-center rounded-[20px] border border-brand-100 bg-white text-brand-950 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-brand-950 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </section>


    </div>
  );
};

const ProductCard = ({ product, onQuote }: { product: any; onQuote: (name: string) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-white rounded-[48px] border border-brand-100/50 shadow-[0_4px_30px_rgba(8,103,136,0.04)] hover:shadow-[0_32px_70px_rgba(8,103,136,0.15)] transition-all duration-700 overflow-hidden h-full"
    >
      {/* Visual Header - Increased Image prominence */}
      <div className="relative aspect-[4/3] p-8 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-[1.5s] ease-out drop-shadow-2xl"
        />

        {/* Floating Category Tag */}
        <div className="absolute top-6 left-6">
          <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-brand-100 text-[10px] font-black text-brand-950 uppercase tracking-[0.1em] shadow-sm">
            Professional LCD
          </span>
        </div>

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-brand-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-[4px] transition-all duration-500 flex flex-col items-center justify-center gap-4">
          <Link
            to={`/product/${product.slug}`}
            className="bg-white text-brand-950 px-8 py-3 rounded-full text-sm font-black shadow-2xl hover:bg-accent-400 transition-all transform translate-y-8 group-hover:translate-y-0 duration-500"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>

      {/* Content Body - Compact Layout */}
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <div className="mb-6">
          <h3 className="font-black text-brand-950 text-xl sm:text-2xl leading-[1.2] mb-3 group-hover:text-brand-600 transition-colors line-clamp-2 min-h-[3rem]">
            {product.name}
          </h3>
          <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* Specs with Icons */}
        <div className="grid grid-cols-3 gap-4 py-6 border-y border-brand-50 mb-8">
          <div className="flex flex-col items-center text-center">
            <Maximize className="w-5 h-5 text-brand-300 mb-2" />
            <span className="text-[10px] font-black text-brand-950 uppercase tracking-wider">{product.specs.size}</span>
          </div>
          <div className="flex flex-col items-center text-center border-x border-brand-50">
            <Sun className="w-5 h-5 text-brand-300 mb-2" />
            <span className="text-[10px] font-black text-brand-950 uppercase leading-none tracking-wider">
              {product.specs.brightness.split(' ')[0]}<br />
              <span className="text-[9px] text-slate-400 font-bold mt-0.5 block">cd/m²</span>
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-5 h-5 text-brand-300 mb-2" />
            <span className="text-[10px] font-black text-brand-950 uppercase tracking-wider">
              {product.specs.warranty.split(' ')[0]}<br />
              <span className="text-[9px] text-slate-400 font-bold mt-0.5 block">Tháng</span>
            </span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="mt-auto flex flex-col gap-3">
          <button
            onClick={() => onQuote(product.name)}
            className="w-full bg-brand-950 text-white py-4 rounded-[20px] text-sm font-black hover:bg-brand-600 shadow-xl shadow-brand-950/10 transition-all active:scale-95"
          >
            NHẬN BÁO GIÁ
          </button>
          <button className="w-full border border-brand-100 text-brand-400 py-3 rounded-[20px] text-[10px] font-black hover:text-brand-600 hover:border-brand-200 transition-all flex items-center justify-center gap-2 uppercase tracking-[0.1em]">
            <FileDown className="w-4 h-4" /> Xem video demo
          </button>
        </div>
      </div>
    </motion.div>
  );
};



export default LCDPage;
