import { useState, useEffect } from "react";
import {
  Rocket,
  Shield,
  Globe,
  Users,
  Award,
  Target,
  Clock,
  TrendingUp,
  ArrowRight,
 } from "lucide-react";

interface Feature {
  icon: any;
  title: string;
  bgImage: string;
}

interface Achievement {
  icon: any;
  number: string;
  label: string;
}

const features: Feature[] = [
  {
    icon: Rocket,
    title: "Innovation First",
    bgImage: "https://scontent.fisb32-1.fna.fbcdn.net/o1/v/t0/f2/m468/AQMW9mQjdRlch1_f5OyjF4z1vUmJPxh-_IWSTlCO41hjP0qpDn5LhiYF5whtvmYbYgkNl5K0wgA6UkzWfXUZ1NkIyxmUftIWsQbt_R7YpGY_P95RZJEo2kwO841gM2gg.png?_nc_ht=scontent.fisb32-1.fna.fbcdn.net&_nc_gid=I_um0qcHr2KcpfeWMuUHFQ&_nc_cat=100&_nc_oc=Adl0LHeL4jrwQ1PmC27bvFVzGHsE-6WEByILSdy_vIikCPVK58BIKryak7XBuQnws8Q&ccb=9-4&oh=00_AfaXlMpbN5m-sVtSlopxs71T0O_No9eVZJf1icgjhQC4Hg&oe=68DFF0B6&_nc_sid=5b3566"
  },
  {
    icon: Shield,
    title: "End-to-End Excellence",
    bgImage: "https://scontent.fisb32-1.fna.fbcdn.net/o1/v/t0/f2/m432/AQOODg9RPvmYKAThsp6-dY47Ofh2eFISjbnlg-YuGCfHHMdTA31eDZMo0sjSpopDGERRV6pJ71yVzTKbk3_tSaZi8HzYsNOUH9dAYMs5o0aItUDJpOJ0YyA0N-EouPJQ.png?_nc_ht=scontent.fisb32-1.fna.fbcdn.net&_nc_gid=I_um0qcHr2KcpfeWMuUHFQ&_nc_cat=110&_nc_oc=AdlwYxEZwMrgH7vTM0-YgXGNY5MwAXIufjc8O8_E1bn1K1UbZKRx7vs22vF4dU3rNcY&ccb=9-4&oh=00_AfYjEDwpXqZ_kYkFWsOlQR1uHJvJpRUQ4As10hld6hARtw&oe=68E005B0&_nc_sid=5b3566"
  },
  {
    icon: Globe,
    title: "Global Standards",
    bgImage: "https://scontent.fisb32-1.fna.fbcdn.net/o1/v/t0/f2/m468/AQNBWmjZNRsWQVkAIHBXvFVhhmXwljpcsZ-Ix-btis7b7hHMu4hkSP7Q5h5vqyTdoLAxvTyAa3jYp6I-l3Ff3Z9genTeEjizX75ibk8xpvnZVp8EM22q_qgB3BcmChlL.png?_nc_ht=scontent.fisb32-1.fna.fbcdn.net&_nc_gid=I_um0qcHr2KcpfeWMuUHFQ&_nc_cat=111&_nc_oc=AdnIpdzUiIyRGNe9PRSg26xiO-3pMsWCttwNzRkegQ8xc9WapWKS-gn1ecs0apqe1PY&ccb=9-4&oh=00_AfZJsWomgjUxajnBnIkkbqiANmGqeyN81-4bFrvN7Mw8Qg&oe=68DFDDC3&_nc_sid=5b3566"
  }
];

const achievements: Achievement[] = [
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
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(220,38,38,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,69,19,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="w-full mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
        
          
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

        <div className={`grid lg:grid-cols-3 gap-0 mb-24 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative h-[500px] overflow-hidden transition-all duration-500 hover:z-10"
                style={{
                  backgroundImage: `url(${feature.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />
                
                <div className="relative h-full flex flex-col justify-end p-8 z-10">
                  <div className="flex items-center gap-4 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`transition-all duration-1000 delay-400 container mx-auto px-6 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="relative bg-gradient-to-br from-red-950/95 via-slate-900/90 to-red-950/95 rounded-3xl p-12 border border-red-800/50 overflow-hidden shadow-2xl backdrop-blur-sm">
            
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(220,38,38,0.4)_1px,transparent_1px),linear-gradient(rgba(220,38,38,0.4)_1px,transparent_1px)] bg-[size:40px_40px] animate-cyber-grid" />
            </div>

            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-red-400/20 to-red-600/30 rounded-full animate-float-glow shadow-[0_0_60px_rgba(220,38,38,0.4)]" />
              <div className="absolute top-32 right-16 w-24 h-24 bg-gradient-to-br from-red-500/25 to-red-800/20 rounded-full animate-float-reverse-glow shadow-[0_0_50px_rgba(220,38,38,0.3)] animation-delay-1000" />
              <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-br from-red-600/20 to-red-400/25 rounded-full animate-float-glow shadow-[0_0_40px_rgba(220,38,38,0.3)] animation-delay-2000" />
            </div>

            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Proven Results
                </h3>
                <p className="text-lg text-red-200">Numbers that speak for themselves</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-red-900/40 backdrop-blur-sm rounded-2xl mb-6 group-hover:bg-red-800/60 transition-all duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(220,38,38,0.3)] border border-red-700/50 group-hover:border-red-500/50 relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(220,38,38,0.5)]">
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

              <div className="text-center">
                <p className="text-lg text-red-200 mb-8">Ready to join our success stories?</p>
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 group shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] transform hover:-translate-y-1 relative overflow-hidden border border-red-500/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        
        .animate-cyber-grid { animation: cyber-grid 25s linear infinite; }
        .animate-float-glow { animation: float-glow 6s ease-in-out infinite; }
        .animate-float-reverse-glow { animation: float-reverse-glow 8s ease-in-out infinite; }
        
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}