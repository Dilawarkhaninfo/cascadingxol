import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { ArrowRight } from "lucide-react";
import ContactHeroSection from "@/components/contact/ContactHeroSection";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity, but most web projects take 4-8 weeks, mobile apps 8-12 weeks, and enterprise solutions 12-16 weeks.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer comprehensive post-launch support including maintenance, updates, and technical assistance for all our projects.",
  },
  {
    question: "What's included in the free consultation?",
    answer:
      "Our free consultation includes requirement analysis, technology recommendations, project scope definition, and a detailed quote with timeline.",
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ContactHeroSection />

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
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-bold text-[#0A1F44] mb-3 text-lg">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            Don't let your ideas wait. Reach out today and let's discuss how we
            can transform your vision into a powerful digital solution.
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
  );
}
