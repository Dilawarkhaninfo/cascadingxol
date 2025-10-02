import { Target, Eye } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(220,38,38,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,69,19,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="w-full mx-auto   relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our North Star &
            <span className="block bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
              {" "}
              Purpose
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guided by a clear vision and driven by a meaningful mission, we're
            building the future of technology solutions.
          </p>
        </div>

        {/* Vision & Mission Cards - No Gap */}
        <div className="grid lg:grid-cols-2 gap-0 not-only:">
          {/* Vision Card */}
          <div
            className="group relative h-[600px] overflow-hidden transition-all duration-500 hover:z-10"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />

            <div className="relative h-full flex flex-col justify-end p-8 z-10">
              <div className="transform group-hover:translate-y-[-10px] transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Eye className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      Our Vision
                    </h3>
                    <p className="text-red-100 text-sm">Where we're heading</p>
                  </div>
                </div>

                <blockquote className="text-lg text-gray-100 leading-relaxed">
                  "To become Pakistan's leading global software house,
                  delivering cutting-edge solutions that transform businesses
                  and set new standards for excellence."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div
            className="group relative h-[600px] overflow-hidden transition-all duration-500 hover:z-10"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />

            <div className="relative h-full flex flex-col justify-end p-8 z-10">
              <div className="transform group-hover:translate-y-[-10px] transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      Our Mission
                    </h3>
                    <p className="text-red-100 text-sm">What drives us daily</p>
                  </div>
                </div>

                <blockquote className="text-lg text-gray-100 leading-relaxed">
                  "To help businesses achieve digital transformation through
                  creativity, intelligence, and trust, while building
                  long-lasting partnerships that drive mutual success."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
