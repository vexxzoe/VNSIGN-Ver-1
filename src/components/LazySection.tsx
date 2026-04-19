import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ProgressBar } from './ProgressBar';

interface LazySectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  showProgress?: boolean;
  progressLabel?: string;
  minHeight?: string;
}

export const LazySection: React.FC<LazySectionProps> = ({ 
  id,
  children, 
  className = "", 
  threshold = 0.1,
  rootMargin = "100px",
  once = true,
  showProgress = false,
  progressLabel = "Loading Section",
  minHeight = "20vh"
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  useEffect(() => {
    if (isInView && showProgress) {
      const timer = setTimeout(() => setProgress(100), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, showProgress]);

  return (
    <section id={id} ref={ref} className={className} style={{ minHeight: isInView ? 'auto' : minHeight }}>
      {showProgress && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-4">
          <ProgressBar progress={progress} label={progressLabel} />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {isInView ? children : <div className="h-64 w-full animate-pulse bg-brand-50/10 rounded-2xl" />}
      </motion.div>
    </section>
  );
};
