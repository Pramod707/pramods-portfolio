import { GlassmorphicHero } from "@/components/heros/glassmorphic-hero"
import SkillsGrid from "@/components/portfolio/skills-grid"
import ProjectsShowcase from "@/components/portfolio/projects-showcase"
import ExperienceTimeline from "@/components/portfolio/experience-timeline"
import { GradientTestimonialContact } from "@/components/contact/gradient-testimonial-contact"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <GlassmorphicHero />
      <SkillsGrid />
      <ProjectsShowcase />
      <ExperienceTimeline />
      <GradientTestimonialContact />
    </div>
  )
}