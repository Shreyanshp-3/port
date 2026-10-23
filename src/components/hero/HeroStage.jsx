import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import DesignGrid from './DesignGrid.jsx'
import TypeSpecimen from './TypeSpecimen.jsx'
import DesignNote from './DesignNote.jsx'
import CodePanel from './CodePanel.jsx'
import SystemNode from './SystemNode.jsx'
import KnowledgeCard from './KnowledgeCard.jsx'
import AgentFlow from './AgentFlow.jsx'

const ACTIVE = {
  design: ['designGrid', 'typeSpecimen', 'designNote'],
  build: ['codePanel', 'systemNode'],
  ai: ['knowledgeCard', 'agentFlow'],
}

const COMPACT_ACTIVE = {
  design: ['typeSpecimen', 'designNote'],
  build: ['codePanel'],
  ai: ['agentFlow'],
}

const REST = {
  designGrid: { rotate: -3.5 },
  typeSpecimen: { rotate: 5 },
  designNote: { rotate: -6.5 },
  codePanel: { rotate: -1.5 },
  systemNode: { rotate: 0 },
  knowledgeCard: { rotate: -2.5 },
  agentFlow: { rotate: 0 },
}

const GHOST = {
  design: {
    codePanel: { x: 36, y: 28, rotateDelta: 4 },
    systemNode: { x: -24, y: 32, rotateDelta: 0 },
    knowledgeCard: { x: 20, y: -24, rotateDelta: -2 },
    agentFlow: { x: -16, y: -20, rotateDelta: 0 },
  },
  build: {
    designGrid: { x: -48, y: 28, rotateDelta: -6 },
    typeSpecimen: { x: 40, y: 20, rotateDelta: 6 },
    designNote: { x: -28, y: 40, rotateDelta: -5 },
    knowledgeCard: { x: 28, y: 16, rotateDelta: 3 },
    agentFlow: { x: -24, y: 16, rotateDelta: 0 },
  },
  ai: {
    designGrid: { x: -28, y: -20, rotateDelta: -4 },
    typeSpecimen: { x: 32, y: -24, rotateDelta: 5 },
    designNote: { x: -20, y: 32, rotateDelta: -4 },
    codePanel: { x: -28, y: 20, rotateDelta: -3 },
    systemNode: { x: 24, y: 20, rotateDelta: 3 },
  },
}

const OBJECTS = [
  { name: 'designGrid', className: 'hero-object--grid', render: () => <DesignGrid /> },
  { name: 'typeSpecimen', className: 'hero-object--type', render: () => <TypeSpecimen /> },
  { name: 'designNote', className: 'hero-object--note', render: () => <DesignNote /> },
  { name: 'codePanel', className: 'hero-object--code', render: () => <CodePanel /> },
  { name: 'systemNode', className: 'hero-object--system', render: () => <SystemNode /> },
  { name: 'knowledgeCard', className: 'hero-object--knowledge', render: () => <KnowledgeCard /> },
  { name: 'agentFlow', className: 'hero-object--agent', render: () => <AgentFlow /> },
]

function getAnimate(name, mode, compact, reduceMotion) {
  const isActive = (compact ? COMPACT_ACTIVE : ACTIVE)[mode].includes(name)
  const restRotate = REST[name].rotate
  const opacity = isActive ? 1 : compact ? 0 : 0.06

  if (reduceMotion) {
    return { x: 0, y: 0, rotate: restRotate, opacity, zIndex: isActive ? 2 : 1 }
  }

  if (isActive) {
    return { x: 0, y: 0, rotate: restRotate, opacity: 1, zIndex: 2 }
  }

  const ghost = GHOST[mode][name] ?? { x: 0, y: 0, rotateDelta: 0 }

  return {
    x: compact ? 0 : ghost.x,
    y: compact ? 0 : ghost.y,
    rotate: restRotate + (ghost.rotateDelta ?? 0),
    opacity,
    zIndex: 1,
  }
}

export default function HeroStage({ activeMode }) {
  const reduceMotion = useReducedMotion()
  const [compact, setCompact] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 1080px)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1080px)')
    const update = () => setCompact(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const transition = reduceMotion
    ? { duration: 0.2, ease: 'linear' }
    : { duration: 0.85, ease: [0.22, 1, 0.36, 1] }

  return (
    <div className="hero-objects" aria-hidden="true">
      {OBJECTS.map((object, index) => (
        <motion.div
          key={object.name}
          className={`hero-object ${object.className}`}
          initial={false}
          animate={getAnimate(object.name, activeMode, compact, reduceMotion)}
          transition={{
            ...transition,
            delay: reduceMotion ? 0 : index * 0.03,
          }}
        >
          {object.render()}
        </motion.div>
      ))}
    </div>
  )
}
