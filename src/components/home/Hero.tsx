import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, ArrowRight, Rocket, Zap, Gem, Brain, Palette, Globe, Smartphone, Monitor, Cloud, Bot } from "lucide-react"

const heroSlides = [
    {
        id: 1,
        title: "Creating Impactful Apps",
        titleHighlight: "for the World",
        subtitle: "Innovation in Flow",
        description: "CascadingXol builds the next generation of software solutions powered by cutting-edge technology and innovative design to empower businesses globally.",
        stats: { projects: "100+", clients: "50+", countries: "10+" },
        primaryCTA: "Get Started",
        secondaryCTA: "Watch Demo",
        backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        cards: [
            {
                title: "Innovative",
                icon: Rocket,
                color: "from-red-900/20 to-red-700/20",
                borderColor: "border-red-600/30"
            },
            {
                title: "Epic",
                icon: Zap,
                color: "from-gray-800/20 to-red-900/20", 
                borderColor: "border-red-500/30"
            },
            {
                title: "Brilliance",
                icon: Gem,
                color: "from-red-800/20 to-black/20",
                borderColor: "border-red-700/30"
            },
            {
                title: "Genius",
                icon: Brain,
                color: "from-black/20 to-red-900/20",
                borderColor: "border-red-600/30"
            },
            {
                title: "Creative",
                icon: Palette,
                color: "from-red-700/20 to-gray-900/20",
                borderColor: "border-red-500/30"
            }
        ]
    },
    {
        id: 2,
        title: "Smart Software",
        titleHighlight: "Solutions",
        subtitle: "Web • Mobile • Desktop",
        description: "From stunning websites to powerful mobile apps and enterprise desktop solutions - we build technology that transforms businesses and drives innovation.",
        stats: { experience: "5+ Years", technologies: "20+", satisfaction: "99%" },
        primaryCTA: "View Services",
        secondaryCTA: "Our Portfolio",
        backgroundImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        cards: [
            {
                title: "Web Apps",
                icon: Globe,
                color: "from-red-900/20 to-black/20",
                borderColor: "border-red-600/30"
            },
            {
                title: "Mobile",
                icon: Smartphone,
                color: "from-black/20 to-red-800/20",
                borderColor: "border-red-700/30"
            },
            {
                title: "Desktop",
                icon: Monitor,
                color: "from-red-800/20 to-gray-900/20",
                borderColor: "border-red-500/30"
            },
            {
                title: "Cloud",
                icon: Cloud,
                color: "from-gray-900/20 to-red-900/20",
                borderColor: "border-red-600/30"
            },
            {
                title: "AI/ML",
                icon: Bot,
                color: "from-red-700/20 to-black/20",
                borderColor: "border-red-800/30"
            }
        ]
    },
    {
        id: 3,
        title: "AI & Automation",
        titleHighlight: "Excellence",
        subtitle: "Future-Ready Solutions",
        description: "Harness the power of artificial intelligence and automation to streamline operations, boost productivity, and stay ahead of the competition.",
        stats: { efficiency: "300%", savings: "60%", automation: "24/7" },
        primaryCTA: "Explore AI",
        secondaryCTA: "Case Studies",
        backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        cards: [
            {
                title: "Machine Learning",
                icon: Bot,
                color: "from-red-900/20 to-black/20",
                borderColor: "border-red-600/30"
            },
            {
                title: "Automation",
                icon: Zap,
                color: "from-black/20 to-red-800/20",
                borderColor: "border-red-700/30"
            },
            {
                title: "Analytics",
                icon: Brain,
                color: "from-red-800/20 to-gray-900/20",
                borderColor: "border-red-500/30"
            },
            {
                title: "Intelligence",
                icon: Gem,
                color: "from-gray-900/20 to-red-900/20",
                borderColor: "border-red-600/30"
            },
            {
                title: "Innovation",
                icon: Rocket,
                color: "from-red-700/20 to-black/20",
                borderColor: "border-red-800/30"
            }
        ]
    }
]

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)

    // Loading effect
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300)
        return () => clearTimeout(timer)
    }, [])

    // Auto slide functionality
    useEffect(() => {
        if (!isPlaying) return
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 8000)
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
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 transition-all duration-1000">
                <img
                    key={currentSlide}
                    src={currentSlideData.backgroundImage}
                    alt="Background"
                    className="w-full h-full object-cover transition-all duration-[2000ms] scale-105 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-red-900/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            </div>

            {/* Animated Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.15)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.2)_0%,transparent_50%)]" />
                <div 
                    className="absolute inset-0 animate-pulse"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }} 
                />
            </div>

            <div className="container mx-auto px-6 py-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className={`space-y-8 max-w-2xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        {/* Subtitle Badge */}
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                            <span className="text-white/90 text-sm font-medium tracking-wide">
                                {currentSlideData.subtitle}
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            <span className="inline-block mb-2">{currentSlideData.title}</span>
                            <br />
                            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent inline-block hover:from-red-300 hover:to-red-500 transition-all duration-500">
                                {currentSlideData.titleHighlight}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-white/80 leading-relaxed">
                            {currentSlideData.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-lg">
                            {Object.entries(currentSlideData.stats).map(([key, value], index) => (
                                <div 
                                    key={key} 
                                    className="text-center lg:text-left group cursor-pointer"
                                    style={{ 
                                        animationDelay: `${index * 100}ms`,
                                        animation: isLoaded ? 'slideInUp 0.8s ease-out forwards' : 'none'
                                    }}
                                >
                                    <div className="text-3xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                                        {value}
                                    </div>
                                    <div className="text-sm text-white/60 capitalize group-hover:text-white/80 transition-colors duration-300">
                                        {key.replace(/([A-Z])/g, ' $1')}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-600/25 transition-all duration-300 group transform hover:scale-105"
                            >
                                {currentSlideData.primaryCTA}
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-xl transition-all duration-300 group transform hover:scale-105"
                            >
                                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                                {currentSlideData.secondaryCTA}
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Cards Grid */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
                            {currentSlideData.cards.map((card, index) => {
                                const IconComponent = card.icon
                                return (
                                    <div
                                        key={`${currentSlide}-${card.title}`}
                                        className={`relative group cursor-pointer transform transition-all duration-700 hover:scale-110 hover:-translate-y-2 ${
                                            index === 2 ? 'md:col-span-1 md:mx-auto' : ''
                                        }`}
                                        style={{ 
                                            animationDelay: `${(index * 150) + 500}ms`,
                                            animation: isLoaded ? 'slideInUp 0.8s ease-out forwards' : 'none'
                                        }}
                                    >
                                        <div className={`relative h-32 rounded-2xl border backdrop-blur-sm transition-all duration-500 group-hover:border-white/60 group-hover:shadow-lg ${card.borderColor} bg-gradient-to-br ${card.color}`}>
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/15" />
                                            <div className="flex flex-col items-center justify-center h-full p-4 text-center relative z-10">
                                                <IconComponent className="h-8 w-8 text-white mb-2 group-hover:scale-125 group-hover:text-red-300 transition-all duration-500" />
                                                <span className="text-white font-medium text-sm group-hover:text-red-100 transition-colors duration-300">
                                                    {card.title}
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-red-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                            
                                            {/* Glow effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Floating Rating Badge */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-red-100 hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-500 transform hover:scale-110 cursor-pointer group">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">4.9</div>
                                <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Rating</div>
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full text-white hover:bg-white/20 hover:text-red-300 transition-all duration-300 transform hover:scale-110"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    
                    <div className="flex space-x-2">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all duration-500 hover:bg-red-400 ${
                                    index === currentSlide
                                        ? 'bg-white w-8 shadow-lg'
                                        : 'bg-white/50 hover:bg-white/70 w-2'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 rounded-full text-white hover:bg-white/20 hover:text-red-300 transition-all duration-300 transform hover:scale-110"
                        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                    >
                        {isPlaying ? (
                            <div className="w-4 h-4 bg-current rounded-sm" />
                        ) : (
                            <Play className="h-4 w-4" />
                        )}
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full text-white hover:bg-white/20 hover:text-red-300 transition-all duration-300 transform hover:scale-110"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Custom Styles */}
            <style>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes glow {
                    0%, 100% {
                        box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
                    }
                    50% {
                        box-shadow: 0 0 30px rgba(220, 38, 38, 0.5);
                    }
                }

                .animate-glow {
                    animation: glow 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}