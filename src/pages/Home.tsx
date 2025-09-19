import Hero from "@/components/home/Hero"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import ServicesSnapshot from "@/components/home/ServicesSnapshot"
import ClientPromise from "@/components/home/ClientPromise"

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section with Slider */}
            <Hero />

            {/* Why Choose Us with Images and Stats */}
            <WhyChooseUs />

            {/* Services with Visual Cards */}
            <ServicesSnapshot />

            {/* Client Promise with Testimonials */}
            <ClientPromise />
        </div>
    )
}