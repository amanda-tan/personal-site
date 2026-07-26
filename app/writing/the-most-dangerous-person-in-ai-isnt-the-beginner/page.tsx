import type { Metadata } from "next";
import { siteContent } from "../../site-content";

const title = "The Most Dangerous Person in AI Isn’t the Beginner";
const description =
  "AI doesn’t have a shortage of experts. It has a shortage of curiosity. Why asking better questions matters more than learning the latest AI vocabulary.";
const canonical =
  "https://amanda-tan.io/writing/the-most-dangerous-person-in-ai-isnt-the-beginner";

export const metadata: Metadata = {
  title: `${title} — Amanda Tan`,
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "article",
  },
};

const paragraphs = [
  "The most dangerous person in AI isn’t the beginner. It’s the person who learned just enough to stop asking questions.",
  "I keep coming back to this, mostly because AI has turned into one of those topics where everybody’s suddenly got a hot take. Every conference has an AI track now. Every company has an “AI strategy.” Half of LinkedIn woke up one day and rebranded itself “AI Transformation Leader.” Apparently that’s all it took — a few months of ChatGPT and suddenly we’re drowning in experts.",
  "What’s missing, mostly, is curiosity.",
  "I spend a lot of my time teaching — researchers, faculty, students, working professionals, all kinds of people. And the ones who actually get better, fastest, are almost never the ones who walk in already convinced they’ve got it figured out. They’re the ones who’ll just say it plainly: “I don’t understand why this works.”",
  "Honestly, that’s a far more interesting question than “which model should we use?”",
  "Somewhere along the way, this industry started rewarding vocabulary over understanding. People throw around agents, RAG, MCP, embeddings, reasoning models, context engineering, tool use, orchestration — and look, some of that terminology is genuinely useful. Most of it points at real ideas. But I’ve started noticing you can sit through an entire conversation built entirely out of those words, and nobody in the room actually has to prove they understand what’s happening underneath.",
  "None of this is unique to AI, to be fair. Every wave of technology goes through it. Cloud computing had its version. Big data had its version. Blockchain basically built an entire economy on top of vocabulary alone. The words become a shortcut — if everyone nods along when you say “multi-agent orchestration framework,” nobody has to admit they’re not totally sure what problem you’re even solving.",
  "I’ll be honest, I think I’ve gotten more skeptical as I’ve gotten older. Not because I think AI is overhyped — if anything, I think it’s one of the more important things I’ve ever worked on. But important technology deserves better questions than the ones we’re asking.",
  "Not “how do we use agents” — what problem are we actually trying to solve?",
  "Not “should we fine-tune” — why isn’t the base model good enough?",
  "Not “how do we roll this out” — what changes for the people who have to use it every single day?",
  "The best engineers I know tend to ask questions that sound almost too simple to be worth asking out loud. Why? What happens if we don’t do this? How would we even know if it failed? And somehow those plain little questions cut through more complexity than any amount of jargon ever does.",
  "Maybe that’s actually what expertise looks like — not piling on more terminology, but being willing to strip it back down until only the important part is left standing.",
  "That’s the bar I try to hold myself to now. If I can’t explain something clearly enough that another smart person walks away with real intuition for it, I probably don’t understand it as well as I think I do.",
  "AI doesn’t need more experts. It needs more people who are still willing to be curious.",
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function ArticlePage() {
  const { profile } = siteContent;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Amanda Tan, home">
          <span className="brand-mark">at</span>
          <span>Amanda Tan</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/#work">Work</a>
          <a href="/#about">About</a>
          <a
            href="/Amanda_Tan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Say hello <Arrow />
          </a>
        </nav>
      </header>

      <article className="article-shell section-shell">
        <a className="article-back" href="/#writing">
          ← Back to Writing
        </a>
        <header className="article-header">
          <time dateTime="2026-07-26">July 26, 2026</time>
          <h1>{title}</h1>
        </header>
        <div className="article-body">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <footer className="site-footer section-shell">
        <div>
          <span className="brand-mark">at</span>
          <p>Built with curiosity, clarity, and a little apricot.</p>
        </div>
        <div className="footer-links">
          {profile.links.map((link) => (
            <a
              href={link.href}
              key={link.label}
              {...(link.href.startsWith("http")
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
            >
              {link.label} <Arrow />
            </a>
          ))}
          <a
            href="/Amanda_Tan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé <Arrow />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Amanda Tan</p>
      </footer>
    </main>
  );
}
