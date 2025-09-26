import { useEffect, type JSX } from "react"
import OurStory from "@/components/about/OurStory"
import VisionMission from "@/components/about/VisionMission"
import CoreValues from "@/components/about/CoreValues"
import TeamSection from "@/components/about/TeamSection"
import AboutHeroSection from "@/components/about/AboutHeroSection"

export default function About(): JSX.Element {
    useEffect(() => {
        // Set page title
        document.title = "About Us - Our Story, Team & Values | CascadingXol"
        
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
        setMetaTag('description', 'Learn about CascadingXol\'s journey, our expert team of developers and designers, company values, and commitment to delivering exceptional web development and digital solutions.')
        setMetaTag('keywords', 'about cascadingxol, company story, web development team, digital solutions experts, our mission vision, company values, team profiles')
        setMetaTag('author', 'CascadingXol')
        setMetaTag('robots', 'index, follow')
        setMetaTag('theme-color', '#3B82F6')
        setMetaTag('language', 'English')
        setMetaTag('geo.region', 'PK')
        setMetaTag('geo.placename', 'Pakistan')

        // Page-specific meta tags
        setMetaTag('page-topic', 'About Company')
        setMetaTag('page-type', 'About Page')
        setMetaTag('audience', 'Potential Clients, Partners, Job Seekers')

        // Open Graph Tags
        setMetaTag('og:type', 'website', true)
        setMetaTag('og:site_name', 'CascadingXol', true)
        setMetaTag('og:title', 'About CascadingXol - Our Story, Team & Values', true)
        setMetaTag('og:description', 'Meet our expert team and learn about our journey in web development and digital solutions. Discover our mission, vision, and core values.', true)
        setMetaTag('og:image', 'https://www.cascadingxol.com/images/about-og.jpg', true)
        setMetaTag('og:image:width', '1200', true)
        setMetaTag('og:image:height', '630', true)
        setMetaTag('og:url', 'https://www.cascadingxol.com/about', true)
        setMetaTag('og:locale', 'en_US', true)

        // Twitter Card Tags
        setMetaTag('twitter:card', 'summary_large_image')
        setMetaTag('twitter:site', '@cascadingxol')
        setMetaTag('twitter:creator', '@cascadingxol')
        setMetaTag('twitter:title', 'About CascadingXol - Our Story, Team & Values')
        setMetaTag('twitter:description', 'Meet our expert team and learn about our journey in web development and digital solutions. Discover our mission, vision, and values.')
        setMetaTag('twitter:image', 'https://www.cascadingxol.com/images/about-twitter.jpg')

        // Set canonical URL
     let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
if (!canonical) {
    canonical = document.createElement('link') as HTMLLinkElement
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
}
canonical.href = 'https://www.cascadingxol.com/about'

        // Add structured data for About page
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
                "@type": "Organization",
                "name": "CascadingXol",
                "url": "https://www.cascadingxol.com",
                "logo": "https://www.cascadingxol.com/logo.png",
                "description": "Learn about CascadingXol's journey, expert team, and commitment to delivering exceptional web development and digital solutions",
                "foundingDate": "2020",
                "founder": [
                    {
                        "@type": "Person",
                        "name": "Company Founder"
                    }
                ],
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
                ]
            },
            "about": [
                {
                    "@type": "Thing",
                    "name": "Web Development",
                    "description": "Expert web development services with modern technologies"
                },
                {
                    "@type": "Thing",
                    "name": "Digital Solutions",
                    "description": "Comprehensive digital transformation and technology consulting"
                },
                {
                    "@type": "Thing",
                    "name": "Team Excellence",
                    "description": "Experienced professionals dedicated to client success"
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

        // Add preload links
        const addPreloadLink = (href: string, as: string, type?: string) => {
            if (!document.querySelector(`link[href="${href}"]`)) {
                const link = document.createElement('link')
                link.rel = 'preload'
                link.href = href
                link.as = as
                if (type) link.type = type
                if (as === 'font') link.crossOrigin = ''
                document.head.appendChild(link)
            }
        }

        // Add prefetch links for other pages
        const addPrefetchLink = (href: string) => {
            if (!document.querySelector(`link[href="${href}"][rel="prefetch"]`)) {
                const link = document.createElement('link')
                link.rel = 'prefetch'
                link.href = href
                document.head.appendChild(link)
            }
        }

        // Preload critical resources
        addPreloadLink('/fonts/inter.woff2', 'font', 'font/woff2')
        
        // Prefetch other pages
        addPrefetchLink('/services')
        addPrefetchLink('/portfolio')
        addPrefetchLink('/contact')

        // Google Analytics (if available)
        if (typeof (window as any).gtag !== 'undefined') {
            (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'About Us - Our Story & Team',
                page_location: window.location.href
            })
        }

    }, [])

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section aria-label="About us hero section">
                <AboutHeroSection />
            </section>

            {/* Our Story with Timeline and Milestones */}
            <section aria-label="Our company story and timeline" id="our-story">
                <OurStory />
            </section>

            {/* Vision & Mission with Visual Cards */}
            <section aria-label="Company vision and mission" id="vision-mission">
                <VisionMission />
            </section>

            {/* Core Values with Professional Images */}
            <section aria-label="Our core values and principles" id="core-values">
                <CoreValues />
            </section>

            {/* Team Section with Detailed Profiles */}
            <section aria-label="Meet our team members" id="team">
                <TeamSection />
            </section>
        </div>
    )
}