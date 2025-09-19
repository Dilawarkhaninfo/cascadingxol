import { Calendar, MapPin, Users, Trophy, ArrowRight, Sparkles } from "lucide-react"

const milestones = [
    {
        year: "2019",
        title: "The Beginning",
        description: "Founded with a vision to transform businesses through technology",
        icon: Sparkles
    },
    {
        year: "2021",
        title: "First Major Client",
        description: "Delivered our first enterprise solution, establishing credibility",
        icon: Trophy
    },
    {
        year: "2023",
        title: "Team Expansion",
        description: "Grew to a full-service team covering all aspects of digital transformation",
        icon: Users
    },
    {
        year: "2025",
        title: "Global Vision",
        description: "Expanding internationally while maintaining our core values and quality",
        icon: MapPin
    }
]

const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "10+", label: "Countries Served" }
]

export default function OurStory() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50c0-27.614-22.386-50-50-50v100c27.614 0 50-22.386 50-50z' fill='%23000' fill-opacity='0.1'/%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A1F44]/10 to-[#8B0000]/10 rounded-full px-6 py-2 mb-6">
                            <Calendar className="h-5 w-5 text-[#8B0000]" />
                            <span className="text-sm font-semibold text-[#0A1F44]">Our Journey</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
                            Our Story of
                            <span className="text-transparent bg-gradient-to-r from-[#8B0000] to-[#0A1F44] bg-clip-text"> Innovation</span>
                        </h1>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                CascadingXol was born from a simple yet powerful vision: to bridge the gap between
                                traditional business practices and cutting-edge technology. Founded in the heart of
                                Pakistan, we set out to prove that world-class software solutions could emerge from
                                anywhere with the right passion and expertise.
                            </p>

                            <p>
                                What started as a small team of passionate developers has evolved into a comprehensive
                                digital transformation partner. We believe that technology should empower businesses,
                                not complicate them. Every solution we craft is designed with scalability, innovation,
                                and user experience at its core.
                            </p>

                            <p>
                                Today, we're proud to serve clients across multiple continents, but we've never forgotten
                                our roots or the values that drive us forward.
                            </p>
                        </div>

                        <button className="mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#0A1F44] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 group">
                            Learn More About Us
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="CascadingXol team working together"
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/70 via-transparent to-transparent" />

                            {/* Floating badge */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-lg flex items-center justify-center">
                                        <Trophy className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Award Winning</div>
                                        <div className="text-sm text-gray-600">Software House 2024</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8B0000]/10 rounded-full blur-xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0A1F44]/10 rounded-full blur-xl" />
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                                <div className="text-4xl font-bold text-[#8B0000] mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A1F44] mb-16">
                        Our Journey Through Time
                    </h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0A1F44] to-[#8B0000] rounded-full transform -translate-x-1/2" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}>
                                    {/* Content */}
                                    <div className="flex-1 md:px-8">
                                        <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                            }`}>
                                            <div className="flex items-center space-x-3 mb-3">
                                                <div className={`p-2 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-lg ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                                                    }`}>
                                                    <milestone.icon className="h-5 w-5 text-white" />
                                                </div>
                                                <span className={`text-2xl font-bold text-[#8B0000] ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                                                    }`}>
                                                    {milestone.year}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="hidden md:block w-4 h-4 bg-white border-4 border-[#8B0000] rounded-full shadow-lg z-10" />

                                    <div className="flex-1" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}