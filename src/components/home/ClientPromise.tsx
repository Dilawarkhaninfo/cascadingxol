import { Quote, Star, Sparkles } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  avatar: string;
  rating: number;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "CascadingXol transformed our business completely. Their innovative approach and attention to detail exceeded all expectations.",
    author: "Sarah Ahmad",
    position: "CEO, TechCorp Pakistan",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    project: "E-commerce Platform",
  },
  {
    quote:
      "Professional, timely, and incredibly talented. They didn't just build software - they built our digital future.",
    author: "Ahmed Hassan",
    position: "Founder, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    project: "Mobile Application",
  },
  {
    quote:
      "The AI automation system they developed has increased our efficiency by 300%. Remarkable results!",
    author: "Dr. Fatima Khan",
    position: "Director, HealthTech",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    project: "AI Automation",
  },
  {
    quote:
      "Outstanding web development services. Our website performance improved by 200% after their optimization.",
    author: "Ali Raza",
    position: "Marketing Director, StartupHub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    project: "Website Redesign",
  },
  {
    quote:
      "Their cloud migration service was flawless. Zero downtime and 50% cost reduction achieved.",
    author: "Maria Khan",
    position: "CTO, CloudFirst",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    project: "Cloud Migration",
  },
  {
    quote:
      "Best mobile app development team in Pakistan. Our app reached 10K downloads in the first month!",
    author: "Hassan Ali",
    position: "Founder, MobileFirst",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    project: "Mobile App Development",
  },
  {
    quote:
      "Digital marketing campaign exceeded our expectations. 400% increase in lead generation!",
    author: "Ayesha Malik",
    position: "CEO, GrowthCorp",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    project: "Digital Marketing",
  },
  {
    quote:
      "Their desktop solutions streamlined our entire workflow. Productivity increased by 250%.",
    author: "Omar Sheikh",
    position: "Operations Manager, LogiFlow",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    project: "Desktop Application",
  },
];

// Split testimonials for two rows
const firstRowTestimonials = testimonials.slice(0, 4);
const secondRowTestimonials = testimonials.slice(4, 8);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1 min-w-[350px] mx-3 hover:bg-white/90">
    {/* Rating Stars */}
    <div className="flex space-x-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 text-red-800 fill-current" />
      ))}
    </div>

    {/* Quote */}
    <blockquote className="text-gray-700 mb-6 italic leading-relaxed text-sm">
      "{testimonial.quote}"
    </blockquote>

    {/* Author */}
    <div className="flex items-center space-x-3">
      <img
        src={testimonial.avatar}
        alt={testimonial.author}
        className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
      />
      <div className="flex-1">
        <div className="font-semibold text-[#0A1F44] text-sm">
          {testimonial.author}
        </div>
        <div className="text-xs text-gray-600">{testimonial.position}</div>
      </div>
    </div>

    {/* Project Badge */}
    <div className="mt-4 pt-4 border-t border-gray-100">
      <span className="inline-block px-2 py-1 bg-gradient-to-r from-[#0A1F44]/10 to-[#8B0000]/10 text-[#0A1F44] text-xs font-medium rounded-full">
        {testimonial.project}
      </span>
    </div>

    {/* Hover Effect */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0A1F44]/5 to-[#8B0000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

export default function ClientPromise() {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden">
      {/* Enhanced Background with Multiple Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] via-[#1a2e5c] to-[#8B0000]" />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/4 right-1/3 w-36 h-36 bg-white/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="w-full mx-auto relative z-10">
        {/* Main Promise Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white">
              Our Promise
            </span>
          </div>

          {/* Main Quote */}
          <div className="relative max-w-5xl mx-auto">
            <Quote className="h-16 w-16 text-white/20 absolute -top-8 -left-4 md:-left-8" />
            <Quote className="h-16 w-16 text-white/20 absolute -bottom-8 -right-4 md:-right-8 rotate-180" />

            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 relative z-10">
              We don't just build software;{" "}
              <span className="text-transparent bg-gradient-to-r from-red-700 to-red-600 bg-clip-text">
                we build businesses ready for the future.
              </span>
            </blockquote>
          </div>

          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Every line of code, every design decision, and every feature is
            crafted with your success in mind. We're not just your technology
            partner - we're invested in your growth.
          </p>
        </div>

        {/* Infinite Scrolling Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
            What Our Clients Say
          </h3>

          {/* First Row - Left to Right */}
          <div className="relative overflow-hidden mb-8 py-3">
            <div className="flex animate-scroll-left gap-0">
              {/* Triple the testimonials for seamless loop */}
              {[...Array(3)].map((_, setIndex) =>
                firstRowTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`first-${setIndex}-${index}`}
                    testimonial={testimonial}
                  />
                ))
              )}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative overflow-hidden py-3">
            <div className="flex animate-scroll-right gap-0">
              {/* Triple the testimonials for seamless loop */}
              {[...Array(3)].map((_, setIndex) =>
                secondRowTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`second-${setIndex}-${index}`}
                    testimonial={testimonial}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(-33.333%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-scroll-left {
                    animation: scroll-left 40s linear infinite;
                    width: calc(350px * 12 + 36px * 12); /* 3 sets of 4 cards each */
                }

                .animate-scroll-right {
                    animation: scroll-right 40s linear infinite;
                    width: calc(350px * 12 + 36px * 12); /* 3 sets of 4 cards each */
                }

                /* Pause animation on hover */
                .animate-scroll-left:hover,
                .animate-scroll-right:hover {
                    animation-play-state: paused;
                }

                /* Smooth gradient edges */
                .animate-scroll-left::before,
                .animate-scroll-right::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100px;
                    height: 100%;
                    background: linear-gradient(to right, rgba(10, 31, 68, 1), transparent);
                    z-index: 10;
                    pointer-events: none;
                }

                .animate-scroll-left::after,
                .animate-scroll-right::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100px;
                    height: 100%;
                    background: linear-gradient(to left, rgba(10, 31, 68, 1), transparent);
                    z-index: 10;
                    pointer-events: none;
                }
            `}</style>
    </section>
  );
}
