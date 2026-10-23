import { NavLink, Link, useLocation } from 'react-router-dom'
import { navItems, site } from '../data/site.js'

export default function SiteHeader() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className={`site-header${isHome ? ' is-home' : ''}`}>
      <Link to="/" className="site-logo">
        {isHome ? site.shortName : site.name}
      </Link>

      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              isActive ? 'site-nav-link is-active' : 'site-nav-link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
