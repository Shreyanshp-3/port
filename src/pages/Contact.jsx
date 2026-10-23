import PageContainer from '../components/PageContainer.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { site, socialLinks } from '../data/site.js'

export default function Contact() {
  return (
    <main className="page page-contact">
      <PageContainer>
        <PageHeader
          kicker="Contact"
          title={
            <>
              For roles,
              <br />
              collaborations,
              <br />
              and products.
            </>
          }
          lede="I am based in Pune, India. The fastest public paths are below."
        />

        <ul className="contact-list">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                <span className="contact-label">{link.label}</span>
                <span className="contact-hint">{link.hint}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="contact-note">{site.discipline}</p>
      </PageContainer>
    </main>
  )
}
