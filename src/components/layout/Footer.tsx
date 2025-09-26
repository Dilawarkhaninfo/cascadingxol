import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp, ExternalLink, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import LogoImage from "../../assets/icon.png"

const footerLinks = {
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/about#story" },
        { name: "Team", href: "/about#team" },
        { name: "Careers", href: "#", external: true },
    ],
    services: [
        { name: "Web Development", href: "/services#web" },
        { name: "Mobile Apps", href: "/services#mobile" },
        { name: "Desktop Solutions", href: "/services#desktop" },
        { name: "Digital Marketing", href: "/services#marketing" },
        { name: "AI Solutions", href: "/services#ai" },
    ],
    resources: [
        { name: "Portfolio", href: "/portfolio" },
        { name: "Case Studies", href: "/portfolio#cases" },
        { name: "Blog", href: "#", external: true },
        { name: "Documentation", href: "#", external: true },
    ],
    legal: [
        { name: "Privacy Policy", href: "#", external: true },
        { name: "Terms of Service", href: "#", external: true },
        { name: "Cookie Policy", href: "#", external: true },
    ]
}

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "info@cascadingxol.com",
        href: "mailto:info@cascadingxol.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+92 335 6555517",
        href: "tel:+923356555517"
    },
    {
        icon: MapPin,
        label: "Address",
        value: "Sector H-13, Islamabad, Pakistan",
        href: "#"
    }
]

const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
]

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
            {/* Main Footer Content */}
            <div className="mx-auto container px-6 pt-16 pb-8">
                <div className="grid gap-12 lg:grid-cols-12">
                    {/* Company Info - 4 columns */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Logo */}
                        <Link to="/" className="group flex items-center space-x-3">
                             <div className="relative">
                        <div className="absolute inset-0 rounded-lg shadow opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="relative flex h-10 w-10 items-center justify-center rounded  shadow  text-white font-bold text-lg">
                            <img src={LogoImage} alt="CascadingXol Logo" />
                        </div>
                    </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-[#0A1F44]">
                                    Cascading<span className="text-[#8B0000]">Xol</span>
                                </span>
                                <span className="text-sm text-gray-600">Private Limited</span>
                            </div>
                        </Link>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                            A registered private limited company building scalable, innovative software solutions that empower businesses to thrive in the digital age. From web to mobile, AI to marketing - we make technology work for you.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            {contactInfo.map((contact) => (
                                <a
                                    key={contact.label}
                                    href={contact.href}
                                    className="flex items-start space-x-3 text-sm text-gray-600 hover:text-[#8B0000] transition-colors duration-300 group"
                                >
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-[#8B0000]/10 transition-colors duration-300 flex-shrink-0 mt-0.5">
                                        <contact.icon className="h-4 w-4 group-hover:text-[#8B0000] transition-colors duration-300" />
                                    </div>
                                    <span className="leading-relaxed">{contact.value}</span>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-[#0A1F44] hover:text-white transition-all duration-300 hover:scale-110"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid - 8 columns */}
                    <div className="lg:col-span-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Company Links */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-[#0A1F44] uppercase tracking-wider">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        {link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-sm text-gray-600 hover:text-[#8B0000] transition-colors duration-300 group"
                                            >
                                                <span>{link.name}</span>
                                                <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                className="text-sm text-gray-600 hover:text-[#8B0000] transition-colors duration-300 hover:translate-x-1 inline-block"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-[#0A1F44] uppercase tracking-wider">
                                Services
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-sm text-gray-600 hover:text-[#8B0000] transition-colors duration-300 hover:translate-x-1 inline-block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-[#0A1F44] uppercase tracking-wider">
                                Resources
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.name}>
                                        {link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-sm text-gray-600 hover:text-[#8B0000] transition-colors duration-300 group"
                                            >
                                                <span>{link.name}</span>
                                                <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                className="text-sm text-gray-600 hover:text-[#8B0000] transition-colors duration-300 hover:translate-x-1 inline-block"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-[#0A1F44] uppercase tracking-wider">
                                Legal
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm text-gray-600 hover:text-[#8B0000] transition-colors duration-300 group"
                                        >
                                            <span>{link.name}</span>
                                            <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 bg-white/50">
                <div className="mx-auto container px-6 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm text-gray-500">
                                © {new Date().getFullYear()} CascadingXol Private Limited. All rights reserved.
                            </p>
                           
                        </div>
                        
                        <div className="flex items-center space-x-6">
                       
                            <Button
                                onClick={scrollToTop}
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full bg-gray-100 hover:bg-[#8B0000] hover:text-white transition-all duration-300 hover:scale-110"
                                aria-label="Scroll to top"
                            >
                                <ArrowUp className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}