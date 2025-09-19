import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Services from "@/pages/Services"
import Portfolio from "@/pages/Portfolio"
import Contact from "@/pages/Contact"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <div className="flex min-h-screen flex-col">
                {/* Global Header */}
                <Header />

                {/* Page Content */}
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                {/* Global Footer */}
                <Footer />
            </div>
        </BrowserRouter>
    )
}
