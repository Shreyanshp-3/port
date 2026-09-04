import PageContainer from '../components/PageContainer.jsx'
import ProjectPreview from '../components/ProjectPreview.jsx'
import { getProjectsByCategory } from '../data/projects.js'

export default function ProjectIndex({ category, title }) {
  return <PageContainer><h1>{title}</h1><div className="project-list">{getProjectsByCategory(category).map((project) => <ProjectPreview key={project.slug} project={project} />)}</div></PageContainer>
}
