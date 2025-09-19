import type { LucideIcon } from "lucide-react"
import { ArrowRight, CheckCircle } from "lucide-react"

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    desc: string
    extra: string
}

// Service images mapping
const serviceImages: { [key: string]: string } = {
    "Web Development": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "Mobile Apps": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "Desktop Applications": "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "Digital Marketing & Branding": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "AI & Custom Solutions": "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}

// Service features mapping
const serviceFeatures: { [key: string]: string[] } = {
    "Web Development": ["Responsive Design", "SEO Optimized", "Cloud Hosting", "E-commerce Ready"],
    "Mobile Apps": ["Cross-Platform", "Native Performance", "Push Notifications", "App Store Ready"],
    "Desktop Applications": ["Custom Solutions", "Database Integration", "Security Features", "User Training"],
    "Digital Marketing & Branding": ["SEO Strategy", "Social Media", "Brand Identity", "Content Creation"],
    "AI & Custom Solutions": ["Machine Learning", "Automation", "Data Analytics", "Custom Integration"]
}

// Gradient colors for each service
const serviceGradients: { [key: string]: string } = {
    "Web Development": "from-blue-500 to-blue-600",
    "Mobile Apps": "from-[#8B0000] to-red-600", 
    "Desktop Applications": "from-green-500 to-green-600",
    "Digital Marketing & Branding": "from-purple-500 to-purple-600",
    "AI & Custom Solutions": "from-indigo-500 to-indigo-600"
}

export default function ServiceCard({ icon: Icon, title, desc, extra }: ServiceCardProps) {
    const image = serviceImages[title] || serviceImages["Web Development"]
    const features = serviceFeatures[title] || []
    const gradient = serviceGradients[title] || "from-gray-500 to-gray-600"
    
    return (
        <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#8B0000]/20 hover:-translate-y-3">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute top-6 left-6">
                    <div className={`p-4 bg-gradient-to-br ${gradient} rounded-2xl shadow-xl`}>
                        <Icon className="h-8 w-8 text-white" />
                    </div>
                </div>

                {/* Price/Info Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-sm font-bold text-[#0A1F44]">
                        {extra.includes('$') ? extra.split('/')[0] : 'Custom'}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-3 group-hover:text-[#8B0000] transition-colors duration-300">
                    {title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {desc}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                    {features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Pricing/Extra Info */}
                <div className="mb-6">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${gradient.replace('500', '50').replace('600', '100')} rounded-full`}>
                        <span className="text-sm font-semibold text-gray-800">
                            {extra}
                        </span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] text-white rounded-xl hover:shadow-xl transition-all duration-300 group-hover:scale-105 font-semibold">
                        <span>Get Started</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <button className="w-full py-3 px-4 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-[#8B0000] hover:text-[#8B0000] transition-all duration-300 font-semibold">
                        View Details
                    </button>
                </div>
            </div>

            {/* Hover Effect - Animated Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0A1F44] to-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            
            {/* Popular Badge for certain services */}
            {(title === "Web Development" || title === "Mobile Apps") && (
                <div className="absolute -top-3 -right-3 bg-[#8B0000] text-white text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-lg">
                    Popular
                </div>
            )}
        </div>
    )
}