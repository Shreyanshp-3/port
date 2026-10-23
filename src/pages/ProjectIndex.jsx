import ProjectPreview from '../components/ProjectPreview.jsx'
import { getProjectsByCategory } from '../data/projects.js'

export default function ProjectIndex({ category, variant = 'row' }) {
  const projects = getProjectsByCategory(category)

  if (projects.length === 0) {
    return <p className="empty-note">No projects in this practice yet.</p>
  }

  return (
    <div className={`project-index project-index--${variant}`}>
      {projects.map((project) => (
        <ProjectPreview
          key={project.slug}
          project={project}
          variant={variant}
        />
      ))}
    </div>
  )
}
