import React from 'react';
import { motion } from 'motion/react';
import { 
  Cloud, Calendar, MonitorPlay, ShieldCheck, 
  CheckCircle2, Play, Settings, BarChart3, Users,
  Monitor, Smartphone, Tv, Server, Rocket,
  Layout, Shield
} from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      {/* ── HERO ── */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=60" 
            alt="Cloud CMS background" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, rgba(2,34,46,0.95) 0%, rgba(2,34,46,0.8) 50%, rgba(2,34,46,0.4) 100%)' }} />
        
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-32 pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
            >
              <Cloud className="w-4 h-4 text-accent-400" />
              <span className="text-white/90 text-sm font-semibold tracking-wider">PHẦN MỀM ĐỘC QUYỀN · VNSIGN CLOUD CMS</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 text-white"
            >
              Quản trị mọi màn hình<br />
              <span 
                style={{
                  background: 'linear-gradient(90deg, #ffc107 0%, #ffe066 50%, #ffc107 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 2px 12px rgba(255,193,7,0.35))',
                }}
              >
                chỉ với một trình duyệt
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-medium"
            >
              Nền tảng Cloud CMS duy nhất tại Việt Nam cho phép điều khiển toàn bộ hệ thống LED, LCD và Kiosk từ bất kỳ đâu — không cần phần cứng thêm, không cần kỹ thuật tại chỗ.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="inline-flex items-center justify-center gap-2 bg-accent-400 text-brand-950 px-8 py-3.5 rounded-full text-base font-black hover:bg-accent-500 hover:scale-105 transition-all shadow-xl shadow-accent-400/25 active:scale-95">
                ✨ Dùng Thử Miễn Phí 30 Ngày
              </button>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white px-8 py-3.5 rounded-full text-base font-bold hover:bg-white/10 hover:border-white transition-all active:scale-95 backdrop-blur-sm">
                <Play className="w-4 h-4 fill-white" /> Xem Demo Live
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.46, duration: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              {['Không cần thẻ tín dụng', 'Onboarding 1-1 miễn phí', 'Uptime 99.9% SLA', 'Hỗ trợ tiếng Việt 24/7'].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 text-white/75 text-sm font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="relative z-30 -mt-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 border border-brand-100 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-100">
          {[
            { num: '500+', label: 'Màn hình quản lý', sub: 'Trên toàn quốc', icon: Monitor },
            { num: '70%', label: 'Tiết kiệm chi phí', sub: 'So với mô hình cũ', icon: BarChart3 },
            { num: '99.9%', label: 'Uptime đảm bảo', sub: 'Tự động failover', icon: ShieldCheck },
            { num: '30s', label: 'Tốc độ cập nhật', sub: 'Live ngay lập tức', icon: Rocket }
          ].map((stat, i) => (
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

      {/* ── CORE FEATURES ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4">TÍNH NĂNG CỐT LÕI</div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-950 mb-6">
            Bốn vũ khí <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">làm chủ mọi màn hình</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Mỗi tính năng được thiết kế để giải quyết một bài toán vận hành thực tế của doanh nghiệp.
          </p>
        </div>

        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-[0_20px_40px_rgb(8,103,136,0.15)] group"
            >
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80" alt="Cloud" className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/60 to-transparent mix-blend-multiply"></div>
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-brand-600 font-bold text-sm flex items-center gap-2 shadow-lg">
                <Cloud className="w-4 h-4" /> Cloud-Based
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-brand-600 font-bold tracking-widest text-xs uppercase mb-3">Tính Năng #1 · Cloud Infrastructure</div>
              <h3 className="text-3xl lg:text-4xl font-black text-brand-950 mb-6 leading-tight">Quản lý tập trung từ xa<br />hoàn toàn trên Cloud</h3>
              <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed">
                Quên đi những chuyến công tác tốn kém chỉ để cập nhật nội dung màn hình. VNSIGN Cloud CMS cho phép bạn điều khiển, giám sát và cập nhật toàn bộ hệ thống từ bất kỳ thiết bị nào có trình duyệt web.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Không cần cài đặt phần mềm — truy cập ngay qua trình duyệt',
                  'Hỗ trợ PC, laptop, tablet, smartphone (iOS & Android)',
                  'Đồng bộ nội dung tức thì đến mọi màn hình',
                  'Mã hóa TLS 256-bit, bảo mật cấp độ ngân hàng'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button className="text-brand-600 font-bold hover:text-brand-700 flex items-center gap-2 bg-brand-50 px-6 py-3 rounded-full hover:bg-brand-100 transition-colors">
                <Play className="w-4 h-4" /> Xem demo Cloud Dashboard
              </button>
            </motion.div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32">
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(255,193,7,0.2)] group"
            >
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80" alt="Scheduling" className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-bl from-accent-500/40 to-transparent mix-blend-multiply"></div>
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-accent-600 font-bold text-sm flex items-center gap-2 shadow-lg">
                <Calendar className="w-4 h-4" /> Smart Scheduling
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-accent-600 font-bold tracking-widest text-xs uppercase mb-3">Tính Năng #2 · Intelligent Scheduling</div>
              <h3 className="text-3xl lg:text-4xl font-black text-brand-950 mb-6 leading-tight">Lập lịch nội dung<br />thông minh theo chiến dịch</h3>
              <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed">
                Engine lập lịch AI tự động phát đúng nội dung, đúng màn hình, đúng thời điểm — phát khuyến mãi giờ cao điểm, nhạc nền giờ mở cửa, thông tin sản phẩm theo ngày trong tuần.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Lịch phát theo ngày, giờ, tuần, tháng và dịp đặc biệt',
                  'Template chiến dịch marketing theo mùa vụ có sẵn',
                  'Phân vùng nội dung: mỗi màn hình một chương trình riêng',
                  'Dự phòng tự động khi mất kết nối — nội dung cache local'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-[0_20px_40px_rgb(8,103,136,0.15)] group"
            >
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80" alt="Multi Device" className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/50 to-transparent mix-blend-multiply"></div>
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-brand-600 font-bold text-sm flex items-center gap-2 shadow-lg">
                <Monitor className="w-4 h-4" /> Universal Compatibility
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-brand-600 font-bold tracking-widest text-xs uppercase mb-3">Tính Năng #3 · Multi-Device</div>
              <h3 className="text-3xl lg:text-4xl font-black text-brand-950 mb-6 leading-tight">Tương thích toàn diện<br />LED · LCD · Kiosk</h3>
              <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed">
                Dù hệ thống bạn có màn hình LED indoor hay outdoor, màn hình LCD thương hiệu hay Kiosk tự phục vụ — VNSIGN Cloud CMS quản lý tất cả từ một dashboard duy nhất.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'LED Indoor & Outdoor tất cả pixel pitch (P1 đến P10)',
                  'Màn hình LCD thương mại (43" đến 98") — portrait & landscape',
                  'Kiosk tự phục vụ với giao diện cảm ứng tùy chỉnh',
                  'Màn hình LED uốn cong, LED ceiling, LED floor'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PERMISSION ROLES ── */}
      <section className="bg-white py-24 border-t border-brand-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <div className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4">HỆ THỐNG PHÂN QUYỀN</div>
            <h2 className="text-3xl md:text-5xl font-black text-brand-950 mb-6">
              Mỗi người đúng vai — <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">đúng quyền truy cập</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Thiết kế cho tổ chức đa cấp: từ chuỗi cửa hàng, tòa nhà văn phòng đến tập đoàn đa quốc gia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-brand-100 flex flex-col hover:shadow-xl transition-shadow"
            >
              <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Shield className="w-8 h-8 text-brand-600" />
              </div>
              <div className="text-brand-600 font-bold text-sm mb-2">QUẢN TRỊ VIÊN</div>
              <h3 className="text-2xl font-black text-brand-950 mb-4">Super Admin</h3>
              <p className="text-slate-600 mb-8 font-medium flex-grow">Toàn quyền kiểm soát toàn bộ hệ thống, cấu hình và phân quyền cho mọi thành viên.</p>
              <div className="space-y-3 pt-6 border-t border-brand-100">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-600" /><span className="text-slate-700 font-medium">Quản lý toàn bộ hệ thống</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-600" /><span className="text-slate-700 font-medium">Tạo & quản lý tài khoản</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-600" /><span className="text-slate-700 font-medium">Xét duyệt nội dung các cấp</span></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-600 rounded-3xl p-10 shadow-[0_20px_40px_rgb(8,103,136,0.3)] border border-brand-500 flex flex-col transform md:-translate-y-4"
            >
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-accent-400" />
              </div>
              <div className="text-accent-400 font-bold text-sm mb-2">ĐIỀU PHỐI VIÊN</div>
              <h3 className="text-2xl font-black text-white mb-4">Regional Manager</h3>
              <p className="text-white/80 mb-8 font-medium flex-grow">Điều phối nội dung và nhân sự trong khu vực được phân công — hoàn toàn độc lập.</p>
              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400" /><span className="text-white/90 font-medium">Quản lý khu vực phụ trách</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400" /><span className="text-white/90 font-medium">Phê duyệt nội dung điểm</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400" /><span className="text-white/90 font-medium">Báo cáo analytics khu vực</span></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-brand-100 flex flex-col hover:shadow-xl transition-shadow"
            >
              <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <MonitorPlay className="w-8 h-8 text-brand-600" />
              </div>
              <div className="text-brand-600 font-bold text-sm mb-2">NHÂN VIÊN</div>
              <h3 className="text-2xl font-black text-brand-950 mb-4">Store Editor</h3>
              <p className="text-slate-600 mb-8 font-medium flex-grow">Nhân viên tại cửa hàng có thể cập nhật nội dung được phép mà không lo ảnh hưởng toàn hệ thống.</p>
              <div className="space-y-3 pt-6 border-t border-brand-100">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-600" /><span className="text-slate-700 font-medium">Upload & lên lịch tại điểm</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-600" /><span className="text-slate-700 font-medium">Dùng template duyệt sẵn</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-600" /><span className="text-slate-700 font-medium">Không thể xóa/tắt màn hình</span></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-950 rounded-[40px] overflow-hidden relative py-20 px-8 text-center shadow-[0_20px_50px_rgb(2,34,46,0.5)]"
        >
          <div className="absolute inset-0 opacity-20 mix-blend-screen">
             <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Tiết kiệm <span className="text-accent-400">70% chi phí vận hành</span><br />ngay từ tháng đầu tiên
            </h2>
            <p className="text-xl text-white/80 mb-10 font-medium leading-relaxed">
              Hơn 150 doanh nghiệp hàng đầu Việt Nam đã tin tưởng VNSIGN Cloud CMS. Dùng thử miễn phí 30 ngày — không cần thẻ tín dụng.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button className="bg-accent-400 text-brand-950 px-8 py-4 rounded-full font-black hover:bg-accent-500 transition-all text-lg shadow-xl shadow-accent-400/20 hover:scale-105 active:scale-95">
                ✨ Bắt Đầu Miễn Phí
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg backdrop-blur hover:scale-105 active:scale-95">
                📞 Gặp Chuyên Gia Tư Vấn
              </button>
            </div>
            <p className="text-white/60 text-sm font-medium">
              ✅ Không cần cài đặt · Onboarding 1-1 miễn phí · Uptime 99.9% SLA
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FeaturesPage;