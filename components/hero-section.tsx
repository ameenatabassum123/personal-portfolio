"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail, Code } from "lucide-react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image - Right Side Only */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-0 left-2/5 w-3/5 h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${theme === 'dark' ? '/home-dark.jpg' : '/home.jpg'})` }}
        ></div>
        {/* Left side gradient overlay for text readability */}
        <div className="absolute top-0 left-0 w-2/5 h-full bg-background"></div>
        {/* Smooth transition between left and right */}
        <div className="absolute top-0 left-2/5 w-8 h-full bg-gradient-to-r from-background to-transparent"></div>
      </div>
      {/* Animated background elements - Left 3/4 only */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/6 w-24 h-24 bg-primary/8 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-accent/6 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary/5 rounded-full animate-gentleRotate" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-18 h-18 bg-secondary/4 rounded-full animate-float" style={{ animationDelay: '6s' }}></div>
      </div>
      <div className="container mx-auto px-6 py-16 relative z-20 max-w-7xl">
        <div className="flex items-center min-h-[calc(100vh-8rem)]">
          {/* Left 3/5 - Content Area */}
          <div className={`w-3/5 pr-3 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
            {/* Professional Badge */}
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-card border border-primary/20 text-sm font-medium text-muted-foreground mb-6 shadow-lg animate-fadeInDown">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Available for opportunities
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 gradient-text animate-shimmer leading-tight">
              Ameena Tabassum
            </h1>
            
            <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 animate-fadeInLeft font-medium leading-relaxed max-w-4xl" style={{ animationDelay: '0.2s' }}>
              Computer Science & Engineering Student | Aspiring Data Analyst & Software Developer
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed animate-fadeInLeft max-w-2xl" style={{ animationDelay: '0.4s' }}>
              Passionate about Machine Learning, Data Visualization & Software Development. Currently pursuing my degree while building innovative projects and exploring the endless possibilities of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover-lift hover-gradient">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" className="bg-background hover:bg-muted border-primary/30 hover:border-primary text-foreground px-5 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg card-hover flex items-center">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="bg-background hover:bg-muted border-primary/30 hover:border-primary text-foreground px-5 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg card-hover flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="mt-8 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <button 
                onClick={scrollToAbout}
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-sm font-medium">Scroll to explore</span>
                <ArrowDown className="h-4 w-4 animate-bounce group-hover:text-primary" />
              </button>
            </div>
          </div>
          
          {/* Right 2/5 - Background Image Visible */}
          <div className="w-2/5 h-full relative">
            {/* This space intentionally left for background image visibility */}
            <div className="absolute inset-0 flex items-center justify-center text-transparent pointer-events-none">
              {/* Placeholder to ensure the space is reserved */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
