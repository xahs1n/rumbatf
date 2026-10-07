import {
  Flame,
  Leaf,
  Timer,
  ShieldCheck,
  Award,
  HeartHandshake,
} from "lucide-react";

export const stats = [
  { value: 10, suffix: "+", label: "Years of Grilling" },
  { value: 500, suffix: "K", label: "Steaks Served", decimals: 1 },
  { value: 1, suffix: "", label: "Premium Location" },
  { value: 21, suffix: "", label: "Days Dry Aged" },
];

export type WhyUsItem = {
  icon: typeof Flame;
  title: string;
  description: string;
  image: string;
  tag: string;
  stat: string;
  statLabel: string;
};

export const whyUs: WhyUsItem[] = [
  {
    icon: Flame,
    title: "Wood-Fired Grill",
    description:
      "Every steak is seared over an open wood fire to lock in juices and impart our signature smoky flavour.",
    image: "/images/why/flame.jpg",
    tag: "Signature Sear",
    stat: "400°",
    statLabel: "Perfect grill temp",
  },
  {
    icon: Timer,
    title: "21-Day Dry Aged",
    description:
      "Our premium cuts are dry-aged for a minimum of 21 days to concentrate flavour and ensure ultimate tenderness.",
    image: "/images/why/brine.jpg",
    tag: "Slow Craft",
    stat: "21 days",
    statLabel: "Aging process",
  },
  {
    icon: Leaf,
    title: "Finest Prime Cuts",
    description:
      "Sourced from the best farms, we only serve premium quality beef that meets our rigorous marbling standards.",
    image: "/images/why/fresh.jpg",
    tag: "Premium Quality",
    stat: "100%",
    statLabel: "Prime Grade",
  },
  {
    icon: ShieldCheck,
    title: "Halal Certified",
    description:
      "All our meats are ethically sourced and 100% Halal certified, ensuring the highest standards of purity.",
    image: "/images/why/premium.jpg",
    tag: "Quality First",
    stat: "100%",
    statLabel: "Halal",
  },
];

export const timeline = [
  {
    year: "2014",
    title: "The First Fire",
    text: "Rumba opens its doors with a simple mission: serve the best steaks in town.",
  },
  {
    year: "2018",
    title: "The Meat Factory",
    text: "Expansion into our custom dry-aging facility, perfecting our signature cuts.",
  },
  {
    year: "2023",
    title: "Award-Winning Excellence",
    text: "Recognised as the top premium steakhouse in the capital.",
  },
];

export const testimonials = [
  {
    name: "Ali Raza",
    role: "Food Critic",
    quote:
      "The Tenderloin Steak melts in your mouth. Rumba has truly mastered the art of the perfect sear.",
    rating: 5,
    initials: "AR",
    accent: "#ff7f11",
  },
  {
    name: "Sara Khan",
    role: "Regular Guest",
    quote:
      "The Mix Grill Platter is an absolute feast! Perfect ambiance and incredible flavors every single time.",
    rating: 5,
    initials: "SK",
    accent: "#8bd94e",
  },
  {
    name: "Omar Tariq",
    role: "Chef",
    quote:
      "You can taste the quality in the dry-aging process. Their Tomahawk is a masterpiece.",
    rating: 5,
    initials: "OT",
    accent: "#d96504",
  },
];

export const faqs = [
  {
    q: "Are all your meats Halal?",
    a: "Yes, 100% of our meats are strictly Halal certified and sourced from premium local and international suppliers.",
  },
  {
    q: "Do I need to make a reservation?",
    a: "While walk-ins are welcome, we highly recommend making a reservation, especially on weekends, to guarantee your table.",
  },
  {
    q: "Do you offer private dining?",
    a: "Yes, we have exclusive spaces for private events, corporate dinners, and celebrations. Contact our team to book.",
  },
  {
    q: "Can I choose how my steak is cooked?",
    a: "Absolutely. Our chefs will prepare your steak exactly to your liking, from blue rare to well done.",
  },
];

export const promotions = [
  {
    title: "Tomahawk Tuesdays",
    detail: "Every Tuesday Evening",
    highlight: "15% OFF",
    text: "Enjoy our massive signature Tomahawk Steak at a special price.",
  },
  {
    title: "Lunch Specials",
    detail: "Weekdays 12pm - 4pm",
    highlight: "RS 2,500",
    text: "Select burgers, sandwiches, and chicken dishes with a complimentary drink.",
  },
];

export type GalleryImage = {
  src: string;
  span: string;
  title: string;
  category: string;
  description: string;
  tag?: string;
  rating: number;
  cook: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/g1.jpg",
    span: "row-span-2",
    title: "Signature Tenderloin",
    category: "Steaks",
    description:
      "A beautifully seared tenderloin cut, resting in its own juices.",
    tag: "Bestseller",
    rating: 4.9,
    cook: "Flame-grilled",
  },
  {
    src: "/images/gallery/g2.jpg",
    span: "",
    title: "Mix Grill Platter",
    category: "Platters",
    description: "A carnivore's dream featuring a variety of our best cuts.",
    tag: "Feast",
    rating: 4.9,
    cook: "Wood-fired",
  },
  {
    src: "/images/gallery/g3.jpg",
    span: "",
    title: "Skillet Brownie",
    category: "Dessert",
    description: "Rich chocolate brownie on a hot skillet with melting ice cream.",
    rating: 4.8,
    cook: "Oven-baked",
  },
  {
    src: "/images/gallery/g4.jpg",
    span: "row-span-2",
    title: "The Tomahawk",
    category: "Steaks",
    description:
      "Our magnificent bone-in ribeye, the ultimate showstopper.",
    tag: "Premium",
    rating: 5.0,
    cook: "Reverse-seared",
  },
  {
    src: "/images/gallery/g5.jpg",
    span: "",
    title: "Sizzler Action",
    category: "Steaks",
    description: "Steak served smoking hot on a traditional iron skillet.",
    rating: 4.8,
    cook: "Sizzling",
  },
  {
    src: "/images/gallery/g6.jpg",
    span: "",
    title: "Rumba Interior",
    category: "Ambiance",
    description: "The moody, premium dining space at Rumba.",
    tag: "Vibe",
    rating: 4.9,
    cook: "Atmosphere",
  },
];
