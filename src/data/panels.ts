export interface IPTVPanel {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const iptvPanels: IPTVPanel[] = [
  {
    id: "premium-movies",
    title: "Premium Movies Hub",
    description: "Unlimited access to the latest blockbusters and classic films",
    features: [
      "4K Ultra HD quality",
      "New releases weekly",
      "Award-winning cinema",
      "Family-friendly section",
      "Multiple language options",
      "Download for offline viewing"
    ],
    image: "/PremiumMoviesHub.jpeg" // Movie theater screen
  },
  {
    id: "hockey-central",
    title: "Football Central",
    description: "Complete Football coverage with live games and expert analysis",
    features: [
      "Champions League",
      "English Premier League",
      "UEFA",
      "La Liga",
      "FIFA World Cup",
      "Serie A",
      "All Major Football Leagues"
    ],
    image: "/leagues.webp" // Hockey game on TV screen
  },
  {
    id: "canadian-entertainment",
    title: "Canadian Entertainment",
    description: "Curated collection of popular Canadian content",
    features: [
      "Bilingual content",
      "Award-winning shows",
      "Local productions",
      "Cultural documentaries",
      "Stand-up comedy specials",
      "Regional favorites"
    ],
    image: "/entertainment.webp" // TV studio production
  },
  {
    id: "outdoor-adventures",
    title: "Outdoor Adventures",
    description: "Nature and outdoor programming for adventure enthusiasts",
    features: [
      "Wildlife documentaries",
      "Fishing and hunting shows",
      "National park tours",
      "Winter sports coverage",
      "Survival series",
      "4K nature footage"
    ],
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop&q=80" // Person watching outdoor show on tablet
  },
  {
    id: "family-entertainment",
    title: "Family Entertainment",
    description: "Kid-friendly content for the whole family",
    features: [
      "Educational programs",
      "Animated series",
      "Parental controls",
      "Ad-free children's section",
      "Interactive content",
      "Canadian-made shows"
    ],
    image: "/family.jpeg" // Family watching cartoons
  },
  {
    id: "news-network",
    title: "24/7 News Network",
    description: "Comprehensive news coverage from trusted sources",
    features: [
      "Live news channels",
      "Business and financial updates",
      "Weather alerts",
      "Political analysis",
      "International correspondents",
      "On-demand reports"
    ],
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=600&fit=crop&q=80" // News broadcast on multiple screens
  },
  {
    id: "sports-package",
    title: "Complete Sports Package",
    description: "All the sports action from around the world",
    features: [
      "Live games and events",
      "Multi-sport coverage",
      "Expert commentary",
      "Player interviews",
      "Classic matches",
      "Real-time statistics"
    ],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop&q=80" // Sports bar with multiple games on screens
  }
];