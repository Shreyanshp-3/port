import { Link, NavLink } from 'react-router-dom'
import { navItems, site, socialLinks } from '../data/site.js'

export default function IndexRail() {
  return (
    <header className="index-rail">
      <Link to="/" className="index-mark" aria-label={`${site.name} — home`}>
        <span className="index-mark-no">00</span>
        <span className="index-mark-id">{site.shortName}</span>
      </Link>

      <nav className="index-nav" aria-label="Primary">
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? 'index-nav-link is-active' : 'index-nav-link'
                }
              >
                <span className="index-nav-no">{item.index}</span>
                <span className="index-nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="index-rail-bottom">
        <p className="index-rail-location">{site.location}</p>
        <ul className="index-rail-social">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
