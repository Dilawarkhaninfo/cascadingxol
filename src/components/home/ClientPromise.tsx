import { Quote, Star, ArrowRight, Users, Heart, Sparkles } from "lucide-react"

const testimonials = [
    {
        quote: "CascadingXol transformed our business completely. Their innovative approach and attention to detail exceeded all expectations.",
        author: "Sarah Ahmad",
        position: "CEO, TechCorp Pakistan",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        project: "E-commerce Platform"
    },
    {
        quote: "Professional, timely, and incredibly talented. They didn't just build software - they built our digital future.",
        author: "Ahmed Hassan",
        position: "Founder, Digital Solutions",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        project: "Mobile Application"
    },
    {
        quote: "The AI automation system they developed has increased our efficiency by 300%. Remarkable results!",
        author: "Dr. Fatima Khan",
        position: "Director, HealthTech",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        project: "AI Automation"
    }
]

const trustBadges = [
    { icon: Users, label: "100% Client Retention", value: "2+ Years" },
    { icon: Star, label: "Average Rating", value: "4.9/5" },
    { icon: Heart, label: "Project Success", value: "99%" }
]

export default function ClientPromise() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50c0-27.614-22.386-50-50-50s-50 22.386-50 50 22.386 50 50 50 50-22.386 50-50' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-[#8B0000]/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#0A1F44]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 relative">
                {/* Main Promise Statement */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A1F44]/10 to-[#8B0000]/10 rounded-full px-6 py-2 mb-8">
                        <Sparkles className="h-5 w-5 text-[#8B0000]" />
                        <span className="text-sm font-semibold text-[#0A1F44]">Our Promise</span>
                    </div>

                    {/* Main Quote */}
                    <div className="relative max-w-5xl mx-auto">
                        <Quote className="h-16 w-16 text-[#8B0000]/20 absolute -top-8 -left-4 md:-left-8" />
                        <Quote className="h-16 w-16 text-[#8B0000]/20 absolute -bottom-8 -right-4 md:-right-8 rotate-180" />

                        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1F44] leading-tight mb-8 relative z-10">
                            We don't just build software;{' '}
                            <span className="text-transparent bg-gradient-to-r from-[#8B0000] to-[#0A1F44] bg-clip-text">
                                we build businesses ready for the future.
                            </span>
                        </blockquote>
                    </div>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Every line of code, every design decision, and every feature is crafted with your success in mind.
                        We're not just your technology partner - we're invested in your growth.
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {trustBadges.map((badge, index) => (
                        <div key={index} className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                <badge.icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-[#0A1F44] mb-2">{badge.value}</div>
                            <div className="text-gray-600 font-medium">{badge.label}</div>
                        </div>
                    ))}
                </div>

                {/* Client Testimonials */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-[#0A1F44] mb-12">
                        What Our Clients Say
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
                            >
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
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                                    />
                                    <div className="flex-1">
                                        <div className="font-semibold text-[#0A1F44]">{testimonial.author}</div>
                                        <div className="text-sm text-gray-600">{testimonial.position}</div>
                                    </div>
                                </div>

                                {/* Project Badge */}
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#0A1F44]/10 to-[#8B0000]/10 text-[#0A1F44] text-xs font-medium rounded-full">
                                        Project: {testimonial.project}
                                    </span>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0A1F44]/5 to-[#8B0000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
                        {/* Background Pattern */}
                    

                        <div className="relative max-w-2xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Transform Your Business?
                            </h3>

                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                Join the ranks of successful businesses that trust CascadingXol with their digital transformation.
                                Let's build something amazing together.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="inline-flex items-center px-8 py-4 bg-white text-[#0A1F44] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 group shadow-xl hover:shadow-2xl">
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>

                                <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                    Schedule Consultation
                                </button>
                            </div>

                            {/* Trust Indicator */}
                            <div className="mt-8 flex items-center justify-center space-x-2 text-white/80">
                                <Heart className="h-4 w-4" />
                                <span className="text-sm">Trusted by 100+ businesses worldwide</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}