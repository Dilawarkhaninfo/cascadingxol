import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, ArrowRight, Sparkles, Code, Zap, Star, Shield, Rocket } from "lucide-react"
import { Link } from "react-router-dom"

const heroSlides = [
    {
        id: 1,
        title: "Innovation in Flow",
        subtitle: "CascadingXol",
        description: "Transform your business with cutting-edge technology solutions that scale globally and deliver exceptional results.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        stats: { projects: "100+", clients: "50+", countries: "10+" },
        primaryCTA: "Get Started",
        secondaryCTA: "Watch Demo"
    },
    {
        id: 2,
        title: "Smart Software Solutions",
        subtitle: "Web • Mobile • Desktop",
        description: "From stunning websites to powerful mobile apps and enterprise desktop solutions - we build technology that works.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        stats: { experience: "5+ Years", technologies: "20+", satisfaction: "99%" },
        primaryCTA: "View Services",
        secondaryCTA: "Our Portfolio"
    },
    {
        id: 3,
        title: "AI & Automation Excellence",
        subtitle: "Future-Ready Solutions",
        description: "Harness the power of artificial intelligence and automation to streamline operations and boost productivity.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        stats: { efficiency: "300%", savings: "60%", automation: "24/7" },
        primaryCTA: "Explore AI",
        secondaryCTA: "Case Studies"
    }
]

const floatingElements = [
    {
        Icon: Code,
        delay: 0,
        position: "top-16 left-16",
        size: "w-16 h-16",
        gradient: "from-blue-500 to-blue-600",
        animation: "animate-bounce",
        duration: "4s"
    },
    {
        Icon: Sparkles,
        delay: 1,
        position: "top-24 right-20",
        size: "w-12 h-12",
        gradient: "from-purple-500 to-pink-500",
        animation: "animate-pulse",
        duration: "3s"
    },
    {
        Icon: Zap,
        delay: 2,
        position: "bottom-32 left-24",
        size: "w-14 h-14",
        gradient: "from-yellow-400 to-orange-500",
        animation: "animate-bounce",
        duration: "3.5s"
    },
    {
        Icon: Shield,
        delay: 3,
        position: "bottom-20 right-16",
        size: "w-12 h-12",
        gradient: "from-green-500 to-emerald-600",
        animation: "animate-pulse",
        duration: "2.5s"
    },
    {
        Icon: Rocket,
        delay: 1.5,
        position: "top-1/3 right-8",
        size: "w-10 h-10",
        gradient: "from-red-500 to-pink-600",
        animation: "animate-bounce",
        duration: "4.5s"
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
        }, 5000)

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
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
                    style={{
                        backgroundImage: `url(${currentSlideData.image})`,
                        transform: `scale(1.1)`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/95 via-[#0A1F44]/85 to-[#8B0000]/90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
            </div>

            {/* Enhanced Floating Elements */}
            {floatingElements.map(({ Icon, delay, position, size, gradient, animation, duration }, index) => (
                <div
                    key={index}
                    className={`absolute ${position} hidden lg:block z-10`}
                    style={{
                        animationDelay: `${delay}s`,
                        animationDuration: duration,
                        animationIterationCount: 'infinite'
                    }}
                >
                    <div className={`${size} ${animation} bg-gradient-to-r ${gradient} rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:scale-110 transition-transform duration-300 cursor-pointer group`}>
                        <Icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
            ))}

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8">
                        {/* Subtitle with Animation */}
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                            <Sparkles className="h-4 w-4 text-white/80 animate-pulse" />
                            <span className="text-white/90 text-sm font-medium">
                                {currentSlideData.subtitle}
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                            {currentSlideData.title.split(' ').map((word, index) => (
                                <span
                                    key={index}
                                    className={`inline-block mr-3 ${word.includes('Flow') || word.includes('Solutions') || word.includes('Excellence')
                                            ? 'text-transparent bg-gradient-to-r from-white to-red-200 bg-clip-text'
                                            : ''
                                        }`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    {word}
                                </span>
                            ))}
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                            {currentSlideData.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                            {Object.entries(currentSlideData.stats).map(([key, value],) => (
                                <div key={key} className="text-center lg:text-left group">
                                    <div className="text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                                        {value}
                                    </div>
                                    <div className="text-sm text-white/60 capitalize">
                                        {key.replace(/([A-Z])/g, ' $1')}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-[#8B0000] to-[#8B0000]/90 hover:from-[#8B0000]/90 hover:to-[#8B0000] text-white border-0 shadow-2xl hover:shadow-[#8B0000]/25 transition-all duration-300 group px-8 py-6 text-lg hover:scale-105"
                            >
                                <Link to="/contact">
                                    {currentSlideData.primaryCTA}
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white/30 text-white hover:bg-white hover:text-[#0A1F44] backdrop-blur-sm bg-white/10 transition-all duration-300 group px-8 py-6 text-lg hover:scale-105"
                            >
                                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                                {currentSlideData.secondaryCTA}
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Modern Image Showcase */}
                    <div className="hidden lg:block relative">
                        <div className="relative space-y-8">
                            {/* Main Large Image - Rounded Rectangle */}
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#8B0000] to-[#0A1F44] rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Team Working"
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/70 via-transparent to-transparent" />

                                    {/* Floating Badge */}
                                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl">
                                        <div className="flex items-center space-x-2">
                                            <Star className="h-5 w-5 text-yellow-500 fill-current" />
                                            <span className="font-bold text-gray-900">4.9/5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Images Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                {/* Circular Image */}
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl border-3 border-white/30 transform group-hover:scale-110 transition-transform duration-300">
                                        <img
                                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                            alt="Innovation"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-center mt-3">
                                        <div className="text-white font-semibold text-sm">Team Collaboration</div>
                                    </div>
                                </div>

                                {/* Diamond Shape Image */}
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-teal-600 blur opacity-40 group-hover:opacity-60 transition-opacity duration-300 transform rotate-45"></div>
                                    <div className="relative w-28 h-28 mx-auto transform rotate-45 overflow-hidden shadow-xl border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                                        <img
                                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                            alt="Technology"
                                            className="w-full h-full object-cover transform -rotate-45 scale-150"
                                        />
                                    </div>
                                    <div className="text-center mt-6">
                                        <div className="text-white font-semibold text-sm">Modern Tech</div>
                                    </div>
                                </div>
                            </div>

                       

                            <div className="absolute -top-4 -right-8 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 z-20 animate-bounce">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#8B0000] to-[#0A1F44] rounded-xl flex items-center justify-center">
                                        <Zap className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Fast Delivery</div>
                                        <div className="text-sm text-gray-600">On-Time Projects</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Slider Controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    {/* Slide Indicators */}
                    <div className="flex space-x-2">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-white w-8'
                                        : 'bg-white/50 hover:bg-white/70 w-3'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Play/Pause Button */}
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    >
                        {isPlaying ? (
                            <div className="w-4 h-4 bg-current rounded-sm" />
                        ) : (
                            <Play className="h-4 w-4" />
                        )}
                    </button>

                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}