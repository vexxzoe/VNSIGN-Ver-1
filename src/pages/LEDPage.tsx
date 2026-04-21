import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tv, Maximize, Sun, ShieldCheck, Cpu, Zap, Settings, FileDown, ChevronRight, Monitor } from 'lucide-react';
import { useContactModal } from '../contexts/ModalContext';
import { LED_PRODUCTS } from '../data/products';
import { Link } from 'react-router-dom';

const LED_CATEGORIES = [
  { id: 'display', name: 'Màn hình LED' },
  { id: 'control', name: 'Hệ thống điều khiển' },
  { id: 'accessory', name: 'Phụ kiện' },
];

const ALL_PRODUCTS = LED_PRODUCTS;

const LEDPage = () => {
  const ITEMS_PER_PAGE = 12;
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [activeSubCategory, setActiveSubCategory] = React.useState('all');
  const [currentPage, setCurrentPage] = React.useState(1);
  const { openContactModal } = useContactModal();
  const productsRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setActiveSubCategory('all');
    setCurrentPage(1);
    scrollToProducts();
  };

  const handleSubCategoryChange = (subId: string) => {
    setActiveSubCategory(subId);
    setCurrentPage(1);
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

  const getSubCategories = () => {
    if (activeCategory === 'display') return ['Indoor', 'Outdoor'];
    if (activeCategory === 'control') return ['Controller', 'Video Processor', 'Pandora Box'];
    if (activeCategory === 'accessory') return ['Nguồn'];
    return [];
  };

  const subCategories = getSubCategories();

  const filteredProducts = ALL_PRODUCTS.filter(p => {
    const categoryMatch = activeCategory === 'all' || p.category === activeCategory;
    const subCategoryMatch = activeSubCategory === 'all' || p.subcategory === activeSubCategory;
    return categoryMatch && subCategoryMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleQuote = (productName: string) => {
    openContactModal(productName);
  };

  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>

      {/* ══════════════════════════════════════
          HERO SECTION (Centered & Premium)
      ══════════════════════════════════════ */}
      <section className="relative w-full min-h-[50vh] flex items-center overflow-hidden bg-brand-950">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=60"
            alt="LED Technology Background"
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
            <Tv className="w-4 h-4 text-accent-400" />
            <span className="text-white/90 text-[10px] font-black tracking-[0.25em] uppercase">VNSIGN · HIỂN THỊ KHÔNG GIỚI HẠN</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] mb-6 text-white tracking-tight"
          >
            Màn hình LED<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-300 to-accent-400">
              Trình chiếu ấn tượng & thu hút mọi ánh nhìn
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-lg text-white/70 mb-12 font-medium leading-relaxed"
          >
            Giải pháp hiển thị LED đồng bộ, tối ưu cho mọi quy mô trình chiếu. Độ sáng vượt trội, màu sắc chuẩn xác và vận hành bền bỉ.
          </motion.p>

          {/* Core Feature Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-6"
          >
            {[
              { label: 'Tần số quét 3840Hz+', icon: Maximize },
              { label: 'Độ sáng 8000 nits Max', icon: Sun },
              { label: 'Chuẩn bảo vệ IP65/IP66', icon: ShieldCheck },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/60 text-sm md:text-base font-bold group">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-400/20 transition-colors">
                  <item.icon className="w-5 h-5 text-accent-400" />
                </div>
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CATALOG SECTION
      ══════════════════════════════════════ */}
      <section ref={productsRef} className="py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto scroll-mt-32">

        {/* Filter Navigation System */}
        <div className="flex flex-col items-center mb-28">
          {/* Level 1: Main Categories */}
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white/70 backdrop-blur-md p-2 rounded-[48px] border border-white shadow-2xl shadow-brand-900/5 mb-8">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-10 py-5 rounded-full text-sm font-black transition-all duration-300 ${activeCategory === 'all' ? 'bg-brand-950 text-white shadow-xl shadow-brand-950/20' : 'text-slate-500 hover:bg-brand-50'}`}
            >
              TẤT CẢ SẢN PHẨM
            </button>
            {LED_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-10 py-5 rounded-full text-sm font-black transition-all duration-300 ${activeCategory === cat.id ? 'bg-brand-950 text-white shadow-xl shadow-brand-950/20' : 'text-slate-500 hover:bg-brand-50'}`}
              >
                {cat.name.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Level 2: Sub-filters (Dynamic) */}
          <AnimatePresence mode="wait">
            {subCategories.length > 0 && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-wrap justify-center gap-3"
              >
                <button
                  onClick={() => handleSubCategoryChange('all')}
                  className={`px-6 py-3 rounded-full text-xs font-bold transition-all ${activeSubCategory === 'all' ? 'bg-brand-600 text-white shadow-lg' : 'bg-white border border-brand-100 text-slate-500 hover:border-brand-300'}`}
                >
                  TẤT CẢ {LED_CATEGORIES.find(c => c.id === activeCategory)?.name.toUpperCase()}
                </button>
                {subCategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => handleSubCategoryChange(sub)}
                    className={`px-6 py-3 rounded-full text-xs font-bold transition-all ${activeSubCategory === sub ? 'bg-brand-600 text-white shadow-lg' : 'bg-white border border-brand-100 text-slate-500 hover:border-brand-300'}`}
                  >
                    {sub.toUpperCase()}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
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
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-14"
            >
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onQuote={handleQuote} />
                ))
              ) : (
                <div className="col-span-full py-48 text-center bg-white rounded-[56px] border border-brand-100/50 shadow-sm">
                  <div className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <Tv className="w-10 h-10 text-brand-200" />
                  </div>
                  <h3 className="text-brand-950 font-black text-2xl mb-3">Đang cập nhật sản phẩm</h3>
                  <p className="text-slate-400 font-medium max-w-md mx-auto">Chúng tôi đang cập nhật thêm các sản phẩm LED mới. Vui lòng quay lại sau hoặc liên hệ hỗ trợ.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-32 flex justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-16 h-16 flex items-center justify-center rounded-[24px] border border-brand-100 bg-white text-brand-950 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-brand-950 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>

            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-16 h-16 flex items-center justify-center rounded-[24px] text-base font-black transition-all ${currentPage === page ? 'bg-brand-950 text-white shadow-xl shadow-brand-950/30 scale-110' : 'bg-white border border-brand-100 text-slate-500 hover:border-brand-300'}`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-16 h-16 flex items-center justify-center rounded-[24px] border border-brand-100 bg-white text-brand-950 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-brand-950 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
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
          src={product.image || '/assets/placeholder.png'}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-[1.5s] ease-out drop-shadow-2xl"
        />

        {/* Floating Category Tag */}
        <div className="absolute top-6 left-6">
          <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-brand-100 text-[10px] font-black text-brand-950 uppercase tracking-[0.1em] shadow-sm">
            {product.subcategory}
          </span>
        </div>

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-brand-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-[4px] transition-all duration-500 flex flex-col items-center justify-center gap-4">
          <Link
            to={`/led/${product.id}`}
            className="bg-white text-brand-950 px-8 py-3 rounded-full text-sm font-black shadow-2xl hover:bg-accent-400 transition-all transform translate-y-8 group-hover:translate-y-0 duration-500"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>

      {/* Content Body - Compact Layout */}
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <div className="mb-6">
          <Link to={`/led/${product.id}`}>
            <h3 className="font-black text-brand-950 text-xl sm:text-2xl leading-[1.2] mb-3 group-hover:text-brand-600 transition-colors line-clamp-2 min-h-[3rem]">
              {product.name}
            </h3>
          </Link>
          <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed line-clamp-3">
            {product.desc}
          </p>
        </div>

        {/* Specs with Icons */}
        <div className="grid grid-cols-3 gap-4 py-6 border-y border-brand-50 mb-8">
          <div className="flex flex-col items-center text-center">
            <Cpu className="w-5 h-5 text-brand-300 mb-2" />
            <span className="text-[10px] font-black text-brand-950 uppercase tracking-wider">{product.specs.pixelPitch || 'N/A'}</span>
          </div>
          <div className="flex flex-col items-center text-center border-x border-brand-50">
            <Sun className="w-5 h-5 text-brand-300 mb-2" />
            <span className="text-[10px] font-black text-brand-950 uppercase leading-none tracking-wider">
              {product.specs.brightness.split(' ')[0]}<br />
              <span className="text-[9px] text-slate-400 font-bold mt-0.5 block">{product.specs.brightness.includes('nits') ? 'nits' : ''}</span>
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
            <FileDown className="w-4 h-4" /> Datasheet (PDF)
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LEDPage;
