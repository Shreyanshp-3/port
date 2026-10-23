import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer.jsx'
import Reveal from '../components/Reveal.jsx'
import DesignExhibit from '../components/exhibits/DesignExhibit.jsx'
import DevelopmentExhibit from '../components/exhibits/DevelopmentExhibit.jsx'
import AIExhibit from '../components/exhibits/AIExhibit.jsx'
import { getFeaturedProjects } from '../data/projects.js'
import { site } from '../data/site.js'

const practices = [
  {
    no: '01',
    name: 'Design',
    to: '/design',
    copy: 'Interfaces, product design, and the hierarchy that makes a surface readable before it is made clever.',
    Exhibit: DesignExhibit,
  },
  {
    no: '02',
    name: 'Development',
    to: '/development',
    copy: 'Full-stack systems — interface, API, and data — built to hold the idea once it has to run.',
    Exhibit: DevelopmentExhibit,
  },
  {
    no: '03',
    name: 'AI',
    to: '/ai',
    copy: 'Retrieval, reasoning, and agents used as a product layer, applied where they change the outcome.',
    Exhibit: AIExhibit,
  },
]

export default function Home() {
  const featured = getFeaturedProjects().slice(0, 3)

  return (
    <main className="home">
      <PageContainer>
      <section className="intro" aria-label="Introduction">
        <Reveal>
          <p className="intro-kicker">Index 2026 — Design × Development × AI</p>
        </Reveal>

        <h1 className="intro-name">
          <Reveal>
            <span>Shreyansh</span>
          </Reveal>
          <Reveal delay={0.08}>
            <span>Patil</span>
          </Reveal>
        </h1>

        <Reveal delay={0.12}>
          <p className="intro-role">{site.role}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="intro-statement">
            I design interfaces, build the systems behind them, and teach those systems to
            reason — as one practice, not three unrelated jobs.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="intro-actions">
            <a href="#practices" className="text-link">
              Explore the practice ↓
            </a>
            <Link to="/contact" className="text-link text-link--accent">
              Start a conversation
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="practices" className="practices" aria-label="Practices">
        <Reveal>
          <h2 className="section-title">Three practices, one process.</h2>
        </Reveal>

        <div className="practice-grid">
          {practices.map((practice, index) => (
            <Reveal key={practice.name} delay={index * 0.08} className="practice-panel">
              <div className="practice-panel-head">
                <span className="practice-panel-no">{practice.no}</span>
                <h3>{practice.name}</h3>
              </div>
              <p>{practice.copy}</p>
              <practice.Exhibit />
              <Link to={practice.to} className="text-link">
                Open {practice.name.toLowerCase()} index →
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="work" aria-label="Selected work">
        <div className="section-heading-row">
          <Reveal>
            <h2>Selected work</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p>A short list, not a wall of thumbnails.</p>
          </Reveal>
        </div>

        <ol className="work-list">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06} as="li" className="work-row">
              <span className="work-row-no">{String(index + 1).padStart(2, '0')}</span>
              <Link to={`/${project.category}/projects/${project.slug}`} className="work-row-main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </Link>
              <span className="work-row-practice">{project.practice}</span>
              <span className="work-row-arrow" aria-hidden="true">
                →
              </span>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="about-teaser" aria-label="About">
        <Reveal>
          <p>
            I work across design, development, and AI engineering — usually inside the same
            product, where the interface, the system, and the intelligence behind it are
            designed together.
          </p>
          <Link to="/about" className="text-link">
            More about me →
          </Link>
        </Reveal>
      </section>

      <section className="contact-teaser" aria-label="Contact">
        <Reveal>
          <h2>Let&rsquo;s build something considered.</h2>
          <Link to="/contact" className="text-link text-link--accent">
            Get in touch →
          </Link>
        </Reveal>
      </section>
      </PageContainer>
    </main>
  )
}
