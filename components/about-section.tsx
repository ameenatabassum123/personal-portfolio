"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Code2, Sparkles, GraduationCap, Briefcase, Award, Target, TrendingUp, Coffee, User, BookOpen } from "lucide-react"
import { IntersectionObserver } from "./intersection-observer"
import Image from "next/image"

const skills = [
  { name: "React", id: "react" },
  { name: "TypeScript", id: "ts" },
  { name: "JavaScript", id: "js" },
  { name: "Python", id: "py" },
  { name: "Node.js", id: "nodejs" },
  { name: "HTML5", id: "html" },
  { name: "CSS3", id: "css" },
  { name: "MongoDB", id: "mongodb" },
  { name: "MySQL", id: "mysql" },
  { name: "Git", id: "git" },
  { name: "GitHub", id: "github" },
  { name: "AWS", id: "aws" },
  { name: "Docker", id: "docker" },
  { name: "Figma", id: "figma" },
  { name: "VS Code", id: "vscode" },
  { name: "Next.js", id: "nextjs" },
  { name: "Tailwind", id: "tailwind" },
  { name: "Express", id: "express" },
]

const achievements = [
  { label: "GPA", value: "3.8/4.0", icon: GraduationCap },
  { label: "Projects", value: "15+", icon: Code2 },
  { label: "Certifications", value: "8+", icon: Award },
  { label: "Experience", value: "2+ Years", icon: Briefcase },
]

export function AboutSection() {
  return (
    <section id="about" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <IntersectionObserver>
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 gradient-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Passionate Computer Science student with expertise in modern web development and data science
            </p>
          </div>
        </IntersectionObserver>

        {/* Redesigned Full Width Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Enhanced Profile Card - Spans 1 column */}
          <IntersectionObserver>
            <div className="lg:col-span-1">
              <Card className="h-full p-6 bg-gradient-to-br from-primary/5 via-card/80 to-accent/5 backdrop-blur-sm border-border/50 shadow-2xl card-hover glass-morphism relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/10 rounded-full translate-y-8 -translate-x-8"></div>
                
                <CardContent className="p-0 relative z-10">
                  {/* Profile Header */}
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/30 flex items-center justify-center border-4 border-primary/40 group-hover:border-primary/60 transition-all duration-500 shadow-lg">
                        <Code2 className="w-16 h-16 text-primary animate-pulseGlow" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center shadow-lg">
                        <Sparkles className="w-4 h-4 text-white animate-bounce" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">Ameena Tabassum</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4">
                      <User className="w-3 h-3 text-primary" />
                      <span className="text-primary font-medium text-sm">CS Engineering Student</span>
                    </div>
                  </div>

                  {/* Status Cards */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50 border border-border/30">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">Based in India</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50 border border-border/30">
                      <Calendar className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">Available for opportunities</span>
                    </div>
                    {/* <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50 border border-border/30">
                      <Coffee className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">Always learning & coding</span>
                    </div> */}
                  </div>

                  {/* Bio */}
                  <div className="p-3 rounded-lg bg-background/30 border border-border/20">
                    <div className="flex items-start gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <h4 className="font-semibold text-foreground text-sm">About</h4>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed pl-6">
                      Dedicated to creating innovative software solutions and exploring technology and data science.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </IntersectionObserver>

          {/* Achievements & Focus Areas - Spans 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Achievements */}
            <IntersectionObserver>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 shadow-xl card-hover glass-morphism">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Key Achievements
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={achievement.label}
                        className="text-center group hover:scale-105 transition-all duration-300 animate-staggerIn"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 shadow-lg">
                          <achievement.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-lg font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                          {achievement.value}
                        </div>
                        <div className="text-muted-foreground text-xs font-medium">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </IntersectionObserver>

            {/* Focus Areas */}
            <IntersectionObserver>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 shadow-xl card-hover glass-morphism">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Areas of Focus
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { title: "Full-Stack Development", description: "Building end-to-end web applications" },
                      { title: "Data Analytics", description: "Extracting insights from complex datasets" },
                      { title: "Machine Learning", description: "Developing intelligent algorithms" },
                      { title: "Cloud Computing", description: "Deploying scalable solutions" },
                    ].map((area, index) => (
                      <div
                        key={area.title}
                        className="group p-4 rounded-xl bg-gradient-to-r from-background/80 to-background/40 border border-border/30 hover:border-primary/40 hover:from-primary/5 hover:to-accent/5 transition-all duration-300 animate-fadeInUp"
                        style={{ animationDelay: `${index * 0.15}s` }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-lg group-hover:scale-110 transition-transform duration-300">
                            {/* {index === 0 ? '💻' : index === 1 ? '📊' : index === 2 ? '🤖' : '☁️'} */}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 text-sm">
                              {area.title}
                            </h4>
                            <p className="text-muted-foreground text-xs leading-relaxed">{area.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </IntersectionObserver>
          </div>
        </div>

        {/* Enhanced Technical Skills Section */}
        <IntersectionObserver>
          <Card className="p-6 md:p-8 bg-gradient-to-br from-card/60 via-card/80 to-card/60 backdrop-blur-sm border-border/50 shadow-2xl card-hover glass-morphism relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
            
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  Technical Skills & Technologies
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                  A comprehensive toolkit of modern technologies and frameworks I work with
                </p>
              </div>
              
              {/* Skills Grid with Icons */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center p-3 rounded-xl bg-background/40 border border-border/30 hover:border-primary/50 hover:bg-gradient-to-t hover:from-primary/5 hover:to-accent/5 transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer animate-staggerIn hover:shadow-lg"
                    style={{ animationDelay: `${index * 0.03}s` }}
                  >
                    {/* Skill Icon */}
                    <div className="relative mb-2 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1.5 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Image
                          src={`https://skillicons.dev/icons?i=${skill.id}`}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-xl bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                    </div>
                    
                    {/* Skill Name */}
                    <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {skill.name}
                    </span>
                    
                    {/* Hover indicator */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-8 transition-all duration-300 mt-1"></div>
                  </div>
                ))}
              </div>
              
              {/* Skills Footer */}
              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">Always exploring new technologies</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </IntersectionObserver>
      </div>
    </section>
  )
}
