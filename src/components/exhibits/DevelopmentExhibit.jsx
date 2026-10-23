export default function DevelopmentExhibit() {
  return (
    <div className="exhibit exhibit--development" aria-hidden="true">
      <pre className="exhibit-code">
        <code>
          <span className="is-kw">const</span> product = design(intent)
          {'\n'}
          <span className="is-kw">const</span> system = build(product)
          {'\n'}
          deploy(system)
        </code>
      </pre>

      <div className="exhibit-arch">
        <span>Client</span>
        <b>→</b>
        <span>API</span>
        <b>→</b>
        <span>Data</span>
      </div>
    </div>
  )
}
