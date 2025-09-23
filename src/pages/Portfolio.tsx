import PortfolioHeroSection from "@/components/portfolio/PortfolioHeroSection";
import ProjectCard from "@/components/portfolio/ProjectCard";
import TestimonialCard from "@/components/portfolio/TestimonialCard";
import { projects, testimonials } from "@/data/portfolio";
import { ArrowRight, Code, Smartphone, BarChart3 } from "lucide-react";

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
];

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
];

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PortfolioHeroSection />

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#8B0000] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#0A1F44] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprises, we've delivered solutions across
              diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#8B0000]/20 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute top-6 left-6">
                    <div className="p-3 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-2xl shadow-xl">
                      <industry.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {industry.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[#8B0000] font-semibold">
                      {industry.projectCount}
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#8B0000] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
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
          <div className="bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-3xl p-12 text-white relative overflow-hidden">
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
                    <div className="text-4xl font-bold text-white mb-2">
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
      <section className="py-20 bg-gray-50">
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
      <section className="py-20 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
            Let's discuss your project and create a solution that delivers
            exceptional results. Your success story could be next in our
            portfolio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-[#0A1F44] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 group shadow-xl hover:shadow-2xl">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Download Case Studies
            </button>
          </div>

          <div className="mt-8 text-white/70 text-sm">
            📧 hello@cascadingxol.com | 📞 +92 300 1234567
          </div>
        </div>
      </section>
    </div>
  );
}
