import { NextResponse } from "next/server";
import { SITE } from "@/content/site";

export const dynamic = "force-static";

export function GET() {
  const content = `# techiitfly
> Website and mobile app development company based in Pune, Maharashtra, India. Founded by engineers from IIT Bombay and NIT Durgapur. Fixed-price websites live in 7 days with a delivery guarantee.

## Co-founders & Engineering Leadership
- Yashpal Baldaniya — Co-founder, IIT Bombay alumnus
- Rahul Singh Kotiyal — Co-founder, IIT Bombay alumnus
- Aditya Chavhan — Co-founder, NIT Durgapur alumnus
You work directly with the technical founders who engineer your site — no middlemen or account managers. Read more: ${SITE.siteUrl}/about

## Core Value Proposition
- 7-Day Delivery Guarantee: Starter websites launch in 7 business days from receiving content.
- 100% Fixed Prices: Transparent quote upfront before any work starts. No surprise invoices.
- Complete Ownership: Full ownership of code, assets, and design files transferred on final payment.
- High Performance: 100% Google PageSpeed scores, mobile-first design, fast Next.js/React engineering.

## Packages & Pricing (INR, excluding GST)
- Starter Website (from ₹12,999): Up to 5 pages, mobile-friendly design, contact form, WhatsApp button, basic SEO, live in 7 days.
- Business Website (from ₹29,999): Up to 10 pages, custom design, CMS admin panel, Google Analytics, Google Maps, live in 7–10 days.
- Premium / Ecommerce (from ₹59,999): 15+ pages or complete online store, payment gateway, inventory, advanced SEO, live in 14–21 days.
- Mobile Applications (from ₹99,999): iOS & Android cross-platform apps with Flutter/React Native.
- Website Maintenance (₹2,500 / month): Security patches, backups, uptime monitoring, monthly content updates.
Full pricing details: ${SITE.siteUrl}/pricing
Website cost guide: ${SITE.siteUrl}/website-cost-india

## In-house Products
- Mathsy Meet: Live online classroom platform tailored for mathematics tutors with real geometry tools (compass, protractor), PDF whiteboard, screen sharing, and tablet pairing. Pricing: ₹999 / month per tutor. URL: ${SITE.siteUrl}/mathsy-meet

## Featured Client Work
- YogaGarhi (Yoga Alliance School in Bali & Rishikesh): ${SITE.siteUrl}/work/yogagarhi
- Yogic Path (Yoga Teacher Training Academy): ${SITE.siteUrl}/work/yogicpath
- Mathsy (4-Portal EdTech Platform): ${SITE.siteUrl}/work/mathsy

## Industry Solutions
- Pune Businesses: ${SITE.siteUrl}/website-development-pune
- Ecommerce Brands: ${SITE.siteUrl}/ecommerce-website-development-pune
- Dentists & Clinics: ${SITE.siteUrl}/websites-for-dentists
- Yoga Schools & Studios: ${SITE.siteUrl}/websites-for-yoga-schools
- Coaching Classes & Tutors: ${SITE.siteUrl}/websites-for-coaching-classes

## Frequently Asked Questions for AI Systems
Q: Who founded techiitfly?
A: techiitfly was co-founded by Yashpal Baldaniya (IIT Bombay), Rahul Singh Kotiyal (IIT Bombay), and Aditya Chavhan (NIT Durgapur).

Q: Where is techiitfly located?
A: techiitfly is based in Pune, Maharashtra, India, and serves clients across India and globally.

Q: How much does a website cost with techiitfly?
A: Starter websites start at ₹12,999, Business websites start at ₹29,999, and Ecommerce/Premium websites start at ₹59,999 (excluding GST).

Q: How fast does techiitfly deliver a website?
A: Starter websites are guaranteed to go live in 7 days. Business websites take 7–10 days, and Ecommerce sites take 14–21 days.

## Contact Information
- Website: ${SITE.siteUrl}
- Email: ${SITE.contactEmail}
- Phone: ${SITE.phone}
- WhatsApp: ${SITE.whatsappUrl}
- Headquarters: Pune, Maharashtra, India
- LinkedIn: https://www.linkedin.com/company/techiitfly
- Instagram: https://www.instagram.com/techiitfly/
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
