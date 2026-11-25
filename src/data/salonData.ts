export type ServiceCategory =
  | 'Bridal'
  | 'Makeup'
  | 'Hair'
  | 'Skin'
  | 'Nails'
  | 'Waxing & Threading'
  | 'Spa';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  duration: string;
  priceLabel: string;
  isPricePlaceholder?: boolean;
  demoPriceInr: number;
  popular?: boolean;
  image: string;
  imageAlt: string;
  sampleImage: boolean;
  imageSource: string;
}

export interface PackageItem {
  id: string;
  name: string;
  audience: string;
  priceLabel: string;
  isPlaceholder?: boolean;
  includes: string[];
  note: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  isPlaceholder: boolean;
  image: string;
  imageAlt: string;
  sampleImage: boolean;
  imageSource: string;
}

export interface ReviewItem {
  id: string;
  reviewerName: string;
  rating: number;
  source: string;
  quote: string;
  isNamePlaceholder?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  sampleImage: boolean;
  imageSource: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type BookingStatus = 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';

export interface BookingRecord {
  id: string;
  customerName: string;
  phone: string;
  services: string[];
  date: string;
  timeSlot: string;
  stylist: string;
  totalAmountInr: number;
  paymentMethod: 'Demo UPI' | 'Demo Card' | 'Pay at Salon';
  paymentStatus: 'Demo Paid' | 'Pay at Salon';
  status: BookingStatus;
  createdAt: string;
}

/**
 * CENTRAL SALON DATA FILE
 * Edit any text, prices, hours, team names, reviews, or image paths here.
 * Items marked `isPlaceholder: true` or `sampleImage: true` should be updated
 * with your verified details and real salon photography.
 */
export const SALON_INFO = {
  name: 'Mahhindrs Swaroop Ladies Beauty Salon',
  shortName: 'Mahhindrs Swaroop',
  tagline: 'Bridal Artistry, Hair & Skin Care in the Heart of Kala Chowki',
  establishedNote: '[Placeholder: Add years in business, e.g., Serving Mumbai since YYYY]',
  catersTo: 'Ladies & Bridal Specialist',
  address: {
    line1: 'Irani Chawl, 27/28, G.D. Ambekar Marg',
    line2: 'Kalachowki, Lalbaug, Parel',
    cityStatePin: 'Mumbai, Maharashtra 400033',
    full: 'Irani Chawl, 27/28, G.D. Ambekar Marg, Kalachowki, Lalbaug, Parel, Mumbai, Maharashtra 400033',
    landmark: 'Near G.D. Ambekar Marg / Kala Chowki, Lalbaug',
  },
  phonePrimary: '+91 93729 58458',
  phoneSecondary: '+91 8045795156',
  whatsappNumber: '919372958458',
  email: '[Placeholder: salon-email@example.com]',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Mahhindrs%20Swaroop%20Ladies%20Beauty%20Salon&query_place_id=ChIJvSfEZVXP5zsREaysN4w5RXc',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Irani+Chawl+27/28+G.D.+Ambekar+Marg+Kalachowki+Lalbaug+Mumbai+400033&output=embed',
  rating: {
    score: '4.2',
    countLabel: '130+ local ratings (Placeholder — verify exact Google Maps count)',
  },
  hours: [
    { day: 'Monday', time: '10:00 AM – 9:00 PM' },
    { day: 'Tuesday', time: '10:00 AM – 9:00 PM' },
    { day: 'Wednesday', time: '10:00 AM – 9:00 PM' },
    { day: 'Thursday', time: '10:00 AM – 9:00 PM' },
    { day: 'Friday', time: '10:00 AM – 9:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 9:00 PM' },
  ],
  hoursSummary: 'Open Daily: 10:00 AM – 9:00 PM',
  social: {
    instagramHandle: '@mahhindrsswaroop [Placeholder — add your handle]',
    instagramUrl: 'https://www.instagram.com/',
    instagramIsPlaceholder: true,
    facebookUrl: 'https://www.facebook.com/',
    facebookIsPlaceholder: true,
  },
  heroImage: {
    path: '/images/mahhindrs-swaroop-hero-salon-01.jpg',
    alt: 'Warm, sunlit ladies beauty salon and bridal studio interior with arched brass mirrors and maroon velvet chairs',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real salon interior photo',
  },
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'Bridal',
  'Makeup',
  'Hair',
  'Skin',
  'Nails',
  'Waxing & Threading',
  'Spa',
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'bridal-signature',
    name: 'Signature Bridal & Airbrush Makeup',
    category: 'Bridal',
    description:
      'Complete bridal look tailored to your outfit and skin tone, including hair styling, saree or lehenga draping, nail polish change, and false lashes.',
    duration: '180 mins',
    priceLabel: 'Starting from ₹14,000',
    demoPriceInr: 14000,
    popular: true,
    image: '/images/mahhindrs-swaroop-bridal-makeup-02.jpg',
    imageAlt: 'Bridal makeup vanity with palettes, lipsticks, and traditional bangles',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real bridal work photo',
  },
  {
    id: 'engagement-makeup',
    name: 'Engagement & Sangeet Makeup',
    category: 'Bridal',
    description:
      'Luminous, camera-ready occasion makeup with soft-focus finish, custom hair styling, and outfit pinning.',
    duration: '120 mins',
    priceLabel: 'Starting from ₹12,000',
    demoPriceInr: 12000,
    popular: true,
    image: '/images/mahhindrs-swaroop-bridal-makeup-02.jpg',
    imageAlt: 'Engagement makeup flatlay on cream marble',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real engagement makeup photo',
  },
  {
    id: 'party-makeup',
    name: 'Party & Family Occasion Makeup',
    category: 'Makeup',
    description:
      'Polished festive and wedding-guest makeup with hair blow-dry or traditional bun styling and draping assistance.',
    duration: '90 mins',
    priceLabel: 'Starting from ₹8,000',
    demoPriceInr: 8000,
    popular: true,
    image: '/images/mahhindrs-swaroop-bridal-makeup-02.jpg',
    imageAlt: 'Festive makeup tools and silk accents',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real party makeup photo',
  },
  {
    id: 'haircut-styling',
    name: 'Precision Haircut & Blow-Dry Styling',
    category: 'Hair',
    description:
      'One-on-one haircut consultation tailored to face shape and hair texture, finished with a smooth salon blow-dry.',
    duration: '45 mins',
    priceLabel: 'Ask for Price (Placeholder — ₹500+)',
    isPricePlaceholder: true,
    demoPriceInr: 500,
    popular: true,
    image: '/images/mahhindrs-swaroop-hair-styling-03.jpg',
    imageAlt: 'Hair styling station with brass brush, curler, and fresh jasmine gajra',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real hair styling photo',
  },
  {
    id: 'hair-keratin-smoothening',
    name: 'Keratin, Smoothening & Hair Color',
    category: 'Hair',
    description:
      'Frizz-control keratin, global color, highlights, or balayage customized after an in-salon hair health check.',
    duration: '150 mins',
    priceLabel: 'Ask for Price (Consultation)',
    isPricePlaceholder: true,
    demoPriceInr: 3500,
    image: '/images/mahhindrs-swaroop-hair-styling-03.jpg',
    imageAlt: 'Hair care serums and styling tools on travertine stone',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real hair treatment photo',
  },
  {
    id: 'glow-facial',
    name: 'Rejuvenating Glow Facial & Cleanup',
    category: 'Skin',
    description:
      'Deep pore cleansing, gentle exfoliation, and hydrating massage tailored for dull, tanned, or sensitive skin.',
    duration: '60 mins',
    priceLabel: 'Ask for Price (Placeholder — ₹1,200+)',
    isPricePlaceholder: true,
    demoPriceInr: 1200,
    popular: true,
    image: '/images/mahhindrs-swaroop-facial-skin-04.jpg',
    imageAlt: 'Serene botanical skincare room with warm towels and serum droppers',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real facial room photo',
  },
  {
    id: 'manicure-pedicure-nails',
    name: 'Manicure, Pedicure & Nail Extensions',
    category: 'Nails',
    description:
      'Cuticle care, soothing hand and foot soak, polish or custom gel/bridal nail art extensions.',
    duration: '60 mins',
    priceLabel: 'Ask for Price (Placeholder — ₹800+)',
    isPricePlaceholder: true,
    demoPriceInr: 800,
    image: '/images/mahhindrs-swaroop-nails-art-05.jpg',
    imageAlt: 'Manicure and nail art tray with burgundy and champagne polishes',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real nail art photo',
  },
  {
    id: 'waxing-threading',
    name: 'Hygienic Waxing & Eyebrow Threading',
    category: 'Waxing & Threading',
    description:
      'Gentle full-arms, legs, or Rica/honey waxing and precision eyebrow shaping in a clean, private setting.',
    duration: '30 mins',
    priceLabel: 'Ask for Price (Placeholder — ₹300+)',
    isPricePlaceholder: true,
    demoPriceInr: 300,
    image: '/images/mahhindrs-swaroop-waxing-threading-07.jpg',
    imageAlt: 'Clean beauty station with chamomile wax warmer and cotton pads',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real salon station photo',
  },
  {
    id: 'hair-scalp-spa',
    name: 'Nourishing Hair & Scalp Spa Ritual',
    category: 'Spa',
    description:
      'Deep conditioning cream bath with relaxing head and shoulder massage to restore shine and softness.',
    duration: '50 mins',
    priceLabel: 'Ask for Price (Placeholder — ₹900+)',
    isPricePlaceholder: true,
    demoPriceInr: 900,
    image: '/images/mahhindrs-swaroop-spa-ritual-06.jpg',
    imageAlt: 'Hair spa corner with amber essential oil bottles and warm basalt stones',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real spa corner photo',
  },
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'pkg-bridal',
    name: 'Bridal Signature Package',
    audience: 'Brides',
    priceLabel: 'Starting from ₹14,000 / function',
    includes: [
      'HD or Airbrush Bridal Makeup',
      'Bridal Hair Styling & Floral Setting',
      'Saree / Lehenga Draping',
      'False Lashes & Nail Polish Change',
    ],
    note: 'Final quote depends on makeup brand preference (e.g., MAC, Huda Beauty, Bobbi Brown) and function count.',
  },
  {
    id: 'pkg-engagement',
    name: 'Engagement & Reception Look',
    audience: 'Brides & Bridesmaids',
    priceLabel: 'Starting from ₹12,000',
    includes: [
      'Soft-Glam Engagement Makeup',
      'Custom Hair Styling',
      'Dupatta / Saree Draping',
    ],
    note: 'Advance booking recommended for peak wedding dates.',
  },
  {
    id: 'pkg-party',
    name: 'Family & Party Makeover',
    audience: 'Wedding Guests & Festive',
    priceLabel: 'Starting from ₹8,000 / person',
    includes: [
      'Occasion Makeup & Eye Detailing',
      'Blow-Dry or Traditional Bun',
      'Saree Draping',
    ],
    note: 'Group slots available on prior appointment.',
  },
  {
    id: 'pkg-prebridal',
    name: 'Pre-Bridal Glow Ritual [Placeholder]',
    audience: 'Brides-to-be',
    priceLabel: 'Custom Quote (Placeholder — Add ₹ Price)',
    isPlaceholder: true,
    includes: [
      '[Placeholder: Glow Facial Sessions]',
      '[Placeholder: Full Body Polishing / Waxing]',
      '[Placeholder: Hair Spa & Manicure / Pedicure]',
    ],
    note: 'Placeholder package — customize exact sessions and pricing in src/data/salonData.ts.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: '[Lead Bridal & Makeup Artist — Add Name]',
    role: 'Bridal & Occasion Makeup Lead',
    specialty: 'Bridal transformations, airbrush finish & traditional draping',
    isPlaceholder: true,
    image: '/images/mahhindrs-swaroop-studio-crest-08.jpg',
    imageAlt: 'Neutral studio crest placeholder for lead bridal artist',
    sampleImage: true,
    imageSource: 'Neutral studio still-life placeholder (no stock/AI people)',
  },
  {
    id: 'team-2',
    name: '[Senior Hair Stylist — Add Name]',
    role: 'Hair Cut, Color & Keratin Specialist',
    specialty: 'Customized cuts, smoothening & festive hair styling',
    isPlaceholder: true,
    image: '/images/mahhindrs-swaroop-studio-crest-08.jpg',
    imageAlt: 'Neutral studio crest placeholder for senior hair stylist',
    sampleImage: true,
    imageSource: 'Neutral studio still-life placeholder (no stock/AI people)',
  },
  {
    id: 'team-3',
    name: '[Skin & Wellness Specialist — Add Name]',
    role: 'Facials, Skin Care & Spa Therapist',
    specialty: 'Glow facials, cleanups, manicure/pedicure & hair spa',
    isPlaceholder: true,
    image: '/images/mahhindrs-swaroop-studio-crest-08.jpg',
    imageAlt: 'Neutral studio crest placeholder for skin specialist',
    sampleImage: true,
    imageSource: 'Neutral studio still-life placeholder (no stock/AI people)',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    reviewerName: 'Verified Guest (Replace with Google Maps First Name)',
    isNamePlaceholder: true,
    rating: 5,
    source: 'Local Directory Review',
    quote:
      'I had an amazing outstanding experience at salon. The atmosphere was pleasant and service were provided with great professionalism.',
  },
  {
    id: 'rev-2',
    reviewerName: 'Verified Guest (Replace with Google Maps First Name)',
    isNamePlaceholder: true,
    rating: 4,
    source: 'Local Directory Review',
    quote:
      "A haircut from Mahhindra's Swaroop salon is amazing! This hair salon is very neat and clean, with attentive one-on-one care.",
  },
  {
    id: 'rev-3',
    reviewerName: 'Verified Guest (Replace with Google Maps First Name)',
    isNamePlaceholder: true,
    rating: 5,
    source: 'Local Directory Review',
    quote:
      'Amazing staff services, timely work done with no unnecessary waiting, and dependable beauty services in the neighborhood.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Kala Chowki Studio Interior',
    category: 'Salon Ambience',
    image: '/images/mahhindrs-swaroop-hero-salon-01.jpg',
    imageAlt: 'Warm sunlit beauty salon interior',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real salon photo',
  },
  {
    id: 'gal-2',
    title: 'Bridal Artistry Prep',
    category: 'Bridal & Makeup',
    image: '/images/mahhindrs-swaroop-bridal-makeup-02.jpg',
    imageAlt: 'Bridal makeup palettes and traditional bangles',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real bridal photo',
  },
  {
    id: 'gal-3',
    title: 'Traditional Gajra & Styling',
    category: 'Hair Care',
    image: '/images/mahhindrs-swaroop-hair-styling-03.jpg',
    imageAlt: 'Hair styling tools and fresh jasmine gajra',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real hair work photo',
  },
  {
    id: 'gal-4',
    title: 'Botanical Skin Rituals',
    category: 'Facials & Spa',
    image: '/images/mahhindrs-swaroop-facial-skin-04.jpg',
    imageAlt: 'Skincare treatment room with serums and warm towels',
    sampleImage: true,
    imageSource: 'AI-generated sample image — replace with real facial room photo',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Do I need an appointment or do you accept walk-ins?',
    answer:
      'Walk-ins are welcome between 10:00 AM and 9:00 PM, though we strongly recommend booking ahead for weekends, evenings, haircuts, and bridal consultations to avoid waiting during peak hours.',
  },
  {
    question: 'How far in advance should I book bridal or engagement makeup?',
    answer:
      'For wedding season dates, we recommend reaching out at least 4–8 weeks in advance so we can schedule your consultation and reserve your preferred time slot.',
  },
  {
    question: 'Where is Mahhindrs Swaroop Ladies Beauty Salon located?',
    answer:
      'We are located at Irani Chawl, 27/28, G.D. Ambekar Marg, Kalachowki, Lalbaug, Parel, Mumbai 400033.',
  },
  {
    question: 'Is online payment on this website live?',
    answer:
      'No — online payment on this website is a DEMO ONLY for previewing the booking flow. No real card or UPI transaction is processed.',
  },
];

