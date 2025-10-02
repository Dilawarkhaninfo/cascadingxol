import { Lightbulb, Shield, TrendingUp, Award, ArrowRight } from "lucide-react";
import type { JSX } from "react";

interface Value {
  icon: JSX.Element;
  title: string;
  image: string;
}

interface Achievement {
  metric: string;
  label: string;
}

const values: Value[] = [
    {
        icon: <Lightbulb className="h-7 w-7" />,
        title: "Innovation",
        image: "https://scontent.fisb32-1.fna.fbcdn.net/o1/v/t0/f2/m469/AQOwb6Oh9188ilvqji3cYAvKDNhLWj5mcSBylFz5Hivb6zXuYGck3y-NJ0Y78BumznuHn80dOP96UryuBg0lf2B4v1GOlvGm9wEnsaL2pIxr-UGgs8eu8VVwzPbN7Rmt.png?_nc_ht=scontent.fisb32-1.fna.fbcdn.net&_nc_gid=A76B-OeKHa-R0TtN6qgOMw&_nc_cat=107&_nc_oc=AdlEcy94ZflkPTmNMatjr7iqhaQF-He0Mum5-ZgI0592pRMC8LSXmeLb20iP88ccobE&ccb=9-4&oh=00_AfZmC7Fo_fI6qWz4GGV76LQkdHdAEn3tnlzBQMdrCrCKJg&oe=68DFE8AF&_nc_sid=5b3566"
    },
    {
        icon: <Shield className="h-7 w-7" />,
        title: "Integrity",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <TrendingUp className="h-7 w-7" />,
        title: "Scalability",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Award className="h-7 w-7" />,
        title: "Excellence",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const achievements: Achievement[] = [
    { metric: "99%", label: "Client Satisfaction" },
    { metric: "100%", label: "On-Time Delivery" },
    { metric: "24/7", label: "Support Available" },
    { metric: "150+", label: "Projects Delivered" }
];

export default function CoreValues() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(220,38,38,0.08)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,69,19,0.05)_0%,transparent_50%)]" />
            </div>

            <div className="w-full mx-auto relative z-10">
                <div className="text-center mb-16">
               

                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Values That Drive
                        <span className="block bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent"> Excellence</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our core values aren't just words on a wall - they're the foundation of every decision we make and every solution we build.
                    </p>
                </div>

                {/* Values Grid - No Gap */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 mb-24">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group relative h-[500px] overflow-hidden transition-all duration-500 hover:z-10"
                            style={{
                                backgroundImage: `url(${value.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />
                            
                            <div className="relative h-full flex flex-col justify-end p-8 z-10">
                                <div className="flex items-center gap-4 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {value.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievements Section */}
                <div className="relative container mx-auto px-6 bg-gradient-to-br from-red-950/95 via-slate-900/90 to-red-950/95 rounded-3xl p-12 border border-red-800/50 overflow-hidden shadow-2xl backdrop-blur-sm">
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
                                Values in Action
                            </h3>
                            <p className="text-lg text-red-200">
                                These aren't just ideals - they're measurable commitments we deliver on every single day.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="text-center group">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-900/40 backdrop-blur-sm rounded-2xl mb-6 group-hover:bg-red-800/60 transition-all duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(220,38,38,0.3)] border border-red-700/50 group-hover:border-red-500/50 relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(220,38,38,0.5)]">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                        <div className="text-2xl lg:text-3xl font-bold text-white relative z-10">
                                            {achievement.metric}
                                        </div>
                                    </div>
                                    <div className="text-sm lg:text-base font-semibold text-white">
                                        {achievement.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-white mb-4">
                                Experience Our Values Firsthand
                            </h4>
                            <p className="text-lg text-red-200 mb-8 max-w-2xl mx-auto">
                                Every project is an opportunity to demonstrate our commitment to innovation, integrity, scalability, and excellence.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 group shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] transform hover:-translate-y-1 relative overflow-hidden border border-red-500/30">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                    <span className="relative z-10">Start Your Project</span>
                                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                                </button>

                                <button className="inline-flex items-center px-8 py-4 border-2 border-red-500/50 text-white rounded-full font-semibold hover:bg-red-500/10 transition-all duration-300 backdrop-blur-sm hover:border-red-500/70">
                                    Read Our Case Studies
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