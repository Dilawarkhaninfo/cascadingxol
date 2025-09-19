import { Monitor, Smartphone, BarChart3, Cpu, Palette, Database, ArrowRight, Star } from "lucide-react"

const services = [
  {
    icon: <Monitor className="h-12 w-12" />,
    title: "Web Development",
    description: "Modern websites & SaaS platforms that scale globally with cutting-edge technologies.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["React/Next.js", "Cloud Hosting", "SEO Optimized"],
    price: "From $1,500",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    rating: 4.9
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Mobile Apps",
    description: "Native iOS & Android apps that deliver exceptional user experiences and drive engagement.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Cross-Platform", "Native Performance", "App Store Ready"],
    price: "From $3,000",
    gradient: "from-[#8B0000] to-red-600",
    bgGradient: "from-red-50 to-red-100",
    rating: 4.8
  },
  {
    icon: <BarChart3 className="h-12 w-12" />,
    title: "Desktop Solutions",
    description: "Powerful desktop applications for enterprises, including ERP, CRM, and custom business tools.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Custom Solutions", "Enterprise Ready", "Data Analytics"],
    price: "From $5,000",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
    rating: 4.9
  },
  {
    icon: <Cpu className="h-12 w-12" />,
    title: "AI & Automation",
    description: "Smart business systems powered by AI to automate processes and boost productivity.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Machine Learning", "Process Automation", "Smart Analytics"],
    price: "From $2,500",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
    rating: 4.7
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "Digital Marketing",
    description: "Complete digital marketing solutions including SEO, social media, and brand development.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["SEO Optimization", "Social Media", "Brand Design"],
    price: "From $800",
    gradient: "from-pink-500 to-pink-600",
    bgGradient: "from-pink-50 to-pink-100",
    rating: 4.8
  },
  {
    icon: <Database className="h-12 w-12" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration services, and cloud-native application development.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["AWS/Azure", "Migration", "Scalability"],
    price: "From $1,200",
    gradient: "from-indigo-500 to-indigo-600",
    bgGradient: "from-indigo-50 to-indigo-100",
    rating: 4.9
  }
]

export default function ServicesSnapshot() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B0000] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#0A1F44] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A1F44]/10 to-[#8B0000]/10 rounded-full px-6 py-2 mb-6">
            <Cpu className="h-5 w-5 text-[#8B0000]" />
            <span className="text-sm font-semibold text-[#0A1F44]">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Complete Digital
            <span className="text-transparent bg-gradient-to-r from-[#8B0000] to-[#0A1F44] bg-clip-text"> Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From web development to AI solutions - we provide end-to-end technology services that drive your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg   transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#8B0000]/20  "
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div className={`p-3 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg text-white`}>
                    {service.icon}
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-bold text-gray-900">{service.rating}</span>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-bold text-[#0A1F44]">{service.price}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A1F44] mb-3 group-hover:text-[#8B0000] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${service.bgGradient} text-gray-700`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] text-white rounded-xl hover:shadow-xl transition-all duration-300 group-hover:scale-105 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0A1F44] to-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              We create tailored solutions that perfectly match your business requirements and goals.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#0A1F44] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 group">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}