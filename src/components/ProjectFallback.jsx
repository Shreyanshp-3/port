export default function ProjectFallback({ project, className = '' }) {
  const index = project.title.trim().charAt(0).toUpperCase()

  return (
    <div
      className={`project-fallback${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    >
      <span className="project-fallback-index">{index}</span>
      <span className="project-fallback-practice">{project.practice}</span>
      <strong className="project-fallback-title">{project.title}</strong>
      <span className="project-fallback-type">{project.projectType}</span>
    </div>
  )
}
