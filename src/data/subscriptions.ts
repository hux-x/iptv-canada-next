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
    id: "essential",
    title: "Essential Plan",
    description: "Perfect for casual viewers",
    price: "CA$29.99", // £23.59 × 1.75
    duration: "3 months",
    features: [
      "15,000+ Live Channels",
      "All Premium Sports & Movies",
      "14-Day Catch-Up TV",
      "4K Ultra HD + HDR",
      "Unlimited Device Connections",
      "Advanced Features & EPG",
      "Priority Customer Support",
      "Free Setup Assistance"
    ]
  },
  {
    id: "premium",
    title: "Premium Plan",
    description: "Most popular choice for families",
    price: "CA$49.99", // £41.29 × 1.75
    duration: "6 months",
    features: [
      "15,000+ Live Channels",
      "All Premium Sports & Movies",
      "14-Day Catch-Up TV",
      "4K Ultra HD + HDR",
      "Unlimited Device Connections",
      "Advanced Features & EPG",
      "Priority Customer Support",
      "Free Setup Assistance"
    ]
  },
  {
    id: "ultimate",
    title: "Ultimate Plan",
    description: "Complete entertainment solution",
    price: "CA$89.00", // £70.79 × 1.75
    duration: "12 months",
    features: [
      "15,000+ Live Channels",
      "All Premium Sports & Movies",
      "14-Day Catch-Up TV",
      "4K Ultra HD + HDR",
      "Unlimited Device Connections",
      "Advanced Features & EPG",
      "Priority Customer Support",
      "Free Setup Assistance"
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
