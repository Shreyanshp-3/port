import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'

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

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={`site${isHome ? ' site--home' : ''}`}>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <div id="main">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  )
}
