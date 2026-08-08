import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
  path?: string
  image?: string
}

const SITE_URL = 'https://www.becomingherhq.org'

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

export function Seo({ title, description, path = '/', image = '/images/home-portrait.webp' }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes('Becoming Her') ? title : `${title} | Becoming Her`
    const canonical = `${SITE_URL}${path === '/' ? '' : path}`
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

    document.title = fullTitle
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
    setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl)

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonical

    let schema = document.head.querySelector<HTMLScriptElement>('#organization-schema')
    if (!schema) {
      schema = document.createElement('script')
      schema.id = 'organization-schema'
      schema.type = 'application/ld+json'
      document.head.appendChild(schema)
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Becoming Her',
      url: SITE_URL,
      logo: `${SITE_URL}/images/brand-logo.webp`,
      description,
      email: 'info.becomingherhq@gmail.com',
      telephone: '+1-443-410-4567',
      areaServed: 'United States',
      sameAs: ['https://www.instagram.com/becominghermentoring/'],
    })
  }, [description, image, path, title])

  return null
}
