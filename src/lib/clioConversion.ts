// Google Ads conversion tracking for Clio booking link clicks.
// Used as an onClick handler on any <a href="https://scoreboardlegal.cliogrow.com/book"> link.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CONVERSION_SEND_TO = "AW-18170107582/2w3iCPXXkLEcEL6tl9hD";
const BOOKING_URL = "https://scoreboardlegal.cliogrow.com/book";

export function handleClioClick(e: React.MouseEvent<HTMLAnchorElement>) {
  // Let modifier-clicks / middle-clicks behave normally (open in new tab, etc.)
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

  e.preventDefault();
  const href = e.currentTarget.getAttribute("href") || BOOKING_URL;

  const go = () => {
    window.location.href = href;
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
    value: 1.0,
    currency: "USD",
    event_callback: navigateOnce,
  });

  // Fallback in case gtag never fires the callback (blocked, slow, etc.)
  setTimeout(navigateOnce, 1500);
}
