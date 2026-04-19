import React, { useState, useEffect, useRef, Suspense } from 'react';
import {
  Monitor, Layout, Clock, Cloud, Shield, Zap, ChevronRight, Menu, X, Play,
  CheckCircle2, ArrowLeft, AlertCircle, Tv, Smartphone, Globe, Settings,
  BarChart3, ChevronDown, FileText, Youtube, Award, Users, Rocket, HeartHandshake
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { Logo } from '../Logo';
import { useLanguage } from "../../contexts/LanguageContext";
import { LazyVideo } from '../LazyVideo';

const ProjectDetail = ({ project, onBack }: { project: any, onBack: () => void }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-600/60 backdrop-blur-[2px]" />

        <div className="absolute top-10 left-10 md:left-24">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl hover:bg-accent-400 hover:text-brand-600 transition-all font-black text-xs uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại
          </button>
        </div>

        <div className="absolute bottom-20 left-10 md:left-24 right-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1 bg-accent-400 text-brand-600 text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em]">
              {project.subtitle}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-20">
            <section>
              <h2 className="text-3xl font-black text-brand-600 mb-8 uppercase tracking-tight">Về dự án</h2>
              <p className="text-brand-500 text-2xl font-medium leading-relaxed">
                {project.desc}
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="p-10 bg-brand-50/50 rounded-[40px] border border-brand-100">
                <div className="w-16 h-16 bg-brand-600 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-brand-600/20">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-brand-600 mb-4 tracking-tight">Thử thách</h3>
                <p className="text-brand-500 leading-relaxed font-medium">
                  Chúng tôi đối mặt với những yêu cầu khắt khe về hạ tầng và trải nghiệm người dùng trong môi trường đặc thù.
                </p>
              </div>

              <div className="p-10 bg-accent-400/10 rounded-[40px] border border-accent-400/20">
                <div className="w-16 h-16 bg-accent-400 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-accent-400/10">
                  <CheckCircle2 className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-2xl font-black text-brand-600 mb-4 tracking-tight">Giải pháp</h3>
                <p className="text-brand-600/70 leading-relaxed font-medium">
                  VNSIGN đã triển khai hệ thống quản lý tập trung trên nền tảng Cloud, đảm bảo tính ổn định và bảo mật cao nhất.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 p-10 bg-brand-600 rounded-[40px] text-white">
              <h3 className="text-xl font-black text-accent-400 mb-10 uppercase tracking-widest text-center">Thông tin chi tiết</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-white/40 text-[10px] mb-2 uppercase tracking-widest font-black">Khách hàng</div>
                  <div className="text-white font-black text-xl">{project.title}</div>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <div className="text-white/40 text-[10px] mb-2 uppercase tracking-widest font-black">Năm thực hiện</div>
                  <div className="text-white font-black text-xl">2023 - 2024</div>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <div className="text-white/40 text-[10px] mb-2 uppercase tracking-widest font-black">Dịch vụ</div>
                  <div className="text-white font-black text-xl">Cloud Digital Signage</div>
                </div>
              </div>
              <button className="w-full mt-12 bg-accent-400 text-brand-600 py-5 rounded-2xl font-black hover:bg-white transition-all shadow-xl shadow-accent-400/20 text-sm uppercase tracking-widest">
                Tư vấn dự án này
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


export default ProjectDetail;
