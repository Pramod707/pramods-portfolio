"use client"

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  TestTube, 
  Wrench
} from 'lucide-react'

interface Skill {
  name: string
  level: number
  icon?: React.ReactNode
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "Java", level: 95 },
      { name: "Python", level: 85 },
      { name: "C", level: 80 },
      { name: "Dart", level: 90 }
    ]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "Hibernate", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "Servlets", level: 80 },
      { name: "JSP", level: 75 }
    ]
  },
  {
    title: "Frontend Development",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Flutter", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Bootstrap", level: 80 }
    ]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Docker", level: 85 },
      { name: "Jenkins", level: 80 },
      { name: "Git", level: 95 },
      { name: "GitHub", level: 95 },
      { name: "Maven", level: 85 },
      { name: "Gradle", level: 80 }
    ]
  },
  {
    title: "Testing",
    icon: <TestTube className="w-6 h-6" />,
    skills: [
      { name: "Selenium", level: 85 },
      { name: "J-Units", level: 90 }
    ]
  }
]

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level)
    }, index * 100)

    return () => clearTimeout(timer)
  }, [skill.level, index])

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-text-primary">{skill.name}</span>
        <span className="text-xs text-text-secondary font-mono">{skill.level}%</span>
      </div>
      <div className="w-full bg-surface-elevated h-2 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-neon to-accent-electric rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </div>
  )
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-6 rounded-xl bg-surface-secondary/50 backdrop-blur-sm border border-border/30 hover:border-accent-neon/50 transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.6) 0%, rgba(22, 33, 62, 0.6) 100%)',
          boxShadow: isHovered 
            ? '0 20px 40px rgba(0, 245, 255, 0.1), 0 0 20px rgba(0, 245, 255, 0.1)' 
            : '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}
        whileHover={{
          rotateX: 5,
          rotateY: 5,
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {/* Neon border effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(255, 7, 58, 0.1) 100%)',
            padding: '1px'
          }}
        />
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-neon/10 text-accent-neon">
            {category.icon}
          </div>
          <h3 className="text-xl font-bold text-text-primary font-display">
            {category.title}
          </h3>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar key={skill.name} skill={skill} index={skillIndex} />
          ))}
        </div>

        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-neon/20 to-accent-electric/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
      </motion.div>
    </motion.div>
  )
}

export default function SkillsGrid() {
  return (
    <section className="py-24 bg-surface-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-neon/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-electric/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-display">
            Technical <span className="text-accent-neon">Skills</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across full-stack development, 
            from programming languages to deployment tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Programming Languages", value: "4+" },
            { label: "Frameworks & Tools", value: "15+" },
            { label: "Years Experience", value: "3+" },
            { label: "Projects Completed", value: "20+" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-neon mb-2 font-display">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}