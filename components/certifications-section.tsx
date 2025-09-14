"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const certifications = [
  {
    "title": "Online Coding Challenge - Girls Wanna Code 6.0",
    "issuer": "Flipkart",
    "date": "2025",
    "credentialId": "N/A",
    "description": "Participation in Flipkart's Girls Wanna Code 6.0, an online coding challenge designed to encourage women in technology.",
    "skills": ["Problem Solving", "Competitive Programming", "Coding Challenges"],
    "verificationUrl": "https://drive.google.com/file/d/1uwHHS-IdBn1LoVzjJUN1E6BB1UPYZODo/view?usp=sharing",
    "logo": "/placeholder-logo.png",
    "certificateImage": "/1.jpg",
    "status": "Completed",
    "expiryDate": "Lifetime"
  },
  {
    "title": "SQL Bootcamp",
    "issuer": "LetsUpgrade (in collaboration with NSDC, ITM Edutech, GDG MAD)",
    "date": "August 8, 2025",
    "credentialId": "LUESQLJUN1251702",
    "description": "A 3-day SQL Bootcamp covering SQL fundamentals, queries, and database management concepts.",
    "skills": ["SQL", "Database Management", "Queries"],
    "verificationUrl": "https://drive.google.com/file/d/11nAG1iyove6wVmbZVoNFvo3zDMc6YRtT/view?usp=sharing",
    "logo": "/placeholder-logo.png",
    "certificateImage": "/2.jpg",
    "status": "Completed",
    "expiryDate": "Lifetime"
  },
  {
    "title": "SQL Basics Course",
    "issuer": "Newton School",
    "date": "April 4, 2025",
    "credentialId": "N/A",
    "description": "Successfully completed a 4-day SQL Basics course demonstrating exemplary knowledge and skills in SQL.",
    "skills": ["SQL", "Database Queries", "Data Handling"],
    "verificationUrl": "https://drive.google.com/file/d/1X7cpLUsuYCbv4arQoIiKsaBR2Qrq1FzU/view?usp=sharing",
    "logo": "/placeholder-logo.png",
    "certificateImage": "/ns.jpg",
    "status": "Completed",
    "expiryDate": "Lifetime"
  },
  {
    "title": "UI/UX Portfolio Bootcamp",
    "issuer": "Physics Wallah",
    "date": "March 22, 2025",
    "credentialId": "55ae4a78-db42-4dff-82f8-aef0c8095a1f",
    "description": "Attended a masterclass on UI/UX portfolio design, presentation, and impression techniques.",
    "skills": ["UI/UX Design", "Portfolio Building", "Presentation"],
    "verificationUrl": "https://drive.google.com/file/d/1D4aCXs7D-fUFRjBpGXuq_ENVx2tPdkkK/view?usp=sharing",
    "logo": "/placeholder-logo.png",
    "certificateImage": "/pw.jpeg",
    "status": "Completed",
    "expiryDate": "Lifetime"
  },
  {
    "title": "Data Visualization to Deep Learning Masterclass",
    "issuer": "Scaler",
    "date": "March 20, 2025",
    "credentialId": "N/A",
    "description": "Participated in Scaler's Masterclass on transitioning from data visualization techniques to deep learning concepts.",
    "skills": ["Data Visualization", "Deep Learning", "Data Science"],
    "verificationUrl": "https://drive.google.com/file/d/1D4aCXs7D-fUFRjBpGXuq_ENVx2tPdkkK/view?usp=sharing",
    "logo": "/placeholder-logo.png",
    "certificateImage": "/sm.png",
    "status": "Completed",
    "expiryDate": "Lifetime"
  },
  {
    "title": "Data Analytics Job Simulation",
    "issuer": "Deloitte (via Forage)",
    "date": "August 15, 2025",
    "credentialId": "LTocARYotoRNuNWRP",
    "description": "Completed Deloitte's Data Analytics job simulation via Forage, including tasks in data analysis and forensic technology.",
    "skills": ["Data Analysis", "Forensic Technology", "Analytics Tools"],
    "verificationUrl": "https://drive.google.com/file/d/1D4aCXs7D-fUFRjBpGXuq_ENVx2tPdkkK/view?usp=sharing",
    "logo": "/placeholder-logo.png",
    "certificateImage": "/delloite_page-0001.jpg",
    "status": "Completed",
    "expiryDate": "Lifetime"
  }
]

const achievements = [
  {
    title: "Dean's List Recognition",
    description:
      "Achieved Dean's List status for academic excellence (GPA > 3.7) for Fall 2023 and Spring 2024 semesters.",
    date: "2023-2024",
  },
  {
    title: "Hackathon Winner - TechFest 2024",
    description:
      "First place winner in the sustainability track for developing an AI-powered carbon footprint tracking application.",
    date: "March 2024",
  },
  {
    title: "Computer Science Society Vice President",
    description:
      "Elected to lead initiatives for student engagement, organizing tech talks, and coordinating industry partnerships.",
    date: "2023-Present",
  },
  {
    title: "Academic Excellence Scholarship",
    description: "Merit-based scholarship awarded for outstanding academic performance and leadership potential.",
    date: "2022-2026",
  },
]

