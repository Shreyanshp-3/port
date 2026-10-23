export default function AIExhibit() {
  return (
    <div className="exhibit exhibit--ai" aria-hidden="true">
      <div className="exhibit-flow">
        <span>Retrieve</span>
        <b>→</b>
        <span>Reason</span>
        <b>→</b>
        <span>Act</span>
      </div>

      <ul className="exhibit-nodes">
        <li>
          Corpus <i />
        </li>
        <li>
          Embeddings <i />
        </li>
        <li>
          Response <i />
        </li>
      </ul>
    </div>
  )
}
