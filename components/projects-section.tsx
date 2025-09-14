"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Smart Grade App - AI-Powered Student Performance Predictor",
    category: "AI/ML",
    description:
      "A machine learning application that predicts student grades using K-Nearest Neighbors algorithm with interactive data visualizations.",
    longDescription:
      "Smart Grade App is an AI-powered tool built with Streamlit that predicts student performance based on academic inputs. The application uses KNN machine learning model to analyze standardized internal and preboard marks, providing instant data-driven grade forecasts with comprehensive visualizations including grade distribution charts, correlation heatmaps, and performance comparisons.",
    image: "/P1.jpg",
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
    features: [
      "KNN-based grade prediction model",
      "Interactive Streamlit web interface",
      "Real-time data visualizations",
      "Grade distribution analysis",
      "Correlation heatmap visualization",
      "Performance comparison charts",
    ],
    githubUrl: "https://github.com/ameenatabassum123/smart-grade-app",
    liveUrl: "https://smart-grade-app-demo.streamlit.app",
    status: "Completed",
    year: "2024",
  },
  {
    id: 2,
    title: "Loan Approval Prediction System",
    category: "AI/ML",
    description:
      "A machine learning-based loan approval system that predicts loan application outcomes using applicant financial data.",
    longDescription:
      "This project implements an end-to-end ML workflow for loan approval prediction using Logistic Regression and XGBoost models. The system analyzes key applicant details such as income, credit history, loan amount, and other financial factors to make accurate predictions with explainability features using LIME for feature-level insights.",
    image: "/P2.jpg",
    technologies: ["Python", "Streamlit", "Scikit-learn", "XGBoost", "Pandas", "LIME", "Joblib"],
    features: [
      "Logistic Regression & XGBoost models",
      "End-to-end ML pipeline",
      "Interactive prediction interface",
      "Model explainability with LIME",
      "Comprehensive evaluation metrics",
      "One-click deployment ready",
    ],
    githubUrl: "https://github.com/ameenatabassum123/loan-approval",
    liveUrl: "https://loan-approval-demo.streamlit.app",
    status: "Completed",
    year: "2024",
  },
  {
    id: 3,
    title: "Netflix Content Analysis Dashboard",
    category: "Data Science",
    description:
      "Comprehensive exploratory data analysis of Netflix content library revealing trends in genres, production, and global content strategy.",
    longDescription:
      "An in-depth analysis of Netflix's content library using Python data science tools to uncover trends in genres, content production by country, yearly growth patterns, and ratings distribution. The project provides insights into Netflix's evolving content strategy, highlighting the shift towards international content and mature programming.",
    image: "/P3.jpg",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    features: [
      "Genre popularity analysis",
      "Global content production trends",
      "Yearly growth pattern visualization",
      "Ratings distribution insights",
      "Content strategy analysis",
      "Interactive data visualizations",
    ],
    githubUrl: "https://github.com/ameenatabassum123/Netflix-Content-Analysis",
    liveUrl: "https://github.com/ameenatabassum123/Netflix-Content-Analysis",
    status: "Completed",
    year: "2024",
  },
  {
    id: 4,
    title: "Skin Disease Detection App",
    category: "AI/ML",
    description:
      "A CNN-powered web application for detecting 9 different types of skin diseases from uploaded images with confidence scoring.",
    longDescription:
      "A Django web application utilizing Convolutional Neural Networks for skin disease detection. The system can identify 9 different skin conditions including Melanoma, Basal Cell Carcinoma, and other dermatological conditions. Features a user-friendly web interface with image upload capabilities and provides confidence percentages for medical reference.",
    image: "/P4.jpg",
    technologies: ["Python", "Django", "TensorFlow", "CNN", "NumPy", "PostgreSQL", "Render"],
    features: [
      "CNN-based image classification",
      "9 skin disease categories detection",
      "Web-based image upload interface",
      "Confidence scoring system",
      "Medical-grade analysis",
      "Cloud deployment ready",
    ],
    githubUrl: "https://github.com/ameenatabassum123/skin-disease-app",
    liveUrl: "https://github.com/ameenatabassum123/skin-disease-app",
    status: "Completed",
    year: "2024",
  },
  {
    id: 5,
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
    githubUrl: "https://github.com/ameenatabassum123/",
    liveUrl: "https://github.com/ameenatabassum123/",
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
    githubUrl: "https://github.com/ameenatabassum123/",
    liveUrl: "https://github.com/ameenatabassum123/",
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
            <a href="https://github.com/ameenatabassum123" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
