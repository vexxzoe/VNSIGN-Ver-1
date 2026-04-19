import React, { useRef, useEffect, useState } from 'react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({ src, className, ...props }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (videoRef.current) {
             // Play when in viewport
             videoRef.current.play().catch(() => {});
          }
        } else {
          if (videoRef.current) {
             // Pause when out of viewport to save resources
             videoRef.current.pause();
          }
        }
      },
      { rootMargin: '100px' }
    );
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <video 
      ref={videoRef}
      className={className}
      preload="none"
      muted
      loop
      playsInline
      {...props}
    >
      {isIntersecting && <source src={src} type="video/mp4" />}
    </video>
  );
};
