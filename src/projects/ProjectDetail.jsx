import { Link, useParams } from 'react-router-dom'
import PageContainer from '../components/PageContainer.jsx'
import ProjectFallback from '../components/ProjectFallback.jsx'
import { getAdjacentProjects, getProject } from '../data/projects.js'

const categoryLabel = {
  design: 'Design',
  development: 'Development',
  ai: 'AI',
}

export default function ProjectDetail({ category }) {
  const { slug } = useParams()
  const project = getProject(category, slug)
  const indexHref = `/${category}`

  if (!project) {
    return (
      <main className="page page-missing">
        <PageContainer>
          <p className="page-kicker">Missing</p>
          <h1 className="page-title">This project does not exist yet.</h1>
          <p className="page-lede">
            The slug is not in the {categoryLabel[category] ?? category} index.
          </p>
          <p>
            <Link to={indexHref} className="text-link">
              Back to {categoryLabel[category] ?? 'projects'}
            </Link>
          </p>
        </PageContainer>
      </main>
    )
  }

  const { prev, next } = getAdjacentProjects(category, slug)
  const image = project.heroImage || project.thumbnail

  return (
    <main className="page page-detail">
      <PageContainer>
        <p className="page-kicker">
          <Link to={indexHref}>{categoryLabel[category]}</Link>
          <span aria-hidden="true"> / </span>
          {project.projectType}
        </p>

        <header className="detail-header">
          <h1 className="page-title">{project.title}</h1>
          <p className="detail-practice">{project.practice}</p>
          <p className="page-lede">{project.description}</p>
        </header>

        <div className="detail-media">
          {image ? (
            <img src={image} alt="" />
          ) : (
            <ProjectFallback project={project} className="is-hero" />
          )}
        </div>

        {project.technologies.length > 0 ? (
          <section className="detail-section" aria-labelledby="detail-tech">
            <h2 id="detail-tech">Technologies</h2>
            <p className="tech-line">{project.technologies.join(' · ')}</p>
          </section>
        ) : null}

        {project.caseStudy.map((section) => (
          <section key={section.heading} className="detail-section">
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        {project.repo ? (
          <p>
            <a
              className="text-link"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </p>
        ) : null}

        <nav className="detail-nav" aria-label="Project">
          <Link to={indexHref} className="text-link">
            All {categoryLabel[category].toLowerCase()} work
          </Link>

          {prev && next ? (
            <div className="detail-adjacent">
              <Link to={`/${category}/projects/${prev.slug}`}>
                <span>Previous</span>
                {prev.title}
              </Link>
              <Link to={`/${category}/projects/${next.slug}`}>
                <span>Next</span>
                {next.title}
              </Link>
            </div>
          ) : null}
        </nav>
      </PageContainer>
    </main>
  )
}
