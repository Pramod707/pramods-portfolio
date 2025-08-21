"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { GraduationCap, School, Building2, Trophy, Code, Award } from "lucide-react"

const timelineItems = [
  {
    id: 1,
    type: "education",
    title: "Kennedy High School",
    subtitle: "Secondary Education",
    period: "2019 - 2020",
    location: "Hyderabad, India",
    description: "Completed secondary education with focus on Science and Mathematics. Built strong foundation in analytical thinking and problem-solving skills.",
    achievements: [
      "Excellence in Mathematics and Science",
      "Active participation in technical competitions",
      "Leadership roles in school activities"
    ],
    icon: School,
    color: "accent-neon"
  },
  {
    id: 2,
    type: "education", 
    title: "Sri Chaitanya Junior College",
    subtitle: "Intermediate Education (MPC)",
    period: "2020 - 2022",
    location: "Hyderabad, India",
    description: "Pursued Mathematics, Physics, and Chemistry with exceptional performance. Developed strong analytical and logical reasoning capabilities.",
    achievements: [
      "Top 5% performance in board examinations",
      "Special recognition in Mathematics",
      "Foundation for engineering entrance exams"
    ],
    icon: Building2,
    color: "accent-electric"
  },
  {
    id: 3,
    type: "education",
    title: "Ace Engineering College",
    subtitle: "B.Tech in Computer Science Engineering",
    period: "2022 - 2026",
    location: "Hyderabad, India",
    description: "Currently pursuing Computer Science Engineering with specialization in Full Stack Development. Gaining expertise in modern technologies and software engineering practices.",
    achievements: [
      "Consistent academic excellence",
      "Active in coding competitions and hackathons",
      "Multiple project certifications",
      "Technical society leadership roles"
    ],
    icon: GraduationCap,
    color: "accent-neon"
  },
  {
    id: 4,
    type: "achievement",
    title: "Technical Expertise",
    subtitle: "Full Stack Development Journey",
    period: "2023 - Present",
    location: "Self-Directed Learning",
    description: "Mastered modern web development technologies through hands-on projects and continuous learning. Built expertise in Java, Spring Boot, Flutter, and cloud technologies.",
    achievements: [
      "Proficient in Java, Spring Boot, Flutter",
      "Experience with React.js, Node.js, MongoDB",
      "Cloud platforms: AWS, Docker, Kubernetes",
      "Built 3+ production-ready applications"
    ],
    icon: Code,
    color: "accent-electric"
  }
]

const TimelineItem = ({ item, index }: { item: typeof timelineItems[0], index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = item.icon

  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} mb-16`}
    >
      {/* Timeline Line Connection */}
      <div className={`absolute top-8 w-8 h-0.5 bg-gradient-to-r from-[var(--color-${item.color})] to-transparent ${isLeft ? 'left-1/2 lg:left-auto lg:right-0' : 'right-1/2 lg:right-auto lg:left-0'} hidden lg:block`} />
      
      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`relative w-full lg:w-5/12 ${isLeft ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}
      >
        <div className="group relative">
          {/* Glassmorphic Card */}
          <div className="relative bg-[var(--color-surface-secondary)]/50 backdrop-blur-xl border border-[var(--color-border)]/20 rounded-2xl p-6 transition-all duration-300 hover:bg-[var(--color-surface-secondary)]/70 hover:border-[var(--color-accent-neon)]/30">
            {/* Neon Glow Effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-${item.color})]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
            
            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-${item.color})]/10 border border-[var(--color-${item.color})]/20 mb-4`}>
              <Icon className={`w-6 h-6 text-[var(--color-${item.color})]`} />
            </div>

            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold font-display text-[var(--color-text-primary)] mb-1">
                {item.title}
              </h3>
              <p className={`text-[var(--color-${item.color})] font-medium mb-2`}>
                {item.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                <span className="font-mono">{item.period}</span>
                <span className="hidden sm:inline">•</span>
                <span>{item.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
              {item.description}
            </p>

            {/* Achievements */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Key Highlights
              </h4>
              <ul className="space-y-1">
                {item.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                    className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-[var(--color-${item.color})] mt-2 flex-shrink-0`} />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Expanding Details Overlay */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileHover={{ opacity: 1, height: "auto" }}
              className="absolute inset-x-0 top-full mt-2 bg-[var(--color-surface-elevated)]/95 backdrop-blur-xl border border-[var(--color-border)]/30 rounded-xl p-4 overflow-hidden"
            >
              <div className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {item.type === "education" ? (
                  "This educational milestone contributed significantly to building a strong foundation in analytical thinking, problem-solving, and technical skills essential for software development."
                ) : (
                  "Continuous learning and hands-on experience with cutting-edge technologies, building real-world applications and staying current with industry best practices."
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Timeline Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className={`w-4 h-4 rounded-full bg-[var(--color-${item.color})] border-4 border-[var(--color-surface-primary)] shadow-lg`}>
          <div className={`absolute inset-0 rounded-full bg-[var(--color-${item.color})] animate-ping opacity-30`} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ExperienceTimeline() {
  const containerRef = useRef(null)
  const titleInView = useInView(containerRef, { once: true, margin: "-50px" })

  return (
    <section className="relative py-24 bg-[var(--color-surface-primary)] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent-neon)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent-electric)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={titleInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-accent-neon)]/10 border border-[var(--color-accent-neon)]/20 mb-6"
          >
            <Award className="w-8 h-8 text-[var(--color-accent-neon)]" />
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-[var(--color-text-primary)] mb-4">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-neon)] to-[var(--color-accent-electric)]">Journey</span>
          </h2>
          
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            A comprehensive timeline showcasing academic excellence, continuous learning, and technical growth in computer science and software development.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-[var(--color-accent-neon)] via-[var(--color-accent-electric)] to-[var(--color-accent-neon)] opacity-30">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent-neon)] to-[var(--color-accent-electric)] blur-sm opacity-50" />
          </div>

          {/* Timeline Items */}
          <div className="relative">
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-[var(--color-surface-secondary)]/30 backdrop-blur-xl border border-[var(--color-border)]/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-display text-[var(--color-text-primary)] mb-4">
              Professional Summary
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
              Passionate Computer Science Engineering student with a strong foundation in full-stack development. 
              Proficient in <span className="text-[var(--color-accent-neon)] font-semibold">Java</span>, 
              <span className="text-[var(--color-accent-neon)] font-semibold"> Spring Boot</span>, and 
              <span className="text-[var(--color-accent-neon)] font-semibold"> Flutter</span>, with hands-on experience 
              in building scalable web applications and mobile solutions. Committed to continuous learning and 
              delivering high-quality, production-ready code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}