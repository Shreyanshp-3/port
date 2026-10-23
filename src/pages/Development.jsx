import PageContainer from '../components/PageContainer.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ProjectIndex from './ProjectIndex.jsx'

export default function Development() {
  return (
    <main className="page page-development">
      <PageContainer>
        <PageHeader
          kicker="02 — Development"
          title={
            <>
              Systems that
              <br />
              hold the idea.
            </>
          }
          lede="I build complete products: the interface, the API, the data, and the decisions that keep those parts from drifting apart."
        />

        <section className="page-section" aria-labelledby="dev-work">
          <div className="section-heading">
            <p className="page-kicker">Work</p>
            <h2 id="dev-work">Shipped and in-progress products.</h2>
          </div>
          <ProjectIndex category="development" variant="row" />
        </section>

        <section className="engineering-note" aria-labelledby="engineering-materials">
          <p className="page-kicker">Materials</p>
          <h2 id="engineering-materials">How the stack is used.</h2>
          <p>
            Interfaces are built in React and JavaScript. Services sit on Node.js and Express,
            or on Python and FastAPI when the work leans toward models and data. Persistence is
            MongoDB or PostgreSQL, depending on the shape of the problem. Docker is how the
            system is packaged so local and deployed environments stay honest.
          </p>
          <p>
            The interesting part is not the list. It is choosing a structure that can survive
            contact with real users — routing, data, auth, and the product logic that actually
            has to run.
          </p>
        </section>
      </PageContainer>
    </main>
  )
}
