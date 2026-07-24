export const siteContent = {
  profile: {
    email: "hello@example.com",
    intro:
      "I explore how AI, cloud computing, and thoughtful learning experiences can give more people the confidence to build. I like ideas that are rigorous underneath and welcoming on the surface.",
    about: [
      "I’m Amanda, a technology builder and educator interested in the space between a powerful idea and the moment it finally clicks for someone.",
      "My work blends systems thinking, clear communication, and playful experimentation. ChloeLabs is one expression of that: a place where young learners can meet big technical ideas in small, approachable pieces.",
      "Away from a screen, I’m usually collecting questions, refining a half-finished explanation, or noticing how good design makes unfamiliar things feel a little more possible.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/chloelabs" },
      { label: "LinkedIn", href: "#" },
      { label: "Email", href: "mailto:hello@example.com" },
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
      status: "Draft",
      description:
        "A small collection of prompts and visual patterns for explaining technical systems without flattening what makes them interesting.",
      tags: ["Writing", "Sensemaking", "Tools"],
      href: "#notes",
      linkLabel: "See the thinking",
    },
    {
      title: "Tiny Cloud Lab",
      kind: "Prototype",
      status: "Exploring",
      description:
        "A browser-based playground where curious beginners can understand cloud architecture by arranging friendly, tangible building blocks.",
      tags: ["Prototype", "Cloud", "Play"],
      href: "mailto:hello@example.com?subject=Tiny%20Cloud%20Lab",
      linkLabel: "Ask me about it",
    },
  ],
  notes: [
    {
      category: "Teaching",
      readTime: "4 min",
      title: "The difference between simple and simplistic",
      summary:
        "Good explanations preserve the shape of an idea while lowering the step needed to enter it.",
      href: "#",
    },
    {
      category: "AI literacy",
      readTime: "6 min",
      title: "What I want a young learner to know about AI",
      summary:
        "Not a vocabulary list—a durable set of intuitions about data, patterns, judgment, and agency.",
      href: "#",
    },
    {
      category: "Building",
      readTime: "3 min",
      title: "Small experiments are a form of strategy",
      summary:
        "A working sketch often reveals more than another week spent perfecting the plan.",
      href: "#",
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
