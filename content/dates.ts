export const SITE_LAST_UPDATED = "October 2026";
export const SITE_LAST_UPDATED_ISO = "2026-10-10";

export const PAGE_DATES: Record<string, { display: string; iso: string }> = {
  "/": { display: "October 2026", iso: "2026-10-10" },
  "/pricing": { display: "October 2026", iso: "2026-10-10" },
  "/mathsy-meet": { display: "October 2026", iso: "2026-10-10" },
  "/xray": { display: "October 2026", iso: "2026-10-10" },
  "/website-development-pune": { display: "October 2026", iso: "2026-10-10" },
  "/websites-for-yoga-schools": { display: "October 2026", iso: "2026-10-10" },
  "/websites-for-coaching-classes": { display: "October 2026", iso: "2026-10-10" },
  "/websites-for-dentists": { display: "October 2026", iso: "2026-10-27" },
  "/blog": { display: "October 2026", iso: "2026-10-28" },
  "/contact": { display: "October 2026", iso: "2026-10-10" },
  "/terms": { display: "October 2026", iso: "2026-10-10" },
  "/privacy": { display: "October 2026", iso: "2026-10-10" },
  "/refund-policy": { display: "October 2026", iso: "2026-10-10" },
  "/delivery-policy": { display: "October 2026", iso: "2026-10-10" },
  "/work/yogagarhi": { display: "October 2026", iso: "2026-10-23" },
  "/work/yogicpath": { display: "October 2026", iso: "2026-10-23" },
  "/work/mathsy": { display: "October 2026", iso: "2026-10-23" },
};

export function getPageDate(path: string) {
  return PAGE_DATES[path] || { display: SITE_LAST_UPDATED, iso: SITE_LAST_UPDATED_ISO };
}
