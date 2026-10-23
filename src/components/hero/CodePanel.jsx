export default function CodePanel() {
  return (
    <div className="code-panel">
      <div className="code-panel-header">
        <span>product.ts</span>
        <span>03</span>
      </div>

      <pre>
        <code>
          <span className="code-kw">const</span> intent = design(){'\n'}
          <span className="code-kw">const</span> system = build(intent){'\n'}
          system.learn()
        </code>
      </pre>
    </div>
  )
}
