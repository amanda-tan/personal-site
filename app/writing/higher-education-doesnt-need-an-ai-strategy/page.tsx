import type { Metadata } from "next";
import { siteContent } from "../../site-content";

const title = "Higher Education Doesn’t Need an AI Strategy";
const description =
  "AI adoption does not begin with procurement, policy, or training. It begins with the moment someone stops thinking about the technology and starts imagining what it could make possible in their own work.";
const canonical =
  "https://amanda-tan.io/writing/higher-education-doesnt-need-an-ai-strategy";

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
  "There is a particular moment that I have started looking for whenever I teach.",
  "It almost never happens while I am standing at the front of the room. It does not happen when I am explaining a notebook or walking through a slide deck, and it certainly is not something I can schedule into an agenda. If anything, it tends to happen after the teaching is over, when people are closing their laptops, gathering their things, and beginning to think about whatever comes next.",
  "Someone will pause, turn around, and ask a question that was not part of the workshop.",
  "“Could I use this to compare interview transcripts?”",
  "Or perhaps they will mention a collection of satellite imagery that has been sitting untouched on a server because no one has had the time or computing resources to work through it. Sometimes it is grant writing. Sometimes it is microscopy data. Sometimes it is a research problem I know almost nothing about. The examples change, but the feeling is always recognizable.",
  "I call it the Aha Moment.",
  "It is not simply the moment when someone understands the technology. It is the moment when they stop thinking about the technology altogether and begin thinking about their own work.",
  "That distinction has become more important to me than almost anything else.",
  "Over the past several years, I have found myself in what feels like an endless sequence of conversations about AI strategy. Universities are trying to decide whether they need enterprise licenses, governance committees, institutional policies, approved models, approved vendors, faculty guidance, student guidance, research guidance, and perhaps another task force to coordinate all the other task forces. Every conversation feels urgent because AI itself feels urgent.",
  "And yet I often leave these meetings with the same uneasy feeling that we have begun in the middle of the story.",
  "None of those decisions are unimportant. Most of them are necessary. Institutions need policies, infrastructure, security, support, and some shared understanding of what responsible use looks like. But I have started wondering whether all of those conversations are orbiting a more fundamental question that rarely gets asked.",
  "How does an institution become the sort of place where new technology can actually take root?",
  "Not only this technology, but the next one, and whatever comes after that.",
  "When I first began working in cloud computing, people asked remarkably similar questions. They were not talking about language models then. They were talking about virtual machines, storage, scalability, migration, cost, and whether research data should ever leave campus. Before that, the conversations were about cyberinfrastructure and high-performance computing.",
  "The vocabulary changes much faster than the pattern.",
  "Every generation of technology arrives carrying the promise that this time everything will be different, and every generation eventually runs into the same uncomfortable truth: technology rarely fails because the technology itself was not capable enough. It fails because people never found a meaningful place for it in the rhythm of their work.",
  "This is why I do not think adoption begins with procurement, policy, or even training. I think it begins with that small, easily overlooked moment when someone catches themselves imagining a different way of solving a problem they have been living with for years.",
  "The Aha Moment.",
  "One of the peculiar things about teaching technology is that the example you prepare is almost never the thing that ultimately matters to the learner. I might design an exercise around a tidy dataset, a carefully scoped research question, or a notebook that behaves exactly as expected because I have already debugged it seventeen times. The learner is rarely interested in the example for very long. What they are really doing is testing the edges of it against their own life.",
  "Could this work with my data?",
  "Could this save me time?",
  "Could this let my students spend less time producing something routine and more time thinking about the difficult part?",
  "Could this help me ask a question I have not been able to ask before?",
  "When those questions begin, the technology has crossed an important boundary. It is no longer an abstract institutional initiative. It has become personal enough to be useful.",
  "I sometimes wonder whether universities spend so much time trying to remove uncertainty from AI that they accidentally remove curiosity as well.",
  "Curiosity is inefficient. It wanders away from the agenda. It raises questions that nobody budgeted time to answer. It rarely fits neatly into a quarterly report, and it is almost impossible to capture in an attendance number. But curiosity is also where every meaningful change I have witnessed has begun.",
  "Nobody has ever left one of my workshops transformed because I successfully convinced them that AI was important. They left because, somewhere during the day, the technology quietly disappeared and all they could see was the problem they had wanted to solve all along.",
  "That is the Aha Moment.",
  "It is not the end of adoption. It is the beginning.",
  "This is also why I have become increasingly skeptical of the way institutions measure AI progress. We count workshops, licenses, attendees, pilots, committees, and policies because those things are visible and relatively easy to report. They tell us that activity occurred. They do not necessarily tell us whether capability grew.",
  "A university can distribute thousands of licenses without changing how anyone works. It can run dozens of workshops without giving participants the support they need once they return to their offices and encounter their own messy data, institutional constraints, and very specific questions. It can publish an excellent policy that clarifies what people may not do while doing very little to help them understand what they should do.",
  "The more interesting questions are harder to answer.",
  "Did anyone begin asking better questions?",
  "Did a researcher change part of a workflow?",
  "Did a faculty member redesign an assignment because a previously routine task no longer needed to consume most of the student’s time?",
  "Did someone discover that AI was the wrong tool for the problem and understand why?",
  "Did an Aha Moment lead to a second experiment, a conversation with a colleague, a reusable notebook, or a new way of working?",
  "Those are signs that an institution is developing judgment rather than merely accumulating access.",
  "I think this is why the phrase “AI adoption” has started to bother me. It sounds like a destination, as though one day an institution will complete the necessary checklist and discover that it has successfully adopted artificial intelligence. Universities do not work that way, and neither does technology.",
  "Institutions are always learning how to absorb change. AI happens to be the current expression of that challenge.",
  "What they need is not a strategy that depends on today’s models, interfaces, or vendors. Those will change, probably faster than most strategic planning cycles can accommodate. What they need is the ability to evaluate unfamiliar tools, create enough room for useful experimentation, support people after the initial training ends, and turn individual insight into shared institutional capability.",
  "Perhaps that is what an adoptable AI framework should really describe.",
  "Not a sequence of products to purchase or milestones to complete, but the conditions that allow Aha Moments to happen often enough, across enough parts of an institution, that they begin to accumulate.",
  "One person sees a new possibility in a workshop. They test it against a real problem. They get stuck and find someone who can help. The experiment becomes a workflow. The workflow becomes an example someone else can adapt. The example becomes part of a curriculum, a community of practice, or a shared technical resource. What began as a private moment of recognition slowly becomes something the institution knows how to support.",
  "That process is less dramatic than announcing an AI strategy, but I suspect it is much closer to how lasting change actually happens.",
  "I do not know exactly what higher education will look like in ten years, and I am wary of anyone who claims they do. I do know that we will still be having conversations about technologies that do not exist today, and that many of the questions will sound strangely familiar.",
  "If we keep organizing those conversations around products, we will keep rebuilding our strategies from scratch.",
  "If we organize them around curiosity, judgment, learning, and the institutional conditions that turn an Aha Moment into sustained practice, we will already have much of the foundation we need.",
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
          <time dateTime="2026-07-27">July 27, 2026</time>
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
