import { ShieldCheck, Sparkles, Lightbulb, CodeXml } from 'lucide-astro';

export interface Principle {
  title: string;
  description: string;
  quote?: string;
  icon?: typeof ShieldCheck;
}

export const principles: Principle[] = [
  {
    title: "Start with Strategy",
    description: "Security without context is noise. Begin with your goals, architecture, and threats — not tools.",
    quote: "Strategy beats checklist every time.",
    icon: Lightbulb,
  },
  {
    title: "Build Security into the Dev Loop",
    description: "Your CI/CD pipeline is your first line of defense. Security should flow with code, not against it.",
    quote: "Make the secure way the easy way.",
    icon: CodeXml,
  },
  {
    title: "Earn Trust by Default",
    description: "Security is a value proposition — not just a technical feature.",
    icon: ShieldCheck,
  },
  {
    title: "Simplify the Stack",
    description: "Reduce complexity, reduce attack surface. Less truly is more in cloud-native systems.",
    icon: Sparkles,
  },
];
