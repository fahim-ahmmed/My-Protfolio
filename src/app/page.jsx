'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, ExternalLink, Download, GraduationCap, Calendar, 
  CheckCircle2, ArrowRight, Menu, X, Sparkles, UserCheck
} from 'lucide-react';
import { personalInfo, techStack, skillsWithIcons, services, projects, whyHireMe } from '@/data/portfolioData';

// Custom SVG Icons
const GithubIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#070B14] text-gray-100 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      
      {/* 01 — NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#070B14]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-wider text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm">F</span>
            FAHIM <span className="text-blue-500">.DEV</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {['About', 'Skills', 'Services', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-sm font-semibold transition-all">
            Let's GO <ArrowRight size={16} />
          </a>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-gray-300">
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenu && (
          <div className="md:hidden bg-[#070B14]/95 backdrop-blur-lg border-b border-white/10 px-6 py-6 flex flex-col gap-4">
            {['About', 'Skills', 'Services', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenu(false)} className="text-gray-300 hover:text-blue-400">
                {item}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenu(false)} className="mt-2 text-center py-2.5 rounded-full bg-blue-600 text-white font-medium">
              Let's Go
            </a>
          </div>
        )}
      </nav>

      {/* 02 — HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex-1 space-y-6 z-10">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
            <Sparkles size={16} /> Hello, I'm Fahim 👋
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Full-Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Web Developer
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-xl">
            {personalInfo.aboutShort}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all flex items-center gap-2">
              View My Projects <ArrowRight size={18} />
            </a>
            <a 
              href="/resume.pdf" 
              download="Md_Fahim_Ahammed_Shihab_Resume.pdf" 
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-semibold transition-all flex items-center gap-2"
            >
              Download Resume <Download size={18} />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-4 flex items-center gap-3 text-sm text-emerald-400 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            {personalInfo.availability}
          </motion.div>
        </motion.div>

        {/* Right Photo Card */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10">
          <div className="w-72 h-80 sm:w-96 sm:h-[420px] rounded-2xl bg-gradient-to-tr from-blue-600/30 to-purple-600/30 border border-white/10 p-2 relative shadow-2xl">
            <div className="w-full h-full bg-[#0d1322] rounded-xl overflow-hidden relative">
              <img 
                src={personalInfo.avatar || "/fahimpic.png"} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-lg font-bold text-white block">{personalInfo.name}</span>
                <span className="text-xs text-blue-400 font-medium">{personalInfo.title}</span>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute -top-4 -left-4 px-3 py-1.5 rounded-lg bg-[#0f172a] border border-white/10 text-xs font-semibold text-blue-400 shadow-xl">Next.js</div>
            <div className="absolute top-1/3 -right-6 px-3 py-1.5 rounded-lg bg-[#0f172a] border border-white/10 text-xs font-semibold text-cyan-400 shadow-xl">React</div>
            <div className="absolute -bottom-4 left-6 px-3 py-1.5 rounded-lg bg-[#0f172a] border border-white/10 text-xs font-semibold text-green-400 shadow-xl">Node.js</div>
            <div className="absolute bottom-1/4 -left-6 px-3 py-1.5 rounded-lg bg-[#0f172a] border border-white/10 text-xs font-semibold text-emerald-400 shadow-xl">MongoDB</div>
          </div>
        </motion.div>
      </section>

      {/* 03 — QUICK TRUST MARQUEE */}
      <div className="py-8 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 text-gray-400 text-sm font-semibold tracking-wider uppercase">
          {[...techStack, ...techStack].map((tech, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="text-blue-500">✦</span> {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 04 — ABOUT ME & EDUCATION */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Who is Fahim?</h2>
            <h3 className="text-3xl font-bold mb-6">Passionate Full-Stack Developer with a Drive for Quality</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I specialize in building full-stack web applications using the MERN & Next.js ecosystem. My goal is to craft highly performant backends combined with smooth, responsive frontend interfaces.
            </p>

            {/* Education Timeline */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
                <GraduationCap className="text-blue-400" size={24} />
                <h4>Educational Background</h4>
              </div>

              <div className="relative border-l-2 border-blue-500/30 pl-6 space-y-8 ml-3">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 border-4 border-[#070B14] group-hover:scale-125 transition-transform" />
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all space-y-2">
                      <div className="flex flex-wrap justify-between items-center gap-2">
                        <span className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 font-semibold flex items-center gap-1.5">
                          <Calendar size={12} /> {edu.session}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold ${
                          edu.status === "Running" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <h5 className="text-lg font-bold text-white">{edu.degree}</h5>
                      <p className="text-xs text-blue-400 font-medium">{edu.institution}</p>
                      {edu.description && (
                        <p className="text-xs text-gray-400 leading-relaxed pt-1">{edu.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">What I Bring</h2>
            <h3 className="text-3xl font-bold mb-6">Core Development Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Clean Architecture", "Responsive UI/UX", "Problem Solving", "REST API Design", "Database Management", "Performance Optimization"].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm font-medium text-gray-200">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — TECHNICAL SKILLS WITH BRAND LOGO ICONS */}
      <section id="skills" className="py-20 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Technical Skills</h2>
            <h3 className="text-3xl font-bold">Tools & Technologies I Work With</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skillsWithIcons).map(([category, items]) => (
              <div key={category} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all">
                <h4 className="text-lg font-bold capitalize mb-5 text-blue-400">{category}</h4>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-gray-200 hover:text-white hover:border-blue-500/40 hover:bg-white/10 transition-all">
                      <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain shrink-0" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — SERVICES WITH TOPIC-EXACT HIGH QUALITY IMAGES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Services</h2>
          <h3 className="text-3xl font-bold">What I Can Build For You</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => (
            <div key={srv.id} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/40 hover:-translate-y-1.5 transition-all group flex flex-col">
              <div className="h-44 w-full relative overflow-hidden bg-[#0d1322]">
                <img 
                  src={srv.image} 
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-2xl font-black text-white px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                  {srv.id}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{srv.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{srv.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 07 — FEATURED PROJECTS */}
      <section id="projects" className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Portfolio</h2>
            <h3 className="text-3xl font-bold">Featured Case Studies</h3>
          </div>

          <div className="space-y-12">
            {projects.map((proj) => (
              <div key={proj.id} className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-full lg:w-1/2 h-64 sm:h-72 rounded-xl overflow-hidden border border-white/10 relative group bg-[#0f172a]">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-60" />
                </div>

                <div className="w-full lg:w-1/2 space-y-4">
                  <span className="text-xs font-semibold text-blue-400">{proj.subtitle}</span>
                  <h4 className="text-2xl font-bold">{proj.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{proj.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-medium">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                      <GithubIcon size={16} /> GitHub
                    </a>
                    <a href={proj.liveDemo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-blue-400 hover:underline">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <button onClick={() => setActiveModal(proj)} className="ml-auto text-sm px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all">
                      View Case Study →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — CASE STUDY MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-[#0f172a] border border-white/10 max-w-2xl w-full p-8 rounded-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-gray-400 hover:text-white">
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold mb-2">{activeModal.title} — Case Study</h3>
            <p className="text-sm text-blue-400 mb-6">{activeModal.subtitle}</p>

            <div className="space-y-6 text-sm text-gray-300">
              <div>
                <h4 className="text-white font-bold mb-1">The Problem</h4>
                <p className="text-gray-400">{activeModal.caseStudy.problem}</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">My Solution</h4>
                <p className="text-gray-400">{activeModal.caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Key Features</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  {activeModal.caseStudy.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 09 & 10 — EXPERIENCE & WHY HIRE ME */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Journey */}
          <div id="experience">
            <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Development Journey</h2>
            <h3 className="text-3xl font-bold mb-6">Experience & Learning</h3>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold text-white">Full-Stack Web Development</h4>
                  <p className="text-xs text-blue-400">Independent Projects & Practice</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-white/10 text-gray-300">2025 – Present</span>
              </div>
              <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                <li>Building full-stack web apps using Next.js, Node.js, and Express.</li>
                <li>Designing REST APIs and integrating MongoDB/Firebase databases.</li>
                <li>Implementing authentication, responsive layouts, and modern UI architectures.</li>
              </ul>
            </div>
          </div>

          {/* Why Hire Me */}
          <div>
            <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Why Work With Me?</h2>
            <h3 className="text-3xl font-bold mb-6">Guaranteed Quality Standards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyHireMe.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11 & 12 — JOB / INTERNSHIP CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm">
            <UserCheck size={16} /> I'm Open to Opportunities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Looking for a Dedicated Full-Stack Developer?</h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            I am currently looking for Full-Time, Part-Time, Internship, and Remote opportunities where I can contribute, learn, and grow as a Full-Stack Web Developer.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all">
              Hire Me
            </a>
            <a 
              href="/resume.pdf" 
              download="Md_Fahim_Ahammed_Shihab_Resume.pdf" 
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all flex items-center gap-2"
            >
              Download Resume <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 13 — CONTACT */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</h2>
            <h3 className="text-3xl font-bold mb-6">Let's Build Something Together</h3>
            <p className="text-gray-400 text-sm mb-8">
              Feel free to reach out for job openings, freelance projects, or technical collaborations.
            </p>
            <div className="space-y-4 text-sm text-gray-300">
              
              {/* Clickable Email */}
              <a href="mailto:ahmmedshihab205@gmail.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Mail className="text-blue-400 shrink-0" size={18} /> 
                <span>ahmmedshihab205@gmail.com</span>
              </a>

              {/* Clickable Phone Number */}
              <a href="tel:+8801305470835" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+880 1305470835</span>
              </a>

              {/* Clickable WhatsApp */}
              <a href="https://wa.me/8801572930788" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 shrink-0">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>WhatsApp Chat</span>
              </a>

              {/* Clickable Facebook */}
              <a href="https://www.facebook.com/ahmmedfahim205" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 shrink-0">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Facebook Profile</span>
              </a>

              {/* Clickable LinkedIn */}
              <a href="https://linkedin.com/in/fahim-ahmmed" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <LinkedinIcon className="text-blue-400 shrink-0" size={18} /> 
                <span>LinkedIn Profile</span>
              </a>

              {/* Clickable GitHub */}
              <a href="https://github.com/fahim-ahmmed" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <GithubIcon className="text-blue-400 shrink-0" size={18} /> 
                <span>GitHub Repository</span>
              </a>

            </div>
          </div>

          <form className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs font-medium text-gray-300 block mb-1">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-300 block mb-1">Your Email</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-300 block mb-1">Message</label>
              <textarea rows={4} placeholder="Hello Fahim, I would like to discuss..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2">
              Send Message <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* 14 — FOOTER */}
      <footer className="py-8 border-t border-white/10 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>

    </div>
  );
}