"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Book, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const educationTimeline = [
  {
    degree: "Bachelor of Technology",
    institution: "Priyadarshini Institute of Science and Technology for Women (PRIW) ",
    period: "2022 - Present",
    description: "Major in Artificial Intelligence & Data Science. Current GPA: 7.8/10",
    tags: ["Artificial Intelligence", "Data Science"],
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary",
    institution: "Sri Chaitanya Junior College",
    period: "2020 - 2022",
    description: "Completed with 70% aggregate in Mathematics, Physics, and Chemistry (MPC).",
    tags: ["Mathematics", "Physics", "Chemistry"],
    icon: Book,
  },
  {
    degree: "Secondary Education",
    institution: "St. Joseph’s High School",
    period: "2019-2020  ",
    description: "Graduated with 10 GPA and school merit student.",
    tags: ["School Topper"],
    icon: Award,
  },
]

export function EducationSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.1 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="py-12 bg-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-36 h-36 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-primary/5 rounded-full animate-gentleRotate"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeInUp font-heading gradient-text">Education Journey</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 transform -translate-x-1/2"></div>
          
          <div className="space-y-8 md:space-y-0">
            {educationTimeline.map((edu, index) => (
              <div 
                key={index}
                ref={(el) => { itemRefs.current[index] = el }}
                data-index={index}
                className={`relative ${index % 2 === 0 ? 'md:w-1/2 ml-auto md:pl-16 pr-6 md:pr-0' : 'md:w-1/2 mr-auto md:pr-16 pl-6 md:pl-0'} ${
                  visibleItems.includes(index) 
                    ? (index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight')
                    : 'opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transitionDuration: '0.6s'
                }}
              >
                <Card className="bg-card border-border p-6 rounded-xl shadow-lg card-hover glass-morphism timeline-item hover-gradient group">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-2">
                      <div className="bg-primary text-primary-foreground p-2 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 animate-pulseGlow">
                        <edu.icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{edu.degree}</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">{edu.institution} | {edu.period}</p>
                    <p className="text-muted-foreground/80 mb-4 leading-relaxed">{edu.description}</p>
                    <div className="mt-4">
                      {edu.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          variant="secondary" 
                          className="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full mr-2 mb-2 hover:bg-primary/20 hover:scale-105 transition-all duration-300 animate-staggerIn"
                          style={{ animationDelay: `${tagIndex * 0.1}s` }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
