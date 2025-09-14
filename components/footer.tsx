"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ameenatabassum123",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-ameena-tabassum-7b050b305/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:ameenatabassum1664@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-primary">Ameena Tabassum</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Artificial Intelligence and Data Science student passionate about creating innovative solutions through technology. Always
              learning, always growing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Projects", "Skills", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="text-muted-foreground hover:text-primary text-sm text-left transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-muted-foreground text-sm">© 2025 Ameena Tabassum. All rights reserved.</p>
            <p className="text-muted-foreground text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-primary" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
