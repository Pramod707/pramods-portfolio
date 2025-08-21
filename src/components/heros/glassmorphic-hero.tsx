"use client";

import { ChevronRight, Mail, Github, Download, Eye, Linkedin, Upload } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

const GlassmorphicHero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<string | null>("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755762287401-0s0niri4z2pg.jpg");
  const fullText = "Pramod Boddu — Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText.length]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full opacity-60"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse"
          }} />

        )}
      </div>
      
      <div className="overflow-hidden border-b border-muted/50">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center backdrop-blur-sm bg-background/30 rounded-2xl p-8 border-2 border-accent/50 shadow-2xl shadow-accent/20">
              <h1 className="mb-8 text-4xl font-semibold text-pretty lg:text-7xl bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent font-display">
                {displayText}
                <motion.span
                  className="inline-block w-1 h-16 bg-accent ml-2"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }} />
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground/90 lg:text-xl leading-relaxed">
                Experienced developer skilled in React, Next.js, Java, Spring Boot, Flutter, and modern web technologies. 
                Passionate about building scalable applications with clean architecture and delivering 
                exceptional user experiences across full-stack solutions.
              </p>
              <div className="mt-14 flex w-full flex-col justify-center gap-3 sm:flex-row">
                <Button className="group transition-all rounded-full w-40 duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 bg-accent hover:bg-accent/90 text-background">
                  <Eye className="mr-2 h-4" />
                  View Projects
                  <ChevronRight className="ml-2 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="ghost"
                  className="group transition-all duration-300 hover:bg-muted/50 hover:scale-105 border border-accent/30 hover:border-accent/60">
                  <Download className="mr-2 h-4" />
                  Download Resume
                  <ChevronRight className="ml-2 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              {/* Contact Information */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                <a
                  href="mailto:pramod15092004@gmail.com"
                  className="flex items-center gap-2 hover:text-accent transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                  pramod15092004@gmail.com
                </a>
                <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
                <a
                  href="https://github.com/Pramod707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors duration-200">
                  <Github className="h-4 w-4" />
                  github.com/Pramod707
                </a>
                <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
                <a
                  href="https://www.linkedin.com/in/pramod7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors duration-200">
                  <Linkedin className="h-4 w-4" />
                  linkedin.com/in/pramod7
                </a>
              </div>
            </div>
          </div>
          <div className="relative mt-28">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-[2rem] z-10 !w-[100.1%] !h-[704px]" />
            
            {/* Image Section */}
            <div className="relative">
              <img
                src={uploadedImage || "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755762287401-0s0niri4z2pg.jpg"}
                alt="Pramod Boddu - Full Stack Developer"
                className="mx-auto max-h-[700px] w-full max-w-7xl rounded-[2rem] object-cover shadow-2xl ring-1 ring-accent/20 transition-transform duration-500 hover:scale-[1.02]" 
              />
              
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              
              <div className="absolute top-4 right-4 z-20">
                <Button
                  size="sm"
                  variant="ghost"
                  className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  onClick={() => document.getElementById('image-upload')?.click()}
                >
                  <Upload className="h-4 w-4 mr-1" />
                  Change
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GlassmorphicHero };