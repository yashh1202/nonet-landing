import { externalAnchorProps } from '../externalLinkProps'
import { siteLinks, siteMeta } from '../siteConfig'

function CtaLinks() {
  const items: { href: string; label: string }[] = []
  if (siteLinks.github) items.push({ href: siteLinks.github, label: 'GitHub' })
  if (siteLinks.whitepaper) items.push({ href: siteLinks.whitepaper, label: 'Whitepaper' })
  if (siteLinks.androidApk) items.push({ href: siteLinks.androidApk, label: 'Try on Android' })

  if (items.length === 0) {
    return (
      <p className="hero-cta-note">
        Set <code>github</code>, <code>whitepaper</code>, or <code>androidApk</code> in{' '}
        <code>src/siteConfig.ts</code>. Contact lives in the footer.
      </p>
    )
  }

  const isPrimaryCta = (label: string) => label === 'Try on Android' || label === 'GitHub'

  return (
    <div className="hero-ctas">
      {items.map(({ href, label }) => (
        <a
          key={label}
          className={`button ${isPrimaryCta(label) ? 'button-primary' : 'button-secondary'}`}
          href={href}
          {...externalAnchorProps(href)}
        >
          {label}
        </a>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__aurora" aria-hidden="true" />
      <p className="hero-eyebrow">Hedera · offline-first · BLE mesh</p>
      <h1 id="hero-heading">{siteMeta.tagline}</h1>
      <p className="hero-lead">{siteMeta.description}</p>
      <CtaLinks />
      <p className="hero-scroll-hint">
        <a href="#problem">Read how it works</a>
      </p>
    </section>
  )
}
