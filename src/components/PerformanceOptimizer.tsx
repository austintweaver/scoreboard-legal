import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical images
    const preloadImages = () => {
      const criticalImages = [
        '/assets/scoreboardhome.jpg',
        '/assets/blacklogo.png',
        '/assets/whitelogo.png'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
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