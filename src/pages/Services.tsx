import { useEffect, type JSX } from "react";
import ServiceCard from "@/components/services/ServiceCard";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import { services } from "@/data/services";
import {
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Zap,
} from "lucide-react";
import ClientPromise from "@/components/home/ClientPromise";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements and create a comprehensive project roadmap",
    icon: Users,
  },
  {
    step: "02",
    title: "Design & Development",
    description:
      "Our experts bring your vision to life with cutting-edge technologies",
    icon: Zap,
  },
  {
    step: "03",
    title: "Testing & Deployment",
    description:
      "Rigorous testing ensures quality before launching your solution",
    icon: Shield,
  },
  {
    step: "04",
    title: "Support & Maintenance",
    description:
      "Ongoing support and updates to keep your solution running smoothly",
    icon: Clock,
  },
];

const whyChooseUsPoints = [
  "5+ Years of Industry Experience",
  "100+ Successful Projects Delivered",
  "24/7 Technical Support Available",
  "Agile Development Methodology",
  "Fixed-Price & Timeline Guarantees",
  "Post-Launch Support Included",
];

const testimonials = [
  {
    quote:
      "CascadingXol delivered our e-commerce platform ahead of schedule with exceptional quality.",
    author: "Ahmad Hassan",
    position: "CEO, TechMart",
    service: "Web Development",
    rating: 5,
  },
  {
    quote:
      "Their mobile app increased our customer engagement by 200%. Highly recommended!",
    author: "Sarah Khan",
    position: "Founder, HealthPlus",
    service: "Mobile Development",
    rating: 5,
  },
  {
    quote:
      "The AI automation system transformed our business operations completely.",
    author: "Dr. Ali Raza",
    position: "Director, MedTech Solutions",
    service: "AI Solutions",
    rating: 5,
  },
];

