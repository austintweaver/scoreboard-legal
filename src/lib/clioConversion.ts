// Google Ads + Meta Pixel conversion tracking for Clio booking link clicks.
// Used as an onClick handler on any <a href="https://scoreboardlegal.cliogrow.com/book"> link.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const CONVERSION_SEND_TO = "AW-18170107582/2w3iCPXXkLEcEL6tl9hD";
const BOOKING_URL = "https://scoreboardlegal.cliogrow.com/book";

export function handleClioClick(e: React.MouseEvent<HTMLAnchorElement>) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

  e.preventDefault();
  const href = e.currentTarget.getAttribute("href") || BOOKING_URL;

  // Fire Meta Pixel Lead event on click
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", { value: 500, currency: "USD" });
  }

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
    value: 1000.0,
    currency: "USD",
    event_callback: navigateOnce,
  });

  setTimeout(navigateOnce, 1500);
}
