import { useState, useEffect } from "react";
import {
  Rocket,
  Shield,
  Users,
  Award,
  ArrowRight,
  Globe,
  Sparkles,
  Target,
  Clock,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Innovation First",
    stats: "50+ Projects",
    bgImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Shield,
    title: "End-to-End Excellence",
    stats: "360° Coverage",
    bgImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Globe,
    title: "Global Standards",
    stats: "15+ Countries",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  }
];

const achievements = [
  { 
    icon: Users, 
    number: "150+", 
    label: "Happy Clients"
  },
  { 
    icon: Award, 
    number: "200+", 
    label: "Projects Delivered"
  },
  { 
    icon: Target, 
    number: "99%", 
    label: "Success Rate"
  },
  { 
    icon: Clock, 
    number: "5+", 
    label: "Years Experience"
  },
  { 
    icon: TrendingUp, 
    number: "300%", 
    label: "Growth Rate"
  }
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 overflow-hidden">
      {/* Light Theme Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(220,38,38,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,69,19,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Light Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-red-200 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-300 rounded-full animate-pulse opacity-40 animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse opacity-50 animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Light Theme Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-100 rounded-full px-6 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-red-800" />
            <span className="text-sm font-semibold text-red-800">Why Choose CascadingXol</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Excellence in Every
            <span className="block bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
              Digital Solution
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We craft digital experiences that transform businesses and accelerate growth.
          </p>
        </div>

        {/* Clean Cards with Background Images */}
        <div className={`grid lg:grid-cols-3 gap-8 mb-24 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative h-80 rounded-3xl overflow-hidden border border-gray-200 hover:border-red-300 transition-all duration-500 hover:shadow-2xl hover:shadow-red-100/50 hover:-translate-y-2 transform"
                style={{
                  backgroundImage: `url(${feature.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/80 transition-all duration-500" />
                
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 backdrop-blur-[2px]" />

                {/* Content Container */}
                <div className="relative h-full flex flex-col justify-between p-8 z-10">
                  
                  {/* Top Section - Icon */}
                  <div className="flex justify-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500/90 to-red-700/90 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 group-hover:border-white/30">
                      <IconComponent className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Bottom Section - Title and Stats */}
                  <div className="space-y-4">
                    <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white drop-shadow-lg">
                          {feature.title}
                        </h3>
                        <span className="text-sm font-semibold text-red-100 bg-red-800 px-3 py-1 rounded-full border border-red-300/30">
                          {feature.stats}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-20 left-16 w-2 h-2 bg-red-400 rounded-full animate-float-particle" />
                    <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-white rounded-full animate-float-particle animation-delay-1000" />
                    <div className="absolute bottom-32 left-12 w-1 h-1 bg-red-300 rounded-full animate-float-particle animation-delay-2000" />
                  </div>
                </div>

             
               </div>
            );
          })}
        </div>

        {/* Dark Red Sci-Fi Stats Section */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="relative bg-gradient-to-br from-red-950/95 via-slate-900/90 to-red-950/95 rounded-3xl p-12 border border-red-800/50 overflow-hidden shadow-2xl backdrop-blur-sm">
            
            {/* Animated Red Grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(220,38,38,0.4)_1px,transparent_1px),linear-gradient(rgba(220,38,38,0.4)_1px,transparent_1px)] bg-[size:40px_40px] animate-cyber-grid" />
            </div>

            {/* Red Holographic Circles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-red-400/20 to-red-600/30 rounded-full animate-float-glow shadow-[0_0_60px_rgba(220,38,38,0.4)]" />
              <div className="absolute top-32 right-16 w-24 h-24 bg-gradient-to-br from-red-500/25 to-red-800/20 rounded-full animate-float-reverse-glow shadow-[0_0_50px_rgba(220,38,38,0.3)] animation-delay-1000" />
              <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-br from-red-600/20 to-red-400/25 rounded-full animate-float-glow shadow-[0_0_40px_rgba(220,38,38,0.3)] animation-delay-2000" />
              <div className="absolute bottom-32 right-32 w-16 h-16 bg-gradient-to-br from-red-700/20 to-red-500/25 rounded-full animate-float-reverse-glow shadow-[0_0_35px_rgba(220,38,38,0.3)] animation-delay-3000" />

              {/* Red Neon Geometric Shapes */}
              <div className="absolute top-40 left-1/4 w-8 h-8 bg-red-500/40 rotate-45 animate-spin-slow shadow-[0_0_25px_rgba(220,38,38,0.6)]" />
              <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-red-600/40 rotate-12 animate-spin-reverse shadow-[0_0_20px_rgba(220,38,38,0.6)]" />
              
              {/* Red Energy Waves */}
              <div className="absolute top-1/2 left-0 w-40 h-40 bg-gradient-to-r from-red-500/15 to-transparent rounded-full animate-pulse-energy blur-sm" />
              <div className="absolute top-1/3 right-0 w-32 h-32 bg-gradient-to-l from-red-600/15 to-transparent rounded-full animate-pulse-energy animation-delay-1500 blur-sm" />
            </div>

            {/* Red Floating Particles */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-red-400 rounded-full animate-particle-drift shadow-[0_0_10px_rgba(220,38,38,1)]" />
              <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-red-500 rounded-full animate-particle-drift-reverse shadow-[0_0_8px_rgba(220,38,38,1)] animation-delay-2000" />
              <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-red-600 rounded-full animate-particle-drift shadow-[0_0_12px_rgba(220,38,38,1)] animation-delay-1000" />
              <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-red-400 rounded-full animate-particle-drift-reverse shadow-[0_0_10px_rgba(220,38,38,1)] animation-delay-3000" />
              <div className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 bg-red-500 rounded-full animate-particle-drift shadow-[0_0_8px_rgba(220,38,38,1)] animation-delay-4000" />
            </div>

            {/* Red Holographic Ripples */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 border border-red-400/30 rounded-full animate-hologram-ripple shadow-[0_0_30px_rgba(220,38,38,0.2)]" />
              <div className="w-96 h-96 border border-red-500/20 rounded-full animate-hologram-ripple animation-delay-1000 absolute shadow-[0_0_25px_rgba(220,38,38,0.2)]" />
              <div className="w-96 h-96 border border-red-600/15 rounded-full animate-hologram-ripple animation-delay-2000 absolute shadow-[0_0_20px_rgba(220,38,38,0.2)]" />
            </div>

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Proven Results
                </h3>
                <p className="text-lg text-red-200">Numbers that speak for themselves</p>
              </div>

              {/* Enhanced Stats Grid - 5 columns for desktop, responsive for mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-red-900/40 backdrop-blur-sm rounded-2xl mb-6 group-hover:bg-red-800/60 transition-all duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(220,38,38,0.3)] border border-red-700/50 group-hover:border-red-500/50 relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(220,38,38,0.5)]">
                        {/* Red Holographic Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                        <IconComponent className="h-8 w-8 text-white relative z-10 group-hover:text-red-300 transition-colors duration-300" />
                      </div>
                      <div className="text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-red-200 bg-clip-text group-hover:from-red-400 group-hover:to-red-200 transition-all duration-300">
                        {achievement.number}
                      </div>
                      <div className="text-base lg:text-lg font-semibold text-white">
                        {achievement.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-lg text-red-200 mb-8">Ready to join our success stories?</p>
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 group shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] transform hover:-translate-y-1 relative overflow-hidden border border-red-500/30">
                  {/* Red Holographic Shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes cyber-grid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        @keyframes float-glow {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
            box-shadow: 0 0 60px rgba(220,38,38,0.4);
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            box-shadow: 0 0 80px rgba(220,38,38,0.6);
          }
        }
        
        @keyframes float-reverse-glow {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
            box-shadow: 0 0 50px rgba(220,38,38,0.3);
          }
          50% { 
            transform: translateY(20px) rotate(-180deg); 
            box-shadow: 0 0 70px rgba(220,38,38,0.5);
          }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(45deg); box-shadow: 0 0 25px rgba(220,38,38,0.6); }
          100% { transform: rotate(405deg); box-shadow: 0 0 35px rgba(220,38,38,0.8); }
        }
        
        @keyframes spin-reverse {
          0% { transform: rotate(12deg); box-shadow: 0 0 20px rgba(220,38,38,0.6); }
          100% { transform: rotate(-348deg); box-shadow: 0 0 30px rgba(220,38,38,0.8); }
        }
        
        @keyframes pulse-energy {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        
        @keyframes particle-drift {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 1; 
            box-shadow: 0 0 10px rgba(220,38,38,1);
          }
          25% { 
            transform: translateY(-15px) translateX(10px); 
            opacity: 0.8; 
            box-shadow: 0 0 15px rgba(220,38,38,1);
          }
          50% { 
            transform: translateY(-30px) translateX(-5px); 
            opacity: 1; 
            box-shadow: 0 0 20px rgba(220,38,38,1);
          }
          75% { 
            transform: translateY(-15px) translateX(15px); 
            opacity: 0.7; 
            box-shadow: 0 0 15px rgba(220,38,38,1);
          }
        }
        
        @keyframes particle-drift-reverse {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.8; 
            box-shadow: 0 0 8px rgba(220,38,38,1);
          }
          25% { 
            transform: translateY(15px) translateX(-10px); 
            opacity: 1; 
            box-shadow: 0 0 12px rgba(220,38,38,1);
          }
          50% { 
            transform: translateY(30px) translateX(5px); 
            opacity: 0.6; 
            box-shadow: 0 0 16px rgba(220,38,38,1);
          }
          75% { 
            transform: translateY(15px) translateX(-15px); 
            opacity: 0.9; 
            box-shadow: 0 0 12px rgba(220,38,38,1);
          }
        }
        
        @keyframes hologram-ripple {
          0% { 
            transform: scale(0.8); 
            opacity: 0.8; 
            box-shadow: 0 0 30px rgba(220,38,38,0.2);
          }
          100% { 
            transform: scale(1.2); 
            opacity: 0; 
            box-shadow: 0 0 50px rgba(220,38,38,0.4);
          }
        }

        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0) scale(1); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-10px) scale(1.2); 
            opacity: 1; 
          }
        }
        
        .animate-cyber-grid { animation: cyber-grid 25s linear infinite; }
        .animate-float-glow { animation: float-glow 6s ease-in-out infinite; }
        .animate-float-reverse-glow { animation: float-reverse-glow 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-pulse-energy { animation: pulse-energy 4s ease-in-out infinite; }
        .animate-particle-drift { animation: particle-drift 10s ease-in-out infinite; }
        .animate-particle-drift-reverse { animation: particle-drift-reverse 12s ease-in-out infinite; }
        .animate-hologram-ripple { animation: hologram-ripple 5s ease-out infinite; }
        .animate-float-particle { animation: float-particle 3s ease-in-out infinite; }
        
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}