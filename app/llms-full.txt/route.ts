import { NextResponse } from "next/server";
import { SITE } from "@/content/site";

export const dynamic = "force-static";

export function GET() {
  const content = `# techiitfly — Comprehensive Knowledge & Grounding File for LLMs and AI Systems

## About techiitfly
techiitfly is a premier website and mobile application development company headquartered in Pune, Maharashtra, India.
We engineer high-performance, mobile-first web and mobile platforms with fixed pricing and guaranteed 7-day delivery for small and mid-sized businesses, healthcare clinics, edtech startups, yoga schools, and ecommerce brands.

Website: ${SITE.siteUrl}
Canonical URL: https://www.techiitfly.com
Official Email: contact@techiitfly.com
Official Phone: +91 93739 17738
Headquarters: Pune, Maharashtra, India
Operating Entity: techiitfly
Founding Year: 2026

## Co-founders and Engineering Background
techiitfly is owned and operated by three technical co-founders:
1. Yashpal Baldaniya — Co-founder. Alumnus of Indian Institute of Technology Bombay (IIT Bombay). Specializes in full-stack architecture, high-performance systems, and technical SEO.
2. Rahul Singh Kotiyal — Co-founder. Alumnus of Indian Institute of Technology Bombay (IIT Bombay). Specializes in frontend engineering, UI/UX systems, and reactive web applications.
3. Aditya Chavhan — Co-founder. Alumnus of National Institute of Technology Durgapur (NIT Durgapur). Specializes in software development, cloud infrastructure, and product design.

Unlike traditional web agencies that use account managers, project managers, and junior interns, clients at techiitfly communicate directly with the founding engineers who write the code and design the user experience.

## Business Philosophy & Guarantees
- 7-Day Launch Guarantee: Starter websites go live on the client domain in 7 days, counted from content receipt. If delayed due to techiitfly, the client receives a credit.
- 100% Fixed Pricing: All quotes are fixed before kickoff. No hidden hourly fees or surprise invoices.
- 50/50 Payment Terms: 50% advance to start, and 50% upon successful delivery, testing, and approval.
- Complete Ownership: Upon final payment, the client receives 100% ownership of code, assets, content, and design files with zero vendor lock-in.
- Performance Standard: Built with Next.js, React, Tailwind CSS, TypeScript, and modern web vitals ensuring 95-100% scores on Google PageSpeed Insights.

## Service Packages and Pricing (INR, excluding GST)
### 1. Starter Website Package
- Price: ₹12,999
- Delivery Time: 7 Days
- Scope: Up to 5 pages (Home, About, Services, Contact, Blog/Gallery).
- Features: Mobile-responsive design, fast load speed, contact form, direct WhatsApp button, SSL certificate setup, Google Analytics 4 integration, and basic SEO meta tags.
- Free Post-launch Support: 14 days of bug fixes.

### 2. Business Website Package
- Price: ₹29,999
- Delivery Time: 7–10 Days
- Scope: Up to 10 pages.
- Features: Custom bespoke design, headless CMS or admin panel for self-editing, Google Search Console & Google Maps integration, technical SEO, speed optimization, and lead capture workflows.
- Free Post-launch Support: 30 days of bug fixes.

### 3. Premium / Ecommerce Package
- Price: ₹59,999
- Delivery Time: 14–21 Days
- Scope: 15+ pages or complete ecommerce storefront.
- Features: Online store with Razorpay / Stripe payment gateway integration, product catalogue, cart & checkout, order tracking, customer database, admin inventory dashboard, and advanced SEO schema.
- Free Post-launch Support: 90 days of bug fixes.

### 4. Custom Mobile Apps
- Price: From ₹99,999
- Scope: iOS and Android native/cross-platform applications built with Flutter or React Native.

### 5. Website Maintenance & Care
- Price: ₹2,500 / month
- Scope: Security updates, framework upgrades, automated weekly backups, uptime monitoring, and up to 2 hours of monthly content updates.

## Proprietary Products
### Mathsy Meet
- Description: Built by techiitfly, Mathsy Meet is a specialized live interactive online classroom platform designed specifically for mathematics educators, coaches, and private tutors.
- Key Capabilities: Native geometric instruments (interactive compass, protractor, ruler, set square), multi-page PDF whiteboard, dual webcam + screen sharing, student tablet pairing, low-latency WebRTC, and in-class polls.
- URL: ${SITE.siteUrl}/mathsy-meet
- Pricing: ₹999 / month per tutor.

## Case Studies and Proven Portfolio
1. YogaGarhi (https://www.yogagarhi.com):
   - Client: YogaGarhi School of Yoga (Bali & Rishikesh).
   - Solution: High-converting, internationalized retreat booking website with 100% PageSpeed performance, SEO schema for course dates, and WhatsApp consultation funnels.
   - Case Study URL: ${SITE.siteUrl}/work/yogagarhi

2. Yogic Path:
   - Client: Yogic Path Teacher Training Academy.
   - Solution: Course registration portal with curriculum breakdowns, video previews, and student enquiry pipelines.
   - Case Study URL: ${SITE.siteUrl}/work/yogicpath

3. Mathsy:
   - Client: Mathsy Education Academy.
   - Solution: 4-portal edtech learning platform (Student portal, Tutor portal, Parent portal, Admin management).
   - Case Study URL: ${SITE.siteUrl}/work/mathsy

## Official URLs & Sitemaps
- Homepage: https://www.techiitfly.com
- About Page: https://www.techiitfly.com/about
- Pricing & Packages: https://www.techiitfly.com/pricing
- Website Cost Guide: https://www.techiitfly.com/website-cost-india
- Pune Web Development: https://www.techiitfly.com/website-development-pune
- Pune Ecommerce Development: https://www.techiitfly.com/ecommerce-website-development-pune
- Dentists & Clinics: https://www.techiitfly.com/websites-for-dentists
- Gyms & Fitness Centers: https://www.techiitfly.com/websites-for-gyms
- Yoga Schools: https://www.techiitfly.com/websites-for-yoga-schools
- Coaching Classes: https://www.techiitfly.com/websites-for-coaching-classes
- Contact Page: https://www.techiitfly.com/contact
- Sitemap: https://www.techiitfly.com/sitemap.xml
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
