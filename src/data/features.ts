import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
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

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Zap,
                title: 'Automate Intentionally',
                description: 'GitOps isn\'t magic. It\'s YAML, duct tape, and discipline. But done right? It\'s a force multiplier'
            },
            {
                icon: Shield,
                title: 'Policy with Purpose',
                description: 'Write fewer rules - make them count'
            },
            {
                icon: TabletSmartphone,
                title: 'Lead Like a CISO (Even if You\'re Not)',
                description: 'Security is influence. Connect risk to reality.'
            },
            {
                icon: Smile,
                title: 'Secure the Culture',
                description: 'Tools change. Culture Scales.'
            },
            {
                icon: Type,
                title: 'Document Like a Developer, Think Like a Leader',
                description: 'Writing things down isn\'t just for audits. Clarity beat memory and Docs prevent chaos.'
            },
            {
                icon: CodeXml,
                title: 'Don\'t Buy Tools - Build Context',
                description: 'You can’t outsource understanding. Understand your systems, your threats, and your limits. Strategy beats spend.'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
