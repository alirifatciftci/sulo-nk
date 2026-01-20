import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  objectPosition?: string;
  priority?: boolean;
}

const LazyImage = ({ src, alt, className = '', onClick, objectPosition = 'center', priority = false }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return; // Skip observer for priority images
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden bg-gray-900 ${className}`}>
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-700 border-t-white rounded-full animate-spin" />
        </div>
      )}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          onClick={onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ 
            imageOrientation: 'from-image',
            WebkitImageOrientation: 'from-image',
            objectPosition: objectPosition
          } as React.CSSProperties}
          className={`w-full h-full object-cover ${onClick ? 'cursor-pointer' : ''}`}
        />
      )}
    </div>
  );
};

export default LazyImage;
