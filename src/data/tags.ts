export interface Tag {
  name: string;
  slug: string;
  description: string;
}

export const tags: Tag[] = [
  {
    name: 'Startup Security',
    slug: 'startup-security',
    description: 'Security strategies and foundations for early-stage startups'
  },
  {
    name: 'Cloud Native Security',
    slug: 'cloud-native-security',
    description: 'Securing Kubernetes, containers, serverless, and cloud infra'
  },
  {
    name: 'Incident Readiness',
    slug: 'incident-readiness',
    description: 'How to prepare for, detect, and respond to incidents'
  },
  {
    name: 'Threat Modeling',
    slug: 'threat-modeling',
    description: 'Simple and fast ways to reason about risk and system design'
  },
  {
    name: 'Templates & Playbooks',
    slug: 'templates-playbooks',
    description: 'Copy-paste-ready resources to move fast and securely'
  },
  {
    name: 'Identity & Access',
    slug: 'identity-access',
    description: 'Managing identity, permissions, and Zero Trust in practice'
  },
  {
    name: 'AI & LLM Security',
    slug: 'ai-llm-security',
    description: 'Securing apps built with or exposed to AI/LLMs'
  }
];

// Helper function to get category by slug
export function getTagBySlug(slug: string): Tag | undefined {
  return tags.find(tag => tag.slug === slug);
}

// REVIEW: Update these tag values to be used by playbooks
