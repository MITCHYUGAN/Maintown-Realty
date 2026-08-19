export type PageType = 'home' | 'how-it-works';

export interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
  yearlyRent: number;
  monthlyRent: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  isVerified: boolean;
}

export interface WaitlistSubmission {
  name: string;
  contact: string; // WhatsApp Number or Email
  role: 'tenant' | 'landlord' | 'agent';
  market: 'Nigeria' | 'Canada' | 'Both';
  createdAt: string;
  queuePosition: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

