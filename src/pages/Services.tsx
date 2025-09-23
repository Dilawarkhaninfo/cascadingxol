import ServiceCard from "@/components/services/ServiceCard"
import ServicesHeroSection from "@/components/services/ServicesHeroSection"
import { services } from "@/data/services"
import { CheckCircle, ArrowRight, Star, Users, Clock, Shield, Zap } from "lucide-react"

const processSteps = [
    {
        step: "01",
        title: "Discovery & Planning",
        description: "We analyze your requirements and create a comprehensive project roadmap",
        icon: Users
    },
    {
        step: "02",
        title: "Design & Development",
        description: "Our experts bring your vision to life with cutting-edge technologies",
        icon: Zap
    },
    {
        step: "03",
        title: "Testing & Deployment",
        description: "Rigorous testing ensures quality before launching your solution",
        icon: Shield
    },
    {
        step: "04",
        title: "Support & Maintenance",
        description: "Ongoing support and updates to keep your solution running smoothly",
        icon: Clock
    }
]

const whyChooseUsPoints = [
    "5+ Years of Industry Experience",
    "100+ Successful Projects Delivered",
    "24/7 Technical Support Available",
    "Agile Development Methodology",
    "Fixed-Price & Timeline Guarantees",
    "Post-Launch Support Included"
]

const testimonials = [
    {
        quote: "CascadingXol delivered our e-commerce platform ahead of schedule with exceptional quality.",
        author: "Ahmad Hassan",
        position: "CEO, TechMart",
        service: "Web Development",
        rating: 5
    },
    {
        quote: "Their mobile app increased our customer engagement by 200%. Highly recommended!",
        author: "Sarah Khan",
        position: "Founder, HealthPlus",
        service: "Mobile Development",
        rating: 5
    },
    {
        quote: "The AI automation system transformed our business operations completely.",
        author: "Dr. Ali Raza",
        position: "Director, MedTech Solutions",
        service: "AI Solutions",
        rating: 5
    }
]

export default function Services() {
    return (
        <div className="flex flex-col">
            
            <ServicesHeroSection />

            
            {/* Services Grid */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-[#8B0000] rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#0A1F44] rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                            Our Service Portfolio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive technology solutions tailored to your business needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                desc={service.desc}
                                extra={service.extra}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                            Our Proven Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A systematic approach that ensures quality delivery and client satisfaction
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="text-center">
                                    <div className="relative mb-6">
                                        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                            <step.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#8B0000] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                            {step.step}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connection Line */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#0A1F44]/30 to-[#8B0000]/30 transform translate-x-4" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                                Why Choose CascadingXol?
                            </h2>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                We combine technical expertise with business understanding to deliver
                                solutions that not just work, but excel in real-world conditions.
                            </p>

                            <div className="space-y-4 mb-8">
                                {whyChooseUsPoints.map((point, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#0A1F44] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 group">
                                Start Your Project Today
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Professional team working"
                                className="rounded-2xl shadow-2xl"
                            />

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border">
                                <div className="flex items-center space-x-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-[#8B0000]">99%</div>
                                        <div className="text-xs text-gray-600">Success Rate</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-[#0A1F44]">4.9</div>
                                        <div className="text-xs text-gray-600">Avg Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Real feedback from satisfied clients across different services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                {/* Rating Stars */}
                                <div className="flex space-x-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>

                                {/* Author */}
                                <div className="border-t border-gray-200 pt-4">
                                    <div className="font-semibold text-[#0A1F44]">{testimonial.author}</div>
                                    <div className="text-sm text-gray-600 mb-2">{testimonial.position}</div>
                                    <div className="inline-block px-3 py-1 bg-[#8B0000]/10 text-[#8B0000] text-xs font-medium rounded-full">
                                        {testimonial.service}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] relative overflow-hidden">
             

                <div className="max-w-4xl mx-auto px-6 text-center relative">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>

                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Let's discuss your project requirements and create a solution that drives real results.
                        Get started with a free consultation today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center px-8 py-4 bg-white text-[#0A1F44] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 group shadow-xl hover:shadow-2xl">
                            Get Free Quote
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>

                        <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            Schedule Call
                        </button>
                    </div>

                    <div className="mt-8 text-white/70 text-sm">
                        📧 hello@cascadingxol.com | 📞 +92 300 1234567
                    </div>
                </div>
            </section>
        </div>
    )
}