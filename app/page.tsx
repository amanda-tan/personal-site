import Image from "next/image";
import { siteContent } from "./site-content";

const Arrow = () => <span aria-hidden="true">↗</span>;

const ProfileIcon = ({
  name,
}: {
  name: "briefcase" | "book" | "workflow" | "cooking";
}) => {
  const paths = {
    briefcase: (
      <>
        <path d="M4 8.5h16v10H4z" />
        <path d="M9 8.5V6h6v2.5M4 12h16M10 12v2h4v-2" />
      </>
    ),
    book: (
      <>
        <path d="M4.5 5.5h5A2.5 2.5 0 0 1 12 8v11a2.5 2.5 0 0 0-2.5-2.5h-5z" />
        <path d="M19.5 5.5h-5A2.5 2.5 0 0 0 12 8v11a2.5 2.5 0 0 1 2.5-2.5h5z" />
      </>
    ),
    workflow: (
      <>
        <rect x="4" y="4" width="6" height="5" rx="1" />
        <rect x="14" y="15" width="6" height="5" rx="1" />
        <path d="M10 6.5h3a4 4 0 0 1 4 4V15M14 17.5h-3a4 4 0 0 1-4-4V9" />
      </>
    ),
    cooking: (
      <>
        <path d="M5 10h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zM3 10h18" />
        <path d="M8 7c0-1 1-1.5 1-2.5M12 7c0-1 1-1.5 1-2.5M16 7c0-1 1-1.5 1-2.5" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      >
        {paths[name]}
      </g>
    </svg>
  );
};

export default function Home() {
  const { profile, projects, now } = siteContent;
  const projectSymbols = ["◎", "↗"];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Amanda Tan, home">
          <span className="brand-mark">at</span>
          <span>Amanda Tan</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
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

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI ENABLEMENT · STRATEGY · EDUCATION</p>
          <h1>
            Making complex
            <br />
            technology feel <em>possible.</em>
          </h1>
          <p className="hero-deck">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <figure className="hero-art">
          <Image
            src="/images/hero-studio.png"
            alt="An illustrated desk where clouds, circuits, plants, and ideas grow from a laptop and notebook"
            width={1536}
            height={1024}
            priority
          />
          <figcaption>Ideas become useful when people can reach them.</figcaption>
        </figure>
      </section>

      <section className="ticker" aria-label="Areas of practice">
        <div>
          <span>AI Enablement</span><b>✦</b>
          <span>Learning Design</span><b>✦</b>
          <span>Strategy</span><b>✦</b>
          <span>Open Source</span><b>✦</b>
        </div>
      </section>

      <section className="section-shell section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Work I’m building and leading.</h2>
          <p>
            Practical AI products, technical learning experiences, national
            programs, and advisory work designed to help people and
            organizations use emerging technology with confidence.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card card-${index + 1}${
                index === 1 ? " agentic-card" : ""
              }${index < 2 ? " featured-project-card" : ""}`}
              key={project.title}
            >
              <div className="card-topline">
                <span>{project.kind}</span>
                <span>{project.status}</span>
              </div>
              {index === 0 && (
                <Image
                  className="card-illustration"
                  src="/images/icon-projects.png"
                  alt="ChloeLabs educational project illustration"
                  width={380}
                  height={380}
                />
              )}
              {index === 1 && (
                <Image
                  className="card-illustration"
                  src="/images/agentic-ai-workshop.svg"
                  alt="An open notebook connected to AI tool nodes in a workflow"
                  width={380}
                  height={380}
                />
              )}
              {index > 1 && (
                <div className="card-symbol" aria-hidden="true">
                  {projectSymbols[index - 2]}
                </div>
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list" aria-label={`${project.title} topics`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              {"href" in project && (
                <a
                  className={index < 2 ? "project-cta" : undefined}
                  href={project.href}
                  {...(project.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {project.linkLabel}{" "}
                  {index < 2 ? <span aria-hidden="true">→</span> : <Arrow />}
                </a>
              )}
              <footer className="project-focus">
                <h4>Current Focus</h4>
                <ul>
                  {project.focus.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </footer>
            </article>
          ))}
        </div>
        <aside className="work-note">
          <h3>How I work</h3>
          <p>
            I believe successful AI adoption is less about choosing the newest
            model and more about helping people build confidence, practical
            skills, and sustainable ways of working.
          </p>
        </aside>
      </section>

      <section className="consulting-section">
        <div className="section-shell section consulting-inner">
          <div className="consulting-intro">
            <p className="eyebrow">ADVISORY</p>
            <h2>Helping organizations adopt AI with confidence.</h2>
            <p>
              I partner with universities, research organizations, nonprofits,
              and technical teams that want to move beyond AI experimentation
              toward practical implementation. My work combines technical
              strategy, education, and product thinking to help people build
              lasting capability.
            </p>
          </div>
          <div>
            <div className="service-list">
              <article>
                <h3>AI Strategy</h3>
                <p>
                  Develop practical AI roadmaps, identify high-value use cases,
                  and create realistic adoption plans aligned with
                  organizational goals.
                </p>
              </article>
              <article>
                <h3>Technical Enablement</h3>
                <p>
                  Design workshops, technical curriculum, and hands-on learning
                  experiences that build confidence with AI and cloud
                  technologies.
                </p>
              </article>
              <article>
                <h3>Agentic AI</h3>
                <p>
                  Design educational workflows, prototype agentic systems, and
                  help teams understand where agents create real value.
                </p>
              </article>
              <article>
                <h3>Educational Products</h3>
                <p>
                  Build learning platforms, open-source resources, and technical
                  content that make complex technology approachable.
                </p>
              </article>
            </div>
            <div className="consulting-actions">
              <a
                className="button button-primary"
                href="https://calendly.com/atlehr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a conversation <Arrow />
              </a>
              <a
                className="button consulting-secondary"
                href={`mailto:${profile.email}`}
              >
                Email me <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="writing-section" id="writing">
        <div className="section-shell section">
          <div className="section-heading">
            <p className="eyebrow">Featured Writing</p>
            <h2>Featured Writing</h2>
            <p>
              Thoughts on AI, learning design, and building practical
              technology.
            </p>
          </div>
          <article className="writing-card">
            <p className="writing-date">July 26, 2026</p>
            <h3>The Most Dangerous Person in AI Isn’t the Beginner</h3>
            <p>
              AI doesn’t have a shortage of experts. It has a shortage of
              curiosity. Why asking better questions matters more than learning
              the latest AI vocabulary.
            </p>
            <a href="/writing/the-most-dangerous-person-in-ai-isnt-the-beginner/">
              Read article →
            </a>
          </article>
          <article className="writing-card">
            <p className="writing-date">July 27, 2026</p>
            <h3>Higher Education Doesn’t Need an AI Strategy</h3>
            <p>
              AI adoption does not begin with procurement, policy, or training.
              It begins with the moment someone stops thinking about the
              technology and starts imagining what it could make possible in
              their own work.
            </p>
            <a href="/writing/higher-education-doesnt-need-an-ai-strategy/">
              Read article →
            </a>
          </article>
        </div>
      </section>

      <section className="section-shell section about-grid" id="about">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>Making complex technology easier to understand, use, and trust.</h2>
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside className="now-card">
          <Image
            src="/images/tan-headshot-dec2025.jpeg"
            alt="Headshot of Amanda Tan"
            width={200}
            height={200}
          />
          <p className="eyebrow">{now.updated}</p>
          <h3>{now.title}</h3>
          <ul className="now-list">
            {now.items.map((item) => (
              <li key={item.label}>
                <span className="now-icon" aria-hidden="true">
                  <ProfileIcon name={item.icon} />
                </span>
                <span className="now-copy">
                  <strong>{item.label}</strong>
                  <span>{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="contact-section">
        <div className="section-shell contact-inner">
          <p className="eyebrow">A good place to begin</p>
          <h2>Have a thoughtful problem worth untangling?</h2>
          <a className="button button-light" href={`mailto:${profile.email}`}>
            Write to me <Arrow />
          </a>
        </div>
      </section>

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
                ? { target: "_blank", rel: "noreferrer" }
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
