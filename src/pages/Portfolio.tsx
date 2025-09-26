import { useEffect, type JSX } from "react"
import PortfolioHeroSection from "@/components/portfolio/PortfolioHeroSection"
import ProjectCard from "@/components/portfolio/ProjectCard"
import TestimonialCard from "@/components/portfolio/TestimonialCard"
import { projects, testimonials } from "@/data/portfolio"
import { ArrowRight, Code, Smartphone, BarChart3 } from "lucide-react"

const industries = [
  {
    icon: BarChart3,
    title: "Enterprise Solutions",
    description: "ERP, CRM, and business management systems",
    projectCount: "45+ Projects",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Smartphone,
    title: "E-Commerce & Retail",
    description: "Online stores and marketplace solutions",
    projectCount: "30+ Projects",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Code,
    title: "Healthcare & Tech",
    description: "Medical systems and tech startups",
    projectCount: "25+ Projects",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]

const caseStudyHighlights = [
  {
    metric: "300%",
    label: "Efficiency Increase",
    description: "Textile ERP System",
  },
  {
    metric: "200%",
    label: "Sales Growth",
    description: "E-commerce Platform",
  },
  {
    metric: "60%",
    label: "Cost Reduction",
    description: "Real Estate CRM",
  },
  {
    metric: "24/7",
    label: "System Uptime",
    description: "All Solutions",
  },
]

export default function Portfolio(): JSX.Element {
  useEffect(() => {
    // Set page title
    document.title = "Portfolio - Our Best Web Development Projects | CascadingXol"

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
    setMetaTag('description', 'Explore CascadingXol\'s impressive portfolio featuring 100+ successful web development projects, enterprise solutions, e-commerce platforms, and digital transformations across various industries.')
    setMetaTag('keywords', 'web development portfolio, project showcase, enterprise solutions, e-commerce development, digital solutions examples, client projects, case studies, Pakistan web development')
    setMetaTag('author', 'CascadingXol')
    setMetaTag('robots', 'index, follow')
    setMetaTag('theme-color', '#3B82F6')
    setMetaTag('language', 'English')
    setMetaTag('geo.region', 'PK')
    setMetaTag('geo.placename', 'Pakistan')

    // Portfolio-specific meta tags
    setMetaTag('page-topic', 'Portfolio Projects')
    setMetaTag('page-type', 'Portfolio Page')
    setMetaTag('audience', 'Potential Clients, Business Owners')
    setMetaTag('content-type', 'Project Showcase')

    // Open Graph Tags
    setMetaTag('og:type', 'website', true)
    setMetaTag('og:site_name', 'CascadingXol', true)
    setMetaTag('og:title', 'CascadingXol Portfolio - 100+ Successful Web Development Projects', true)
    setMetaTag('og:description', 'View our impressive portfolio of enterprise solutions, e-commerce platforms, and digital transformations. Real projects, real results.', true)
    setMetaTag('og:image', 'https://www.cascadingxol.com/images/portfolio-og.jpg', true)
    setMetaTag('og:image:width', '1200', true)
    setMetaTag('og:image:height', '630', true)
    setMetaTag('og:url', 'https://www.cascadingxol.com/portfolio', true)
    setMetaTag('og:locale', 'en_US', true)

    // Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:site', '@cascadingxol')
    setMetaTag('twitter:creator', '@cascadingxol')
    setMetaTag('twitter:title', 'CascadingXol Portfolio - 100+ Web Development Success Stories')
    setMetaTag('twitter:description', 'Discover our portfolio of enterprise solutions, e-commerce platforms, and digital transformations that delivered exceptional results.')
    setMetaTag('twitter:image', 'https://www.cascadingxol.com/images/portfolio-twitter.jpg')

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://www.cascadingxol.com/portfolio'

    // Schema.org structured data for Portfolio page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "CascadingXol Portfolio - Web Development Projects",
      "description": "Discover CascadingXol's portfolio showcasing successful web development projects, digital solutions, and client success stories across various industries",
      "url": "https://www.cascadingxol.com/portfolio",
      "mainEntity": {
        "@type": "Organization",
        "name": "CascadingXol",
        "url": "https://www.cascadingxol.com"
      },
      "hasPart": [
        {
          "@type": "CreativeWork",
          "@id": "enterprise-solutions",
          "name": "Enterprise Solutions",
          "description": "ERP, CRM, and business management systems",
          "creator": {
            "@type": "Organization",
            "name": "CascadingXol"
          }
        },
        {
          "@type": "CreativeWork",
          "@id": "ecommerce-retail",
          "name": "E-Commerce & Retail",
          "description": "Online stores and marketplace solutions",
          "creator": {
            "@type": "Organization",
            "name": "CascadingXol"
          }
        },
        {
          "@type": "CreativeWork",
          "@id": "healthcare-tech",
          "name": "Healthcare & Tech",
          "description": "Medical systems and tech startups",
          "creator": {
            "@type": "Organization",
            "name": "CascadingXol"
          }
        }
      ],
      "review": testimonials.map((testimonial) => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": testimonial.rating || 5,
          "bestRating": 5
        },
        "author": {
          "@type": "Person",
          "name": testimonial.client
        },
        "reviewBody": testimonial.quote,
        "itemReviewed": {
          "@type": "Service",
          "name": testimonial.project || "Web Development Service"
        }
      }))
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
    addPrefetchLink('/contact')
    addPrefetchLink('/about')

    // Google Analytics (if available)
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: 'Portfolio - Web Development Projects',
        page_location: window.location.href
      })
    }

  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section aria-label="Portfolio hero section">
        <PortfolioHeroSection />
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden" aria-label="Industries we serve" id="industries">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#8B0000] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#0A1F44] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprises, we've delivered solutions across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16" itemScope itemType="https://schema.org/ItemList">
            {industries.map((industry, index) => (
              <article
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#8B0000]/20 hover:-translate-y-2"
                itemScope
                itemType="https://schema.org/Service"
                itemProp="itemListElement"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={`${industry.title} projects showcase`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute top-6 left-6">
                    <div className="p-3 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-2xl shadow-xl">
                      <industry.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-1" itemProp="name">
                      {industry.title}
                    </h3>
                    <p className="text-white/80 text-sm" itemProp="description">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[#8B0000] font-semibold">
                      {industry.projectCount}
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#8B0000] group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                  </div>
                </div>
                <meta itemProp="provider" content="CascadingXol" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white" aria-label="Featured projects" id="featured-projects">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real solutions that delivered exceptional results for our clients
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                desc={project.desc}
                image={project.image}
                technologies={project.technologies}
                results={project.results}
              />
            ))}
          </div>

          {/* Case Study Highlights */}
          <div className="bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-3xl p-12 text-white relative overflow-hidden" role="region" aria-label="Case study results">
            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Results That Matter</h3>
                <p className="text-xl text-white/80">
                  Measurable impact across all our projects
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {caseStudyHighlights.map((highlight, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-white mb-2" aria-label={`${highlight.metric} ${highlight.label}`}>
                      {highlight.metric}
                    </div>
                    <div className="text-lg font-medium text-white/90 mb-1">
                      {highlight.label}
                    </div>
                    <div className="text-sm text-white/70">
                      {highlight.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50" aria-label="Client testimonials" id="testimonials">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the businesses we've helped transform and grow
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                client={testimonial.client}
                position={testimonial.position}
                company={testimonial.company}
                rating={testimonial.rating}
                project={testimonial.project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] relative overflow-hidden" aria-label="Call to action" id="cta">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='5' cy='5' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss your project and create a solution that delivers exceptional results. Your success story could be next in our portfolio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-[#0A1F44] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 group shadow-xl hover:shadow-2xl">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </button>

            <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Download Case Studies
            </button>
          </div>

          <div className="mt-8 text-white/70 text-sm">
            hello@cascadingxol.com | +92 300 1234567
          </div>
        </div>
      </section>
    </div>
  )
}