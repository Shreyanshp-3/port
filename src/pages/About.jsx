import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { site } from '../data/site.js'

export default function About() {
  return (
    <main className="page page-about">
      <PageContainer>
        <PageHeader kicker="About" title={site.name} />

        <div className="about-grid">
          <div className="about-lead">
            <p>
              I work across design, development, and AI engineering — usually inside the same
              product. The interface, the system behind it, and the intelligence inside it are
              designed together, not handed off as separate layers.
            </p>
            <p>
              That is the whole point of this site. Design is how the experience is structured.
              Development is how it holds. AI is what it can retrieve, reason about, and do
              when a language model or a learned system actually earns its place.
            </p>
          </div>

          <aside className="about-aside">
            <p className="page-kicker">Now</p>
            <p>{site.location}</p>
            <p>{site.role}</p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </aside>
        </div>

        <section className="about-practices" aria-label="Practices">
          <Link to="/design" className="about-practice">
            <span>01</span>
            <strong>Design</strong>
            <p>Product UI, interaction, and systems with a clear hierarchy.</p>
          </Link>
          <Link to="/development" className="about-practice">
            <span>02</span>
            <strong>Development</strong>
            <p>Full-stack products in React, Node, Python, and the data layer they need.</p>
          </Link>
          <Link to="/ai" className="about-practice">
            <span>03</span>
            <strong>AI</strong>
            <p>LLM applications, retrieval, agents — used where they change the product.</p>
          </Link>
        </section>
      </PageContainer>
    </main>
  )
}
