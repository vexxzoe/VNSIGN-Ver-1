import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Building2, X, ChevronRight, Rocket } from 'lucide-react';

const projects = [
  {
    id: 'sunGroup',
    tag: 'Enterprise',
    tagColor: 'accent',
    title: 'Sun Group – Signature Show Phú Quốc',
    model: 'Enterprise · Giải trí',
    image: '/assets/case-studies/CASE-KHAC/z7507825021044_0ae03fb13bd52cc35a2f340b21549b91.jpg',
    location: 'Phú Quốc',
    desc: 'Tư vấn, thiết kế và thi công giải pháp digital signage cho dự án Signature Show của Sun Group ở Phú Quốc.',
    challenge: 'Yêu cầu cao về kỹ thuật, nắm rõ bức tranh tổng quan về thiết kế, đọc được bản vẽ xây dựng.',
    solution: 'Sử dụng màn hình LG để đảm bảo chất lượng. Cài đặt On-Premise để đảm bảo phát liên tục.',
    overview: 'Dự án Signature Show tại Phú Quốc là một trong những công trình trọng điểm của Sun Group, đòi hỏi sự kết hợp hoàn hảo giữa công nghệ hiển thị và nghệ thuật trình diễn.',
    specs: ['Hệ thống màn hình chuyên dụng LG High-Brightness', 'Giải pháp quản lý nội dung On-Premise bảo mật cao', 'Khả năng vận hành 24/7 trong điều kiện môi trường biển', 'Tích hợp đồng bộ với hệ thống âm thanh và ánh sáng'],
    result: 'Hệ thống đã đi vào hoạt động ổn định, góp phần tạo nên những trải nghiệm thị giác mãn nhãn cho du khách tại Nam đảo Phú Quốc.',
    featured: true,
  },
  {
    id: 'tocoToco',
    tag: 'Chain Store',
    tagColor: 'brand',
    title: 'Chuỗi trà sữa TocoToco',
    model: 'Chain Store · F&B',
    image: '/assets/case-studies/CASE-KHAC/z7517327675557_9e33cc368ea54679e73379505ae9d64b.jpg',
    location: 'Toàn quốc',
    desc: 'Triển khai hệ thống Menu Board điện tử và màn hình quảng cáo cho chuỗi cửa hàng TocoToco.',
    challenge: 'Số lượng điểm triển khai lớn, yêu cầu quản lý nội dung tập trung và đồng bộ theo thời gian thực.',
    solution: 'Sử dụng phần mềm VNSIGN Cloud để quản lý tập trung. Màn hình chuyên dụng 24/7.',
    overview: 'TocoToco là một trong những chuỗi trà sữa hàng đầu Việt Nam. Việc chuyển đổi sang Menu Board điện tử giúp tối ưu hóa quy trình vận hành.',
    specs: ['Hệ thống Menu Board điện tử 43–49 inch', 'Phần mềm quản lý nội dung VNSIGN Cloud', 'Cập nhật giá và chương trình khuyến mãi tức thì', 'Hỗ trợ hiển thị video 4K sắc nét'],
    result: 'Tăng 20% doanh thu từ các món mới nhờ hình ảnh hiển thị hấp dẫn, giảm 90% chi phí in ấn menu truyền thống.',
    featured: true,
  },
  {
    id: 'amway',
    tag: 'Corporate',
    tagColor: 'brand',
    title: 'Hệ thống chi nhánh Amway Việt Nam',
    model: 'Corporate Signage · Bán lẻ',
    image: '/assets/case-studies/CASE-KHAC/z7507825035433_2b00f9ea62f5672bf7911d0d8d541971.jpg',
    location: 'Toàn quốc',
    desc: 'Tư vấn và triển khai hệ thống digital signage cho 20 màn hình tại tất cả chi nhánh Amway trên toàn quốc.',
    challenge: 'Cần hệ thống quản lý nội dung chuyên nghiệp, hỗ trợ phân quyền quản lý theo từng khu vực.',
    solution: 'Triển khai VNSIGN Cloud với tính năng phân quyền đa cấp. Sử dụng màn hình Samsung/LG chuyên dụng.',
    overview: 'Amway Việt Nam cần giải pháp truyền thông nội bộ và quảng bá sản phẩm hiện đại tại các trung tâm trải nghiệm.',
    specs: ['20 màn hình chuyên dụng 55–65 inch', 'Hệ thống quản lý nội dung đám mây VNSIGN Cloud', 'Phân quyền quản lý nội dung theo vùng miền', 'Lập lịch phát nội dung tự động theo chiến dịch'],
    result: 'Nâng cao hình ảnh thương hiệu chuyên nghiệp, tối ưu hóa việc truyền tải thông tin sản phẩm đến khách hàng.',
    featured: false,
  },
  {
    id: 'hospital',
    tag: 'Healthcare',
    tagColor: 'brand',
    title: 'Bệnh viện 30/4',
    model: 'Healthcare Signage · Y tế',
    image: '/assets/case-studies/CASE-KHAC/z7507825042643_9c2b660644b896e963a813098cfa7dd9.jpg',
    location: 'TP.HCM',
    desc: 'Tư vấn, triển khai màn hình và phần mềm hiển thị tại bệnh viện 30/4 để quản lý tập trung truyền thông nội bộ.',
    challenge: 'Yêu cầu nội dung quản lý tập trung, thay đổi từ xa dễ dàng với mức chi phí hợp lý.',
    solution: 'Smart TV hệ điều hành Android kết hợp phần mềm VNSIGN để quản lý tập trung.',
    overview: 'Bệnh viện 30/4 cần hệ thống phát thông báo, hướng dẫn và truyền thông nội bộ đến bệnh nhân và nhân viên.',
    specs: ['Hệ thống Smart TV Android', 'Phần mềm quản lý nội dung VNSIGN', 'Quản trị nội dung từ xa qua Cloud', 'Hỗ trợ nhiều định dạng video và hình ảnh'],
    result: 'Bệnh viện chủ động trong việc truyền thông, giảm thiểu thời gian cập nhật nội dung thủ công.',
    featured: false,
  },
  {
    id: 'airport',
    tag: 'Transport',
    tagColor: 'brand',
    title: 'Nhà ga T3 – Tân Sơn Nhất',
    model: 'Transport Signage · Hàng không',
    image: '/assets/case-studies/CASE-KHAC/z7504464998053_c0c1b9a1ad9fb9cb3a4bb4a60f6a055c.jpg',
    location: 'TP.HCM',
    desc: 'Tư vấn, thiết kế và thi công giải pháp digital signage tại nhà ga T3 Tân Sơn Nhất.',
    challenge: 'Yêu cầu cao về kỹ thuật, phối hợp đối tác xây dựng tại công trường, đáp ứng tiêu chuẩn an ninh nghiêm ngặt.',
    solution: 'Kết hợp với các hãng công nghệ hàng đầu để triển khai giải pháp đồng bộ theo yêu cầu chủ đầu tư.',
    overview: 'Nhà ga T3 Tân Sơn Nhất là công trình hạ tầng giao thông trọng điểm. Digital Signage đóng vai trò quan trọng trong hiển thị thông tin chuyến bay.',
    specs: ['Hệ thống màn hình ghép (Video Wall) siêu mỏng', 'Màn hình hiển thị thông tin chuyến bay (FIDS)', 'Hệ thống quản lý tập trung bảo mật cao', 'Tích hợp dữ liệu thời gian thực từ hệ thống điều hành bay'],
    result: 'Góp phần hiện đại hóa hạ tầng nhà ga, nâng cao trải nghiệm hành khách và đảm bảo thông tin thông suốt 24/7.',
    featured: false,
  },
];

