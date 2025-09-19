import { Code, Users, Building, Mail, Linkedin, MapPin, Briefcase, GraduationCap } from "lucide-react"

const team = [
    {
        name: "Dilawar Khan",
        role: "Founder & Technical Lead",
        description: "Full-stack development, product architecture, and team leadership. Passionate about creating scalable solutions that drive business growth.",
        expertise: ["React/Next.js", "Node.js", "System Architecture", "Team Leadership"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        background: "Software Engineering Graduate with 5+ years in full-stack development",
        location: "Islamabad, Pakistan",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "dilawar@cascadingxol.com"
        },
        gradient: "from-[#0A1F44] to-blue-600",
        icon: Code
    },
    {
        name: "Rashid Sb",
        role: "Marketing & Business Development",
        description: "Strategic marketing, client relations, and business growth. Expert in real estate sector with deep market insights.",
        expertise: ["Digital Marketing", "Client Relations", "Real Estate", "Business Strategy"],
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        background: "15+ years in Real Estate and Business Development",
        location: "Islamabad, Pakistan",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "rashid@cascadingxol.com"
        },
        gradient: "from-[#8B0000] to-red-600",
        icon: Users
    },
    {
        name: "Nadeem Sb",
        role: "Business & Operations",
        description: "Operations management, strategic partnerships, and business process optimization across textile and pharmaceutical sectors.",
        expertise: ["Operations Management", "Strategic Partnerships", "Textile Industry", "Pharmaceutical Sector"],
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        background: "20+ years in Textile and Pharmaceutical Operations",
        location: "Islamabad, Pakistan",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "nadeem@cascadingxol.com"
        },
        gradient: "from-green-500 to-green-600",
        icon: Building
    }
]

const teamStats = [
    { number: "50+", label: "Combined Years Experience" },
    { number: "100+", label: "Projects Led Together" },
    { number: "3", label: "Industry Sectors Covered" },
    { number: "24/7", label: "Collaborative Support" }
]

export default function TeamSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-72 h-72 bg-[#8B0000] rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#0A1F44] rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A1F44]/10 to-[#8B0000]/10 rounded-full px-6 py-2 mb-6">
                        <Users className="h-5 w-5 text-[#8B0000]" />
                        <span className="text-sm font-semibold text-[#0A1F44]">Our Team</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
                        Meet the Visionaries Behind
                        <span className="text-transparent bg-gradient-to-r from-[#8B0000] to-[#0A1F44] bg-clip-text"> CascadingXol</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A diverse team of experts with complementary skills, united by a shared vision of transforming
                        businesses through innovative technology solutions.
                    </p>
                </div>

                {/* Team Stats */}
                <div className="grid md:grid-cols-4 gap-6 mb-20">
                    {teamStats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                <div className="text-3xl font-bold text-[#8B0000] mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Members Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#8B0000]/20 hover:-translate-y-3"
                        >
                            {/* Profile Image Section */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                {/* Role Icon */}
                                <div className="absolute top-6 left-6">
                                    <div className={`p-3 bg-gradient-to-br ${member.gradient} rounded-2xl shadow-xl`}>
                                        <member.icon className="h-6 w-6 text-white" />
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="absolute top-6 right-6 flex space-x-2">
                                    <a
                                        href={member.social.linkedin}
                                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300"
                                    >
                                        <Linkedin className="h-4 w-4 text-white" />
                                    </a>
                                    <a
                                        href={member.social.email}
                                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300"
                                    >
                                        <Mail className="h-4 w-4 text-white" />
                                    </a>
                                </div>

                                {/* Name and Role Overlay */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-white/90 font-medium">
                                        {member.role}
                                    </p>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8">
                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {member.description}
                                </p>

                                {/* Background */}
                                <div className="flex items-start space-x-3 mb-6">
                                    <GraduationCap className="h-5 w-5 text-[#8B0000] mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-[#0A1F44] text-sm mb-1">Background</h4>
                                        <p className="text-sm text-gray-600">{member.background}</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center space-x-3 mb-6">
                                    <MapPin className="h-4 w-4 text-gray-400" />
                                    <span className="text-sm text-gray-600">{member.location}</span>
                                </div>

                                {/* Expertise Tags */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-[#0A1F44] text-sm mb-3">Core Expertise</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {member.expertise.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Button */}
                                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] text-white rounded-xl hover:shadow-xl transition-all duration-300 group-hover:scale-105 font-semibold">
                                    <Mail className="h-4 w-4" />
                                    <span>Get in Touch</span>
                                </button>
                            </div>

                            {/* Animated Border Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0A1F44] to-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                        </div>
                    ))}
                </div>

                {/* Join Team CTA */}
                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='5' cy='5' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }} />
                        </div>

                        <div className="relative max-w-2xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                Join Our Growing Team
                            </h3>

                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                We're always looking for passionate individuals who share our vision of transforming
                                businesses through innovative technology. Ready to make an impact?
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="inline-flex items-center px-8 py-4 bg-white text-[#0A1F44] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 group shadow-xl hover:shadow-2xl">
                                    View Open Positions
                                    <Briefcase className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                                </button>

                                <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                    Send Your Resume
                                </button>
                            </div>

                            {/* Contact Info */}
                            <div className="mt-8 flex items-center justify-center space-x-2 text-white/80">
                                <Mail className="h-4 w-4" />
                                <span className="text-sm">careers@cascadingxol.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}