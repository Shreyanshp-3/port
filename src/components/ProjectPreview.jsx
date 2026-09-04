import { Link } from 'react-router-dom'

export default function ProjectPreview({ project }) {
  return (
    <article>
      <h2><Link to={`/${project.category}/projects/${project.slug}`}>{project.title}</Link></h2>
      <p>{project.description}</p>
    </article>
  )
}
