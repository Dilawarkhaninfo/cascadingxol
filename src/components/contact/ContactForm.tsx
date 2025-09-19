import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Send, CheckCircle, Upload, Calendar, DollarSign, Code } from "lucide-react"

const projectTypes = [
    "Web Development",
    "Mobile App Development", 
    "Desktop Application",
    "E-Commerce Platform",
    "Digital Marketing",
    "AI & Automation",
    "Custom Solution",
    "Consultation Only"
]

const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000", 
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000+",
    "Not Sure Yet"
]

const timelines = [
    "ASAP (Rush Project)",
    "1-2 Months",
    "3-6 Months", 
    "6+ Months",
    "Flexible Timeline"
]

export default function ContactForm() {
    const [form, setForm] = useState({ 
        name: "", 
        email: "", 
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
        newsletter: false,
        priority: false
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        const checked = (e.target as HTMLInputElement).checked
        
        setForm({ 
            ...form, 
            [name]: type === 'checkbox' ? checked : value 
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        console.log("Form Submitted:", form)
        setIsSubmitted(true)
        setIsSubmitting(false)
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setForm({ 
                name: "", 
                email: "", 
                phone: "",
                company: "",
                projectType: "",
                budget: "",
                timeline: "",
                message: "",
                newsletter: false,
                priority: false
            })
        }, 3000)
    }

    if (isSubmitted) {
        return (
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">
                        Thank You!
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Your message has been sent successfully. Our team will review your requirements 
                        and get back to you within 2 hours during business hours.
                    </p>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                        <p className="text-green-800 font-medium">
                            Next Steps: We'll send you a confirmation email shortly with our initial thoughts and next steps.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">
                    Start Your Project
                </h3>
                <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 2 hours with a detailed response.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                            Full Name *
                        </label>
                        <Input
                            name="name"
                            placeholder="John Doe"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="border-2 border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000] rounded-xl py-3"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                            Email Address *
                        </label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="john@company.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="border-2 border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000] rounded-xl py-3"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                            Phone Number
                        </label>
                        <Input
                            type="tel"
                            name="phone"
                            placeholder="+92 300 1234567"
                            value={form.phone}
                            onChange={handleChange}
                            className="border-2 border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000] rounded-xl py-3"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                            Company Name
                        </label>
                        <Input
                            name="company"
                            placeholder="Your Company Ltd."
                            value={form.company}
                            onChange={handleChange}
                            className="border-2 border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000] rounded-xl py-3"
                        />
                    </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-[#0A1F44] flex items-center space-x-2">
                        <Code className="h-5 w-5" />
                        <span>Project Details</span>
                    </h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                                Project Type
                            </label>
                            <select
                                name="projectType"
                                value={form.projectType}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000] rounded-xl py-3 px-4 bg-white"
                            >
                                <option value="">Select Type</option>
                                {projectTypes.map((type, index) => (
                                    <option key={index} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-semibold text-[#0A1F44] mb-2 flex items-center space-x-1">
                                <DollarSign className="h-4 w-4" />
                                <span>Budget Range</span>
                            </label>
                            <select
                                name="budget"
                                value={form.budget}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000] rounded-xl py-3 px-4 bg-white"
                            >
                                <option value="">Select Budget</option>
                                {budgetRanges.map((range, index) => (
                                    <option key={index} value={range}>{range}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-semibold text-[#0A1F44] mb-2 flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>Timeline</span>
                            </label>
                            <select
                                name="timeline"
                                value={form.timeline}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000] rounded-xl py-3 px-4 bg-white"
                            >
                                <option value="">Select Timeline</option>
                                {timelines.map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                        Project Description *
                    </label>
                    <Textarea
                        name="message"
                        placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="border-2 border-gray-200 focus:border-[#8B0000] focus:ring-[#8B0000] rounded-xl resize-none"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                        Be as detailed as possible to help us provide an accurate quote and timeline.
                    </p>
                </div>

                {/* File Upload */}
                <div>
                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2 flex items-center space-x-1">
                        <Upload className="h-4 w-4" />
                        <span>Attachments (Optional)</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#8B0000] transition-colors duration-300">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">
                            Upload project documents, wireframes, or reference materials
                        </p>
                        <p className="text-xs text-gray-500">
                            Max file size: 10MB. Supported: PDF, DOC, IMG
                        </p>
                    </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                    <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="priority"
                            checked={form.priority}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 text-[#8B0000] border-2 border-gray-300 rounded focus:ring-[#8B0000]"
                        />
                        <div>
                            <span className="font-medium text-[#0A1F44]">Priority Project</span>
                            <p className="text-sm text-gray-600">
                                Check this if you need expedited service (additional charges may apply)
                            </p>
                        </div>
                    </label>
                    
                    <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="newsletter"
                            checked={form.newsletter}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 text-[#8B0000] border-2 border-gray-300 rounded focus:ring-[#8B0000]"
                        />
                        <div>
                            <span className="font-medium text-[#0A1F44]">Subscribe to Updates</span>
                            <p className="text-sm text-gray-600">
                                Get tech insights, project updates, and industry news (unsubscribe anytime)
                            </p>
                        </div>
                    </label>
                </div>

                {/* Submit Button */}
                <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#8B0000] to-[#0A1F44] hover:from-[#8B0000]/90 hover:to-[#0A1F44]/90 text-white py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending Message...</span>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center space-x-2">
                            <Send className="h-5 w-5" />
                            <span>Send Message</span>
                        </div>
                    )}
                </Button>

                {/* Additional Info */}
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        By submitting this form, you agree to our{' '}
                        <a href="#" className="text-[#8B0000] hover:underline">Privacy Policy</a>{' '}
                        and{' '}
                        <a href="#" className="text-[#8B0000] hover:underline">Terms of Service</a>
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                        We typically respond within 2 hours during business hours (9 AM - 6 PM PKT)
                    </p>
                </div>
            </form>
        </div>
    )
}