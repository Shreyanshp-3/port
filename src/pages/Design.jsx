import PageContainer from '../components/PageContainer.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import DesignExhibit from '../components/exhibits/DesignExhibit.jsx'
import ProjectIndex from './ProjectIndex.jsx'

const capabilities = [
  { label: 'UI / UX design', note: 'Screens that can be read at a glance.' },
  { label: 'Product design', note: 'The whole flow, not a collection of views.' },
  { label: 'Interaction design', note: 'States, motion, and how the hand meets the interface.' },
  { label: 'Design systems', note: 'Type, space, and components that stay consistent.' },
  { label: 'Wireframing', note: 'Structure first, decoration later — if at all.' },
  { label: 'Prototyping', note: 'Trying the thing before arguing about the thing.' },
]

export default function Design() {
  return (
    <main className="page page-design">
      <PageContainer>
        <PageHeader
          index="01"
          kicker="Practice"
          title={
            <>
              Interfaces with
              <br />a point of view.
            </>
          }
          lede="I design product surfaces so the hierarchy is obvious, the interaction is quiet, and the system underneath can actually be built."
        />

        <section className="discipline-exhibit" aria-label="Design method">
          <Reveal>
            <DesignExhibit />
          </Reveal>
          <Reveal delay={0.08} className="discipline-notes">
            <p>
              Design here is not a layer of polish added at the end. It is how the product is
              structured: type, grid, flow, and the small interface details that keep a screen
              from becoming noise.
            </p>
            <ol className="capability-list">
              {capabilities.map((item, index) => (
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

        <section className="page-section" aria-labelledby="design-work">
          <div className="section-heading-row">
            <h2 id="design-work">Studies and product interfaces.</h2>
            <p>Work shown is either shipped or an explicit study.</p>
          </div>
          <ProjectIndex category="design" variant="row" />
        </section>
      </PageContainer>
    </main>
  )
}
