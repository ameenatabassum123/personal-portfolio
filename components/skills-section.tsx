"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Book, Palette, PenTool } from "lucide-react"

const activities = [
  {
    id: 1,
    title: "Leadership",
    description: "Organized 10+ tech events and hackathons at university level with 200+ participants.",
    icon: Users,
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    title: "Workshops",
    description: "Conducted workshops on Python programming and data visualization for juniors.",
    icon: Book,
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30",
  },
  {
    id: 3,
    title: "Painting",
    description: "Expressive acrylic painting enthusiast with 20+ artworks showcased in local exhibitions.",
    icon: Palette,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
  },
  {
    id: 4,
    title: "Writing",
    description: "Published articles on Medium about emerging tech trends and career guidance.",
    icon: PenTool,
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30",
  },
]

export function SkillsSection() {

  return (
    <section id="extracurricular" className="py-12 bg-background relative overflow-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent/5 rounded-full animate-gentleRotate"></div>
        <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full animate-pulseGlow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading gradient-text animate-fadeInUp">
          Beyond Academics
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Each represents a different passion outside academics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="relative transition-all duration-300 ease-out"
            >
              <Card 
                className={`
                  bg-gradient-to-br ${activity.color} backdrop-blur-sm
                  border-2 ${activity.borderColor}
                  p-6 rounded-xl shadow-lg transition-all duration-300
                  hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1
                  glass-morphism group animate-staggerIn
                  relative z-10 transform-gpu
                `}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transformOrigin: 'center',
                  willChange: 'transform, opacity, box-shadow',
                }}
              >
                <CardContent className="p-0">
                  {/* Icon with enhanced styling */}
                  <div className={`
                    bg-gradient-to-br from-white/80 to-white/60 p-4 rounded-2xl w-16 h-16 
                    flex items-center justify-center mb-4 shadow-lg
                    group-hover:shadow-xl group-hover:scale-110 transition-all duration-300
                  `}>
                    <activity.icon className="text-primary w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Title */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {activity.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
