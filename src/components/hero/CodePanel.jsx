export default function CodePanel() {
  return (
    <div className="hero-visual code-panel">
      <div className="code-panel-header">
        <span>system.js</span>
        <span>01</span>
      </div>

      <code>
        <span>const</span> idea = build()
        <br />
        <span>await</span> idea.ship()
      </code>
    </div>
  )
}