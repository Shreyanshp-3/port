export default function PageHeader({ kicker, title, lede, children }) {
  return (
    <header className="page-header">
      {kicker ? <p className="page-kicker">{kicker}</p> : null}
      <h1 className="page-title">{title}</h1>
      {lede ? <p className="page-lede">{lede}</p> : null}
      {children}
    </header>
  )
}
