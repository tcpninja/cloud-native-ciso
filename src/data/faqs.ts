export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
  main: {
    id: 'main',
    faqs: [
      {
        question: "What is Cloud Native CISO?",
        answer: "Cloud Native CISO is a personal, public journey to make security practical for fast-moving teams. It’s a mix of blog posts, tools, frameworks, and lessons from real-world experience helping startups get security right early."
      },
      {
        question: "Who is this site for?",
        answer: "It’s built for startup founders, staff engineers, technical leaders, and aspiring CISOs who want to build security in from day one—without enterprise complexity or vendor FUD."
      },
      {
        question: "How often do you publish new content?",
        answer: "Expect a mix of deep dives, templates, and tooling rundowns published every 1–2 weeks. If you're following on GitHub or RSS, you'll get the latest drops first."
      },
      {
        question: "Can I reuse or contribute to the resources here?",
        answer: "Absolutely. Everything I publish is meant to be actionable and shareable. Contributions, corrections, and feedback are always welcome via GitHub or direct contact."
      },
      {
        question: "Do you offer consulting or project help?",
        answer: "Yes — I occasionally work with early-stage teams to bootstrap security programs or validate critical decisions. If you're interested, reach out" // REVIEW: this to link to page
      }
    ]
  }
};
