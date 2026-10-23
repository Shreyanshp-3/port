import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import IndexRail from './IndexRail.jsx'
import SiteFooter from './SiteFooter.jsx'
import GridLines from './GridLines.jsx'
import ScrollProgress from './ScrollProgress.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView()
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function Layout() {
  return (
    <div className="site">
      <ScrollToTop />
      <ScrollProgress />
      <GridLines />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <IndexRail />
      <div className="site-main">
        <div id="main">
          <Outlet />
        </div>
        <SiteFooter />
      </div>
    </div>
  )
}