export function CertificationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [starredAchievements, setStarredAchievements] = useState<number[]>([])

  const toggleStar = (index: number) => {
    setStarredAchievements(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1.2
      }
    }

    const interval = setInterval(scroll, 15)
    return () => clearInterval(interval)
  }, [])

  // Duplicate certifications for infinite scroll effect
  const duplicatedCertifications = [...certifications, ...certifications]

  return (
    <section id="certifications" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 gradient-text">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional certifications and academic achievements that validate my technical expertise and commitment to
            continuous learning.
          </p>
        </div>

        {/* Horizontal Scrolling Certifications */}
        <div className="mb-12">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedCertifications.map((cert, index) => (
              <Card
                key={`${cert.credentialId}-${index}`}
                className="flex-shrink-0 w-80 bg-card border-border shadow-lg card-hover glass-morphism hover-gradient group"
              >
                <CardContent className="p-0">
                  {/* Certificate Image */}
                  <div className="relative h-48 gradient-surface rounded-t-lg overflow-hidden">
                    <img
                      src={cert.certificateImage}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 animate-pulseGlow">
                      <img
                        src={cert.logo}
                        alt={`${cert.issuer} logo`}
                        className="w-8 h-8 rounded-lg bg-white p-1 shadow-lg"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant={cert.status === "Active" ? "default" : "secondary"} className="text-xs animate-shimmer">
                        {cert.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-6">
                    <h4 className="font-heading font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">{cert.title}</h4>
                    <p className="font-semibold text-primary mb-3">{cert.issuer}</p>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="mr-1 h-4 w-4" />
                      {cert.date}
                    </div>

                    {/* Action Button */}
                    <Button size="sm" variant="outline" asChild className="w-full hover-lift group-hover:border-primary">
                      <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div>
          <h3 className="font-heading font-semibold text-2xl text-foreground mb-6 flex items-center animate-fadeInLeft">
            <CheckCircle className="mr-3 h-6 w-6 text-primary animate-pulseGlow" />
            Academic Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const isStarred = starredAchievements.includes(index)
              
              return (
                <Card
                  key={index}
                  onClick={() => toggleStar(index)}
                  className={`
                    relative p-6 shadow-lg transition-all duration-500 cursor-pointer
                    glass-morphism animate-staggerIn overflow-hidden group
                    ${
                      isStarred 
                        ? 'bg-gradient-to-br from-amber-50/50 to-yellow-50/50 border-amber-300/50 shadow-amber-200/20 shadow-xl scale-105' 
                        : 'bg-card border-border card-hover'
                    }
                    hover:scale-105 hover:shadow-xl
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Star Animation Container */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                    {isStarred && (
                      <div 
                        className="absolute -top-2 -left-2 text-2xl animate-starAppear"
                        style={{
                          animation: 'starAppear 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards'
                        }}
                      >
                        ⭐
                      </div>
                    )}
                  </div>
                  
                  {/* Sparkle effects */}
                  {isStarred && (
                    <>
                      <div className="absolute top-4 right-4 text-yellow-400 animate-ping">✨</div>
                      <div className="absolute bottom-4 left-4 text-yellow-300 animate-pulse" style={{ animationDelay: '0.3s' }}>✨</div>
                      <div className="absolute top-8 right-8 text-amber-400 animate-bounce" style={{ animationDelay: '0.6s' }}>✨</div>
                    </>
                  )}
                  
                  <CardContent className="p-0 relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className={`
                        font-heading font-semibold text-lg transition-colors duration-300
                        ${
                          isStarred 
                            ? 'text-amber-700 dark:text-amber-300' 
                            : 'text-foreground group-hover:text-primary'
                        }
                      `}>
                        {achievement.title}
                      </h4>
                      <Badge 
                        variant="secondary" 
                        className={`
                          text-xs transition-all duration-300
                          ${
                            isStarred 
                              ? 'bg-amber-100 text-amber-700 border-amber-200' 
                              : 'group-hover:scale-105'
                          }
                        `}
                      >
                        {achievement.date}
                      </Badge>
                    </div>
                    <p className={`
                      leading-relaxed transition-colors duration-300
                      ${
                        isStarred 
                          ? 'text-amber-600 dark:text-amber-200' 
                          : 'text-muted-foreground'
                      }
                    `}>
                      {achievement.description}
                    </p>
                    
                    {/* Click indicator */}
                    <div className={`
                      mt-4 text-xs font-medium transition-all duration-300
                      ${
                        isStarred 
                          ? 'text-amber-500' 
                          : 'text-muted-foreground/50 group-hover:text-primary/70'
                      }
                    `}>
                      {isStarred ? 'Starred!' : 'Click to star'}
                    </div>
                  </CardContent>
                  
                  {/* Animated border */}
                  {isStarred && (
                    <div className="absolute inset-0 rounded-lg">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 animate-shimmer"></div>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
          
          {/* Achievement Counter */}
        </div>
      </div>
    </section>
  )
}