const TAG_STYLES: Record<string, string> = {
  accent: 'bg-accent-400/20 text-accent-600 border border-accent-400/30',
  brand:  'bg-brand-50 text-brand-600 border border-brand-200',
};

const ProjectsPage = () => {
  const [active, setActive] = useState<string | null>(null);
  const activeProject = projects.find(p => p.id === active) ?? null;

  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[60vh] flex items-center overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=55" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(120deg,rgba(2,34,46,0.97) 0%,rgba(2,34,46,0.85) 60%,rgba(8,103,136,0.4) 100%)' }} />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full z-10 opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle,#ffc107 0%,transparent 70%)' }} />

        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-36 pb-28 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <motion.div initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <Building2 className="w-4 h-4 text-accent-400" />
              <span className="text-white/90 text-sm font-semibold tracking-wider">DỰ ÁN TIÊU BIỂU · VNSIGN</span>
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1, duration:0.65 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-6 text-white">
              Những công trình<br />
              <span style={{ background:'linear-gradient(90deg,#ffc107 0%,#ffe066 50%,#ffc107 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', filter:'drop-shadow(0 2px 16px rgba(255,193,7,0.4))' }}>
                đã tạo ra sự khác biệt
              </span>
            </motion.h1>

            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.22, duration:0.6 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl font-medium leading-relaxed">
              Từ chuỗi F&B đến sân bay quốc tế — VNSIGN đã triển khai 500+ dự án digital signage trên khắp Việt Nam.
            </motion.p>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.38 }}
              className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {[['500+','Dự án hoàn thành'],['150+','Khách hàng doanh nghiệp'],['12','Tỉnh thành phủ sóng']].map(([num, label], i) => (
                <div key={i} className="flex items-center gap-2 text-white/65 text-sm font-semibold">
                  <span className="text-accent-400 font-black">{num}</span>
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-brand-50 text-brand-600 border border-brand-200">
            Dự án nổi bật
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-950 mb-4 leading-tight">
            Công trình <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">tiêu biểu</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base font-medium">Các dự án quy mô lớn, yêu cầu kỹ thuật cao mà VNSIGN đã triển khai thành công.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {projects.filter(p => p.featured).map((p, i) => (
            <motion.div key={p.id} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.12, duration:0.55 }}
              className="group relative rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(8,103,136,0.14)] cursor-pointer bg-white border border-brand-100 hover:shadow-[0_24px_60px_rgba(8,103,136,0.22)] hover:-translate-y-1 transition-all duration-400"
              onClick={() => setActive(p.id)}>
              <div className="relative h-64 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent" />
                <div className={`absolute top-4 left-4 text-[11px] font-black px-3 py-1 rounded-full tracking-wider ${TAG_STYLES[p.tagColor]}`}>{p.tag}</div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium mb-1"><MapPin className="w-3 h-3" />{p.location}</div>
                  <h3 className="text-white font-black text-xl leading-snug">{p.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-500 text-sm leading-relaxed mb-4 font-medium">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">{p.model}</span>
                  <button className="inline-flex items-center gap-1 text-brand-600 font-bold text-sm hover:text-brand-700 transition-colors">
                    Xem chi tiết <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── PROJECT GRID ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((p, i) => (
            <motion.div key={p.id} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1, duration:0.5 }}
              className="group rounded-3xl overflow-hidden bg-white border border-brand-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => setActive(p.id)}>
              <div className="relative h-48 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 to-transparent" />
                <div className={`absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded-full tracking-wider ${TAG_STYLES[p.tagColor]}`}>{p.tag}</div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-1 text-white/65 text-xs mb-0.5"><MapPin className="w-3 h-3" />{p.location}</div>
                  <h3 className="text-white font-bold text-base leading-snug">{p.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-slate-500 text-sm leading-relaxed mb-3 line-clamp-2">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-brand-400 uppercase tracking-wider">{p.model}</span>
                  <ChevronRight className="w-4 h-4 text-brand-400 group-hover:text-brand-600 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROJECT DETAIL MODAL ── */}
      <AnimatePresence>
        {activeProject && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.25 }}
            className="fixed inset-0 z-50 bg-brand-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setActive(null)}>
            <motion.div initial={{ opacity:0, y:30, scale:0.97 }} animate={{ opacity:1, y:0, scale:1 }} exit={{ opacity:0, y:20, scale:0.97 }} transition={{ duration:0.3 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}>
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent" />
                <button onClick={() => setActive(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-5 left-6">
                  <div className="flex items-center gap-1.5 text-white/70 text-xs mb-1"><MapPin className="w-3 h-3" />{activeProject.location}</div>
                  <h2 className="text-white font-black text-2xl">{activeProject.title}</h2>
                  <div className="text-white/60 text-xs font-medium mt-1">{activeProject.model}</div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 leading-relaxed mb-6">{activeProject.overview}</p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100">
                    <div className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-3">Thách thức</div>
                    <p className="text-slate-600 text-sm leading-relaxed">{activeProject.challenge}</p>
                  </div>
                  <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100">
                    <div className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-3">Giải pháp</div>
                    <p className="text-slate-600 text-sm leading-relaxed">{activeProject.solution}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-brand-950 font-bold text-sm uppercase tracking-widest mb-3">Thông số kỹ thuật</div>
                  <ul className="space-y-2">
                    {activeProject.specs.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-accent-500 mt-0.5 shrink-0">✦</span>{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-brand-950 rounded-2xl p-5">
                  <div className="text-accent-400 font-bold text-xs uppercase tracking-widest mb-2">Kết quả đạt được</div>
                  <p className="text-white/80 text-sm leading-relaxed">{activeProject.result}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
          className="bg-brand-950 rounded-[40px] overflow-hidden relative py-20 px-8 text-center shadow-[0_20px_50px_rgb(2,34,46,0.5)]">
          <div className="absolute inset-0 opacity-20 mix-blend-screen">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 pointer-events-none" style={{ background:'radial-gradient(ellipse,#ffc107 0%,transparent 70%)' }} />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-white/10 text-accent-400 border border-white/15">
              Bắt đầu dự án của bạn
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Dự án tiếp theo<br /><span className="text-accent-400">sẽ là của bạn</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 font-medium leading-relaxed">
              Đội ngũ VNSIGN sẵn sàng tư vấn và triển khai giải pháp digital signage phù hợp nhất cho doanh nghiệp của bạn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button className="bg-accent-400 text-brand-950 px-8 py-4 rounded-full font-black hover:bg-accent-500 transition-all text-lg shadow-xl shadow-accent-400/20 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5" /> Yêu cầu tư vấn ngay
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg backdrop-blur hover:scale-105 active:scale-95">
                📞 0888 99 8181
              </button>
            </div>
            <p className="text-white/45 text-sm font-medium">✅ Tư vấn miễn phí · Báo giá trong 24h · Triển khai chuyên nghiệp</p>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default ProjectsPage;
