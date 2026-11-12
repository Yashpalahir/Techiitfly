export interface Industry {
  id: string;
  name: string;
  href: string;
  description: string;
  badge?: string;
  icon?: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: "ecommerce-stores",
    name: "Ecommerce & Online Stores",
    href: "/ecommerce-website-development-pune",
    description:
      "High-converting online stores with payment gateways, admin inventory dashboards, speed hardening, and advanced SEO.",
    badge: "🛍️ Ecommerce & Stores",
    icon: "🛍️",
  },
  {
    id: "yoga-wellness",
    name: "Yoga & Wellness",
    href: "/websites-for-yoga-schools",
    description:
      "Websites for yoga schools, retreat centres, and teachers with schedule showcases and direct WhatsApp lead capture.",
    badge: "🪷 Yoga & Wellness",
    icon: "🪷",
  },
  {
    id: "dentists-clinics",
    name: "Dentists & Clinics",
    href: "/websites-for-dentists",
    description:
      "Treatment showcases, clinic timings, local SEO, and 1-tap WhatsApp appointment bookings for dental practices.",
    badge: "🦷 Dentists & Clinics",
    icon: "🦷",
  },
  {
    id: "gyms-fitness",
    name: "Gyms & Fitness Centers",
    href: "/websites-for-gyms",
    description:
      "Membership plans, trainer showcases, class schedules, virtual gym tours, and 1-tap WhatsApp free trial bookings.",
    badge: "🏋️ Gyms & Fitness",
    icon: "🏋️",
  },
  {
    id: "coaching-classes",
    name: "Coaching Classes",
    href: "/websites-for-coaching-classes",
    description:
      "Batch timetables, faculty profiles, transparent fee structures, and quick admission inquiry forms for institutes.",
    badge: "🎓 Coaching & Tutors",
    icon: "🎓",
  },
];
