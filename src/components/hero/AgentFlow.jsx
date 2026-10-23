const steps = [
  { index: '01', label: 'Retrieve' },
  { index: '02', label: 'Reason' },
  { index: '03', label: 'Act' },
]

export default function AgentFlow() {
  return (
    <div className="agent-flow">
      {steps.map((step, index) => (
        <div key={step.label} className="agent-step">
          {index > 0 ? <b aria-hidden="true">→</b> : null}
          <div>
            <small>{step.index}</small>
            <span>{step.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
