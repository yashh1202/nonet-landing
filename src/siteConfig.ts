/**
 * Empty strings hide that CTA. Whitepaper uses the same URL as the former “docs” GitBook.
 *
 * Android: do not commit large APKs to this repo (GitHub rejects blobs > ~100MB). Keep the file locally
 * in public/ for dev if you want, but publish the APK via GitHub Releases (or another host) and paste
 * the direct download URL here, e.g. https://github.com/owner/repo/releases/download/v1.0.0/no-net-pay.apk
 */
export const siteLinks = {
  github: 'https://github.com/yashh1202/nonetpay',
  whitepaper: 'https://xyx-1.gitbook.io/nonetpay',
  androidApk: '',
  contact: 'mailto:yash549762@gmail.com',
} as const

export const siteMeta = {
  name: 'NONET',
  tagline: 'A Hedera-native offline transaction mesh network',
  description:
    'NONET lets you create, sign, and propagate valid Hedera transactions over Bluetooth when the internet is unavailable—until a gateway submits them to Hedera.',
} as const
