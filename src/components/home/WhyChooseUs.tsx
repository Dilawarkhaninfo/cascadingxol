import { Rocket, Layers, Globe, ArrowRight, CheckCircle, Users, Award } from "lucide-react"

const features = [
  {
    icon: <Rocket className="h-12 w-12 text-[#8B0000]" />,
    title: "Innovative Approach",
    description: "We blend creativity with cutting-edge technology to deliver solutions that set you apart from the competition.",
    image: "https://images.unsplash.com/photo-1553028826-f4804151e04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: "50+ Innovations",
    benefits: ["Latest Technologies", "Creative Solutions", "Future-Ready"]
  },
  {
    icon: <Layers className="h-12 w-12 text-[#0A1F44]" />,
    title: "End-to-End Solutions",
    description: "From initial concept to final deployment and ongoing support - we handle every aspect of your digital transformation.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: "360° Coverage",
    benefits: ["Complete Development", "Full Support", "Maintenance Included"]
  },
  {
    icon: <Globe className="h-12 w-12 text-[#8B0000]" />,
    title: "Global Vision",
    description: "Local roots with international standards. We build solutions that scale globally while understanding local market needs.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: "10+ Countries",
    benefits: ["International Standards", "Local Understanding", "Global Reach"]
  }
]

const achievements = [
  { icon: Users, number: "100+", label: "Happy Clients" },
  { icon: Award, number: "150+", label: "Projects Delivered" },
  { icon: CheckCircle, number: "99%", label: "Success Rate" }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='5' cy='5' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A1F44]/10 to-[#8B0000]/10 rounded-full px-6 py-2 mb-6">
            <Award className="h-5 w-5 text-[#8B0000]" />
            <span className="text-sm font-semibold text-[#0A1F44]">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Excellence in Every
            <span className="text-transparent bg-gradient-to-r from-[#8B0000] to-[#0A1F44] bg-clip-text"> Solution</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just deliver software - we craft digital experiences that transform businesses and drive growth in the modern economy.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#8B0000]/20"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 left-4">
                  <div className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                    {feature.icon}
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-bold text-[#0A1F44]">{feature.stats}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A1F44] mb-3 group-hover:text-[#8B0000] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 mb-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#8B0000] flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center text-[#8B0000] font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#8B0000]/30 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="relative">
          {/* Background Card */}
          <div className="bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
          

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Proven Track Record
                </h3>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Numbers that speak for our commitment to excellence and client satisfaction.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-lg text-white/80">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <p className="text-lg text-white/90 mb-6">
                  Ready to join our success stories?
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-white text-[#0A1F44] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 group shadow-xl hover:shadow-2xl">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}