import { Star, Quote, User, Building } from "lucide-react"

interface TestimonialCardProps {
    quote: string
    client: string
    position?: string
    company?: string
    rating?: number
    project?: string
}

export default function TestimonialCard({
    quote,
    client,
    position = "CEO",
    company = "Tech Company",
    rating = 5,
    project = "Web Development"
}: TestimonialCardProps) {
    return (
        <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-[#8B0000]/20 hover:-translate-y-2">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
                <div className="p-3 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-2xl shadow-xl">
                    <Quote className="h-6 w-6 text-white" />
                </div>
            </div>

            {/* Rating Stars */}
            <div className="flex space-x-1 mb-6 mt-4">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-600">({rating}.0)</span>
            </div>

            {/* Quote */}
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic relative">
                <span className="text-6xl text-[#8B0000]/20 absolute -top-4 -left-2">"</span>
                <span className="relative z-10">{quote}</span>
                <span className="text-6xl text-[#8B0000]/20 absolute -bottom-8 -right-2 rotate-180">"</span>
            </blockquote>

            {/* Client Info */}
            <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] rounded-full flex items-center justify-center shadow-lg">
                        <User className="h-6 w-6 text-white" />
                    </div>

                    {/* Client Details */}
                    <div className="flex-1">
                        <div className="font-bold text-[#0A1F44] text-lg">{client}</div>
                        <div className="text-gray-600 text-sm">{position}</div>
                        <div className="flex items-center space-x-1 text-gray-500 text-sm">
                            <Building className="h-3 w-3" />
                            <span>{company}</span>
                        </div>
                    </div>

                    {/* Project Badge */}
                    <div className="text-right">
                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#0A1F44]/10 to-[#8B0000]/10 text-[#0A1F44] text-xs font-medium rounded-full border">
                            {project}
                        </div>
                    </div>
                </div>
            </div>

            {/* Verified Badge */}
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                ✓ Verified
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0A1F44]/5 to-[#8B0000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    )
}