import React from 'react';
import { motion } from 'motion/react';
import {
  Cloud, CheckCircle2, Play, BarChart3, Monitor,
  Rocket, ShieldCheck, Users, Shield, Lock,
  LayoutGrid, FileVideo, Calendar, FilePlus2,
  FileCheck2, Image, Layers
} from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA – Section 1: Centralized System Management
───────────────────────────────────────────── */
const mgmtFeatures = [
  {
    icon: Shield,
    title: 'Phân quyền người dùng linh hoạt',
    desc: 'Ba cấp vai trò (Super Admin, Quản lý vùng, Nhân viên điểm) — mỗi người chỉ thấy và làm những gì được phép.',
  },
  {
    icon: Users,
    title: 'Quản lý đa đơn vị từ một nơi',
    desc: 'Vận hành nhiều chi nhánh, tòa nhà hoặc tổ chức khác nhau trong cùng một dashboard mà không bị lẫn lộn.',
  },
  {
    icon: FileCheck2,
    title: 'Quy trình duyệt nội dung có kiểm soát',
    desc: 'Nội dung phải qua phê duyệt trước khi phát — loại bỏ rủi ro phát nhầm, không đúng thương hiệu.',
  },
  {
    icon: Lock,
    title: 'Đăng nhập hai lớp bảo mật (2FA)',
    desc: 'Xác thực OTP qua email hoặc Google Authenticator — bảo vệ hệ thống khỏi truy cập trái phép.',
  },
  {
    icon: BarChart3,
    title: 'Báo cáo xuất PDF / Excel tức thì',
    desc: 'Tổng hợp lịch sử phát sóng, trạng thái thiết bị và hiệu suất theo từng điểm — một click là có ngay.',
  },
];

/* ─────────────────────────────────────────────
   DATA – Section 2: Content Management
───────────────────────────────────────────── */
const contentFeatures = [
  {
    icon: FileVideo,
    title: 'Hỗ trợ mọi định dạng nội dung',
    desc: 'Video MP4, hình ảnh, HTML5, ticker văn bản — tải lên và phát ngay mà không cần chuyển đổi.',
  },
  {
    icon: Calendar,
    title: 'Lên lịch chiến dịch thông minh',
    desc: 'Đặt lịch phát theo giờ, ngày, tuần hoặc dịp đặc biệt — nội dung đúng màn hình, đúng thời điểm.',
  },
  {
    icon: Layers,
    title: 'Playlist kéo-thả dễ dàng',
    desc: 'Xây dựng danh sách phát bằng thao tác kéo-thả, xem trước ngay trên trình duyệt trước khi đẩy live.',
  },
  {
    icon: LayoutGrid,
    title: 'Chia vùng màn hình tùy biến',
    desc: 'Chia một màn hình thành nhiều vùng phát nội dung khác nhau cùng lúc — tối đa hóa diện tích hiển thị.',
  },
  {
    icon: Image,
    title: 'Thư viện media & template sẵn có',
    desc: 'Kho template chiến dịch theo mùa vụ giúp tạo nội dung chuyên nghiệp trong vài phút, không cần designer.',
  },
];

