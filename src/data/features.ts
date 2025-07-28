import {
  Zap,
  Shield,
  Heart,
  Code2,
  Users,
  Compass,
  ServerCog,
  Workflow,
} from 'lucide-astro';

type LucideIcon = typeof Zap;

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeatureList {
  id: string;
  features: Feature[];
}

export const featureLists: Record<string, FeatureList> = {
  main: {
    id: 'main',
    features: [
      {
        icon: Workflow,
        title: 'Built for Builders, Not Bureaucracy',
        description:
          'Cloud Native CISO speaks your language — no security theater, just real guidance for those building real systems.',
      },
      {
        icon: ServerCog,
        title: 'Security That Ships',
        description:
          'Move fast and stay safe. We align security with your dev workflow so you can ship confidently, not fearfully.',
      },
      {
        icon: Code2,
        title: 'Developer-First, Always',
        description:
          'Security shouldn’t fight the flow. We meet you in code, pipelines, and PRs — not PowerPoints.',
      },
      {
        icon: Users,
        title: 'Secure Culture from Day One',
        description:
          'Culture scales more than tools. We help you bake security into your business DNA from the very start.',
      },
      {
        icon: Compass,
        title: 'Clarity Over Complexity',
        description:
          'You don’t need 200 controls. You need to know what matters, when, and why — and how to act on it today.',
      },
      {
        icon: Shield,
        title: 'Practical Protection, Not Perfection',
        description:
          'Risk never sleeps. But you can rest easier when your fundamentals are right, resilient, and resource-aware.',
      },
    ],
  },

  secondary: {
    id: 'secondary',
    features: [
      {
        icon: Heart,
        title: 'Founder-Focused',
        description: 'Built for the challenges of resource-constrained startups',
      },
      {
        icon: Zap,
        title: 'Signal Over Noise',
        description: 'No FUD. Just practical, actionable guidance that works',
      },
      {
        icon: Shield,
        title: 'Principled by Default',
        description: 'Secure by design. Not security theater.',
      },
    ],
  },
};
