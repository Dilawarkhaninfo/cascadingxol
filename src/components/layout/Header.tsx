import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, ArrowRight } from "lucide-react"
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
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (href: string) => location.pathname === href

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
            isScrolled
                ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg'
                : 'bg-transparent'
        }`}>
            <div className="mx-auto flex container items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link
                    to="/"
                    className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-lg shadow opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="relative flex h-10 w-10 items-center justify-center rounded shadow bg-white text-white font-bold text-lg">
                            <img src={LogoImage} alt="CascadingXol" className="h-10 w-10 object-contain" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-bold leading-none transition-colors duration-300 ${
                            isScrolled ? 'text-black' : 'text-white'
                        }`}>
                            Cascading<span className="text-red-700">Xol</span>
                        </span>
                        <span className={`text-xs font-medium transition-colors duration-300 ${
                            isScrolled ? 'text-gray-600' : 'text-white/80'
                        }`}>Innovation in Flow</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                                isActive(item.href)
                                    ? isScrolled 
                                        ? 'text-red-700 bg-red-50' 
                                        : 'text-red-400 bg-white/10'
                                    : isScrolled
                                        ? 'text-gray-700 hover:text-black hover:bg-gray-50'
                                        : 'text-white/90 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            {item.name}
                            {isActive(item.href) && (
                                <div className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-red-700 transition-all duration-300"></div>
                            )}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-700/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                    ))}
                </nav>

                {/* CTA Button & Mobile Menu */}
                <div className="flex items-center space-x-4">
                    <Button
                        asChild
                        className={`hidden md:inline-flex transition-all duration-300 group ${
                            isScrolled 
                                ? 'bg-red-700 hover:bg-red-700 text-white shadow-lg hover:shadow-xl' 
                                : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
                        }`}
                    >
                        <Link to="/contact">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </Button>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className={`relative h-10 w-10 transition-colors duration-300 ${
                                        isScrolled ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/10 text-white'
                                    }`}
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-80 bg-white border-l border-gray-100"
                            >
                                <SheetHeader className="border-b border-gray-100 pb-4 mb-6">
                                    <div className="flex items-center space-x-3">
                                        <img src={LogoImage} alt="CascadingXol" className="h-8 w-8 object-contain" />
                                        <div>
                                            <h2 className="text-lg font-bold text-black">
                                                Cascading<span className="text-red-700">Xol</span>
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
                                            className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 group ${
                                                isActive(item.href)
                                                    ? 'text-red-700 bg-red-50 border-l-2 border-red-700'
                                                    : 'text-gray-700 hover:text-black hover:bg-gray-50'
                                            }`}
                                        >
                                            <span>{item.name}</span>
                                            <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${
                                                isActive(item.href) ? 'text-red-700' : 'text-gray-400 group-hover:translate-x-1'
                                            }`} />
                                        </Link>
                                    ))}
                                </nav>
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <Button
                                        asChild
                                        className="w-full bg-red-700 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Link to="/contact">
                                            Get Started
                                            <ArrowRight className="ml-2 h-4 w-4" />
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