import { useEffect, type JSX } from "react"
import ContactInfo from "@/components/contact/ContactInfo"
import ContactForm from "@/components/contact/ContactForm"
import { ArrowRight } from "lucide-react"
import ContactHeroSection from "@/components/contact/ContactHeroSection"

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity, but most web projects take 4-8 weeks, mobile apps 8-12 weeks, and enterprise solutions 12-16 weeks.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer comprehensive post-launch support including maintenance, updates, and technical assistance for all our projects.",
  },
  {
    question: "What's included in the free consultation?",
    answer:
      "Our free consultation includes requirement analysis, technology recommendations, project scope definition, and a detailed quote with timeline.",
  },
]

export default function Contact(): JSX.Element {
  useEffect(() => {
    // Set page title
    document.title = "Contact Us - Get Your Project Started Today | CascadingXol"

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
    setMetaTag('description', 'Ready to start your project? Contact CascadingXol today for professional web development and digital solutions. Get a free consultation, quote, and timeline for your project.')
    setMetaTag('keywords', 'contact cascadingxol, web development quote, digital solutions consultation, project inquiry, free consultation, get quote, Pakistan web development contact')
    setMetaTag('author', 'CascadingXol')
    setMetaTag('robots', 'index, follow')
    setMetaTag('theme-color', '#3B82F6')
    setMetaTag('language', 'English')
    setMetaTag('geo.region', 'PK')
    setMetaTag('geo.placename', 'Pakistan')

    // Contact-specific meta tags
    setMetaTag('page-topic', 'Contact Information')
    setMetaTag('page-type', 'Contact Page')
    setMetaTag('audience', 'Potential Clients, Business Inquiries')
    setMetaTag('content-type', 'Business Contact')

    // Local Business SEO
    setMetaTag('geo.position', '33.6844,73.0479') // Islamabad coordinates
    setMetaTag('ICBM', '33.6844,73.0479')
    setMetaTag('DC.title', 'CascadingXol Contact - Islamabad & Faisalabad')

    // Open Graph Tags
    setMetaTag('og:type', 'website', true)
    setMetaTag('og:site_name', 'CascadingXol', true)
    setMetaTag('og:title', 'Contact CascadingXol - Start Your Digital Transformation', true)
    setMetaTag('og:description', 'Ready to transform your business? Contact our expert team for a free consultation. Web development, digital solutions, and technology services.', true)
    setMetaTag('og:image', 'https://www.cascadingxol.com/images/contact-og.jpg', true)
    setMetaTag('og:image:width', '1200', true)
    setMetaTag('og:image:height', '630', true)
    setMetaTag('og:url', 'https://www.cascadingxol.com/contact', true)
    setMetaTag('og:locale', 'en_US', true)

    // Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:site', '@cascadingxol')
    setMetaTag('twitter:creator', '@cascadingxol')
    setMetaTag('twitter:title', 'Contact CascadingXol - Free Consultation Available')
    setMetaTag('twitter:description', 'Get a free consultation for your web development project. Expert team ready to help transform your business.')
    setMetaTag('twitter:image', 'https://www.cascadingxol.com/images/contact-twitter.jpg')

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://www.cascadingxol.com/contact'

    // Schema.org structured data for Contact page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact CascadingXol - Get Your Project Started",
      "description": "Ready to start your project? Contact CascadingXol today for professional web development and digital solutions. Get a free consultation!",
      "url": "https://www.cascadingxol.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "CascadingXol",
        "url": "https://www.cascadingxol.com",
        "logo": "https://www.cascadingxol.com/logo.png",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+92-300-1234567",
            "contactType": "customer service",
            "areaServed": "PK",
            "availableLanguage": ["English", "Urdu"],
            "hoursAvailable": "Mo-Fr 09:00-18:00"
          },
          {
            "@type": "ContactPoint",
            "email": "info@cascadingxol.com",
            "contactType": "customer service",
            "areaServed": "PK"
          }
        ],
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Islamabad",
            "addressRegion": "Islamabad Capital Territory",
            "addressCountry": "PK",
            "name": "Islamabad Office - Main Hub & Development Center"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Faisalabad",
            "addressRegion": "Punjab",
            "addressCountry": "PK",
            "name": "Faisalabad Office - Regional Operations & Support"
          }
        ],
        "sameAs": [
          "https://facebook.com/cascadingxol",
          "https://twitter.com/cascadingxol",
          "https://linkedin.com/company/cascadingxol"
        ]
      },
      "mainContentOfPage": {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
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

    // Add preload and prefetch links
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
    addPrefetchLink('/about')

    // Google Analytics (if available)
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: 'Contact Us - Get Your Project Started',
        page_location: window.location.href
      })
    }

  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section aria-label="Contact hero section">
        <ContactHeroSection />
      </section>

      {/* Main Content */}
      <main className="flex-1 py-20 bg-gradient-to-b from-white to-gray-50/50" aria-label="Contact information and form">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-12">
              <ContactInfo />
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <section className="py-20 bg-white" aria-label="Frequently asked questions" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <article
                key={index}
                className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 className="font-bold text-[#0A1F44] mb-3 text-lg" itemProp="name">
                  {faq.question}
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-gray-600 leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#0A1F44] text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 group">
              Schedule a Free Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Location/CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] relative overflow-hidden" aria-label="Office locations and call to action" id="locations">
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Don't let your ideas wait. Reach out today and let's discuss how we can transform your vision into a powerful digital solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="inline-flex items-center px-8 py-4 bg-white text-[#0A1F44] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 group shadow-xl hover:shadow-2xl">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </button>

            <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Call Us Now
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto" itemScope itemType="https://schema.org/Organization">
            <div className="text-white/90" itemScope itemType="https://schema.org/PostalAddress">
              <div className="font-semibold mb-2" itemProp="name">Islamabad Office</div>
              <div className="text-sm" itemProp="description">Main Hub & Development Center</div>
              <meta itemProp="addressLocality" content="Islamabad" />
              <meta itemProp="addressCountry" content="PK" />
            </div>
            <div className="text-white/90" itemScope itemType="https://schema.org/PostalAddress">
              <div className="font-semibold mb-2" itemProp="name">Faisalabad Office</div>
              <div className="text-sm" itemProp="description">Regional Operations & Support</div>
              <meta itemProp="addressLocality" content="Faisalabad" />
              <meta itemProp="addressCountry" content="PK" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}