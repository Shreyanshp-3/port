export default function DesignExhibit() {
  return (
    <div className="exhibit exhibit--design" aria-hidden="true">
      <span className="exhibit-glyph">Ag</span>

      <div className="exhibit-grid">
        {Array.from({ length: 8 }, (_, index) => (
          <span key={index} className={index === 2 || index === 3 ? 'is-active' : undefined} />
        ))}
      </div>

      <dl className="exhibit-meta">
        <div>
          <dt>Grid</dt>
          <dd>8pt baseline · 12 columns</dd>
        </div>
        <div>
          <dt>Type</dt>
          <dd>Display serif + mono labels</dd>
        </div>
      </dl>
    </div>
  )
}