export const TIME_SLOTS: string[] = [
  '10:00 AM',
  '11:30 AM',
  '01:00 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM',
  '07:00 PM',
];

export const OWNER_DEMO_CREDENTIALS = {
  email: 'owner@mahhindrsswaroop.demo',
  password: 'SwaroopDemo@2026',
};

export const INITIAL_SAMPLE_BOOKINGS: BookingRecord[] = [
  {
    id: 'MS-2026-101',
    customerName: 'Sample Guest A',
    phone: '+91 98XXX XX101',
    services: ['Signature Bridal & Airbrush Makeup'],
    date: '2026-11-25',
    timeSlot: '11:30 AM',
    stylist: 'Lead Bridal & Makeup Artist',
    totalAmountInr: 14000,
    paymentMethod: 'Demo UPI',
    paymentStatus: 'Demo Paid',
    status: 'Confirmed',
    createdAt: '2026-11-24 16:20',
  },
  {
    id: 'MS-2026-102',
    customerName: 'Sample Guest B',
    phone: '+91 98XXX XX204',
    services: ['Rejuvenating Glow Facial & Cleanup', 'Hygienic Waxing & Eyebrow Threading'],
    date: '2026-11-25',
    timeSlot: '02:30 PM',
    stylist: 'Skin & Wellness Specialist',
    totalAmountInr: 1500,
    paymentMethod: 'Pay at Salon',
    paymentStatus: 'Pay at Salon',
    status: 'Pending',
    createdAt: '2026-11-25 09:45',
  },
  {
    id: 'MS-2026-103',
    customerName: 'Sample Guest C',
    phone: '+91 97XXX XX318',
    services: ['Precision Haircut & Blow-Dry Styling', 'Nourishing Hair & Scalp Spa Ritual'],
    date: '2026-11-24',
    timeSlot: '05:30 PM',
    stylist: 'Senior Hair Stylist',
    totalAmountInr: 1400,
    paymentMethod: 'Demo Card',
    paymentStatus: 'Demo Paid',
    status: 'Completed',
    createdAt: '2026-11-23 19:10',
  },
  {
    id: 'MS-2026-104',
    customerName: 'Sample Guest D',
    phone: '+91 99XXX XX412',
    services: ['Party & Family Occasion Makeup'],
    date: '2026-11-26',
    timeSlot: '04:00 PM',
    stylist: 'Any Available Specialist',
    totalAmountInr: 8000,
    paymentMethod: 'Demo UPI',
    paymentStatus: 'Demo Paid',
    status: 'Confirmed',
    createdAt: '2026-11-25 11:05',
  },
];
