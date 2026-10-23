export default function DesignGrid() {
  return (
    <div className="design-grid">
      <div className="design-grid-meta">
        <span>Grid</span>
        <span>12-col</span>
      </div>

      <div className="design-grid-board">
        {Array.from({ length: 12 }, (_, index) => (
          <span
            key={index}
            className={index === 4 || index === 5 ? 'is-filled' : undefined}
          />
        ))}
      </div>

      <p className="design-grid-caption">Layout study</p>
    </div>
  )
}
