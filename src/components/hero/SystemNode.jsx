export default function SystemNode() {
  return (
    <div className="system-node">
      <p className="system-node-label">Architecture</p>

      <div className="system-graph">
        <span className="node">APP</span>
        <span className="system-line" aria-hidden="true" />
        <div className="system-branch">
          <span className="node">API</span>
          <span className="node">DB</span>
        </div>
      </div>
    </div>
  )
}
