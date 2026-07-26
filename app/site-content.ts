export const siteContent = {
  profile: {
    email: "amandach.tan@gmail.com",
    intro:
      "I explore how AI, cloud computing, and thoughtful learning experiences can give more people the confidence to build. I like ideas that are rigorous underneath and welcoming on the surface.",
    about: [
      "I lead AI enablement programs that help researchers, educators, and organizations turn emerging technology into practical capability.",
      "My work sits at the intersection of artificial intelligence, cloud computing, research, and learning design. I build programs, technical curriculum, and hands-on experiences that make complex systems usable without stripping away the rigor.",
      "I am currently building ChloeLabs, an educational project that introduces young learners to AI and cloud computing through small, approachable experiments.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/amanda-tan" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/atanlehr/" },
      { label: "Email", href: "mailto:amandach.tan@gmail.com" },
    ],
  },
  projects: [
    {
      title: "ChloeLabs",
      kind: "Educational product",
      status: "Active",
      description:
        "A learning platform that introduces young people to AI, cloud computing, and computational thinking through short, approachable projects.",
      tags: ["AI literacy", "Cloud", "Learning design"],
      href: "https://chloelabs.io",
      linkLabel: "Visit ChloeLabs",
    },
    {
      title: "Agentic AI Workshop",
      kind: "Open-source curriculum",
      status: "In development",
      description:
        "A hands-on notebook series that helps learners move from conversational AI to tool-using agents, research workflows, memory, and multi-step reasoning.",
      tags: ["Agents", "Python", "Jupyter"],
    },
    {
      title: "AI Enablement at Scale",
      kind: "Program leadership",
      status: "Ongoing",
      description:
        "National programs, workshops, and technical resources that help researchers and institutions build practical capability in AI and advanced computing.",
      tags: ["Strategy", "Research", "Education"],
    },
    {
      title: "AI Strategy & Enablement",
      kind: "Advisory",
      status: "Available",
      description:
        "Advisory support for universities, research organizations, nonprofits, and technical teams developing practical AI adoption strategies, learning programs, and agentic workflows.",
      tags: ["AI strategy", "Enablement", "Workshops"],
      href:
        "mailto:amandach.tan@gmail.com?subject=AI%20Strategy%20%26%20Enablement%20Inquiry",
      linkLabel: "Get in touch",
    },
  ],
  now: {
    updated: "Currently",
    title: "What I’m building",
    items: [
      "Growing ChloeLabs into a practical learning library",
      "Designing hands-on agentic AI curriculum",
      "Exploring better ways to teach complex systems",
    ],
  },
} as const;
