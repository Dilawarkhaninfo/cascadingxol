import { Lightbulb, Shield, TrendingUp, Award, CheckCircle, ArrowRight } from "lucide-react"

const values = [
    {
        icon: <Lightbulb className="h-12 w-12" />,
        title: "Innovation",
        subtitle: "Creativity & New Ideas",
        description: "We embrace cutting-edge technologies and creative thinking to deliver solutions that set new industry standards and drive meaningful change.",
        image: "https://images.unsplash.com/photo-1553028826-f4804151e04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        gradient: "from-purple-500 to-purple-600",
        bgGradient: "from-purple-50 to-purple-100",
        principles: ["Latest Technologies", "Creative Problem Solving", "Future-Forward Thinking"]
    },
    {
        icon: <Shield className="h-12 w-12" />,
        title: "Integrity",
        subtitle: "Trust & Honesty",
        description: "We build lasting relationships through transparency, ethical practices, and unwavering commitment to our promises and deadlines.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        gradient: "from-blue-500 to-blue-600",
        bgGradient: "from-blue-50 to-blue-100",
        principles: ["Transparent Communication", "Ethical Practices", "Reliable Delivery"]
    },
    {
        icon: <TrendingUp className="h-12 w-12" />,
        title: "Scalability",
        subtitle: "Growth-Ready Solutions",
        description: "Every solution we create is designed to grow with your business, ensuring long-term value and adaptability to changing needs.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        gradient: "from-green-500 to-green-600",
        bgGradient: "from-green-50 to-green-100",
        principles: ["Future-Proof Architecture", "Flexible Design", "Performance Optimization"]
    },
    {
        icon: <Award className="h-12 w-12" />,
        title: "Excellence",
        subtitle: "World-Class Quality",
        description: "We strive for perfection in every project, maintaining the highest standards of quality that compete on the global stage.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        gradient: "from-[#8B0000] to-red-600",
        bgGradient: "from-red-50 to-red-100",
        principles: ["Quality Assurance", "Best Practices", "Global Standards"]
    }
]

const achievements = [
    { metric: "99%", label: "Client Satisfaction" },
    { metric: "100%", label: "On-Time Delivery" },
    { metric: "24/7", label: "Support Available" },
    { metric: "150+", label: "Projects Delivered" }
]

export default function CoreValues() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
            {/* Background Pattern */}
         

            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#8B0000]/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#0A1F44]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A1F44]/10 to-[#8B0000]/10 rounded-full px-6 py-2 mb-6">
                        <Award className="h-5 w-5 text-[#8B0000]" />
                        <span className="text-sm font-semibold text-[#0A1F44]">Core Values</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
                        Values That Drive
                        <span className="text-transparent bg-gradient-to-r from-[#8B0000] to-[#0A1F44] bg-clip-text"> Excellence</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our core values aren't just words on a wall - they're the foundation of every decision we make,
                        every solution we build, and every relationship we nurture.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#8B0000]/20 hover:-translate-y-2"
                        >
                            {/* Image Section */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={value.image}
                                    alt={value.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                {/* Icon overlay */}
                                <div className="absolute top-6 left-6">
                                    <div className={`p-4 bg-gradient-to-br ${value.gradient} rounded-2xl shadow-xl text-white`}>
                                        {value.icon}
                                    </div>
                                </div>

                                {/* Title overlay */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {value.title}
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        {value.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8">
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {value.description}
                                </p>

                                {/* Principles */}
                                <div className="space-y-3 mb-6">
                                    {value.principles.map((principle, principleIndex) => (
                                        <div key={principleIndex} className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            <span className="text-sm text-gray-700">{principle}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Learn More Link */}
                                <div className="flex items-center text-[#8B0000] font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                                    <span className="text-sm">How We Apply This</span>
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#8B0000]/30 rounded-3xl transition-all duration-300" />
                        </div>
                    ))}
                </div>

                {/* Achievements Section */}
                <div className="relative">
                    <div className="bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
              

                        <div className="relative">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    Values in Action
                                </h3>
                                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                    These aren't just ideals - they're measurable commitments we deliver on every single day.
                                </p>
                            </div>

                            {/* Achievements Grid */}
                            <div className="grid md:grid-cols-4 gap-8 mb-12">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="text-center group">
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                                            <div className="text-3xl font-bold text-white">
                                                {achievement.metric}
                                            </div>
                                        </div>
                                        <div className="text-lg font-medium text-white/90">
                                            {achievement.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Content */}
                            <div className="text-center">
                                <h4 className="text-2xl font-bold mb-4">
                                    Experience Our Values Firsthand
                                </h4>
                                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                                    Every project is an opportunity to demonstrate our commitment to innovation,
                                    integrity, scalability, and excellence.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="inline-flex items-center px-8 py-4 bg-white text-[#0A1F44] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 group shadow-xl hover:shadow-2xl">
                                        Start Your Project
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>

                                    <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                        Read Our Case Studies
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}