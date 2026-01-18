export interface Sport {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
}

export type TournamentStatus = 'open' | 'closing_soon' | 'coming_soon' | 'live' | 'completed' | 'sold_out';

export interface Tournament {
  id: string;
  title: string;
  date: string;
  sport: string;
  ageGroup: string;
  status: TournamentStatus;
  format?: string;
  venue?: string;
  fee?: number;
  teamsRegistered?: number;
  teamsTotal?: number;
  image?: string;
  featured?: boolean;
  winner?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPremium?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}
