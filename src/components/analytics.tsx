"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    plausible?: (event: string, options?: Record<string, unknown>) => void;
  }
}

export function Analytics() {
  useEffect(() => {
    // Basic Plausible setup - domain will be set when deployed
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = process.env.NEXT_PUBLIC_DOMAIN || 'localhost';
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

export function trackEvent(eventName: string, options?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, options);
  }
}
