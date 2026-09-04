import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageContainer from '../components/PageContainer.jsx'

import DesignGrid from '../components/hero/DesignGrid.jsx'
import TypeSpecimen from '../components/hero/TypeSpecimen.jsx'
import DesignNote from '../components/hero/DesignNote.jsx'
import CodePanel from '../components/hero/CodePanel.jsx'
import SystemNode from '../components/hero/SystemNode.jsx'
import KnowledgeCard from '../components/hero/KnowledgeCard.jsx'
import AgentFlow from '../components/hero/AgentFlow.jsx'

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

const objectVariants = {
  design: {
    designGrid: {
      x: 0,
      y: 0,
      rotate: -5,
      opacity: 1,
    },

    typeSpecimen: {
      x: 0,
      y: 0,
      rotate: 6,
      opacity: 1,
    },

    designNote: {
      x: 0,
      y: 0,
      rotate: -8,
      opacity: 1,
    },

    codePanel: {
      x: 40,
      y: 30,
      rotate: 2,
      opacity: 0.06,
    },

    systemNode: {
      x: -30,
      y: 40,
      rotate: 0,
      opacity: 0.06,
    },

    knowledgeCard: {
      x: 30,
      y: -30,
      rotate: -2,
      opacity: 0.06,
    },

    agentFlow: {
      x: -20,
      y: -20,
      rotate: 0,
      opacity: 0.06,
    },
  },

  build: {
    designGrid: {
      x: -80,
      y: 40,
      rotate: -12,
      opacity: 0.06,
    },

    typeSpecimen: {
      x: 80,
      y: 30,
      rotate: 12,
      opacity: 0.06,
    },

    designNote: {
      x: -50,
      y: 60,
      rotate: -15,
      opacity: 0.06,
    },

    codePanel: {
      x: 0,
      y: 0,
      rotate: -2,
      opacity: 1,
    },

    systemNode: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
    },

    knowledgeCard: {
      x: 40,
      y: 20,
      rotate: 4,
      opacity: 0.06,
    },

    agentFlow: {
      x: -40,
      y: 20,
      rotate: 0,
      opacity: 0.06,
    },
  },

  ai: {
    designGrid: {
      x: -40,
      y: -30,
      rotate: -10,
      opacity: 0.06,
    },

    typeSpecimen: {
      x: 50,
      y: -40,
      rotate: 10,
      opacity: 0.06,
    },

    designNote: {
      x: -30,
      y: 50,
      rotate: -12,
      opacity: 0.06,
    },

    codePanel: {
      x: -40,
      y: 30,
      rotate: -5,
      opacity: 0.06,
    },

    systemNode: {
      x: 40,
      y: 30,
      rotate: 5,
      opacity: 0.06,
    },

    knowledgeCard: {
      x: 0,
      y: 0,
      rotate: -3,
      opacity: 1,
    },

    agentFlow: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
    },
  },
}

const objectTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
}

function HeroObject({ name, children, activeMode }) {
  return (
    <motion.div
      className="hero-object-wrapper"
      initial={false}
      animate={objectVariants[activeMode][name]}
      transition={objectTransition}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [activeMode, setActiveMode] = useState('design')

  const content = modeContent[activeMode]

  return (
    <main className="home">
      <PageContainer>
        <section className={`hero hero--${activeMode}`}>

          {/* Header */}
          <header className="hero-header">
            <h1 className="hero-name">
              Shreyansh Patil
            </h1>

            <p className="hero-discipline">
              Designer · Developer · AI Engineer
            </p>
          </header>

          {/* Main statement */}
          <div className="hero-center">

            <AnimatePresence mode="wait">
              <motion.p
                key={`${activeMode}-label`}
                className="hero-label"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {content.label}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h2
                key={activeMode}
                className="hero-statement"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {content.statement}
              </motion.h2>
            </AnimatePresence>

          </div>

          {/* Visual world */}
          <div className="hero-objects">

            <HeroObject
              name="designGrid"
              activeMode={activeMode}
            >
              <DesignGrid />
            </HeroObject>

            <HeroObject
              name="typeSpecimen"
              activeMode={activeMode}
            >
              <TypeSpecimen />
            </HeroObject>

            <HeroObject
              name="designNote"
              activeMode={activeMode}
            >
              <DesignNote />
            </HeroObject>

            <HeroObject
              name="codePanel"
              activeMode={activeMode}
            >
              <CodePanel />
            </HeroObject>

            <HeroObject
              name="systemNode"
              activeMode={activeMode}
            >
              <SystemNode />
            </HeroObject>

            <HeroObject
              name="knowledgeCard"
              activeMode={activeMode}
            >
              <KnowledgeCard />
            </HeroObject>

            <HeroObject
              name="agentFlow"
              activeMode={activeMode}
            >
              <AgentFlow />
            </HeroObject>

          </div>

          {/* Mode selector */}
          <nav
            className="hero-modes"
            aria-label="Portfolio disciplines"
          >
            {modes.map((mode) => (
              <button
                key={mode}
                type="button"
                className={activeMode === mode ? 'active' : ''}
                onClick={() => setActiveMode(mode)}
                aria-pressed={activeMode === mode}
              >
                {mode.toUpperCase()}
              </button>
            ))}
          </nav>

          {/* Footer */}
          <footer className="hero-footer">
            <span>PORTFOLIO — 2026</span>
            <span>SCROLL ↓</span>
          </footer>

        </section>
      </PageContainer>
    </main>
  )
}