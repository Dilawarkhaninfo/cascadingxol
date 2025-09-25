import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Star, Sparkles } from "lucide-react";
 
import DilawarImage from "../../assets/Dilawar.png";
import RashidImage from "../../assets/Rashid.png";
import AliImage from "../../assets/Ali.png";
import NadeemImage from "../../assets/Nadeem.png";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  isFounder?: boolean;
  isCEO?: boolean;
  isCTO?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Rashid Saeed",
    role: "Textile Expert", 
    image: RashidImage,
    isFounder: true,
    isCEO: true
  },
  {
    name: "Tariq Nadeem", 
    role: "Pharmaceutical & Textile Expert",
    image: NadeemImage,
    isFounder: true,
    isCTO: true
  },
  {
    name: "Dilawar Khan",
    role: "Software Engineer",
    image: DilawarImage,
    isFounder: true
  },
  {
    name: "Ali Ahmed",
    role: "Agriculture Expert",
    image: AliImage,
    isFounder: true
  }
];

export default function TeamSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 lg:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(220,38,38,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-60"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-800 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-red-700 rounded-full animate-pulse opacity-30"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-white block mb-2">Meet Our</span>
            <span className="bg-gradient-to-r from-red-900 via-red-500 to-red-800 bg-clip-text text-transparent block">
              Founding Team
            </span>
          </h2>
          <p className={`text-lg text-gray-300 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`} style={{ transitionDelay: "200ms" }}>
            Experienced professionals driving innovation across multiple industries
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 container mx-auto">
          {teamMembers.map((member, index) => {
            const isHovered = hoveredMember === index;
            
            return (
              <Card
                key={member.name}
                className={`group cursor-pointer transition-all duration-500 bg-transparent border-none hover:shadow-2xl hover:shadow-red-500/20 rounded-3xl overflow-hidden w-80 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <CardContent className="p-0 relative h-96">
                  {/* CEO Crown Icon */}
                  {member.isCEO && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-2 rounded-full shadow-xl border-2 border-blue-400">
                        <Crown className="w-5 h-5" />
                      </div>
                    </div>
                  )}

                  {/* CTO Sparkles Icon */}
                  {member.isCTO && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-full shadow-xl border-2 border-blue-400">
                        <Sparkles className="w-5 h-5" />
                      </div>
                    </div>
                  )}

                  {/* Image Container with Overlay Content */}
                  <div className="relative h-full overflow-hidden rounded-3xl bg-gray-950/60 backdrop-blur-md border border-gray-700/50 group-hover:border-red-500/40 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Content overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-200 transition-colors duration-300">
                        {member.name}
                      </h3>
                      
                      <div className="flex flex-col gap-2 items-center">
                      
                        
                        {/* CEO Badge */}
                        {member.isCEO && (
                          <Badge className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-500 hover:to-indigo-600 border-none transition-all duration-300 backdrop-blur-sm font-bold shadow-xl px-4 py-1 text-sm flex items-center gap-1">
                            <Crown className="w-3 h-3" />
                            CEO & Founder
                          </Badge>
                        )}

                        {/* CTO Badge */}
                        {member.isCTO && (
                          <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 border-none transition-all duration-300 backdrop-blur-sm font-bold shadow-xl px-4 py-1 text-sm flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            CTO & Co-Founder
                          </Badge>
                        )}

                          <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 border-none transition-all duration-300 backdrop-blur-sm px-4 py-1 text-sm font-medium">
                          {member.role}
                        </Badge>
                      </div>
                    </div>

                    {/* Special accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${
                      member.isCEO 
                        ? 'bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600' 
                        : member.isCTO
                        ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500'
                        : 'bg-gradient-to-r from-red-500 to-red-700'
                    } ${isHovered ? 'opacity-100 h-2' : 'opacity-80'}`}></div>
                  </div>

                  {/* Special glow effect */}
                  <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none rounded-3xl ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  } ${
                    member.isCEO 
                      ? 'bg-gradient-to-t from-blue-500/10 to-blue-500/5' 
                      : member.isCTO 
                      ? 'bg-gradient-to-t from-blue-500/10 to-blue-600/5'
                      : 'bg-red-500/10'
                  }`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <Card className="bg-gray-950/60 backdrop-blur-md border border-gray-700/50 hover:border-red-500/30 transition-all duration-500 p-8 max-w-2xl mx-auto rounded-3xl">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Work With Us?
              </h3>
              <p className="text-gray-300 mb-6">
                Let our experienced team help you transform your business with innovative digital solutions.
              </p>
              <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 rounded-xl flex items-center gap-2 mx-auto">
                <Star className="w-4 h-4" />
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}