import { useEffect, type JSX } from "react"
import Hero from "@/components/home/Hero"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import ServicesSnapshot from "@/components/home/ServicesSnapshot"
import ClientPromise from "@/components/home/ClientPromise"

// Manual SEO implementation - React 19 compatible
export default function Home(): JSX.Element {
    useEffect(() => {
        // Set page title
        document.title = "CascadingXol - Professional Web Development & Digital Solutions"
        
        // Helper function to set meta tags
        const setMetaTag = (name: string, content: string, property = false) => {
            const attribute = property ? 'property' : 'name'
            let meta = document.querySelector(`meta[${attribute}="${name}"]`)
            if (!meta) {
                meta = document.createElement('meta')
                meta.setAttribute(attribute, name)
                document.head.appendChild(meta)
            }
            meta.setAttribute('content', content)
        }

        // Basic SEO Meta Tags
        setMetaTag('description', 'Transform your business with CascadingXol\'s expert web development, digital solutions, and innovative technology services. Trusted by businesses across Pakistan.')
        setMetaTag('keywords', 'web development, digital solutions, website design, software development, technology services, Pakistan, CascadingXol')
        setMetaTag('author', 'CascadingXol')
        setMetaTag('robots', 'index, follow')
        setMetaTag('theme-color', '#3B82F6')
        setMetaTag('language', 'English')
        setMetaTag('geo.region', 'PK')
        setMetaTag('geo.placename', 'Pakistan')

        // Open Graph Tags
        setMetaTag('og:title', 'CascadingXol - Professional Web Development & Digital Solutions', true)
        setMetaTag('og:description', 'Transform your business with expert web development and digital solutions. Innovative technology services trusted by businesses.', true)
        setMetaTag('og:type', 'website', true)
        setMetaTag('og:url', 'https://www.cascadingxol.com/', true)
        setMetaTag('og:image', 'https://www.cascadingxol.com/images/og-home.jpg', true)
        setMetaTag('og:image:width', '1200', true)
        setMetaTag('og:image:height', '630', true)
        setMetaTag('og:site_name', 'CascadingXol', true)
        setMetaTag('og:locale', 'en_US', true)

        // Twitter Card Tags
        setMetaTag('twitter:card', 'summary_large_image')
        setMetaTag('twitter:site', '@cascadingxol')
        setMetaTag('twitter:creator', '@cascadingxol')
        setMetaTag('twitter:title', 'CascadingXol - Professional Web Development & Digital Solutions')
        setMetaTag('twitter:description', 'Transform your business with expert web development and digital solutions. Innovative technology services trusted by businesses.')
        setMetaTag('twitter:image', 'https://www.cascadingxol.com/images/twitter-card.jpg')

        // Set canonical URL
let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
if (!canonical) {
    canonical = document.createElement('link') as HTMLLinkElement
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
}
canonical.href = 'https://www.cascadingxol.com/' 

        // Add structured data
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CascadingXol",
            "url": "https://www.cascadingxol.com",
            "logo": "https://www.cascadingxol.com/logo.png",
            "description": "Professional web development and digital solutions company providing innovative technology services",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-XXX-XXXXXXX",
                "contactType": "customer service",
                "availableLanguage": ["English", "Urdu"]
            },
            "sameAs": [
                "https://facebook.com/cascadingxol",
                "https://twitter.com/cascadingxol",
                "https://linkedin.com/company/cascadingxol"
            ],
            "service": [
                {
                    "@type": "Service",
                    "name": "Web Development",
                    "description": "Custom website development and web applications"
                },
                {
                    "@type": "Service", 
                    "name": "Digital Solutions",
                    "description": "Comprehensive digital transformation services"
                }
            ]
        }

        // Remove existing structured data
        const existingScript = document.querySelector('script[type="application/ld+json"]')
        if (existingScript) {
            existingScript.remove()
        }

        // Add new structured data
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify(structuredData)
        document.head.appendChild(script)

        // Google Analytics (if available)
        if (typeof (window as any).gtag !== 'undefined') {
            (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'Home - Professional Web Development Services',
                page_location: window.location.href
            })
        }

    }, [])

    return (
        <div className="flex flex-col">
            {/* Hero Section with Slider */}
            <section aria-label="Hero section with company introduction">
                <Hero />
            </section>

            {/* Why Choose Us with Images and Stats */}
            <section aria-label="Why choose our services" id="why-choose-us">
                <WhyChooseUs />
            </section>

            {/* Services with Visual Cards */}
            <section aria-label="Our services overview" id="services">
                <ServicesSnapshot />
            </section>

            {/* Client Promise with Testimonials */}
            <section aria-label="Client testimonials and promises" id="testimonials">
                <ClientPromise />
            </section>
        </div>
    )
}