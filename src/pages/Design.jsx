import PageContainer from '../components/PageContainer.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ProjectPreview from '../components/ProjectPreview.jsx'
import { getProjectsByCategory } from '../data/projects.js'

const capabilities = [
  { label: 'UI / UX design', note: 'Screens that can be read at a glance.' },
  { label: 'Product design', note: 'The whole flow, not a collection of views.' },
  { label: 'Interaction design', note: 'States, motion, and how the hand meets the interface.' },
  { label: 'Design systems', note: 'Type, space, and components that stay consistent.' },
  { label: 'Wireframing', note: 'Structure first, decoration later — if at all.' },
  { label: 'Prototyping', note: 'Trying the thing before arguing about the thing.' },
]

export default function Design() {
  const projects = getProjectsByCategory('design')
  const [lead, ...rest] = projects

  return (
    <main className="page page-design">
      <PageContainer>
        <PageHeader
          kicker="01 — Design"
          title={
            <>
              Interfaces with
              <br />
              a point of view.
            </>
          }
          lede="I design product surfaces so the hierarchy is obvious, the interaction is quiet, and the system underneath can actually be built."
        />

        <section className="design-capabilities" aria-label="Design capabilities">
          <div className="design-capabilities-intro">
            <p className="page-kicker">Practice</p>
            <p>
              Design here is not a layer of polish added at the end. It is how the product is
              structured: type, grid, flow, and the small interface details that keep a screen
              from becoming noise.
            </p>
          </div>

          <ol className="capability-list">
            {capabilities.map((item, index) => (
              <li key={item.label}>
                <span>0{index + 1}</span>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="page-section" aria-labelledby="design-work">
          <div className="section-heading">
            <p className="page-kicker">Work</p>
            <h2 id="design-work">Studies and product interfaces.</h2>
          </div>

          {lead ? <ProjectPreview project={lead} variant="feature" /> : null}

          {rest.length > 0 ? (
            <div className="project-index project-index--study">
              {rest.map((project) => (
                <ProjectPreview
                  key={project.slug}
                  project={project}
                  variant="study"
                />
              ))}
            </div>
          ) : null}
        </section>
      </PageContainer>
    </main>
  )
}
