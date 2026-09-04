import { useParams } from 'react-router-dom'
import PageContainer from '../components/PageContainer.jsx'
import { getProject } from '../data/projects.js'

export default function ProjectDetail({ category }) {
  const { slug } = useParams()
  const project = getProject(category, slug)

  return <PageContainer><h1>{project?.title ?? 'Project not found'}</h1><p>{project?.description ?? 'This project does not exist yet.'}</p></PageContainer>
}
