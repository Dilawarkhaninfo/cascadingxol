import { Mail, Phone, MapPin, Clock, MessageSquare, } from "lucide-react"

const contactMethods = [
    {
        icon: Mail,
        title: "Email Us",
        primary: "hello@cascadingxol.com",
        secondary: "support@cascadingxol.com",
        description: "Send us your requirements and we'll respond within 2 hours",
        action: "mailto:hello@cascadingxol.com",
        gradient: "from-blue-500 to-blue-600"
    },
    {
        icon: Phone,
        title: "Call Us",
        primary: "+92 300 1234567",
        secondary: "+92 333 9876543",
        description: "Speak directly with our team for immediate assistance",
        action: "tel:+923001234567",
        gradient: "from-green-500 to-green-600"
    },
    {
        icon: MessageSquare,
        title: "WhatsApp",
        primary: "+92 300 1234567",
        secondary: "Business Hours",
        description: "Quick questions? Message us on WhatsApp for faster response",
        action: "https://wa.me/923001234567",
        gradient: "from-green-400 to-green-500"
    }
]

const officeLocations = [
    {
        city: "Islamabad",
        type: "Main Office & Development Center",
        address: "Blue Area, Islamabad Capital Territory",
        timezone: "PKT (UTC+5)",
        isHeadquarters: true
    },
    {
        city: "Faisalabad",
        type: "Regional Operations & Support",
        address: "Kohinoor City, Faisalabad, Punjab",
        timezone: "PKT (UTC+5)",
        isHeadquarters: false
    }
]





export default function ContactInfo() {
    return (
        <div className="space-y-12">
            {/* Main Heading */}
            <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                    Get in Touch
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                    Multiple ways to connect with our team. Choose what works best for you.
                </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
                {contactMethods.map((method, index) => (
                    <a
                        key={index}
                        href={method.action}
                        className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8B0000]/20 hover:-translate-y-1"
                    >
                        <div className="flex items-start space-x-4">
                            <div className={`p-3 bg-gradient-to-r ${method.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <method.icon className="h-6 w-6 text-white" />
                            </div>

                            <div className="flex-1">
                                <h3 className="font-bold text-[#0A1F44] text-lg mb-2 group-hover:text-[#8B0000] transition-colors duration-300">
                                    {method.title}
                                </h3>

                                <div className="space-y-1 mb-3">
                                    <div className="font-semibold text-gray-900">{method.primary}</div>
                                    <div className="text-sm text-gray-600">{method.secondary}</div>
                                </div>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {method.description}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Office Locations */}
            <div>
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-6">Our Offices</h3>
                <div className="space-y-4">
                    {officeLocations.map((office, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-start space-x-4">
                                <div className="p-2 bg-[#0A1F44]/10 rounded-lg">
                                    <MapPin className="h-5 w-5 text-[#0A1F44]" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <h4 className="font-bold text-[#0A1F44] text-lg">{office.city}</h4>
                                        {office.isHeadquarters && (
                                            <span className="bg-[#8B0000] text-white text-xs px-2 py-1 rounded-full font-medium">
                                                HQ
                                            </span>
                                        )}
                                    </div>

                                    <div className="text-sm text-gray-600 space-y-1">
                                        <div className="font-medium text-gray-800">{office.type}</div>
                                        <div>{office.address}</div>
                                        <div className="flex items-center space-x-1">
                                            <Clock className="h-3 w-3" />
                                            <span>{office.timezone}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

 
        </div>
    )
}