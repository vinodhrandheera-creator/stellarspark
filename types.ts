export type PageId = 'home' | 'services' | 'how-we-work' | 'product' | 'about-us' | 'contact' | 'privacy';

export interface NavItem {
  label: string;
  id: PageId;
}

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface ChallengeItem {
  icon: string;
  title: string;
  desc: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export interface ConsultationResponse {
  recommendation: string;
  estimatedEffort: string;
  nextSteps: string[];
}