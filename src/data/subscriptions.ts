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
    id: "free-trial",
    title: "Free 24 Hour Trial",
    description: "Best way to test IPTV Canada service with live channels and movies",
    price: "CA$0.00",
    duration: "24 Hours",
    features: [
      "15,000+ Live IPTV Channels",
      "All Premium Sports & Movies",
      "4K Ultra HD + HDR IPTV Streaming",
      "Priority IPTV Customer Support",
      "Free IPTV Setup Assistance"
    ]
  },
  {
    id: "essential",
    title: "Essential IPTV Plan",
    description: "Affordable IPTV subscription CA for casual viewers",
    price: "CA$29.99",
    duration: "3 months",
    features: [
      "15,000+ Live IPTV Channels",
      "All Premium Sports & Movies",
      "14-Day IPTV Catch-Up TV",
      "4K Ultra HD + HDR IPTV Service",
      "EPG & Advanced IPTV Features",
      "Priority IPTV Support",
      "Free Setup Assistance"
    ]
  },
  {
    id: "premium",
    title: "Premium IPTV Plan",
    description: "Most popular IPTV Canada plan for families",
    price: "CA$49.99",
    duration: "6 months",
    features: [
      "15,000+ Live IPTV Channels",
      "All Premium Sports & Movies",
      "14-Day Catch-Up IPTV Service",
      "4K Ultra HD + HDR IPTV Streaming",
      "Advanced IPTV Features & EPG",
      "24/7 IPTV Support",
      "Free IPTV Setup"
    ]
  },
  {
    id: "ultimate",
    title: "Ultimate IPTV Plan",
    description: "Complete IPTV Canada subscription for unlimited entertainment",
    price: "CA$89.00",
    duration: "12 months",
    features: [
      "15,000+ Live IPTV Channels",
      "All Premium Sports & Movies",
      "14-Day Catch-Up TV",
      "4K Ultra HD + HDR IPTV Service",
      "Advanced IPTV Features + EPG",
      "Priority IPTV Customer Support",
      "Free IPTV Setup Assistance"
    ],
    popular: true
  }
];


export const resellerPlans: Subscription[] = [
  {
    id: "starter-reseller",
    title: "Starter Reseller",
    description: "Perfect for starting your IPTV business",
    price: "CA$410.93", // £234.82 × 1.75
    duration: "month",
    features: [
      "50 Premium Subscriptions",
      "White-label panel access",
      "Basic customer support tools",
      "Monthly profit: CA$875-1,400",
      "Training materials included",
      "24/7 technical support"
    ]
  },
  {
    id: "business-reseller",
    title: "Business Reseller",
    description: "Ideal for growing IPTV businesses",
    price: "CA$722.43", // £412.82 × 1.75
    duration: "month",
    features: [
      "100 Premium Subscriptions",
      "Custom branded panel",
      "Advanced customer tools",
      "Monthly profit: CA$2,100-3,150",
      "Marketing materials provided",
      "Dedicated account manager",
      "Priority technical support"
    ],
    popular: true
  },
  {
    id: "enterprise-reseller",
    title: "Enterprise Reseller",
    description: "For established businesses",
    price: "CA$1,236.93", // £706.82 × 1.75
    duration: "month",
    features: [
      "200 Premium Subscriptions",
      "Fully customizable panel",
      "Complete business tools suite",
      "Monthly profit: CA$4,375-6,125",
      "Custom API access",
      "Personal account manager",
      "White-glove support service"
    ]
  }
];
