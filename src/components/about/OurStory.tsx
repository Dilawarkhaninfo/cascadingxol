import {   MapPin, Users, Trophy, ArrowRight, Sparkles, Star } from "lucide-react"

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

 
export default function OurStory() {
    return (
        <section className="relative min-h-screen bg-gray-50 overflow-hidden">
            {/* Modern background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#0A1F44]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B0000]/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#0A1F44]/3 to-[#8B0000]/3 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
           
                {/* Story Content - Modern Two Column */}
                <div className="bg-white/50 backdrop-blur-sm py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Content */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                                        Building the Future, One Solution at a Time
                                    </h2>
                                    <div className="w-24 h-1 bg-gradient-to-r from-[#8B0000] to-[#0A1F44] rounded-full mb-8"></div>
                                </div>

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
                                        not complicate them.
                                    </p>
                                </div>

                                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-[#0A1F44]/5 to-[#8B0000]/5 rounded-2xl border border-gray-200">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-xl flex items-center justify-center">
                                        <Star className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#0A1F44]">Award Winning Team</div>
                                        <div className="text-gray-600">Recognized for excellence in software development</div>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="CascadingXol team working together"
                                        className="w-full h-[500px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/50 via-transparent to-transparent" />
                                </div>
                                
                                {/* Floating elements */}
                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#8B0000]/10 rounded-full blur-2xl"></div>
                                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#0A1F44]/10 rounded-full blur-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline Section - Modern Horizontal */}
                <div className="container mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                            Our Journey Through Time
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Each milestone represents our commitment to innovation and excellence in software development
                        </p>
                    </div>

                    {/* Modern Timeline */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-full transform -translate-y-1/2"></div>

                        <div className="grid md:grid-cols-4 gap-8 md:gap-4">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative">
                                    {/* Timeline dot */}
                                    <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-[#8B0000] rounded-full shadow-lg z-10"></div>

                                    {/* Content card */}
                                    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 ${
                                        index % 2 === 0 ? 'md:mb-20' : 'md:mt-20'
                                    }`}>
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="p-3 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-xl">
                                                <milestone.icon className="h-6 w-6 text-white" />
                                            </div>
                                            <span className="text-2xl font-bold text-[#8B0000]">
                                                {milestone.year}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action - Modern */}
                <div className="bg-gradient-to-r from-[#0A1F44] to-[#8B0000] text-white">
                    <div className="container mx-auto px-6 py-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Start Your Digital Journey?
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Join the businesses that trust CascadingXol to transform their vision into reality
                        </p>
                        <button className="inline-flex items-center px-8 py-4 bg-white text-[#0A1F44] rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 group">
                            Start Your Project
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}