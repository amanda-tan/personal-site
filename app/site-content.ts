export const siteContent = {
  profile: {
    email: "amandach.tan@gmail.com",
    intro:
      "I help researchers, educators, and organizations turn AI into practical capability through strategy, technical education, and thoughtfully designed learning experiences.",
    about: [
      "I lead national AI enablement programs for the Minority Serving Cyberinfrastructure Consortium (MS-CC) at Internet2, helping researchers, educators, and institutions turn emerging technologies into something people can actually use.",
      "My work lives at the intersection of artificial intelligence, cloud computing, research, and learning design. Over the past decade, I’ve led federally funded research and education initiatives, designed technical curriculum, and built hands-on programs that help people move from curiosity to confidence. I enjoy making complex systems approachable without oversimplifying the ideas behind them.",
      "That same philosophy is what led me to start ChloeLabs. Inspired by my 10-year-old daughter, it’s a side project exploring how AI, cloud computing, and computational thinking can be taught through small, hands-on experiments. It’s an opportunity to rethink how we introduce technical concepts to young learners and, hopefully, help more girls see themselves building the future of technology.",
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
      focus: [
        "Expanding the lesson library",
        "Building interactive activities",
        "Developing educator resources",
      ],
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
      href: "https://github.com/ms-cc-org/AGENTIC-AI-Workshop",
      linkLabel: "Explore Repository",
      focus: [
        "Notebook development",
        "Workshop curriculum",
        "Learner testing",
      ],
    },
    {
      title: "AI Enablement at Scale",
      kind: "Program leadership",
      status: "Ongoing",
      description:
        "National programs, workshops, and technical resources that help researchers and institutions build practical capability in AI and advanced computing.",
      tags: ["Strategy", "Research", "Education"],
      focus: [
        "Regional workshops",
        "Technical curriculum",
        "Community building",
      ],
    },
    {
      title: "AI Strategy & Enablement",
      kind: "Advisory",
      status: "Available",
      description:
        "Advisory support for universities, research organizations, nonprofits, and technical teams developing practical AI adoption strategies, learning programs, and agentic workflows.",
      tags: ["AI strategy", "Enablement", "Workshops"],
      focus: [
        "Advisory engagements",
        "Executive workshops",
        "AI adoption planning",
      ],
      href:
        "mailto:amandach.tan@gmail.com?subject=AI%20Strategy%20%26%20Enablement%20Inquiry",
      linkLabel: "Get in touch",
    },
  ],
  now: {
    updated: "Currently",
    title: "Right now",
    items: [
      {
        label: "Work",
        text: "Leading national AI enablement programs at MS-CC.",
        icon: "briefcase",
      },
      {
        label: "Building",
        text: "Growing ChloeLabs into a practical learning library for AI and cloud computing.",
        icon: "book",
      },
      {
        label: "Developing",
        text: "Open-source agentic AI curriculum for researchers and educators.",
        icon: "workflow",
      },
      {
        label: "Reading",
        text: "“We Do Not Part” by Han Kang.",
        icon: "book",
      },
      {
        label: "Cooking",
        text: "Via Carota’s Agnello in Gremolata.",
        icon: "cooking",
      },
    ],
  },
} as const;
