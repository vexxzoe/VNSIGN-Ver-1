import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Laptop, Tv, Rocket, Star, 
  Trophy, Wifi, Handshake, Lightbulb,
  BarChart, MapPin, Settings, Building, FileText
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

const Counter = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
};

const AboutPage = () => {
  const { t } = useLanguage();

  const timeline = [
    { year: "2009", icon: Building2, title: "Thành Lập VNDC", desc: "Đội ngũ kỹ sư và kiến trúc sư từ các tập đoàn hàng đầu Nhật Bản — Kajima, Hazama, Obayashi — thành lập VNDC với năng lực xây dựng Hạng 1." },
    { year: "2014", icon: Laptop, title: "VNDC Technology Ra Đời", desc: "Mở rộng sang lĩnh vực CNTT — cung cấp giải pháp phần mềm và gia công outsourcing cho doanh nghiệp trong và ngoài nước." },
    { year: "2018", icon: Tv, title: "VNSIGN Được Khai Sinh", desc: "Ra mắt thương hiệu VNSIGN chuyên biệt về Digital Signage — màn hình LED/LCD và phần mềm quản lý nội dung đám mây toàn diện đầu tiên tại Việt Nam.", highlight: true },
    { year: "2021", icon: Rocket, title: "Mở Rộng Hệ Sinh Thái", desc: "Bổ sung VNVAR (Video Assistant Referee cho thể thao), VNWIFI (WiFi Marketing) và VNCRM (CRM đa kênh) vào danh mục sản phẩm." },
    { year: "2025", icon: Star, title: "Dẫn Đầu Thị Trường", desc: "500+ dự án LED hoàn thành, 150+ khách hàng doanh nghiệp lớn, VNSIGN Cloud phủ 12 tỉnh thành — vị thế số 1 Digital Signage Việt Nam." }
  ];

  const ecosystem = [
    { id: "construction", icon: Building2, name: "VNDC Construction", tag: "Xây dựng · Hạng 1", desc: ["Tư vấn thiết kế dân dụng & công nghiệp", "Quản lý dự án hạng 1", "Đội ngũ từ Kajima, Hazama, Obayashi", "200+ công trình hoàn thành"] },
    { id: "tech", icon: Laptop, name: "VNDC Technology", tag: "CNTT · Outsourcing", desc: ["Giải pháp CNTT doanh nghiệp", "Gia công phần mềm (Outsourcing)", "Hệ thống ERP & CRM tùy chỉnh", "50+ kỹ sư phần mềm"] },
    { id: "vnsign", icon: Tv, name: "VNSIGN", tag: "⭐ Trọng Tâm Chiến Lược", desc: ["Màn hình LED Indoor & Outdoor", "LCD / Digital Poster chuyên dụng", "VNSIGN Cloud CMS — quản lý tập trung", "500+ dự án đã triển khai"], highlight: true },
    { id: "vnvar", icon: Trophy, name: "VNVAR", tag: "Video · Thể thao", desc: ["Video Assistant Referee (VAR)", "Giải pháp hỗ trợ trọng tài video", "Tích hợp cho giải bóng đá V.League", "Replay & phân tích chuyển động"] },
    { id: "vnwifi", icon: Wifi, name: "VNWIFI", tag: "WiFi · Marketing", desc: ["Marketing qua WiFi điểm bán lẻ", "Thu thập dữ liệu khách hàng", "Hiển thị quảng cáo khi kết nối WiFi", "Analytics hành vi người dùng"] },
    { id: "vncrm", icon: Handshake, name: "VNCRM", tag: "CRM · CSKH Đa Kênh", desc: ["Nền tảng CRM đa kênh", "CSKH qua Zalo, FB, Email, SMS", "Tự động hóa quy trình chăm sóc", "Báo cáo hành trình khách hàng"] },
  ];

  const stats = [
    { icon: BarChart, num: 500, unit: "+", label: "Dự án LED hoàn thành", sub: "Vinamilk, Tan Hiep Phat, GS E&C..." },
    { icon: Building, num: 150, unit: "+", label: "Khách hàng doanh nghiệp lớn", sub: "Tập đoàn, ngân hàng, bán lẻ" },
    { icon: MapPin, num: 12, unit: "", label: "Tỉnh thành phủ sóng", sub: "Từ Hà Nội đến Cần Thơ" },
    { icon: Settings, num: 15, unit: "+", label: "Năm kinh nghiệm", sub: "Từ xây dựng đến công nghệ số" },
  ];

  return (
    <div className="min-h-screen bg-brand-50" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      {/* ── HERO ── */}
      <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=55" 
            alt="VNDC Construction Heritage" 
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
              <Building2 className="w-4 h-4 text-accent-400" />
              <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">Về Chúng Tôi</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-6 text-white"
            >
              Xây dựng từ<br />
              <span 
                style={{
                  background: 'linear-gradient(90deg, #ffc107 0%, #ffe066 50%, #ffc107 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 2px 12px rgba(255,193,7,0.35))',
                }}
              >
                nền tảng vững chắc
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-medium"
            >
              VNDC — từ những công trình xây dựng hàng đầu năm 2009 đến hệ sinh thái công nghệ số dẫn đầu Việt Nam 2025.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4">Hành Trình Phát Triển</div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-950 mb-6">
            Di sản 15+ năm<br />kiến tạo tương lai
          </h2>
        </div>

        <div className="relative border-l-2 border-brand-200 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {timeline.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className={cn(
                "absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-sm",
                item.highlight ? "bg-accent-400" : "bg-brand-500"
              )} />
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                <div className="text-2xl font-black text-brand-300 w-24 flex-shrink-0 pt-1">{item.year}</div>
                <div className={cn(
                  "p-6 rounded-2xl border transition-all hover:shadow-lg w-full bg-white",
                  item.highlight ? "border-accent-400 shadow-md bg-accent-50/30" : "border-brand-100"
                )}>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                    <item.icon className={cn("w-6 h-6", item.highlight ? "text-accent-500" : "text-brand-600")} />
                  </div>
                  <h4 className="text-xl font-bold text-brand-950 mb-3">{item.title}</h4>
                  <p className="text-brand-600 leading-relaxed">{item.desc}</p>
                  {item.highlight && (
                    <span className="inline-block mt-4 text-xs font-bold bg-accent-100 text-accent-700 px-3 py-1 rounded-full uppercase tracking-wider">
                      Cột mốc chiến lược
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ECOSYSTEM MAP ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-brand-50 to-brand-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4">Hệ Sinh Thái VNDC</div>
            <h2 className="text-3xl md:text-4xl font-black text-brand-950 mb-6">
              Một tập đoàn —<br />nhiều giải pháp đột phá
            </h2>
            <p className="text-brand-600 max-w-2xl mx-auto text-lg">Mỗi thương hiệu con là một mảnh ghép trong hệ sinh thái công nghệ - xây dựng toàn diện của VNDC.</p>
          </div>

          <div className="flex flex-col items-center mb-12">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-brand-100 flex flex-col items-center text-center max-w-sm w-full z-10 relative">
              <div className="text-4xl font-black mb-2">
                <span className="text-brand-600">VN</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">DC</span>
              </div>
              <div className="font-bold text-brand-900 mb-1">Tập Đoàn Mẹ</div>
              <div className="text-sm text-brand-500 font-semibold tracking-wider">EST. 2009</div>
            </div>
            {/* Connector Line */}
            <div className="w-0.5 h-12 bg-brand-200"></div>
            {/* Connector Horizontal */}
            <div className="w-full max-w-4xl h-0.5 bg-brand-200 hidden md:block"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ecosystem.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-8 rounded-3xl border transition-all hover:-translate-y-2 hover:shadow-xl group bg-white",
                  item.highlight ? "border-accent-300 shadow-lg ring-1 ring-accent-100" : "border-brand-100"
                )}
              >
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                  item.highlight ? "bg-accent-100" : "bg-brand-50"
                )}>
                  <item.icon className={cn("w-7 h-7", item.highlight ? "text-accent-600" : "text-brand-600")} />
                </div>
                <h3 className={cn("text-xl font-bold mb-2", item.highlight ? "text-accent-700" : "text-brand-950")}>{item.name}</h3>
                <div className={cn("text-sm font-bold uppercase tracking-wider mb-6", item.highlight ? "text-accent-500" : "text-brand-500")}>{item.tag}</div>
                
                <ul className="space-y-3">
                  {item.desc.map((d, j) => (
                    <li key={j} className="flex items-start text-sm text-brand-700">
                      <span className="mr-2 text-brand-400 mt-0.5">✦</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Core Value Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-brand-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 via-brand-400 to-accent-400"></div>
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-8 h-8 text-accent-400" />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2 tracking-wide">"Build Success Together"</h3>
              <p className="text-brand-100 text-lg leading-relaxed">Sự kết hợp hoàn hảo giữa phần cứng (LED) và phần mềm (VNDC Cloud/VNSIGN) — giải pháp trọn gói, tiết kiệm thời gian và chi phí.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4">Năng Lực Thực Thi</div>
            <h2 className="text-3xl md:text-4xl font-black text-brand-950 mb-6">
              Những con số<br />nói lên tất cả
            </h2>
            <p className="text-brand-600 max-w-2xl mx-auto text-lg">Từ Vinamilk đến GS E&C — chúng tôi đã đồng hành cùng những thương hiệu lớn nhất Việt Nam và khu vực.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-brand-100 text-center hover:border-brand-300 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 mx-auto bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-brand-600" />
                </div>
                <div className="text-4xl font-black text-brand-950 mb-2 flex items-center justify-center">
                  <Counter end={item.num} />{item.unit}
                </div>
                <div className="font-bold text-brand-900 mb-2">{item.label}</div>
                <div className="text-sm text-brand-500">{item.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Client Logos (Static text representation as in HTML) */}
          <div className="mt-20 pt-10 border-t border-brand-100">
            <div className="text-center text-sm font-bold text-brand-400 uppercase tracking-widest mb-8">Khách hàng tiêu biểu</div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['Vinamilk', 'Tan Hiep Phat', 'GS E&C', 'Vingroup', 'Lotte Mart', 'Sun Group', 'Techcombank', 'VietJet Air'].map((client, i) => (
                <div key={i} className="text-xl font-black text-brand-900">{client}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1800&q=55" 
            alt="City lights vision" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-brand-950/90" />
        
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-400 font-bold tracking-widest uppercase text-sm mb-6 inline-flex items-center gap-2"
          >
            <Star className="w-4 h-4" /> Tầm Nhìn 2030
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight"
          >
            Dẫn đầu xu hướng<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">Digital Signage</span><br />
            tại Việt Nam
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 mb-12 leading-relaxed"
          >
            Thông qua nền tảng VNSIGN Cloud và hệ sinh thái công nghệ VNDC, chúng tôi cam kết xây dựng hạ tầng màn hình số thông minh phủ rộng toàn quốc — nơi mỗi màn hình LED đều được kết nối, quản lý tập trung và tối ưu hóa tự động.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="/features" className="inline-flex items-center justify-center gap-2 bg-accent-400 text-brand-950 px-8 py-4 rounded-full text-base font-black hover:bg-accent-500 transition-all hover:scale-105 shadow-xl shadow-accent-400/20 active:scale-95">
              <Rocket className="w-5 h-5" /> Khám Phá Giải Pháp
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/10 hover:border-white/50 transition-all active:scale-95">
              <FileText className="w-5 h-5" /> Tải Profile Công Ty
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
