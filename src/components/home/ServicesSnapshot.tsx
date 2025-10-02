import { Monitor, Smartphone, BarChart3, Cpu, Palette, Database,   } from "lucide-react";
import type { JSX } from "react";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
  price: string;
  gradient: string;
}

const services: Service[] = [
  {
    icon: <Monitor className="h-7 w-7" />,
    title: "Web Development",
    description: "Modern websites & SaaS platforms that scale globally.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From $1,500",
    gradient: "from-red-500 to-red-700"
  },
  {
    icon: <Smartphone className="h-7 w-7" />,
    title: "Mobile Apps",
    description: "Native iOS & Android apps with exceptional UX.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From $3,000",
    gradient: "from-red-500 to-red-700"
  },
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Desktop Solutions",
    description: "Powerful enterprise applications and business tools.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From $5,000",
    gradient: "from-red-500 to-red-700"
  },
  {
    icon: <Cpu className="h-7 w-7" />,
    title: "AI & Automation",
    description: "Smart business systems powered by AI technology.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From $2,500",
    gradient: "from-red-500 to-red-700"
  },
  {
    icon: <Palette className="h-7 w-7" />,
    title: "Digital Marketing",
    description: "Complete marketing solutions including SEO & branding.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From $800",
    gradient: "from-red-500 to-red-700"
  },
  {
    icon: <Database className="h-7 w-7" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "From $1,200",
    gradient: "from-red-500 to-red-700"
  }
];

export default function ServicesSnapshot() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(220,38,38,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,69,19,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="w-full mx-auto   relative z-10">
        <div className="text-center mb-16">
    
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Complete Digital
            <span className="block bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From web development to AI solutions - we drive your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[500px] overflow-hidden transition-all duration-500 hover:z-10"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />
              
              <div className="relative h-full flex flex-col justify-end p-8 z-10">
                <div className="flex items-center gap-4 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                  <div className={`w-14 h-14 bg-gradient-to-br text-white ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}