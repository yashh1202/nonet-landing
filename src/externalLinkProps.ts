/** Use for same-tab navigation on relative paths, mailto, and APK downloads. */
export function externalAnchorProps(href: string) {
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return { target: '_blank' as const, rel: 'noreferrer' as const }
  }
  return {}
}
