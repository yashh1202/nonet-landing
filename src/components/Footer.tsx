import { externalAnchorProps } from '../externalLinkProps'
import { siteLinks, siteMeta } from '../siteConfig'

const year = new Date().getFullYear()

export function Footer() {
  const links: { href: string; label: string }[] = []
  if (siteLinks.github) links.push({ href: siteLinks.github, label: 'GitHub' })
  if (siteLinks.androidApk) links.push({ href: siteLinks.androidApk, label: 'Try on Android' })
  if (siteLinks.contact) links.push({ href: siteLinks.contact, label: 'Contact' })

  return (
    <footer className="site-footer">
      {links.length > 0 && (
        <nav className="site-footer__nav" aria-label="External links">
          {links.map(({ href, label }) => (
            <a key={label} href={href} {...externalAnchorProps(href)}>
              {label}
            </a>
          ))}
        </nav>
      )}
      <p className="site-footer__copy">
        © {year} {siteMeta.name}. Offline propagation; online finality on Hedera.
      </p>
    </footer>
  )
}
