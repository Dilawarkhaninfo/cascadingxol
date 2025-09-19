import ContactInfo from "@/components/contact/ContactInfo"
import ContactForm from "@/components/contact/ContactForm"
import { MessageSquare, Clock, Users, CheckCircle, ArrowRight, Sparkles } from "lucide-react"

const responseStats = [
    { icon: MessageSquare, metric: "< 2 Hours", label: "Response Time" },
    { icon: Clock, metric: "24/7", label: "Support Available" },
    { icon: Users, metric: "100%", label: "Client Satisfaction" },
    { icon: CheckCircle, metric: "Free", label: "Initial Consultation" }
]

 

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity, but most web projects take 4-8 weeks, mobile apps 8-12 weeks, and enterprise solutions 12-16 weeks."
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes! We offer comprehensive post-launch support including maintenance, updates, and technical assistance for all our projects."
    },
    {
        question: "What's included in the free consultation?",
        answer: "Our free consultation includes requirement analysis, technology recommendations, project scope definition, and a detailed quote with timeline."
    }
]

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-[#0A1F44] via-[#0A1F44]/95 to-[#8B0000] text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='5' cy='5' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="container mx-auto px-6 relative">
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
                            <Sparkles className="h-5 w-5 text-white/80" />
                            <span className="text-sm font-semibold text-white/90">Let's Connect</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Let's Build the Future
                            <span className="text-transparent bg-gradient-to-r from-white to-red-200 bg-clip-text"> Together</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
                            Ready to transform your business with innovative technology? We're here to listen,
                            understand your needs, and create solutions that exceed expectations.
                        </p>

                        {/* Response Stats */}
                        <div className="grid md:grid-cols-4 gap-6 mt-12">
                            {responseStats.map((stat, index) => (
                                <div key={index} className="group">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4">
                                            <stat.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="text-2xl font-bold text-white mb-1">{stat.metric}</div>
                                        <div className="text-white/70 text-sm">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="flex-1 py-20 bg-gradient-to-b from-white to-gray-50/50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column - Contact Info */}
                        <div className="space-y-12">
                            <ContactInfo />

                           
                        </div>

                        {/* Right Column - Contact Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Quick answers to common questions about our services and process
                        </p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="font-bold text-[#0A1F44] mb-3 text-lg">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-6">Still have questions?</p>
                        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#0A1F44] text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 group">
                            Schedule a Free Call
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Map/Location Section */}
            <section className="py-20 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] relative overflow-hidden">
              

                <div className="max-w-4xl mx-auto px-6 text-center relative">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>

                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Don't let your ideas wait. Reach out today and let's discuss how we can
                        transform your vision into a powerful digital solution.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button className="inline-flex items-center px-8 py-4 bg-white text-[#0A1F44] rounded-full font-bold hover:bg-gray-100 transition-all duration-300 group shadow-xl hover:shadow-2xl">
                            Get Free Quote
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>

                        <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            Call Us Now
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                        <div className="text-white/90">
                            <div className="font-semibold mb-2">Islamabad Office</div>
                            <div className="text-sm">📍 Main Hub & Development Center</div>
                        </div>
                        <div className="text-white/90">
                            <div className="font-semibold mb-2">Faisalabad Office</div>
                            <div className="text-sm">📍 Regional Operations & Support</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}