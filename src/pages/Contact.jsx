import PageContainer from '../components/PageContainer.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { site, socialLinks } from '../data/site.js'

export default function Contact() {
  return (
    <main className="page page-contact">
      <PageContainer>
        <PageHeader
          index="05"
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
          {socialLinks.map((link, index) => (
            <Reveal key={link.href} as="li" delay={index * 0.05}>
              <a href={link.href} target="_blank" rel="noreferrer">
                <span className="contact-list-no">{String(index + 1).padStart(2, '0')}</span>
                <span className="contact-label">{link.label}</span>
                <span className="contact-hint">{link.hint}</span>
              </a>
            </Reveal>
          ))}
        </ul>

        <p className="contact-note">{site.discipline}</p>
      </PageContainer>
    </main>
  )
}