export default function Services(): JSX.Element {
  useEffect(() => {
    // Set page title
    document.title =
      "Our Services - Web Development & Digital Solutions | CascadingXol";

    // Helper function to set meta tags
    const setMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic SEO Meta Tags
    setMetaTag(
      "description",
      "Explore CascadingXol's comprehensive services: custom web development, e-commerce solutions, mobile apps, AI automation, and digital transformation. 100+ successful projects delivered."
    );
    setMetaTag(
      "keywords",
      "web development services, digital solutions, e-commerce development, mobile app development, software services, AI automation, digital transformation, Pakistan"
    );
    setMetaTag("author", "CascadingXol");
    setMetaTag("robots", "index, follow");
    setMetaTag("theme-color", "#3B82F6");
    setMetaTag("language", "English");
    setMetaTag("geo.region", "PK");
    setMetaTag("geo.placename", "Pakistan");

    // Services-specific meta tags
    setMetaTag("page-topic", "Technology Services");
    setMetaTag("page-type", "Services Page");
    setMetaTag("audience", "Business Owners, Entrepreneurs, Startups");
    setMetaTag("content-type", "Service Catalog");

    // Open Graph Tags
    setMetaTag("og:type", "website", true);
    setMetaTag("og:site_name", "CascadingXol", true);
    setMetaTag(
      "og:title",
      "Professional Web Development & Digital Solutions Services",
      true
    );
    setMetaTag(
      "og:description",
      "Custom web development, e-commerce platforms, mobile apps, and AI solutions. 5+ years experience, 100+ projects, 24/7 support.",
      true
    );
    setMetaTag(
      "og:image",
      "https://www.cascadingxol.com/images/services-og.jpg",
      true
    );
    setMetaTag("og:image:width", "1200", true);
    setMetaTag("og:image:height", "630", true);
    setMetaTag("og:url", "https://www.cascadingxol.com/services", true);
    setMetaTag("og:locale", "en_US", true);

    // Twitter Card Tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:site", "@cascadingxol");
    setMetaTag("twitter:creator", "@cascadingxol");
    setMetaTag(
      "twitter:title",
      "Professional Web Development & Digital Solutions"
    );
    setMetaTag(
      "twitter:description",
      "Custom web development, e-commerce, mobile apps & AI solutions. 100+ successful projects with 24/7 support."
    );
    setMetaTag(
      "twitter:image",
      "https://www.cascadingxol.com/images/services-twitter.jpg"
    );

    // Set canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.cascadingxol.com/services";

    // Schema.org structured data for Services page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      provider: {
        "@type": "Organization",
        name: "CascadingXol",
        url: "https://www.cascadingxol.com",
        logo: "https://www.cascadingxol.com/logo.png",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PK",
        },
      },
      serviceType: "Web Development and Digital Solutions",
      description:
        "Comprehensive web development, mobile app development, e-commerce solutions, and digital transformation services",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "CascadingXol Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.desc,
          },
        })),
      },
      areaServed: {
        "@type": "Country",
        name: "Pakistan",
      },
      review: testimonials.map((testimonial) => ({
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: testimonial.rating,
          bestRating: 5,
        },
        author: {
          "@type": "Person",
          name: testimonial.author,
        },
        reviewBody: testimonial.quote,
        itemReviewed: {
          "@type": "Service",
          name: testimonial.service,
        },
      })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "100",
        bestRating: "5",
      },
    };

    // Remove existing structured data
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add preload and prefetch links
    const addPreloadLink = (href: string, as: string, type?: string) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = href;
        link.as = as;
        if (type) link.type = type;
        if (as === "font") link.crossOrigin = "";
        document.head.appendChild(link);
      }
    };

    const addPrefetchLink = (href: string) => {
      if (!document.querySelector(`link[href="${href}"][rel="prefetch"]`)) {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = href;
        document.head.appendChild(link);
      }
    };

    // Preload critical resources
    addPreloadLink("/fonts/inter.woff2", "font", "font/woff2");

    // Prefetch other pages
    addPrefetchLink("/portfolio");
    addPrefetchLink("/contact");
    addPrefetchLink("/about");

    // Google Analytics (if available)
    if (typeof (window as any).gtag !== "undefined") {
      (window as any).gtag("config", "GA_MEASUREMENT_ID", {
        page_title: "Our Services - Web Development & Digital Solutions",
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section aria-label="Services hero section">
        <ServicesHeroSection />
      </section>

      {/* Services Grid */}
      <section
        className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
        aria-label="Our services portfolio"
        id="services-portfolio"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#8B0000] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#0A1F44] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {services.map((service, index) => (
              <div
                key={index}
                itemScope
                itemType="https://schema.org/Service"
                itemProp="itemListElement"
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  desc={service.desc}
                  extra={service.extra}
                />
                <meta itemProp="name" content={service.title} />
                <meta itemProp="description" content={service.desc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section
        className="py-20 bg-white"
        aria-label="Our development process"
        id="our-process"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures quality delivery and client
              satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <article
                key={index}
                className="relative group"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <step.icon
                        className="h-8 w-8 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#8B0000] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold text-[#0A1F44] mb-3"
                    itemProp="name"
                  >
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed" itemProp="text">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#0A1F44]/30 to-[#8B0000]/30 transform translate-x-4"
                    aria-hidden="true"
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-20 bg-gray-50"
        aria-label="Why choose us"
        id="why-choose-us"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                Why Choose CascadingXol?
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine technical expertise with business understanding to
                deliver solutions that not just work, but excel in real-world
                conditions.
              </p>

              <div className="space-y-4 mb-8">
                {whyChooseUsPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle
                      className="h-5 w-5 text-green-500 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#0A1F44] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 group">
                Start Your Project Today
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional development team collaborating on projects"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />

              {/* Floating Stats Card */}
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border"
                role="complementary"
                aria-label="Success statistics"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#8B0000]">99%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0A1F44]">4.9</div>
                    <div className="text-xs text-gray-600">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section
         aria-label="Client testimonials"
        id="testimonials"
      >
        <ClientPromise />
      </section>

  
    </div>
  );
}
