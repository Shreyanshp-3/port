import { Link } from 'react-router-dom'
import ProjectFallback from './ProjectFallback.jsx'

function hrefFor(project) {
  return `/${project.category}/projects/${project.slug}`
}

export default function ProjectPreview({ project, variant = 'row' }) {
  const href = hrefFor(project)

  if (variant === 'feature') {
    return (
      <article className="project-feature">
        <Link to={href} className="project-feature-media">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt="" />
          ) : (
            <ProjectFallback project={project} />
          )}
        </Link>
        <div className="project-feature-body">
          <p className="project-meta">{project.practice}</p>
          <h2>
            <Link to={href}>{project.title}</Link>
          </h2>
          <p>{project.description}</p>
          <Link to={href} className="text-link">
            View project
          </Link>
        </div>
      </article>
    )
  }

  if (variant === 'study') {
    return (
      <article className="project-study">
        <p className="project-meta">{project.projectType}</p>
        <h2>
          <Link to={href}>{project.title}</Link>
        </h2>
        <p>{project.description}</p>
      </article>
    )
  }

  return (
    <article className="project-row">
      <Link to={href} className="project-row-main">
        <span className="project-meta">{project.practice}</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </Link>
      <span className="project-row-type">{project.projectType}</span>
    </article>
  )
}
