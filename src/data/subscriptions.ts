
export interface Subscription {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

export const subscriptions: Subscription[] = [
  {
    id: "basic",
    title: "Basic Plan",
    description: "Perfect for individuals and small families",
    price: "$15",
    duration: "month",
    features: [
      "5,000+ Live TV Channels",
      "10,000+ Movies & TV Shows",
      "HD Quality Streaming",
      "24/7 Customer Support",
      "Works on 2 devices"
    ]
  },
  {
    id: "premium",
    title: "Premium Plan",
    description: "Most popular choice for families",
    price: "$25",
    duration: "month",
    features: [
      "8,000+ Live TV Channels",
      "15,000+ Movies & TV Shows",
      "4K Ultra HD Quality",
      "Premium Sports Channels",
      "Works on 4 devices",
      "7-day catch-up TV",
      "Priority Support"
    ],
    popular: true
  },
  {
    id: "ultimate",
    title: "Ultimate Plan",
    description: "Complete entertainment package",
    price: "$35",
    duration: "month",
    features: [
      "12,000+ Live TV Channels",
      "25,000+ Movies & TV Shows",
      "4K Ultra HD Quality",
      "All Premium Sports Packages",
      "Works on 6 devices",
      "14-day catch-up TV",
      "Adult Content Available",
      "Priority Support",
      "Free Installation Guide"
    ]
  }
];

export const resellerPlans: Subscription[] = [
  {
    id: "starter-reseller",
    title: "Starter Reseller",
    description: "Begin your IPTV reselling journey",
    price: "$100",
    duration: "month",
    features: [
      "50 Credits per month",
      "Basic reseller panel",
      "Standard customer support",
      "Basic marketing materials",
      "30% profit margin"
    ]
  },
  {
    id: "pro-reseller",
    title: "Pro Reseller",
    description: "Scale your IPTV business",
    price: "$200",
    duration: "month",
    features: [
      "150 Credits per month",
      "Advanced reseller panel",
      "Priority customer support",
      "Premium marketing materials",
      "40% profit margin",
      "Custom branding options",
      "Sales analytics dashboard"
    ],
    popular: true
  },
  {
    id: "master-reseller",
    title: "Master Reseller",
    description: "Complete reselling solution",
    price: "$350",
    duration: "month",
    features: [
      "300 Credits per month",
      "White-label reseller panel",
      "Dedicated account manager",
      "Complete marketing suite",
      "50% profit margin",
      "Full custom branding",
      "Advanced analytics",
      "API access",
      "Bulk credit discounts"
    ]
  }
];
