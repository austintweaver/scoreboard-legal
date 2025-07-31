import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '100vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP version of the image
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.includes('.png')) {
      return originalSrc.replace('.png', '.webp');
    }
    if (originalSrc.includes('.jpg') || originalSrc.includes('.jpeg')) {
      return originalSrc.replace(/\.(jpg|jpeg)$/, '.webp');
    }
    return originalSrc;
  };

  // Generate responsive image sources
  const generateSrcSet = (originalSrc: string) => {
    const baseName = originalSrc.split('.')[0];
    const extension = originalSrc.split('.').pop();
    return `${baseName}-300.${extension} 300w, ${baseName}-600.${extension} 600w, ${baseName}-900.${extension} 900w, ${originalSrc} 1200w`;
  };

  const generateWebPSrcSet = (originalSrc: string) => {
    const baseName = originalSrc.split('.')[0];
    return `${baseName}-300.webp 300w, ${baseName}-600.webp 600w, ${baseName}-900.webp 900w, ${getWebPSrc(originalSrc)} 1200w`;
  };

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback to original image if WebP fails
    if (imgRef.current && imgRef.current.src.includes('.webp')) {
      imgRef.current.src = src;
    }
  };

  if (!isInView) {
    return (
      <div 
        ref={imgRef}
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width, height }}
        aria-label={alt}
      />
    );
  }

  return (
    <picture className={className}>
      {/* WebP format for modern browsers */}
      <source
        type="image/webp"
        srcSet={generateWebPSrcSet(src)}
        sizes={sizes}
      />
      {/* Fallback for older browsers */}
      <source
        srcSet={generateSrcSet(src)}
        sizes={sizes}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        style={{ width, height }}
      />
    </picture>
  );
}; 