import { useState, useEffect } from "react";
import {
  Users,
  Target,
  Heart,
  Award,
  Globe,
  Lightbulb,
  Shield,
  Clock,
} from "lucide-react";

const aboutHighlights = [
  {
    title: "Our Story",
    icon: Users,
    backgroundImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Vision & Mission",
    icon: Target,
    backgroundImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Core Values",
    icon: Heart,
    backgroundImage:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Excellence",
    icon: Award,
    backgroundImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Global Impact",
    icon: Globe,
    backgroundImage:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    backgroundImage:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const aboutStats = [
  { icon: Clock, number: "5+", label: "Years in Business" },
  { icon: Users, number: "25+", label: "Team Members" },
  { icon: Award, number: "15+", label: "Industry Awards" },
  { icon: Heart, number: "100%", label: "Client Satisfaction" }
];

const infiniteHighlights = [
  ...aboutHighlights,
  ...aboutHighlights,
  ...aboutHighlights,
];

export default function AboutHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-800 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-red-700 rounded-full animate-pulse opacity-30 animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10">
        <div className="text-center max-w-7xl mx-auto mb-8 sm:mb-12 pt-10">
          <h1
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-white block mb-2">About</span>
            <span className="bg-gradient-to-r from-red-900 via-red-500 to-red-800 bg-clip-text text-transparent block">
              CascadingXol
            </span>
          </h1>

          <p
            className={`text-sm sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-200 px-4 mb-8 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Empowering businesses through innovation, expertise, and unwavering
            commitment to excellence. Discover our journey, values, and the
            passionate team driving digital transformation across industries.
          </p>

          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {aboutStats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl mb-3 sm:mb-4">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/70 text-xs sm:text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`w-full transition-all duration-1000 delay-500 mb-8 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="relative overflow-hidden">
          <div
            className="flex space-x-6 animate-scroll group-hover:pause-animation"
            style={{
              width: `${infiniteHighlights.length * 312}px`,
            }}
          >
            {infiniteHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <HighlightCard
                  key={`${highlight.title}-${index}`}
                  highlight={highlight}
                  IconComponent={IconComponent}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${aboutHighlights.length * 312}px);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }
        
        @media (min-width: 1440px) {
          .animate-scroll {
            animation-duration: 35s;
          }
        }
      `}</style>
    </section>
  );
}

type Highlight = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  backgroundImage: string;
};

interface HighlightCardProps {
  highlight: Highlight;
  IconComponent: React.ComponentType<{ className?: string }>;
}

function HighlightCard({ highlight, IconComponent }: HighlightCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex-shrink-0 w-[300px] group cursor-pointer">
      <div className="relative h-48 sm:h-56 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/20">
        <div className="absolute inset-0">
          <img
            src={highlight.backgroundImage}
            alt={highlight.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-red-700 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/80 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        </div>

        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-start">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-200 transition-colors duration-300 drop-shadow-lg">
            {highlight.title}
          </h3>
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-red-500/20 group-hover:border-red-400/40 transition-all duration-300">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-red-300 transition-colors duration-300" />
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-red-500/20 group-hover:border-red-400/40 transition-all duration-300">
              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 group-hover:text-red-300 transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-red-300 rounded-full w-3/4 group-hover:w-full transition-all duration-1000"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-red-600/10 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}