/* ─────────────────────────────────────────────
   REUSABLE COMPONENTS
───────────────────────────────────────────── */
const SectionBadge = ({ label, color = 'brand' }: { label: string; color?: 'brand' | 'accent' }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${color === 'accent'
    ? 'bg-accent-400/15 text-accent-600 border border-accent-400/30'
    : 'bg-brand-50 text-brand-600 border border-brand-200'
    }`}>
    {label}
  </div>
);

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
  accentColor?: boolean;
}
const FeatureCard = ({ icon: Icon, title, desc, index, accentColor }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className="flex gap-4 items-start group"
  >
    <div className={`shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm transition-transform group-hover:scale-110 duration-300 ${accentColor ? 'bg-accent-400/15 text-accent-600' : 'bg-brand-50 text-brand-600'
      }`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="font-bold text-brand-950 mb-1 text-[15px]">{title}</div>
      <div className="text-slate-500 text-sm leading-relaxed">{desc}</div>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative w-full min-h-[88vh] flex items-center overflow-hidden bg-brand-950">
        {/* Background image */}
        <div className="absolute inset-0 z-0 opacity-35">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(120deg, rgba(2,34,46,0.97) 0%, rgba(2,34,46,0.82) 55%, rgba(8,103,136,0.35) 100%)' }}
        />
        {/* Decorative glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-10 opacity-10"
          style={{ background: 'radial-gradient(circle, #ffc107 0%, transparent 70%)' }} />

        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-36 pb-28">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
            >
              <Cloud className="w-4 h-4 text-accent-400" />
              <span className="text-white/90 text-sm font-semibold tracking-wider">PHẦN MỀM ĐỘC QUYỀN · VNSIGN CLOUD CMS</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 text-white"
            >
              Toàn bộ hệ thống màn hình<br />
              <span style={{
                background: 'linear-gradient(90deg, #ffc107 0%, #ffe066 50%, #ffc107 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 16px rgba(255,193,7,0.4))',
              }}>
                trong tầm tay bạn
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed font-medium max-w-2xl"
            >
              VNSIGN Cloud CMS tích hợp đầy đủ công cụ quản trị, phát nội dung và giám sát thiết bị — vận hành từ bất kỳ đâu, không cần kỹ thuật tại chỗ.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.55 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-14"
            >
              <button className="inline-flex items-center justify-center gap-2 bg-accent-400 text-brand-950 px-8 py-3.5 rounded-full text-base font-black hover:bg-accent-500 hover:scale-105 transition-all shadow-xl shadow-accent-400/25 active:scale-95">
                ✨ Dùng Thử Miễn Phí 30 Ngày
              </button>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white px-8 py-3.5 rounded-full text-base font-bold hover:bg-white/10 hover:border-white transition-all active:scale-95 backdrop-blur-sm">
                <Play className="w-4 h-4 fill-white" /> Xem Demo Live
              </button>
            </motion.div>

            {/* Trust tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.46, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-x-6 gap-y-3"
            >
              {['Không cần thẻ tín dụng', 'Onboarding 1-1 miễn phí', 'Uptime 99.9% SLA', 'Hỗ trợ tiếng Việt 24/7'].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 text-white/65 text-sm font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <section className="relative z-30 -mt-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 border border-brand-100 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-100">
          {[
            { num: '500+', label: 'Màn hình quản lý', sub: 'Trên toàn quốc', icon: Monitor },
            { num: '70%', label: 'Tiết kiệm chi phí', sub: 'So với mô hình cũ', icon: BarChart3 },
            { num: '99.9%', label: 'Uptime đảm bảo', sub: 'Tự động failover', icon: ShieldCheck },
            { num: '30s', label: 'Tốc độ cập nhật', sub: 'Live ngay lập tức', icon: Rocket },
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

      {/* ══════════════════════════════════════
          SECTION 1 — Centralized System Management
      ══════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image panel */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(8,103,136,0.18)] group"
            >
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"
                alt="Centralized management dashboard"
                className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-700/60 to-transparent mix-blend-multiply" />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-brand-600 font-bold text-sm flex items-center gap-2 shadow-lg">
                <Shield className="w-4 h-4" /> Quản trị tập trung
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-950/80 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10">
                <div className="text-accent-400 font-bold text-sm mb-1">✦ Highlight</div>
                <div className="text-white font-semibold text-sm">Phân quyền 3 cấp — kiểm soát toàn bộ tổ chức từ một tài khoản duy nhất</div>
              </div>
            </motion.div>
          </div>

          {/* Text panel */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge label="Quản trị hệ thống · Mô-đun 1" />
              <h2 className="text-3xl lg:text-4xl font-black text-brand-950 mb-4 leading-tight">
                Kiểm soát toàn bộ hệ thống<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                  từ một nơi duy nhất
                </span>
              </h2>
              <p className="text-slate-500 mb-10 text-base font-medium leading-relaxed">
                Dù bạn có 1 hay 500 màn hình, mọi thiết lập phân quyền, phê duyệt nội dung và báo cáo đều nằm gọn trong một dashboard — an toàn, rõ ràng, không cần kỹ thuật tại chỗ.
              </p>
              <div className="space-y-6">
                {mgmtFeatures.map((f, i) => (
                  <FeatureCard key={i} index={i} icon={f.icon} title={f.title} desc={f.desc} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — Content Management
      ══════════════════════════════════════ */}
      <section className="bg-white border-t border-brand-100 py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Image panel */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(255,193,7,0.2)] group"
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80"
                alt="Content management and scheduling"
                className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-accent-500/40 to-transparent mix-blend-multiply" />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-accent-600 font-bold text-sm flex items-center gap-2 shadow-lg">
                <Calendar className="w-4 h-4" /> Quản lý nội dung
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-brand-950/80 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10">
                <div className="text-accent-400 font-bold text-sm mb-1">✦ Highlight</div>
                <div className="text-white font-semibold text-sm">Lên lịch chiến dịch cả năm chỉ trong 10 phút — không cần kỹ thuật</div>
              </div>
            </motion.div>
          </div>

          {/* Text panel */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge label="Quản lý nội dung · Mô-đun 2" color="accent" />
              <h2 className="text-3xl lg:text-4xl font-black text-brand-950 mb-4 leading-tight">
                Đưa nội dung lên màn hình<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-600">
                  nhanh hơn, thông minh hơn
                </span>
              </h2>
              <p className="text-slate-500 mb-10 text-base font-medium leading-relaxed">
                Từ video quảng cáo đến bảng giá thời gian thực — tải lên, lên lịch và phát trực tiếp đến bất kỳ màn hình nào, bất kỳ lúc nào, chỉ bằng vài cú click.
              </p>
              <div className="space-y-6">
                {contentFeatures.map((f, i) => (
                  <FeatureCard key={i} index={i} icon={f.icon} title={f.title} desc={f.desc} accentColor />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — Playback & Reliability
      ══════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-brand-50 text-brand-600 border border-brand-200">
            Phát sóng &amp; Độ tin cậy · Mô-đun 3
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-950 mb-4 leading-tight">
            Phát liên tục, không gián đoạn,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              dù mất điện hay mất mạng
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base font-medium leading-relaxed">
            Hệ thống tự xử lý mọi sự cố — tự phục hồi, tự đồng bộ, tự cảnh báo — để màn hình của bạn luôn sáng đúng nội dung.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '⚡',
              title: 'Tự phục hồi sau mất điện',
              desc: 'Thiết bị tự khởi động lại và tiếp tục phát đúng nội dung ngay khi có điện trở lại — không cần can thiệp thủ công.',
              highlight: true,
            },
            {
              icon: '📦',
              title: 'Phát offline khi mất mạng',
              desc: 'Nội dung được cache cục bộ trên thiết bị — màn hình vẫn phát bình thường dù kết nối internet bị gián đoạn.',
            },
            {
              icon: '🛡️',
              title: 'Watchdog tự khởi động ứng dụng',
              desc: 'Tiến trình giám sát chạy ngầm liên tục — nếu ứng dụng bị treo hoặc crash, hệ thống tự restart trong vài giây.',
            },
            {
              icon: '📊',
              title: 'Giám sát CPU & RAM thời gian thực',
              desc: 'Theo dõi hiệu suất phần cứng từng thiết bị ngay trên dashboard — phát hiện sớm máy quá tải trước khi xảy ra sự cố.',
            },
            {
              icon: '🔄',
              title: 'Trạng thái đồng bộ minh bạch',
              desc: 'Biết ngay nội dung nào đã được đồng bộ thành công đến từng màn hình — không lo phát sai hoặc phát nội dung cũ.',
            },
            {
              icon: '🎬',
              title: 'Phát mượt mà không giật lag',
              desc: 'Engine phát video được tối ưu cho màn hình LED & LCD thương mại — không drop frame, không xé hình kể cả video 4K.',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.highlight
                ? 'bg-brand-600 border-brand-500 shadow-[0_16px_40px_rgba(8,103,136,0.3)]'
                : 'bg-white border-brand-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                }`}
            >
              {card.highlight && (
                <div className="absolute top-4 right-4 bg-accent-400 text-brand-950 text-[11px] font-black px-2.5 py-1 rounded-full tracking-wide">
                  KEY
                </div>
              )}
              <div className="text-3xl mb-5">{card.icon}</div>
              <h3 className={`font-black text-lg mb-2 ${card.highlight ? 'text-white' : 'text-brand-950'}`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed font-medium ${card.highlight ? 'text-white/75' : 'text-slate-500'}`}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — Device Monitoring & Connectivity
      ══════════════════════════════════════ */}
      <section className="bg-brand-950 py-28 px-6 md:px-12 lg:px-24 overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #086788 0%, transparent 70%)' }} />
        <div className="absolute right-0 top-0 w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ffc107 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-white/10 text-accent-400 border border-white/15">
              Giám sát thiết bị · Mô-đun 4
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              Biết ngay mọi màn hình{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                đang làm gì, ở đâu
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base font-medium leading-relaxed">
              Giám sát toàn bộ hệ thống thiết bị theo thời gian thực — kết nối an toàn, cảnh báo tức thì, tích hợp linh hoạt.
            </p>
          </motion.div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: feature list */}
            <div className="w-full lg:w-1/2 space-y-5">
              {[
                {
                  icon: '🟢',
                  title: 'Trạng thái online/offline từng thiết bị',
                  desc: 'Dashboard hiển thị tức thì thiết bị nào đang hoạt động, thiết bị nào offline — kèm thời gian mất kết nối chính xác.',
                  badge: 'Real-time',
                },
                {
                  icon: '🔒',
                  title: 'Giao tiếp mã hóa HTTPS/TLS 1.2+',
                  desc: 'Mọi lệnh điều khiển và nội dung truyền tải đều được mã hóa đầu cuối — an toàn ngang chuẩn ngân hàng.',
                  badge: 'Bảo mật',
                },
                {
                  icon: '📱',
                  title: 'Xác thực thiết bị bằng OTP pin',
                  desc: 'Mỗi thiết bị được xác thực bằng mã OTP một lần — ngăn chặn thiết bị lạ kết nối vào hệ thống.',
                },
                {
                  icon: '🔑',
                  title: 'Google Authenticator (TOTP) tích hợp sẵn',
                  desc: 'Bảo vệ tài khoản quản trị bằng mã xác thực 6 chữ số thay đổi mỗi 30 giây — không cần SMS, không bị SIM-swap.',
                },
                {
                  icon: '🔗',
                  title: 'Tích hợp API bên thứ ba linh hoạt',
                  desc: 'Kết nối với hệ thống ERP, POS, CRM hoặc bất kỳ phần mềm nội bộ nào qua REST API — tự động hóa toàn bộ luồng nội dung.',
                  badge: 'API',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex gap-4 items-start bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-6 py-5 transition-colors duration-300"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-white font-bold text-[15px]">{item.title}</span>
                      {item.badge && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-accent-400/20 text-accent-400 border border-accent-400/30 tracking-wider">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: visual panel */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] group"
              >
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                  alt="Device monitoring network"
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />
                {/* Status cards overlay */}
                <div className="absolute bottom-6 left-6 right-6 space-y-3">
                  {[
                    { label: 'Màn hình online', value: '486 / 492', ok: true },
                    { label: 'Đồng bộ hoàn tất', value: '100%', ok: true },
                    { label: 'Cảnh báo mất kết nối', value: '6 thiết bị', ok: false },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-2 h-2 rounded-full ${row.ok ? 'bg-emerald-400' : 'bg-accent-400'} animate-pulse`} />
                        <span className="text-white/80 text-sm font-medium">{row.label}</span>
                      </div>
                      <span className={`font-black text-sm ${row.ok ? 'text-emerald-400' : 'text-accent-400'}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — Android App for TV
      ══════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-brand-50 text-brand-600 border border-brand-200">
            Ứng dụng Android TV · Mô-đun 5
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-950 mb-4 leading-tight">
            Ứng dụng chạy thẳng trên TV —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              không cần thêm phần cứng
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base font-medium leading-relaxed">
            Cài một lần, vận hành mãi mãi. Ứng dụng Android TV của VNSIGN biến bất kỳ TV Android nào thành màn hình quảng cáo chuyên nghiệp.
          </p>
        </motion.div>

        {/* Content: image left + features right */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(8,103,136,0.18)] group"
            >
              <img
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80"
                alt="Android TV app for digital signage"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-700/55 to-transparent mix-blend-multiply" />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-brand-600 font-bold text-sm flex items-center gap-2 shadow-lg">
                📺 Android TV App
              </div>
              {/* OTA badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-950/80 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10">
                <div className="text-accent-400 font-bold text-sm mb-1">✦ Highlight</div>
                <div className="text-white font-semibold text-sm">Cập nhật ứng dụng tự động OTA — không cần USB, không cần đến tận nơi</div>
              </div>
            </motion.div>
          </div>

          {/* Feature list */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              {[
                {
                  icon: '⬆️',
                  title: 'Cập nhật ứng dụng OTA hoàn toàn tự động',
                  desc: 'Phiên bản mới được đẩy từ xa đến toàn bộ thiết bị trong đêm — sáng ra mọi TV đều đã chạy bản mới nhất.',
                  tag: 'OTA',
                },
                {
                  icon: '🎞️',
                  title: 'Phát mọi định dạng: MP4, ảnh, HTML5',
                  desc: 'Video, hình ảnh, nội dung web động (HTML5), ticker văn bản — một ứng dụng xử lý tất cả, không cần phần mềm phụ.',
                },
                {
                  icon: '🪟',
                  title: 'Chia bố cục màn hình linh hoạt',
                  desc: 'Tách một màn hình thành nhiều vùng phát nội dung độc lập — quảng cáo, thời tiết, giá sản phẩm cùng hiển thị một lúc.',
                },
                {
                  icon: '🔁',
                  title: 'Tự kiểm tra kết nối & cảnh báo lỗi',
                  desc: 'Ứng dụng tự phát hiện mạng yếu hoặc mất kết nối, chuyển sang cache offline và gửi cảnh báo lên dashboard ngay lập tức.',
                },
                {
                  icon: '📺',
                  title: 'Tương thích rộng: Android TV & STB',
                  desc: 'Chạy mượt trên Android TV box, Smart TV Android 7.0+ và Set-top box thương mại — không bị ràng buộc thương hiệu phần cứng.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="flex gap-4 items-start bg-white border border-brand-100 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-brand-950 font-bold text-[15px]">{item.title}</span>
                      {item.tag && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-brand-50 text-brand-600 border border-brand-200 tracking-wider">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-950 rounded-[40px] overflow-hidden relative py-20 px-8 text-center shadow-[0_20px_50px_rgb(2,34,46,0.5)]"
        >
          {/* Background image */}
          <div className="absolute inset-0 opacity-20 mix-blend-screen">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=60"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent" />
          {/* Glow accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, #ffc107 0%, transparent 70%)' }} />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-white/10 text-accent-400 border border-white/15">
              Bắt đầu ngay hôm nay
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Tiết kiệm{' '}
              <span className="text-accent-400">70% chi phí vận hành</span>
              <br />ngay từ tháng đầu tiên
            </h2>
            <p className="text-xl text-white/75 mb-10 font-medium leading-relaxed">
              Hơn 150 doanh nghiệp hàng đầu Việt Nam đã tin tưởng VNSIGN Cloud CMS.<br />
              Dùng thử miễn phí 30 ngày — không cần thẻ tín dụng.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button className="bg-accent-400 text-brand-950 px-8 py-4 rounded-full font-black hover:bg-accent-500 transition-all text-lg shadow-xl shadow-accent-400/20 hover:scale-105 active:scale-95">
                ✨ Bắt Đầu Miễn Phí
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg backdrop-blur hover:scale-105 active:scale-95">
                📞 Gặp Chuyên Gia Tư Vấn
              </button>
            </div>
            <p className="text-white/50 text-sm font-medium">
              ✅ Không cần cài đặt · Onboarding 1-1 miễn phí · Uptime 99.9% SLA
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default FeaturesPage;