import { motion, useReducedMotion } from 'framer-motion'

/**
 * Scroll-reveal wrapper used throughout the site instead of a decorative
 * animation library. One primitive, one timing curve — reused everywhere
 * so motion stays coherent. Falls back to a static render when the user
 * has requested reduced motion.
 */
export default function Reveal({ children, delay = 0, className, as = 'div' }) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: reduceMotion ? 0 : delay,
      }}
    >
      {children}
    </MotionTag>
  )
}
