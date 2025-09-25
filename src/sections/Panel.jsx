import React from "react";
import Navbar from "../components/Navbar";
import ReusableHero from "../components/ReusableHero";
import Subscriptions from '../components/Subscriptions';
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function () {
  return (
    <div>
      <Navbar />
      <ReusableHero
        title="Best IPTV Canada 2025 -"
        highlight="Smarters Pro Subscription"
        description="Enjoy smooth IPTV streaming with IPTV Smarters Pro..."
        secondaryText="Choose from affordable IPTV Canada plans..."
        features={[
          "IPTV Smarters Pro supported",
          "Works with any IPTV box Canada",
          "Free IPTV trial available",
          "Affordable monthly & yearly plans",
        ]}
        ctaPrimary={{ href: "#subscriptions", label: "Start Free Trial" }}
        ctaSecondary={{
          href: "#subscriptions",
          label: "View Plans",
          aria: "View IPTV subscription plans",
        }}
        stats={[
          {
            label: "Live TV Channels",
            value: "12,000+",
            description: "Canadian & International",
          },
          {
            label: "Movies & Shows",
            value: "25,000+",
            description: "On-Demand Content",
          },
          {
            label: "Service Uptime",
            value: "99.9%",
            description: "Reliable IPTV Service",
          },
        ]}
        regions="Ontario, Quebec, British Columbia, Alberta, Vancouver"
        image={{
          src: "/IPTV.webp",
          alt: "IPTV Smarters Pro IPTV Service in Canada",
          badge: {
            label: "Streaming Quality",
            value: "4K Ultra HD",
            description: "Compatible with any IPTV Box",
          },
        }}
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "IPTV Smarters Pro Canada",
          description:
            "Best IPTV Smarters Pro subscription in Canada with 12,000+ channels...",
          brand: { "@type": "Brand", name: "Canadian IPTV Services" },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1500",
          },
          category: "IPTV Service",
        }}
      />
      <Subscriptions/>
      <Contact/>
      <Footer/>
    </div>
  );
}
