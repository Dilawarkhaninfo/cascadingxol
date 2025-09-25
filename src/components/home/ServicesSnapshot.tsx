import { Monitor, Smartphone, BarChart3, Cpu, Palette, Database, ArrowRight } from "lucide-react"

const services = [
  {
    icon: <Monitor className="h-8 w-8" />,
    title: "Web Development",
    description: "Modern websites & SaaS platforms that scale globally.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From $1,500",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Apps",
    description: "Native iOS & Android apps with exceptional UX.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From $3,000",
    gradient: "from-[#8B0000] to-red-600"
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Desktop Solutions",
    description: "Powerful enterprise applications and business tools.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From $5,000",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI & Automation",
    description: "Smart business systems powered by AI technology.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From $2,500",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Digital Marketing",
    description: "Complete marketing solutions including SEO & branding.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From $800",
    gradient: "from-pink-500 to-pink-600"
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From $1,200",
    gradient: "from-indigo-500 to-indigo-600"
  }
]

export default function ServicesSnapshot() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B0000] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#0A1F44] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A1F44]/10 to-[#8B0000]/10 rounded-full px-6 py-2 mb-6">
            <Cpu className="h-5 w-5 text-[#8B0000]" />
            <span className="text-sm font-semibold text-[#0A1F44]">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Complete Digital
            <span className="text-transparent bg-gradient-to-r from-[#8B0000] to-[#0A1F44] bg-clip-text"> Solutions</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From web development to AI solutions - we drive your business forward.
          </p>
        </div>

        {/* Compact Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-96 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#8B0000]/20"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/80 group-hover:via-black/40 group-hover:to-black/30 transition-all duration-500" />
              
              {/* Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 backdrop-blur-[1px]" />

              {/* Icon */}
              <div className="absolute top-4 left-4">
                <div className={`p-2 bg-gradient-to-br ${service.gradient} rounded-lg shadow-lg text-white backdrop-blur-sm border border-white/20`}>
                  {service.icon}
                </div>
              </div>

              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/30">
                <span className="text-xs font-bold text-[#0A1F44]">{service.price}</span>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg group-hover:text-red-200 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-200 text-sm mb-4 leading-relaxed drop-shadow-md">
                  {service.description}
                </p>

                {/* Simple CTA */}
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                  <span className="text-sm font-medium text-white drop-shadow-sm">Learn More</span>
                  <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform duration-300 drop-shadow-sm" />
                </div>
              </div>

              {/* Hover Scale Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/10 to-[#8B0000]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

     
      </div>
    </section>
  )
}