import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import PageContainer from '../components/PageContainer.jsx'
import ProjectPreview from '../components/ProjectPreview.jsx'
import HeroStage from '../components/hero/HeroStage.jsx'
import { getFeaturedProjects } from '../data/projects.js'
import { site } from '../data/site.js'

const modes = ['design', 'build', 'ai']

const modeContent = {
  design: {
    label: 'Design',
    statement: (
      <>
        I design experiences
        <br />
        that feel clear and human.
      </>
    ),
  },
  build: {
    label: 'Development',
    statement: (
      <>
        I build systems
        <br />
        that turn ideas into products.
      </>
    ),
  },
  ai: {
    label: 'AI',
    statement: (
      <>
        I make products
        <br />
        intelligent.
      </>
    ),
  },
}

const practices = [
  {
    to: '/design',
    index: '01',
    label: 'Design',
    copy: 'Interfaces, product design, and the hierarchy that makes a surface readable.',
  },
  {
    to: '/development',
    index: '02',
    label: 'Development',
    copy: 'Full-stack systems that hold the idea once it has to work.',
  },
  {
    to: '/ai',
    index: '03',
    label: 'AI',
    copy: 'Retrieval, reasoning, and agents as product layers — not decoration.',
  },
]

export default function Home() {
  const [activeMode, setActiveMode] = useState('design')
  const reduceMotion = useReducedMotion()
  const content = modeContent[activeMode]
  const featured = getFeaturedProjects()

  const textTransition = reduceMotion
    ? { duration: 0.15 }
    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }

  function cycleMode(direction) {
    const index = modes.indexOf(activeMode)
    const next = (index + direction + modes.length) % modes.length
    setActiveMode(modes[next])
  }

  function onModeKeyDown(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      cycleMode(1)
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      cycleMode(-1)
    }
  }

  return (
    <main className="home">
      <section className={`hero hero--${activeMode}`}>
        <header className="hero-header">
          <h1 className="hero-name">{site.name}</h1>
          <p className="hero-discipline">{site.role}</p>
        </header>

        <div className="hero-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={`${activeMode}-label`}
              className="hero-label"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={textTransition}
            >
              {content.label}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h2
              key={activeMode}
              className="hero-statement"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={textTransition}
            >
              {content.statement}
            </motion.h2>
          </AnimatePresence>
        </div>

        <HeroStage activeMode={activeMode} />

        <div
          className="hero-modes"
          role="radiogroup"
          aria-label="Portfolio discipline"
          onKeyDown={onModeKeyDown}
        >
          {modes.map((mode) => (
            <button
              key={mode}
              type="button"
              role="radio"
              aria-checked={activeMode === mode}
              className={activeMode === mode ? 'active' : ''}
              onClick={() => setActiveMode(mode)}
            >
              {mode}
            </button>
          ))}
        </div>

        <footer className="hero-footer">
          <span>{site.discipline}</span>
          <a href="#selected">Selected work</a>
        </footer>
      </section>

      <PageContainer>
        <section id="selected" className="home-after">
          <div className="section-heading">
            <p className="page-kicker">Selected work</p>
            <h2>Products across the three practices.</h2>
          </div>

          <div className="home-work">
            {featured.slice(0, 3).map((project) => (
              <ProjectPreview
                key={project.slug}
                project={project}
                variant="row"
              />
            ))}
          </div>

          <nav className="home-practices" aria-label="Practices">
            {practices.map((practice) => (
              <Link key={practice.to} to={practice.to} className="home-practice">
                <span>{practice.index}</span>
                <strong>{practice.label}</strong>
                <p>{practice.copy}</p>
              </Link>
            ))}
          </nav>
        </section>
      </PageContainer>
    </main>
  )
}
