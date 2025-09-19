import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react"
// Removed router dependency

const heroSlides = [
    {
        id: 1,
        title: "Innovation in Flow",
        subtitle: "CascadingXol",
        description: "Transform your business with cutting-edge technology solutions that scale globally and deliver exceptional results.",
        stats: { projects: "100+", clients: "50+", countries: "10+" },
        primaryCTA: "Get Started",
        secondaryCTA: "Watch Demo",
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 2,
        title: "Smart Software Solutions",
        subtitle: "Web • Mobile • Desktop",
        description: "From stunning websites to powerful mobile apps and enterprise desktop solutions - we build technology that works.",
        stats: { experience: "5+ Years", technologies: "20+", satisfaction: "99%" },
        primaryCTA: "View Services",
        secondaryCTA: "Our Portfolio",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 3,
        title: "AI & Automation Excellence",
        subtitle: "Future-Ready Solutions",
        description: "Harness the power of artificial intelligence and automation to streamline operations and boost productivity.",
        stats: { efficiency: "300%", savings: "60%", automation: "24/7" },
        primaryCTA: "Explore AI",
        secondaryCTA: "Case Studies",
        images: [
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    }
]

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    // Auto slide functionality
    useEffect(() => {
        if (!isPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [isPlaying])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    }

    const currentSlideData = heroSlides[currentSlide]

    return (
        <section className="relative min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Subtitle Badge */}
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                            <span className="text-white/90 text-sm font-medium">
                                {currentSlideData.subtitle}
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            {currentSlideData.title}
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                            {currentSlideData.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-lg">
                            {Object.entries(currentSlideData.stats).map(([key, value]) => (
                                <div key={key} className="text-center lg:text-left">
                                    <div className="text-3xl font-bold text-white">
                                        {value}
                                    </div>
                                    <div className="text-sm text-white/60 capitalize">
                                        {key.replace(/([A-Z])/g, ' $1')}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-lg"
                            >
                                {currentSlideData.primaryCTA}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-black hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-lg"
                            >
                                <Play className="mr-2 h-5 w-5" />
                                {currentSlideData.secondaryCTA}
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Single Image */}
                    <div className="relative">
                        <div className="relative h-[500px] w-full">
                            {/* Single main image */}
                            <div className="relative h-full w-full">
                                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl group border border-red-900/20">
                                    <img
                                        src={currentSlideData.images[0]}
                                        alt="Main showcase"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-slate-900/20" />
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-red-100">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-red-900">4.9</div>
                                <div className="text-sm text-slate-600">Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple Slider Controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full text-white hover:bg-white/20 transition-colors"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <div className="flex space-x-2">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentSlide
                                        ? 'bg-white w-8'
                                        : 'bg-white/50 hover:bg-white/70 w-2'
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 rounded-full text-white hover:bg-white/20 transition-colors"
                    >
                        {isPlaying ? (
                            <div className="w-4 h-4 bg-current" />
                        ) : (
                            <Play className="h-4 w-4" />
                        )}
                    </button>

                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full text-white hover:bg-white/20 transition-colors"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}