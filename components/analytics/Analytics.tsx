"use client";

import { useEffect } from "react";
import { getStoredUtmSource } from "@/lib/tracking";
import { GA_MEASUREMENT_ID } from "@/content/site";

export default function Analytics() {
  const ga4Id =
    process.env.NEXT_PUBLIC_GA4_ID ||
    (process.env.NODE_ENV === "production" ? GA_MEASUREMENT_ID : undefined);
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  useEffect(() => {
    // Cache any UTM parameters present in the URL on mount
    getStoredUtmSource();

    if (!ga4Id && !adsId && !pixelId) {
      return;
    }

    let loaded = false;

    const loadScripts = () => {
      if (loaded) return;
      loaded = true;

      // 1. Google tag (GA4 and/or Google Ads)
      const primaryGoogleId = ga4Id || adsId;
      if (primaryGoogleId) {
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: unknown[]) {
          window.dataLayer?.push(args);
        }
        (window as unknown as { gtag: typeof gtag }).gtag = gtag;

        if (ga4Id) gtag("config", ga4Id);
        if (adsId) gtag("config", adsId);

        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryGoogleId}`;
        document.head.appendChild(script);
      }

      // 2. Meta Pixel
      if (pixelId) {
        /* eslint-disable */
        (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
          if (f.fbq) return;
          n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = "2.0";
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
        /* eslint-enable */
        (window as unknown as { fbq: Function }).fbq("init", pixelId);
        (window as unknown as { fbq: Function }).fbq("track", "PageView");
      }
    };

    // Load on user interaction (scroll, click, touch, mouse move, keypress)
    const events = ["scroll", "click", "touchstart", "mousemove", "keydown"];
    const trigger = () => {
      loadScripts();
      events.forEach((evt) => window.removeEventListener(evt, trigger));
    };

    events.forEach((evt) => window.addEventListener(evt, trigger, { passive: true, once: true }));

    // Fallback: load after initial paint when browser is idle, or within 2.5 seconds
    let timerId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        idleId = (window as Window).requestIdleCallback(() => {
          timerId = setTimeout(loadScripts, 1500);
        });
      } else {
        timerId = setTimeout(loadScripts, 2500);
      }
    }

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, trigger));
      if (timerId) clearTimeout(timerId);
      if (idleId && "cancelIdleCallback" in window) {
        (window as Window).cancelIdleCallback(idleId);
      }
    };
  }, [ga4Id, adsId, pixelId]);

  return null;
}

// Global declaration for TypeScript
declare global {
  interface Window {
    dataLayer?: any[];
  }
}
