import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Rocket,
  Brain,
  Globe,
  Smartphone,
  Monitor,
  Cloud,
  Sparkles,
} from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Innovative Digital Solutions for Modern Businesses",
    description:
      "CascadingXol specializes in comprehensive digital transformation - from cutting-edge mobile apps and robust web applications to intelligent desktop software and AI-powered solutions that drive business growth.",
    cards: [
      {
        title: "Mobile Apps",
        icon: Smartphone,
        backgroundImage:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        title: "Web Applications",
        icon: Globe,
        backgroundImage:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        title: "Desktop Software",
        icon: Monitor,
        backgroundImage:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        title: "AI Solutions",
        icon: Brain,
        backgroundImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        title: "Cloud Services",
        icon: Cloud,
        backgroundImage:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
      {
        title: "Custom Development",
        icon: Rocket,
        backgroundImage:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-brand-red-950">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,0,0,0.4)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,0,0,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-brand-red-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-50 delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-brand-red-300 rounded-full animate-pulse opacity-30 delay-3000"></div>
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-6 py-16 relative z-10   ">
        <div className="text-center max-w-7xl mx-auto mb-1    ">
          {/* Main Title - 2 Lines */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-white block mb-2">
              Innovative Digital Solutions
            </span>
            <span className="bg-gradient-to-r from-brand-red-800 via-brand-red-700 to-brand-red-600 bg-clip-text text-transparent block">
              for Modern Businesses
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-xl text-gray-300 leading-relaxed max-w-5xl mx-auto  transition-all duration-1000 delay-200 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {currentSlideData.description}
          </p>
        </div>
      </div>

      {/* Full Width Cards Section */}
      <div
        className={`w-full transition-all duration-1000 delay-500   mb-10 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-8 px-6">
            {currentSlideData.cards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={`${currentSlide}-${card.title}`}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: isLoaded
                      ? "slideInUp 0.8s ease-out forwards"
                      : "none",
                  }}
                >
                  <div className="relative h-64 rounded-3xl overflow-hidden bg-gray-900 border border-brand-red-900/30 group-hover:border-brand-red-600/50 transition-all duration-500 group-hover:transform   brand-glow">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={card.backgroundImage}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-700  "
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br  transition-opacity duration-500 group-hover:opacity-95`}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                    </div>

                    {/* Card Header */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-white group-hover:text-brand-red-200 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-brand-red-500/20 group-hover:border-brand-red-400/40 transition-all duration-300">
                        <Sparkles className="w-5 h-5 text-white/80 group-hover:text-brand-red-300 transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-brand-red-500/20 group-hover:border-brand-red-400/40 transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-white/80 group-hover:text-brand-red-300 transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-brand-red-400 to-white rounded-full w-3/4 group-hover:w-full transition-all duration-1000"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-red-600/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {currentSlideData.cards.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/30 hover:bg-brand-red-400 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      {heroSlides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full text-white hover:bg-white/20 hover:text-brand-red-300 transition-all duration-300 transform  "
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-500 hover:bg-brand-red-400 ${
                    index === currentSlide
                      ? "bg-white w-8 shadow-lg"
                      : "bg-white/50 hover:bg-white/70 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full text-white hover:bg-white/20 hover:text-brand-red-300 transition-all duration-300 transform  "
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
              className="p-2 rounded-full text-white hover:bg-white/20 hover:text-brand-red-300 transition-all duration-300 transform  "
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

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
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
    </section>
  );
}
