import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer.jsx'

export default function NotFound() {
  return (
    <main className="page page-missing">
      <PageContainer>
        <p className="page-kicker">404</p>
        <h1 className="page-title">
          This page
          <br />
          is off the grid.
        </h1>
        <p className="page-lede">
          The route does not exist, or it has been moved. The rest of the site is still here.
        </p>
        <p>
          <Link to="/" className="text-link">
            Back to home
          </Link>
        </p>
      </PageContainer>
    </main>
  )
}
