"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Phone, Mail, MessageSquare } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    serviceType: "",
    location: "",
    projectBrief: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Thank you for your inquiry. We will get back to you shortly.")
    setFormData({
      fullName: "",
      email: "",
      serviceType: "",
      location: "",
      projectBrief: "",
    })
  }

  return (
    <section className="bg-background pb-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border p-8 lg:p-10"
          >
            <h2 className="font-serif text-2xl text-foreground mb-8">Project Inquiry</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Service Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>Interior Technical Services</option>
                    <option value="interior">Interior Technical Services</option>
                    <option value="renovation">Renovation & Construction</option>
                    <option value="maintenance">Technical Maintenance</option>
                    <option value="consultancy">Engineering Consultancy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Dubai / Abu Dhabi"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Project Brief
                </label>
                <textarea
                  placeholder="Describe your technical requirements..."
                  value={formData.projectBrief}
                  onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Regional HQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-primary/60 p-8 lg:p-10 flex-1">
              <h2 className="font-serif text-2xl text-primary-foreground mb-8">Regional HQ</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary-foreground/70 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/70 mb-1">
                      Dubai Office
                    </p>
                    <p className="text-primary-foreground text-sm">
                      Business Bay, Opus Tower, Suite 402<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary-foreground/70 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/70 mb-1">
                      Direct Line
                    </p>
                    <p className="text-primary-foreground text-sm">+971 4 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary-foreground/70 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/70 mb-1">
                      Enquiries
                    </p>
                    <p className="text-primary-foreground text-sm font-medium">projects@fhtechnical.ae</p>
                  </div>
                </div>
              </div>

              <button className="absolute bottom-24 right-8 lg:bottom-auto lg:right-10 lg:top-10 w-12 h-12 bg-background/10 rounded-sm flex items-center justify-center hover:bg-background/20 transition-colors">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>

            {/* WhatsApp Support Bar */}
            <div className="bg-primary/90 p-6 flex items-center justify-between">
              <div>
                <p className="text-primary-foreground font-medium">WhatsApp Support</p>
                <p className="text-primary-foreground/70 text-sm">Instant technical consultation.</p>
              </div>
              <div className="w-12 h-12 bg-background flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}