/**
 * Centralized Schema.org JSON-LD definitions for techiitfly
 * Single source of truth for Organization / ProfessionalService
 */

export const ORGANIZATION_ID = "https://www.techiitfly.com/#organization";

/**
 * Social and directory profiles for techiitfly.
 * Add new profiles here to automatically update the Organization sameAs schema across the site.
 */
export const ORGANIZATION_SAME_AS: string[] = [
  "https://www.linkedin.com/company/techiitfly",
  "https://www.instagram.com/techiitfly/",
  // Add additional sameAs profiles below:
  // "https://twitter.com/techiitfly",
  // "https://www.youtube.com/@techiitfly",
];

export const FOUNDERS_PERSON_IDS = {
  yashpal: "https://www.techiitfly.com/about#yashpal-baldaniya",
  rahul: "https://www.techiitfly.com/about#rahul-singh-kotiyal",
  aditya: "https://www.techiitfly.com/about#aditya-chavhan",
} as const;

/**
 * Shared Organization schema (type: ProfessionalService)
 * Registered with stable @id: https://www.techiitfly.com/#organization
 */
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORGANIZATION_ID,
  name: "techiitfly",
  url: "https://www.techiitfly.com",
  logo: "https://www.techiitfly.com/favicon.svg",
  image: "https://www.techiitfly.com/og/home.png",
  description:
    "Website development company in Pune. Fixed-price websites live in 7 days, starting at ₹12,999.",
  telephone: "+919373917738",
  email: "contact@techiitfly.com",
  priceRange: "From ₹12,999",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: "India",
  sameAs: ORGANIZATION_SAME_AS,
  founder: [
    {
      "@type": "Person",
      "@id": FOUNDERS_PERSON_IDS.yashpal,
      name: "Yashpal Baldaniya",
      jobTitle: "Co-founder",
    },
    {
      "@type": "Person",
      "@id": FOUNDERS_PERSON_IDS.rahul,
      name: "Rahul Singh Kotiyal",
      jobTitle: "Co-founder",
    },
    {
      "@type": "Person",
      "@id": FOUNDERS_PERSON_IDS.aditya,
      name: "Aditya Chavhan",
      jobTitle: "Co-founder",
    },
  ],
};

/**
 * Returns a lightweight reference to the shared Organization for use in Service, BlogPosting, Product, etc.
 */
export function getOrganizationReference() {
  return {
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
  };
}
