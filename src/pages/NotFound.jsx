import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer.jsx'

export default function NotFound() {
  return (
    <main className="page page-missing">
      <PageContainer>
        <span className="page-header-index">N° 404</span>
        <h1 className="page-title">
          Entry not found
          <br />
          in the index.
        </h1>
        <p className="page-lede">
          The route does not exist, or it has been moved. The rest of the index is still here.
        </p>
        <p>
          <Link to="/" className="text-link text-link--accent">
            Back to the index →
          </Link>
        </p>
      </PageContainer>
    </main>
  )
}
