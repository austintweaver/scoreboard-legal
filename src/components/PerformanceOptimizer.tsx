import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical images with WebP support
    const preloadImages = () => {
      const criticalImages = [
        {
          src: '/assets/scoreboardhome.jpg',
          webp: '/assets/optimized/scoreboardhome.webp'
        },
        {
          src: '/assets/blacklogo.png',
          webp: '/assets/optimized/blacklogo.webp'
        },
        {
          src: '/assets/whitelogolegal.png',
          webp: '/assets/optimized/whitelogolegal.webp'
        }
      ];
      
      criticalImages.forEach(({ src, webp }) => {
        // Preload WebP version for modern browsers
        const webpLink = document.createElement('link');
        webpLink.rel = 'preload';
        webpLink.as = 'image';
        webpLink.href = webp;
        webpLink.type = 'image/webp';
        document.head.appendChild(webpLink);
        
        // Preload fallback version
        const fallbackLink = document.createElement('link');
        fallbackLink.rel = 'preload';
        fallbackLink.as = 'image';
        fallbackLink.href = src;
        document.head.appendChild(fallbackLink);
      });
    };

    // Intersection Observer for lazy loading images
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
              }
            }
          });
        });

        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Preload critical resources
    preloadImages();
    
    // Setup lazy loading after initial render
    const timer = setTimeout(setupLazyLoading, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
};

// Hook for deferring non-critical operations
export const useDeferredEffect = (effect: () => void, deps: React.DependencyList, delay: number = 1000) => {
  useEffect(() => {
    const timer = setTimeout(effect, delay);
    return () => clearTimeout(timer);
  }, deps);
}; 