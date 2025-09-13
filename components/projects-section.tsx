"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "EcoTrack - Sustainability Dashboard",
    category: "Full-Stack",
    description:
      "A web application that helps users track their carbon footprint with real-time data visualization and community challenges.",
    longDescription:
      "EcoTrack is a full-stack sustainability platform built with Next.js and TypeScript. It integrates with multiple APIs to track energy consumption, transportation habits, and waste generation. The application features a sophisticated dashboard with interactive charts, personalized recommendations, and social features that allow users to compete in eco-friendly challenges.",
    image: "/sustainability-dashboard-with-green-charts-and-eco.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Chart.js", "Tailwind CSS", "Vercel"],
    features: [
      "Real-time carbon footprint tracking",
      "Interactive data visualizations",
      "Goal setting and progress monitoring",
      "Community challenges and leaderboards",
      "Personalized sustainability recommendations",
      "Mobile-responsive design",
    ],
    githubUrl: "https://github.com/ameena-tabassum/ecotrack",
    liveUrl: "https://ecotrack-demo.vercel.app",
    status: "Completed",
    year: "2024",
  },
  {
    id: 2,
    title: "StudyBuddy - AI-Powered Learning Assistant",
    category: "AI/ML",
    description:
      "An intelligent study companion using machine learning to create personalized study plans and generate adaptive quizzes.",
    longDescription:
      "StudyBuddy leverages natural language processing and machine learning algorithms to analyze study materials and create customized learning experiences. The application can process various document formats, extract key concepts, and generate practice questions tailored to individual learning styles and progress.",
    image: "/ai-learning-assistant-interface-with-study-materia.jpg",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI API", "PostgreSQL", "Docker"],
    features: [
      "AI-powered content analysis",
      "Personalized study plan generation",
      "Adaptive quiz creation",
      "Progress tracking and analytics",
      "Multi-format document processing",
      "Spaced repetition algorithm",
    ],
    githubUrl: "https://github.com/ameena-tabassum/studybuddy",
    liveUrl: "https://studybuddy-ai.herokuapp.com",
    status: "In Development",
    year: "2024",
  },
  {
    id: 3,
    title: "TaskFlow - Project Management Mobile App",
    category: "Mobile",
    description:
      "A cross-platform mobile app for team project management with real-time collaboration and productivity analytics.",
    longDescription:
      "TaskFlow is a comprehensive project management solution built with React Native. It features real-time synchronization, offline capabilities, and advanced analytics. The app includes team collaboration tools, time tracking, file sharing, and customizable workflows that adapt to different project methodologies.",
    image: "/mobile-project-management-app-interface-with-task-.jpg",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Redux", "Firebase", "Expo"],
    features: [
      "Real-time team collaboration",
      "Offline functionality",
      "Advanced task management",
      "Time tracking and reporting",
      "File sharing and comments",
      "Push notifications",
    ],
    githubUrl: "https://github.com/ameena-tabassum/taskflow",
    liveUrl: "https://apps.apple.com/taskflow",
    status: "Completed",
    year: "2023",
  },
  {
    id: 4,
    title: "CryptoAnalyzer - Blockchain Data Visualization",
    category: "Data Science",
    description:
      "A data visualization platform analyzing cryptocurrency trends and providing predictive insights using machine learning.",
    longDescription:
      "CryptoAnalyzer combines real-time blockchain data with advanced analytics to provide comprehensive market insights. The platform features interactive charts, technical indicators, sentiment analysis from social media, and machine learning models for price prediction and trend analysis.",
    image: "/cryptocurrency-data-visualization-dashboard-with-c.jpg",
    technologies: ["Python", "Pandas", "Plotly", "Streamlit", "Scikit-learn", "Web3.py", "PostgreSQL"],
    features: [
      "Real-time market data integration",
      "Advanced charting and indicators",
      "Sentiment analysis",
      "ML-based price predictions",
      "Portfolio tracking",
      "Custom alerts and notifications",
    ],
    githubUrl: "https://github.com/ameena-tabassum/cryptoanalyzer",
    liveUrl: "https://cryptoanalyzer-demo.streamlit.app",
    status: "Completed",
    year: "2023",
  },
  {
    id: 5,
    title: "HealthHub - Telemedicine Platform",
    category: "Full-Stack",
    description:
      "A telemedicine platform connecting patients with healthcare providers through secure video consultations.",
    longDescription:
      "HealthHub is a HIPAA-compliant telemedicine solution that facilitates remote healthcare delivery. The platform includes secure video conferencing, electronic health records, appointment scheduling, prescription management, and integration with wearable devices for continuous health monitoring.",
    image: "/telemedicine-platform-interface-with-video-consult.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "Socket.io", "AWS", "Stripe"],
    features: [
      "Secure video consultations",
      "Electronic health records",
      "Appointment scheduling",
      "Prescription management",
      "Payment processing",
      "HIPAA compliance",
    ],
    githubUrl: "https://github.com/ameena-tabassum/healthhub",
    liveUrl: "https://healthhub-platform.com",
    status: "In Development",
    year: "2024",
  },
  {
    id: 6,
    title: "SmartHome IoT Dashboard",
    category: "IoT",
    description:
      "An IoT dashboard for smart home automation with real-time device monitoring and energy optimization.",
    longDescription:
      "A comprehensive IoT platform that connects and manages various smart home devices. The system includes real-time monitoring, automated scheduling based on usage patterns, energy optimization algorithms, and a mobile-responsive dashboard for remote control and monitoring.",
    image: "/smart-home-iot-dashboard-with-device-controls-and-.jpg",
    technologies: ["React", "Python", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana", "Docker"],
    features: [
      "Real-time device monitoring",
      "Automated scheduling",
      "Energy usage optimization",
      "Remote device control",
      "Historical data analysis",
      "Custom automation rules",
    ],
    githubUrl: "https://github.com/ameena-tabassum/smarthome-iot",
    liveUrl: "https://smarthome-demo.netlify.app",
    status: "Completed",
    year: "2023",
  },
]

const categories = ["All", "Full-Stack", "AI/ML", "Mobile", "Data Science", "IoT"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-12 bg-muted/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-44 h-44 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-accent/5 rounded-full animate-gentleRotate"></div>
        <div className="absolute top-2/3 left-2/3 w-24 h-24 bg-primary/3 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical projects demonstrating full-stack development, AI/ML implementation, and
            innovative problem-solving across various domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <Filter className="h-5 w-5 text-muted-foreground mt-2 mr-2" />
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="font-medium hover-lift transition-all duration-300 animate-staggerIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-card border-border shadow-lg card-hover glass-morphism overflow-hidden hover-gradient animate-staggerIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="animate-shimmer">{project.status}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/20 hover:scale-105 transition-all duration-300 animate-staggerIn" style={{ animationDelay: `${techIndex * 0.05}s` }}>
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs hover:bg-primary/20 hover:scale-105 transition-all duration-300">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent hover-lift">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1 hover-lift">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <Button variant="outline" size="lg" asChild className="hover-lift">
            <a href="https://github.com/ameena-tabassum" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
