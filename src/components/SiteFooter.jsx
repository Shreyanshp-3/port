import { Link } from 'react-router-dom'
import { site, socialLinks } from '../data/site.js'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-row">
        <Link to="/" className="site-footer-name">
          {site.name}
        </Link>
        <p>{site.role}</p>
      </div>

      <ul className="site-footer-links">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="site-footer-meta">
        {site.discipline} — Index {new Date().getFullYear()}
      </p>
    </footer>
  )
}
