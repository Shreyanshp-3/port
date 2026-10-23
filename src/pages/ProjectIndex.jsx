import ProjectPreview from '../components/ProjectPreview.jsx'
import Reveal from '../components/Reveal.jsx'
import { getProjectsByCategory } from '../data/projects.js'

export default function ProjectIndex({ category, variant = 'row' }) {
  const projects = getProjectsByCategory(category)

  if (projects.length === 0) {
    return <p className="empty-note">No projects in this practice yet.</p>
  }

  return (
    <div className={`project-index project-index--${variant}`}>
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={Math.min(index * 0.05, 0.3)}>
          <ProjectPreview project={project} variant={variant} index={index} />
        </Reveal>
      ))}
    </div>
  )
}
