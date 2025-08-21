"use client"

import { useState, useEffect } from 'react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ExternalLink, Github, Code2, Database, Server, Smartphone, Cloud, Users, Shield, FileText, Search, Upload, Share2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Project {
  id: string
  title: string
  description: string
  features: string[]
  technologies: string[]
  liveDemo?: string
  sourceCode?: string
  icon: React.ReactNode
  gradient: string
}

const projects: Project[] = [
  {
    id: 'ai-agent',
    title: 'AI Agent',
    description: 'Developed an intelligent AI agent capable of understanding and responding to complex user queries with natural language processing capabilities.',
    features: [
      'Natural Language Processing for query understanding',
      'Machine Learning algorithms for intelligent responses',
      'Real-time conversation handling',
      'Context-aware response generation',
      'Multi-domain knowledge integration'
    ],
    technologies: ['Python', 'TensorFlow', 'Natural Language Processing', 'Machine Learning', 'REST APIs'],
    liveDemo: '#',
    sourceCode: '#',
    icon: <Code2 className="w-8 h-8" />,
    gradient: 'from-blue-500 via-purple-500 to-pink-500'
  },
  {
    id: 'job-portal',
    title: 'Job Portal',
    description: 'Built a comprehensive job portal platform connecting job seekers with employers, featuring advanced search, application tracking, and profile management.',
    features: [
      'Advanced job search and filtering system',
      'User profile management for job seekers',
      'Employer dashboard for job posting',
      'Application tracking system',
      'Resume upload and parsing functionality',
      'Real-time notifications'
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React', 'REST APIs', 'JWT Authentication'],
    liveDemo: '#',
    sourceCode: '#',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-green-500 via-teal-500 to-blue-500'
  },
  {
    id: 'file-sharing',
    title: 'Cloud-Based File Sharing Platform',
    description: 'Created a secure cloud-based file sharing platform with real-time collaboration features, file versioning, and enterprise-grade security.',
    features: [
      'Secure file upload and storage',
      'Real-time file sharing and collaboration',
      'File versioning and history tracking',
      'User access control and permissions',
      'Cloud storage integration',
      'Multi-format file support'
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'AWS S3', 'Socket.io', 'JWT'],
    liveDemo: '#',
    sourceCode: '#',
    icon: <Cloud className="w-8 h-8" />,
    gradient: 'from-orange-500 via-red-500 to-pink-500'
  }
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 15 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative perspective-1000"
    >
      <motion.div
        animate={{ 
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
        className="relative bg-surface-secondary/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 h-full overflow-hidden preserve-3d"
        style={{
          background: `linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.6) 100%)`,
          boxShadow: isHovered 
            ? `0 25px 50px -12px rgba(0, 245, 255, 0.25), 0 0 0 1px rgba(0, 245, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
            : `0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(52, 65, 85, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)`
        }}
      >
        {/* Animated gradient border */}
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
          animate={{ 
            opacity: isHovered ? 0.2 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Neon glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: isHovered 
              ? `inset 0 0 20px rgba(0, 245, 255, 0.1), 0 0 40px rgba(0, 245, 255, 0.1)`
              : `inset 0 0 0px rgba(0, 245, 255, 0), 0 0 0px rgba(0, 245, 255, 0)`
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Project icon with gradient background */}
        <motion.div
          animate={{ 
            rotateZ: isHovered ? 5 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} p-0.5 mb-6`}
        >
          <div className="w-full h-full bg-surface-secondary rounded-xl flex items-center justify-center text-accent-neon">
            {project.icon}
          </div>
        </motion.div>

        {/* Project title */}
        <motion.h3 
          className="text-2xl font-bold text-text-primary mb-4 font-display"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>

        {/* Project description */}
        <motion.p 
          className="text-text-secondary text-sm leading-relaxed mb-6"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {project.description}
        </motion.p>

        {/* Key features */}
        <motion.div 
          className="mb-6"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h4 className="text-sm font-semibold text-text-primary mb-3 font-display">Key Features</h4>
          <ul className="space-y-2">
            {project.features.slice(0, 4).map((feature, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                className="flex items-start text-xs text-text-secondary"
              >
                <motion.div
                  className="w-1 h-1 rounded-full bg-accent-neon mt-2 mr-3 flex-shrink-0"
                  animate={{ scale: isHovered ? 1.2 : 1 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                />
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Technology stack */}
        <motion.div 
          className="mb-8"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h4 className="text-sm font-semibold text-text-primary mb-3 font-display">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="text-xs bg-surface-elevated/80 text-text-secondary border-border/50 hover:border-accent-neon/50 transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div 
          className="flex gap-3 mt-auto"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {project.liveDemo && (
            <Button
              size="sm"
              className="flex-1 bg-accent-neon/10 hover:bg-accent-neon/20 text-accent-neon border border-accent-neon/30 hover:border-accent-neon/50 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
          {project.sourceCode && (
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-border/50 hover:border-accent-neon/50 text-text-secondary hover:text-accent-neon transition-all duration-300"
            >
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </Button>
          )}
        </motion.div>

        {/* Floating particles effect */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent-neon rounded-full"
                initial={{ 
                  x: Math.random() * 100 + '%', 
                  y: '100%', 
                  opacity: 0 
                }}
                animate={{ 
                  y: '-20px', 
                  opacity: [0, 1, 0] 
                }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.2, 
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsShowcase() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" })

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-surface-primary overflow-hidden"
      id="projects"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-neon/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-electric/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-neon/10 border border-accent-neon/20 text-accent-neon text-sm font-medium mb-6"
          >
            <Code2 className="w-4 h-4" />
            Featured Projects
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 font-display"
          >
            Building Digital
            <motion.span
              initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
              animate={isInView ? { 
                opacity: 1,
                backgroundPosition: "100% 50%"
              } : { 
                opacity: 0,
                backgroundPosition: "0% 50%"
              }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="block bg-gradient-to-r from-accent-neon via-accent-electric to-accent-neon bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Experiences
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Explore my portfolio of full-stack applications, each crafted with modern technologies 
            and attention to user experience. From AI-powered solutions to enterprise platforms.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-text-secondary mb-6"
            whileInView={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Interested in collaborating on innovative projects?
          </motion.p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent-neon to-accent-electric hover:from-accent-electric hover:to-accent-neon text-surface-primary font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-accent-neon/25 transition-all duration-300"
          >
            <span>Let's Work Together</span>
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}