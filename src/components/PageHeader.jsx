export default function PageHeader({ index, kicker, title, lede, children }) {
  return (
    <header className="page-header">
      <div className="page-header-top">
        {index ? <span className="page-header-index">N° {index}</span> : null}
        {kicker ? <p className="page-kicker">{kicker}</p> : null}
      </div>
      <h1 className="page-title">{title}</h1>
      {lede ? <p className="page-lede">{lede}</p> : null}
      {children}
    </header>
  )
}
