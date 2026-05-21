
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { PerformanceOptimizer } from "./components/PerformanceOptimizer";

// Lazy load pages to reduce initial bundle size
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Team = lazy(() => import("./pages/Team"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const FractionalGeneralCounsel = lazy(() => import("./pages/FractionalGeneralCounsel"));
const IntellectualProperty = lazy(() => import("./pages/IntellectualProperty"));
const CommercialTransactions = lazy(() => import("./pages/CommercialTransactions"));
const CorporateFormationGovernance = lazy(() => import("./pages/CorporateFormationGovernance"));
const BusinessDisputes = lazy(() => import("./pages/BusinessDisputes"));
const RealEstate = lazy(() => import("./pages/RealEstate"));
const EmergingCompaniesVentureFinancing = lazy(() => import("./pages/EmergingCompaniesVentureFinancing"));
const MergersAcquisitions = lazy(() => import("./pages/MergersAcquisitions"));
const Employment = lazy(() => import("./pages/Employment"));

// Loading component for lazy-loaded routes
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
  </div>
);

declare global {
  interface Window {
    clarity?: unknown;
    gtag?: (...args: unknown[]) => void;
  }
}

// Google Ads conversion tracking for Clio booking link clicks.
// TODO: Replace REPLACE_WITH_CONVERSION_LABEL with the label from
// Google Ads → Goals → Conversions → your action (format: AW-18170107582/XXXXXXXX).
const CONVERSION_SEND_TO = "AW-18170107582/REPLACE_WITH_CONVERSION_LABEL";

function ClioConversionTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.includes("cliogrow.com")) return;

      e.preventDefault();
      const target = anchor.getAttribute("target");
      const go = () => {
        if (target === "_blank") {
          window.open(href, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = href;
        }
      };

      if (typeof window.gtag !== "function") {
        go();
        return;
      }

      let navigated = false;
      const navigateOnce = () => {
        if (navigated) return;
        navigated = true;
        go();
      };

      window.gtag("event", "conversion", {
        send_to: CONVERSION_SEND_TO,
        event_callback: navigateOnce,
      });

      // Fallback in case gtag never fires the callback
      setTimeout(navigateOnce, 1500);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
  return null;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('cookieConsent');
    }
    return false;
  });

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
    setVisible(false);
    if (accepted) {
      // Inject Microsoft Clarity script
      if (!window.clarity) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://www.clarity.ms/tag/scre5aixuv';
        document.head.appendChild(script);
      }
    }
  };

  if (!visible) return null;

  return (
    <div id="cookie-banner" style={{ display: 'block', position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#2D5016', color: '#fff', padding: '15px 20px', boxShadow: '0 -2px 5px rgba(0,0,0,0.2)', zIndex: 1000, fontFamily: 'Montserrat, Arial, sans-serif' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ margin: 0, fontSize: 14 }}>
          We use cookies and tracking technologies to enhance your browsing experience, analyze traffic, and improve our services. <a href="/privacy-policy" style={{ color: '#DC2626', fontWeight: 600, textDecoration: 'underline', marginLeft: 8 }}>Learn more</a>.
        </p>
        <div style={{ marginTop: 10 }}>
          <button onClick={() => handleConsent(true)} style={{ marginRight: 10, backgroundColor: '#fff', color: '#2D5016', border: '2px solid #2D5016', padding: '8px 18px', cursor: 'pointer', borderRadius: 6, fontWeight: 700 }}>Accept</button>
          <button onClick={() => handleConsent(false)} style={{ backgroundColor: '#4B5563', color: '#fff', border: 'none', padding: '8px 18px', cursor: 'pointer', borderRadius: 6, fontWeight: 700 }}>Decline</button>
        </div>
      </div>
    </div>
  );
};

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

const App = () => {
  // Calendly badge removed - now using booking page

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ClioConversionTracker />
          <PerformanceOptimizer>
            <div className="min-h-screen bg-white">
              <Navigation />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/fractional-general-counsel" element={<FractionalGeneralCounsel />} />
                  <Route path="/intellectual-property" element={<IntellectualProperty />} />
                  <Route path="/commercial-transactions" element={<CommercialTransactions />} />
                  <Route path="/corporate-formation-governance" element={<CorporateFormationGovernance />} />
                  <Route path="/business-disputes" element={<BusinessDisputes />} />
                  <Route path="/real-estate" element={<RealEstate />} />
                  <Route path="/emerging-companies-venture-financings" element={<EmergingCompaniesVentureFinancing />} />
                  <Route path="/mergers-acquisitions" element={<MergersAcquisitions />} />
                  <Route path="/employment" element={<Employment />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Footer />
              <CookieBanner />
            </div>
          </PerformanceOptimizer>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
