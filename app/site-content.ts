export const siteContent = {
  profile: {
    email: "amandach.tan@gmail.com",
    intro:
      "I explore how AI, cloud computing, and thoughtful learning experiences can give more people the confidence to build. I like ideas that are rigorous underneath and welcoming on the surface.",
    about: [
      "I lead AI enablement programs and build practical tools that help people understand, adopt, and use emerging technology. My work sits at the intersection of artificial intelligence, cloud computing, research, and education.",
      "I have led national programs, developed technical curriculum, supported researchers and institutions, and built hands-on learning experiences designed to make complex systems usable. I care about work that is rigorous underneath and welcoming on the surface.",
      "I am currently developing ChloeLabs, an educational project that introduces young learners to AI, cloud computing, and computational thinking through small, approachable projects.",
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
    updated: "July 2026",
    items: [
      "Turning ChloeLabs from a promising shell into a real learning library",
      "Collecting better metaphors for AI and cloud systems",
      "Designing small, friendly ways to learn in public",
    ],
  },
} as const;
