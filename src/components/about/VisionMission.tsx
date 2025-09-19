import { Target, Eye, Rocket, Globe, ArrowRight, Lightbulb } from "lucide-react"

const visionPoints = [
    {
        icon: Globe,
        title: "Global Reach",
        description: "Expanding across continents while maintaining quality"
    },
    {
        icon: Rocket,
        title: "Innovation Leadership",
        description: "Leading Pakistan's tech revolution on world stage"
    },
    {
        icon: Target,
        title: "Excellence Standard",
        description: "Setting benchmarks for software development"
    }
]

const missionPoints = [
    {
        icon: Lightbulb,
        title: "Digital Transformation",
        description: "Empowering businesses with cutting-edge technology"
    },
    {
        icon: Target,
        title: "Creative Intelligence",
        description: "Blending creativity with technical expertise"
    },
    {
        icon: Globe,
        title: "Trust & Reliability",
        description: "Building lasting partnerships through integrity"
    }
]

export default function VisionMission() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60c0-33.137-26.863-60-60-60v120c33.137 0 60-26.863 60-60z' fill='%23000' fill-opacity='0.05'/%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Floating background elements */}
            <div className="absolute top-20 left-20 w-40 h-40 bg-[#8B0000]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-56 h-56 bg-[#0A1F44]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A1F44]/10 to-[#8B0000]/10 rounded-full px-6 py-2 mb-6">
                        <Eye className="h-5 w-5 text-[#8B0000]" />
                        <span className="text-sm font-semibold text-[#0A1F44]">Vision & Mission</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
                        Our North Star &
                        <span className="text-transparent bg-gradient-to-r from-[#8B0000] to-[#0A1F44] bg-clip-text"> Purpose</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Guided by a clear vision and driven by a meaningful mission, we're building the future of technology solutions.
                    </p>
                </div>

                {/* Main Vision & Mission Cards */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Vision Card */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                            {/* Header */}
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-4 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-2xl">
                                    <Eye className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0A1F44]">Our Vision</h3>
                                    <p className="text-gray-600">Where we're heading</p>
                                </div>
                            </div>

                            {/* Main Vision Statement */}
                            <div className="mb-8">
                                <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
                                    "To become Pakistan's leading global software house, delivering cutting-edge solutions
                                    that transform businesses and set new standards for excellence in technology."
                                </blockquote>
                            </div>

                            {/* Vision Image */}
                            <div className="mb-8 rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Global vision illustration"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Vision Points */}
                            <div className="space-y-4">
                                {visionPoints.map((point, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                                        <div className="p-2 bg-[#0A1F44]/10 rounded-lg flex-shrink-0">
                                            <point.icon className="h-5 w-5 text-[#0A1F44]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#0A1F44] mb-1">{point.title}</h4>
                                            <p className="text-sm text-gray-600">{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000] to-[#0A1F44] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                            {/* Header */}
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-4 bg-gradient-to-r from-[#8B0000] to-[#0A1F44] rounded-2xl">
                                    <Target className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0A1F44]">Our Mission</h3>
                                    <p className="text-gray-600">What drives us daily</p>
                                </div>
                            </div>

                            {/* Main Mission Statement */}
                            <div className="mb-8">
                                <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
                                    "To help businesses achieve digital transformation through creativity, intelligence,
                                    and trust, while building long-lasting partnerships that drive mutual success."
                                </blockquote>
                            </div>

                            {/* Mission Image */}
                            <div className="mb-8 rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Digital transformation mission"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Mission Points */}
                            <div className="space-y-4">
                                {missionPoints.map((point, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                                        <div className="p-2 bg-[#8B0000]/10 rounded-lg flex-shrink-0">
                                            <point.icon className="h-5 w-5 text-[#8B0000]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#0A1F44] mb-1">{point.title}</h4>
                                            <p className="text-sm text-gray-600">{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='5' cy='5' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }} />
                        </div>

                        <div className="relative max-w-3xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Be Part of Our Vision?
                            </h3>

                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                Join us in shaping the future of technology. Whether you're looking for innovative solutions
                                or want to be part of our growing team, let's build something amazing together.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="inline-flex items-center px-8 py-4 bg-white text-[#0A1F44] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 group shadow-xl hover:shadow-2xl">
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>

                                <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                    Join Our Team
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}