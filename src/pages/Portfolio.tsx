import PortfolioHeroSection from "@/components/portfolio/PortfolioHeroSection";
import { ArrowRight, Code, Smartphone, BarChart3, Star } from "lucide-react";

interface Industry {
  icon: any;
  title: string;
  image: string;
}

interface Project {
  title: string;
  image: string;
}

interface Testimonial {
  quote: string;
  client: string;
  position: string;
  company: string;
  rating: number;
}

interface CaseStudy {
  metric: string;
  label: string;
  description: string;
}

const industries: Industry[] = [
  {
    icon: BarChart3,
    title: "Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Smartphone,
    title: "E-Commerce & Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Code,
    title: "Healthcare & Tech",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const projects: Project[] = [
  {
    title: "Enterprise ERP System",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Real Estate CRM",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Healthcare Portal",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mobile Banking App",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Logistics Dashboard",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "CascadingXol transformed our business operations with their enterprise solution. The system has increased our efficiency by 300%.",
    client: "Ahmed Khan",
    position: "CEO",
    company: "Textile Industries Ltd",
    rating: 5,
  },
  {
    quote: "Their e-commerce platform doubled our online sales within the first quarter. Exceptional work and support throughout.",
    client: "Sarah Ahmed",
    position: "Founder",
    company: "Fashion Retail Co",
    rating: 5,
  },
];

const caseStudyHighlights: CaseStudy[] = [
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
      <section className="pb-20   relative overflow-hidden">
        <PortfolioHeroSection/>
      </section>

      {/* Industries - No Gap */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="w-full mx-auto   relative z-10 ">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We
              <span className="block bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">Transform</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering excellence across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 mb-24">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className="group relative h-[500px] overflow-hidden transition-all duration-500 hover:z-10"
                  style={{
                    backgroundImage: `url(${industry.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />
                  
                  <div className="relative h-full flex flex-col justify-end p-8 z-10">
                    <div className="flex items-center gap-4 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured Projects Grid */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured
              <span className="block bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real solutions that delivered exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 mb-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative h-[400px] overflow-hidden transition-all duration-500 hover:z-10"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />
                
                <div className="relative h-full flex flex-col justify-end p-6 z-10">
                  <h3 className="text-xl font-bold text-white transform group-hover:translate-y-[-10px] transition-transform duration-500">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Results Section */}
          <div className="relative container mx-auto px-6 bg-gradient-to-br from-red-950/95 via-slate-900/90 to-red-950/95 rounded-3xl p-12 border border-red-800/50 overflow-hidden shadow-2xl backdrop-blur-sm mb-24">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(220,38,38,0.4)_1px,transparent_1px),linear-gradient(rgba(220,38,38,0.4)_1px,transparent_1px)] bg-[size:40px_40px] animate-cyber-grid" />
            </div>

            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Results That Matter
                </h3>
                <p className="text-lg text-red-200">
                  Measurable impact across all our projects
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {caseStudyHighlights.map((highlight, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-red-200 bg-clip-text">
                      {highlight.metric}
                    </div>
                    <div className="text-base lg:text-lg font-semibold text-white mb-1">
                      {highlight.label}
                    </div>
                    <div className="text-sm text-red-200">
                      {highlight.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client Success
              <span className="block bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the businesses we've helped transform
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto pb-24">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-red-600 text-red-600" />
                  ))}
                </div>

                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.client.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.client}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-red-950/95 via-slate-900/90 to-red-950/95 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(220,38,38,0.4)_1px,transparent_1px),linear-gradient(rgba(220,38,38,0.4)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Ready to Join Our Success Stories?
          </h2>

          <p className="text-lg text-red-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            Let's discuss your project and create a solution that delivers exceptional results. Your success story could be next in our portfolio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 group shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] transform hover:-translate-y-1">
              <span>Start Your Project</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="inline-flex items-center px-8 py-4 border-2 border-red-500/50 text-white rounded-full font-semibold hover:bg-red-500/10 transition-all duration-300 backdrop-blur-sm hover:border-red-500/70">
              Download Case Studies
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes cyber-grid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        .animate-cyber-grid { animation: cyber-grid 25s linear infinite; }
      `}</style>
    </div>
  );
}