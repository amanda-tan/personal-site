import Image from "next/image";
import { siteContent } from "./site-content";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const { profile, projects, notes, now } = siteContent;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Amanda Tan, home">
          <span className="brand-mark">at</span>
          <span>Amanda Tan</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#notes">Notes</a>
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
            <a className="text-link" href="#notes">
              Read my field notes <Arrow />
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
          <span>AI &amp; cloud</span><b>✦</b>
          <span>Learning design</span><b>✦</b>
          <span>Clear writing</span><b>✦</b>
          <span>Playful experiments</span><b>✦</b>
        </div>
      </section>

      <section className="section-shell section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Things I’m building and tending.</h2>
          <p>
            A mix of educational products, practical experiments, and systems
            that help people become more confident with technology.
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
                  src="/images/icon-projects.png"
                  alt=""
                  width={380}
                  height={380}
                />
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list" aria-label={`${project.title} topics`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <a href={project.href}>
                {project.linkLabel} <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="notes-section" id="notes">
        <div className="section-shell notes-layout">
          <div className="notes-intro">
            <Image
              src="/images/icon-notes.png"
              alt=""
              width={220}
              height={220}
            />
            <p className="eyebrow">Field notes</p>
            <h2>Learning in public.</h2>
            <p>
              Short, useful observations about technology, teaching, and the
              quieter craft of making difficult things understandable.
            </p>
          </div>
          <div className="note-list">
            {notes.map((note) => (
              <article key={note.title}>
                <div>
                  <span>{note.category}</span>
                  <span>{note.readTime}</span>
                </div>
                <h3>{note.title}</h3>
                <p>{note.summary}</p>
                <a href={note.href} aria-label={`Read ${note.title}`}>
                  Read note <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section about-grid" id="about">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>Curiosity is my favorite working method.</h2>
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="assumption-note">
            This biography is a thoughtful first draft based on the work shared
            in this conversation. Replace it in <code>app/site-content.ts</code>.
          </p>
        </div>
        <aside className="now-card">
          <Image src="/images/icon-now.png" alt="" width={200} height={200} />
          <p className="eyebrow">Now / {now.updated}</p>
          <h3>What has my attention</h3>
          <ul>
            {now.items.map((item) => <li key={item}>{item}</li>)}
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
            <a href={link.href} key={link.label}>{link.label} <Arrow /></a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Amanda Tan</p>
      </footer>
    </main>
  );
}
