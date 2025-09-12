export interface IPTVPanel {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const iptvPanels: IPTVPanel[] = [
  {
    id: "canada-premium",
    title: "Best IPTV Canada – Premium Movies & Series",
    description: "Stream blockbuster movies and popular TV shows in Canada with our best IPTV subscription. Works perfectly on IPTV Smarters Pro, IPTV Box, and Smart IPTV apps.",
    features: [
      "Latest movies and TV series",
      "Supports IPTV Smarters Pro",
      "4K Ultra HD quality",
      "Family-friendly options",
      "Multiple language channels",
      "Free trial available"
    ],
    image: "/PremiumMoviesHub.jpeg"
  },
  {
    id: "football-central",
    title: "IPTV Sports Canada – Football & Live Sports",
    description: "Enjoy complete sports coverage in Canada with our IPTV service. From Champions League to FIFA World Cup, never miss a match with your IPTV box or Smart IPTV app.",
    features: [
      "Champions League live",
      "English Premier League",
      "UEFA & FIFA tournaments",
      "La Liga & Serie A",
      "All major sports channels",
      "Works on IPTV Smarters Pro"
    ],
    image: "/leagues.webp"
  },
  {
    id: "canadian-content",
    title: "IPTV Quebec & Canadian Entertainment",
    description: "Watch Canadian channels, Quebec content, and local entertainment with our CA IPTV provider. Perfect IPTV solution for bilingual families in Canada.",
    features: [
      "French & English channels",
      "Canadian TV & shows",
      "Cultural documentaries",
      "Regional favorites",
      "Quebec IPTV options",
      "Available on IPTV box"
    ],
    image: "/entertainment.webp"
  },
  {
    id: "adventure-ip-tv",
    title: "Smart IPTV Canada – Outdoor & Adventure",
    description: "Explore the best outdoor and nature channels with our IPTV service in Canada. Watch wildlife, fishing, survival, and sports content on your IPTV box or Smart IPTV app.",
    features: [
      "Wildlife & nature shows",
      "Fishing & hunting",
      "National park documentaries",
      "Winter sports channels",
      "Survival & adventure series",
      "4K IPTV streams"
    ],
    image: "/adven.jpeg"
  },
  {
    id: "family-ip-tv",
    title: "Family IPTV Subscription Canada",
    description: "The best IPTV provider in Canada for families. Safe and fun content for kids, parental controls, and ad-free streaming with IPTV Smarters Pro and IPTV Box.",
    features: [
      "Kid-friendly content",
      "Educational channels",
      "Parental controls",
      "Animated series",
      "Canadian-made shows",
      "Ad-free children’s IPTV"
    ],
    image: "/family.jpeg"
  },
  {
    id: "news-ip-tv",
    title: "24/7 IPTV News Canada",
    description: "Stay updated with live Canadian and international news channels via our IPTV subscription. Works with Smart IPTV and IPTV Smarters Pro across devices.",
    features: [
      "Live news channels",
      "Business & finance",
      "Weather & alerts",
      "Political coverage",
      "Canadian & global news",
      "On-demand replays"
    ],
    image: "/newspaper.webp"
  },
  {
    id: "sports-ip-tv",
    title: "Complete IPTV Sports Package Canada",
    description: "Stream all major sports with our IPTV service in Canada. Perfect for Smart IPTV, IPTV Box, and IPTV Smarters Pro users looking for the best IPTV provider.",
    features: [
      "Live games & events",
      "Hockey, football, basketball",
      "Real-time stats",
      "Player interviews",
      "Classic matches",
      "HD & 4K IPTV streams"
    ],
    image: "/sports.jpeg"
  }
];
