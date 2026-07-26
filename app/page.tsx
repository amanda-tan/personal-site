import Image from "next/image";
import { siteContent } from "./site-content";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const { profile, projects, now } = siteContent;
  const basePath = process.env.BASE_PATH ?? "";
  const nowIcons = ["▤", ">_", "✦"];
  const projectSymbols = [">_", "◎", "↗"];

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
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Say hello <Arrow />
          </a>
        </nav>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Builder · Educator · Curious human</p>
          <h1>
            Making complex
            <br />
            technology feel <em>possible.</em>
          </h1>
          <p className="hero-deck">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <figure className="hero-art">
          <Image
            src={`${basePath}/images/hero-studio.png`}
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
          <span>AI &amp; cloud</span><b>✦</b>
          <span>Learning design</span><b>✦</b>
          <span>Clear writing</span><b>✦</b>
          <span>Playful experiments</span><b>✦</b>
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
            <article className={`project-card card-${index + 1}`} key={project.title}>
              <div className="card-topline">
                <span>{project.kind}</span>
                <span>{project.status}</span>
              </div>
              {index === 0 && (
                <Image
                  className="card-illustration"
                  src={`${basePath}/images/icon-projects.png`}
                  alt=""
                  width={380}
                  height={380}
                />
              )}
              {index > 0 && (
                <div className="card-symbol" aria-hidden="true">
                  {projectSymbols[index - 1]}
                </div>
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list" aria-label={`${project.title} topics`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              {"href" in project && (
                <a href={project.href}>
                  {project.linkLabel} <Arrow />
                </a>
              )}
            </article>
          ))}
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
            src={`${basePath}/images/tan-headshot-dec2025.jpeg`}
            alt="Headshot of Amanda Tan"
            width={200}
            height={200}
          />
          <p className="eyebrow">{now.updated}</p>
          <h3>{now.title}</h3>
          <ul className="now-list">
            {now.items.map((item, index) => (
              <li key={item}>
                <span className="now-icon" aria-hidden="true">
                  {nowIcons[index]}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="now-location">
            <span className="now-icon" aria-hidden="true">⌖</span>
            <span>Seattle, WA</span>
          </div>
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
            <a href={link.href} key={link.label}>{link.label} <Arrow /></a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Amanda Tan</p>
      </footer>
    </main>
  );
}
