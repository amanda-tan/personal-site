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
      kind: "Learning platform",
      status: "Growing",
      description:
        "Byte-sized lessons that make AI and cloud computing inviting for young learners—and useful for the adults learning alongside them.",
      tags: ["Learning design", "AI literacy", "Cloud"],
      href: "https://chloelabs.github.io/chloelabs/",
      linkLabel: "Visit ChloeLabs",
    },
    {
      title: "The Clarity Kit",
      kind: "Open experiment",
      status: "In development",
      description:
        "A small collection of prompts and visual patterns for explaining technical systems without flattening what makes them interesting.",
      tags: ["Writing", "Sensemaking", "Tools"],
    },
    {
      title: "Tiny Cloud Lab",
      kind: "Prototype",
      status: "In development",
      description:
        "A browser-based playground where curious beginners can understand cloud architecture by arranging friendly, tangible building blocks.",
      tags: ["Prototype", "Cloud", "Play"],
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
