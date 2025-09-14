"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Calendar, Clock } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ameenatabassum1664@gmail.com",
    href: "mailto:ameenatabassum1664@gmail.com",
    description: "Feel free to reach out for opportunities or collaborations",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    description: "Available for calls Monday-Friday, 9 AM - 6 PM EST",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Prakash Nagar, Khammam, Telangana",
    href: "#",
    description: "Open to remote work and relocation opportunities",
  },
  {
    icon: Calendar,
    label: "Availability",
    value: "Available for internships",
    href: "#",
    description: "Seeking 2025 internship opportunities",
  },
]


export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <section id="contact" className="py-12 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities, collaborations, and connecting with fellow developers. Let's
            discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="p-8 bg-card border-border shadow-lg">
              <CardContent className="p-0">
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={!isFormValid || isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="p-8 bg-card border-border shadow-lg">
              <CardContent className="p-0">
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">Contact Information</h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading font-semibold text-foreground">{info.label}</h4>
                        {info.href !== "#" ? (
                          <a
                            href={info.href}
                            className="text-primary hover:text-primary/80 font-medium transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-primary font-medium">{info.value}</p>
                        )}
                        <p className="text-muted-foreground text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </section>
  )
}
