import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import AIExhibit from '../components/exhibits/AIExhibit.jsx'
import ProjectIndex from './ProjectIndex.jsx'
import { getProjectsByCategory } from '../data/projects.js'

const areas = [
  { label: 'Machine learning', note: 'Models as part of a product, not a demo notebook.' },
  { label: 'Generative AI', note: 'Language models with a job to do inside an interface.' },
  { label: 'LLM applications', note: 'Prompts, tools, and evaluation around a real task.' },
  { label: 'Retrieval-augmented generation', note: 'Answer from a corpus, not from memory.' },
  { label: 'Embeddings & vector search', note: 'Chunk, embed, retrieve — then generate.' },
  { label: 'AI agents', note: 'Retrieve, reason, act. Repeat only when the task needs it.' },
  {
    label: 'Application architecture',
    note: 'Where the model sits in the system, and what it is allowed to touch.',
  },
]

export default function AI() {
  const also = getProjectsByCategory('development').filter((project) =>
    project.disciplines.includes('AI'),
  )

  return (
    <main className="page page-ai">
      <PageContainer>
        <PageHeader
          index="03"
          kicker="Practice"
          title={
            <>
              Intelligence as
              <br />a product layer.
            </>
          }
          lede="I work on retrieval, reasoning, and agents when a product actually needs them. Some of this is application work. Some of it is still an exploration."
        />

        <section className="discipline-exhibit" aria-label="AI method">
          <Reveal>
            <AIExhibit />
          </Reveal>
          <Reveal delay={0.08} className="discipline-notes">
            <ol className="capability-list">
              {areas.map((item, index) => (
                <li key={item.label}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section className="page-section" aria-labelledby="ai-work">
          <div className="section-heading-row">
            <h2 id="ai-work">Applications and explorations.</h2>
            <p>Shipped work is marked separately from prototypes.</p>
          </div>
          <ProjectIndex category="ai" variant="row" />
        </section>

        {also.length > 0 ? (
          <section className="page-section" aria-labelledby="ai-adjacent">
            <div className="section-heading-row">
              <h2 id="ai-adjacent">Also worth a look.</h2>
            </div>
            <p className="adjacent-note">
              <Link to="/development/projects/myhealthdiary">{also[0].title}</Link> lives with
              the development work, because the product is the point. The model is one of the
              parts.
            </p>
          </section>
        ) : null}
      </PageContainer>
    </main>
  )
}
