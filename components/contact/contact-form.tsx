"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, MessageSquare } from "lucide-react";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  serviceType: "",
  country: "",
  city: "",
  projectBrief: "",
};

const countryCities: Record<string, string[]> = {
  "United Arab Emirates": [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman",
    "Umm Al Quwain",
    "Ras Al-Khaimah",
    "Fujairah",
  ],
  "Saudi Arabia": [
    "Riyadh",
    "Jeddah",
    "Mecca",
    "Medina",
    "Dammam",
    "Tabuk",
    "Buraydah",
    "Ta'if",
    "Najran",
  ],
  "Qatar": [
    "Doha",
    "Al Rayyan",
    "Lusail",
    "Al Wakrah",
    "Al Khor",
    "Mesaieed",
    "Dukhan",
    "Madinat ash Shamal",
  ],
  "Oman": [
    "Muscat",
    "Seeb",
    "Salalah",
    "Sohar",
    "Nizwa",
    "Sur",
    "Rustaq",
    "Bahla",
    "Ibri",
    "Khasab",
    "Duqm",
  ],
  "Bahrain": [
    "Manama",
    "Muharraq",
    "Riffa",
    "Hamad Town",
    "A'ali",
    "Isa Town",
    "Sitra",
    "Budaiya",
  ],
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send your inquiry.");
      }

      setIsSuccess(true);
      setMessage("Thank you! Your inquiry has been submitted.");
      setFormData(initialFormData);
    } catch (error) {
      setIsSuccess(false);
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="bg-[#121212] border border-[#1D1D1D] p-8 lg:p-10"
          >
            <h2 className="font-serif text-2xl text-white mb-8">
              Project Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={isSuccess ? "text-green-400" : "text-red-400"}
                >
                  {message}
                </p>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Service Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        serviceType: e.target.value,
                      })
                    }
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="interior">
                      Interior Technical Services
                    </option>
                    <option value="renovation">
                      Renovation & Construction
                    </option>
                    <option value="maintenance">Technical Maintenance</option>
                    <option value="consultancy">Engineering Consultancy</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                  >
                    Country
                  </label>

                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        country: e.target.value,
                        city: "",
                      })
                    }
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="" disabled>
                      Select a country
                    </option>

                    {Object.keys(countryCities).map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                  >
                    City
                  </label>

                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        city: e.target.value,
                      })
                    }
                    required
                    disabled={!formData.country}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                  >
                    <option value="" disabled>
                      {formData.country
                        ? "Select a city"
                        : "Select a country first"}
                    </option>

                    {(countryCities[formData.country] ?? []).map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Project Brief
                </label>
                <textarea
                  placeholder="Describe your technical requirements..."
                  value={formData.projectBrief}
                  onChange={(e) =>
                    setFormData({ ...formData, projectBrief: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 bg-[#C5A059] text-black px-8 py-4 text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
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
            <div className="bg-[#1B1917] border border-[#211F1D] p-8 lg:p-10 flex-1 relative">
              <h2 className="font-serif text-2xl text-primary mb-8">
                Regional HQ
              </h2>

              <div className="space-y-6">
                {/* Office Address - Google Maps */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />

                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground/50 mb-1">
                      Dubai Office
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Saif+Al-Rumhib+Building%2C+Deira%2C+Dubai%2C+United+Arab+Emirates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors underline-offset-4 hover:underline"
                      aria-label="View Dubai office location on Google Maps"
                    >
                      Saif Al-Rumhib Building, Deira
                      <br />
                      Dubai, United Arab Emirates
                    </a>
                  </div>
                </div>

                {/* Phone - Click to Call */}
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground/50 mb-1">
                      Direct Line
                    </p>
                    <a
                      href="tel:+971565302726"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      aria-label="Call FH Technical Services"
                    >
                      +971 56 530 2726
                    </a>
                  </div>
                </div>

                {/* Email - Open Email App */}
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground/50 mb-1">
                      Enquiries
                    </p>
                    <a
                      href="mailto:fhinterior7@gmail.com?subject=Service%20Enquiry"
                      className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors break-all"
                      aria-label="Email FH Technical Services"
                    >
                      fhinterior7@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/971565302726?text=Hello%20FH%20Technical%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact FH Technical Services on WhatsApp"
                className="absolute bottom-24 right-8 lg:bottom-8 lg:right-2  w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-[#000000]" />
              </a>
            </div>

            {/* WhatsApp Support Bar */}
            <a
              href="https://wa.me/971565302726?text=Hello%20FH%20Technical%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact FH Technical Services on WhatsApp"
              className="bg-[#C5A059] p-6 flex items-center justify-between group hover:bg-[#D4B475] transition-colors duration-300 cursor-pointer"
            >
              <div>
                <p className="text-primary-foreground font-medium">
                  WhatsApp Support
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Instant technical consultation.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
