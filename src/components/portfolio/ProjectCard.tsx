import { ArrowRight, ExternalLink, Code, TrendingUp, CheckCircle } from "lucide-react"

interface ProjectCardProps {
    title: string
    desc: string
    image: string
    technologies?: string[]
    results?: string[]
}

export default function ProjectCard({ title, desc, image, technologies = [], results = [] }: ProjectCardProps) {
    return (
        <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#8B0000]/20 hover:-translate-y-3">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-sm font-bold text-[#0A1F44]">Featured</span>
                </div>

                {/* View Project Button */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                        <ExternalLink className="h-5 w-5 text-white" />
                    </button>
                </div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {desc}
                </p>

                {/* Technologies Used */}
                {technologies.length > 0 && (
                    <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-3">
                            <Code className="h-4 w-4 text-[#8B0000]" />
                            <span className="text-sm font-semibold text-[#0A1F44]">Technologies</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full border"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Results/Impact */}
                {results.length > 0 && (
                    <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-3">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-semibold text-[#0A1F44]">Key Results</span>
                        </div>
                        <div className="space-y-2">
                            {results.slice(0, 2).map((result, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{result}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3">
                    <button className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-[#0A1F44] to-[#8B0000] text-white rounded-xl hover:shadow-xl transition-all duration-300 group-hover:scale-105 font-semibold">
                        <span>View Details</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <button className="p-3 border-2 border-gray-200 text-gray-600 rounded-xl hover:border-[#8B0000] hover:text-[#8B0000] transition-all duration-300">
                        <ExternalLink className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0A1F44] to-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            
            {/* Success Badge for completed projects */}
            <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-lg">
                Delivered
            </div>
        </div>
    )
}