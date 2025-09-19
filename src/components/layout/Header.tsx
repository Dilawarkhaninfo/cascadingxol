import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import LogoImage from "../../assets/icon.png"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (href: string) => location.pathname === href

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg'
            : 'bg-white border-b border-gray-100'
            }`}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link
                    to="/"
                    className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-lg shadow opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="relative flex h-10 w-10 items-center justify-center rounded  shadow  text-white font-bold text-lg">
                            <img src={LogoImage} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-[#0A1F44] leading-none">
                            Cascading<span className="text-[#8B0000]">Xol</span>
                        </span>
                        <span className="text-xs text-gray-500 font-medium">Innovation in Flow</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${isActive(item.href)
                                ? 'text-[#8B0000] bg-[#8B0000]/10'
                                : 'text-gray-700 hover:text-[#0A1F44] hover:bg-gray-50'
                                }`}
                        >
                            {item.name}
                            {isActive(item.href) && (
                                <div className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#8B0000] transition-all duration-300"></div>
                            )}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0A1F44]/5 to-[#8B0000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                    ))}
                </nav>

                {/* CTA Button & Mobile Menu */}
                <div className="flex items-center space-x-4">
                    <Button
                        asChild
                        className="hidden md:inline-flex bg-gradient-to-r from-[#8B0000] to-[#8B0000]/90 hover:from-[#8B0000]/90 hover:to-[#8B0000] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                        <Link to="/contact">
                            Get Started
                            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </Button>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="relative h-10 w-10 hover:bg-gray-100"
                                >
                                    <Menu className={`h-5 w-5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-80 bg-white border-l border-gray-100"
                            >
                                <SheetHeader className="border-b border-gray-100 pb-4 mb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#0A1F44] to-[#8B0000] text-white font-bold">
                                            C
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-[#0A1F44]">
                                                Cascading<span className="text-[#8B0000]">Xol</span>
                                            </h2>
                                            <p className="text-xs text-gray-500">Innovation in Flow</p>
                                        </div>
                                    </div>
                                </SheetHeader>

                                <nav className="flex flex-col space-y-2">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 group ${isActive(item.href)
                                                ? 'text-[#8B0000] bg-[#8B0000]/10 border-l-2 border-[#8B0000]'
                                                : 'text-gray-700 hover:text-[#0A1F44] hover:bg-gray-50'
                                                }`}
                                        >
                                            <span>{item.name}</span>
                                            <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isActive(item.href) ? 'text-[#8B0000]' : 'text-gray-400 group-hover:translate-x-1'
                                                }`} />
                                        </Link>
                                    ))}
                                </nav>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-[#8B0000] to-[#8B0000]/90 hover:from-[#8B0000]/90 hover:to-[#8B0000] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Link to="/contact">
                                            Get Started
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}