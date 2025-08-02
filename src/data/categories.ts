type IconName = 'Rocket' | 'Cloud' | 'AlertTriangle' | 'Shield' | 'FileText' | 'Brain' | 'KeyRound';

export interface Category {
  name: string;
  slug: string;
  description: string;
  colorVar: string;   // Theme-aware CSS variable (e.g. --category-startup-security)
  icon: IconName;       // Lucide icon name
}

export const categories: Category[] = [
  {
    name: 'Startup Security',
    slug: 'startup-security',
    description: 'Security strategies and foundations for early-stage startups',
    colorVar: '--category-startup-security',
    icon: 'Rocket'
  },
  {
    name: 'Cloud Native Security',
    slug: 'cloud-native-security',
    description: 'Securing Kubernetes, containers, serverless, and cloud infra',
    colorVar: '--category-cloud-native-security',
    icon: 'Cloud'
  },
  {
    name: 'Incident Readiness',
    slug: 'incident-readiness',
    description: 'How to prepare for, detect, and respond to incidents',
    colorVar: '--category-incident-readiness',
    icon: 'AlertTriangle'
  },
  {
    name: 'Threat Modeling',
    slug: 'threat-modeling',
    description: 'Simple and fast ways to reason about risk and system design',
    colorVar: '--category-threat-modeling',
    icon: 'Shield'
  },
  {
    name: 'Templates & Playbooks',
    slug: 'templates-playbooks',
    description: 'Copy-paste-ready resources to move fast and securely',
    colorVar: '--category-templates-playbooks',
    icon: 'FileText'
  },
  {
    name: 'Identity & Access',
    slug: 'identity-access',
    description: 'Managing identity, permissions, and Zero Trust in practice',
    colorVar: '--category-identity-access',
    icon: 'KeyRound'
  },
  {
    name: 'AI & LLM Security',
    slug: 'ai-llm-security',
    description: 'Securing apps built with or exposed to AI/LLMs',
    colorVar: '--category-ai-llm-security',
    icon: 'Brain'
  }
];

// Helper function
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}
