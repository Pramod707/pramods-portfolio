"use client"

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

function GradientTestimonialContact() {
    return (
      <div className="relative isolate bg-background px-6 py-24 sm:py-32 lg:px-8">
        {/* Dark particle effect background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-secondary to-background opacity-50"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255, 7, 58, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(0, 245, 255, 0.05) 0%, transparent 50%)`
          }}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300F5FF%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        <div className="mx-auto max-w-xl lg:max-w-4xl container">
          <h2 className="text-4xl font-bold tracking-tight text-pretty text-text-primary sm:text-5xl font-display">
            Let's Build Something Amazing Together
          </h2>
          <p className="mt-2 text-lg/8 text-text-secondary font-body">
            Ready to bring your ideas to life? I'm passionate about creating innovative solutions that make a difference.
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form action="#" method="POST" className="lg:flex-auto">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm/6 font-semibold text-text-primary font-body">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="block w-full rounded-lg bg-muted/50 backdrop-blur-sm border border-border/30 px-3.5 py-2.5 text-base text-text-primary outline-none placeholder:text-text-secondary focus:border-accent-neon focus:shadow-[0_0_0_1px_#00F5FF,0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300"
                      placeholder="B.PRAMOD"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-text-primary font-body">
                    Email address
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-lg bg-muted/50 backdrop-blur-sm border border-border/30 px-3.5 py-2.5 text-base text-text-primary outline-none placeholder:text-text-secondary focus:border-accent-neon focus:shadow-[0_0_0_1px_#00F5FF,0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300"
                      placeholder="pramod15092004@gmail.com"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm/6 font-semibold text-text-primary font-body">
                    Subject
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="block w-full rounded-lg bg-muted/50 backdrop-blur-sm border border-border/30 px-3.5 py-2.5 text-base text-text-primary outline-none placeholder:text-text-secondary focus:border-accent-neon focus:shadow-[0_0_0_1px_#00F5FF,0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300"
                      placeholder="Let's discuss your project"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-text-primary font-body">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project, goals, and how I can help bring your vision to life..."
                      className="block w-full rounded-lg bg-muted/50 backdrop-blur-sm border border-border/30 px-3.5 py-2.5 text-base text-text-primary outline-none placeholder:text-text-secondary focus:border-accent-neon focus:shadow-[0_0_0_1px_#00F5FF,0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300 resize-none"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-lg bg-accent-neon/10 backdrop-blur-sm border border-accent-neon/30 px-3.5 py-3 text-center text-sm font-semibold text-accent-neon shadow-[0_0_20px_rgba(0,245,255,0.2)] hover:bg-accent-neon/20 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-neon transition-all duration-300 font-body"
                >
                  Send Message
                </button>
              </div>
              <p className="mt-4 text-sm/6 text-text-secondary font-body">
                I'll get back to you within 24 hours. Let's create something extraordinary together.
              </p>
            </form>
            
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              {/* Personal Brand Statement */}
              <div className="bg-gradient-to-br from-muted/30 to-surface-elevated/30 backdrop-blur-sm border border-border/20 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-4 font-display">Development Philosophy</h3>
                <blockquote className="text-base/7 text-text-secondary font-body">
                  <p>
                    "I believe in writing clean, scalable code that solves real problems. Every line of code should have purpose, 
                    every feature should enhance user experience, and every project should push the boundaries of what's possible."
                  </p>
                </blockquote>
                <div className="mt-6 pt-6 border-t border-border/20">
                  <div className="text-sm font-semibold text-text-primary font-body">My Goals</div>
                  <ul className="mt-2 text-sm text-text-secondary space-y-1 font-body">
                    <li>• Build innovative full-stack applications</li>
                    <li>• Contribute to open-source projects</li>
                    <li>• Mentor aspiring developers</li>
                    <li>• Stay at the forefront of technology</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-muted/30 to-surface-elevated/30 backdrop-blur-sm border border-border/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4 font-display">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent-neon/20 border border-accent-neon/30 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-accent-neon" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary font-body">Email</div>
                      <a href="mailto:pramod.boddu@example.com" className="text-sm text-accent-neon hover:text-accent-neon/80 transition-colors font-body">
                        pramod15092004@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent-neon/20 border border-accent-neon/30 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-accent-neon" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary font-body">Phone</div>
                      <a href="tel:+1234567890" className="text-sm text-accent-neon hover:text-accent-neon/80 transition-colors font-body">
                        +91 9490467568
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent-neon/20 border border-accent-neon/30 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent-neon" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary font-body">Location</div>
                      <div className="text-sm text-text-secondary font-body">
                        Hyderabad, India
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/20">
                  <div className="text-sm font-semibold text-text-primary mb-3 font-body">Connect With Me</div>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Pramod707"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-muted/50 border border-border/30 rounded-lg flex items-center justify-center hover:border-accent-neon/50 hover:bg-accent-neon/10 transition-all duration-300 group"
                    >
                      <Github className="w-5 h-5 text-text-secondary group-hover:text-accent-neon transition-colors" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/pramod7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-muted/50 border border-border/30 rounded-lg flex items-center justify-center hover:border-accent-neon/50 hover:bg-accent-neon/10 transition-all duration-300 group"
                    >
                      <Linkedin className="w-5 h-5 text-text-secondary group-hover:text-accent-neon transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }  

  export { GradientTestimonialContact };