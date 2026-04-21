export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-logo" href="#top">
          NONET
        </a>
        <nav className="site-nav" aria-label="Page sections">
          <a href="#problem">Problem</a>
          <a href="#how-it-works">How it works</a>
          <a href="#architecture">Architecture</a>
          <a href="#security">Security</a>
        </nav>
      </div>
    </header>
  )
}
