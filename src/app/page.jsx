'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ExternalLink, Download, Code2, 
  CheckCircle2, ArrowRight, Menu, X, Sparkles, Briefcase, UserCheck
} from 'lucide-react';
import { personalInfo, techStack, skills, services, projects, whyHireMe } from '@/data/portfolioData';

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
            Let's Talk <ArrowRight size={16} />
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
              Let's Talk
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
            <a href="/resume.pdf" download className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-semibold transition-all flex items-center gap-2">
              Download Resume <Download size={18} />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-4 flex items-center gap-3 text-sm text-emerald-400 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            {personalInfo.availability}
          </motion.div>
        </motion.div>

        {/* Right Photo Placeholder & Tech Badges */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10">
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-purple-600/30 border border-white/10 p-2 relative flex items-center justify-center">
            <div className="w-full h-full bg-[#0d1322] rounded-xl flex flex-col items-center justify-center text-center p-6">
              <Code2 size={64} className="text-blue-400 mb-2" />
              <span className="text-xl font-bold text-white">{personalInfo.name}</span>
              <span className="text-sm text-gray-400">{personalInfo.title}</span>
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

      {/* 04 — ABOUT ME */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Who is Fahim?</h2>
            <h3 className="text-3xl font-bold mb-6">Passionate Full-Stack Developer with a Drive for Quality</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I specialize in building full-stack web applications using the MERN & Next.js ecosystem. My goal is to craft highly performant backends combined with smooth, responsive frontend interfaces.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="text-white font-semibold text-sm">Education</h4>
              {personalInfo.education.map((edu, idx) => (
                <div key={idx} className="text-xs text-gray-400">
                  <p className="text-gray-200 font-medium">{edu.degree}</p>
                  <p>{edu.institution}</p>
                </div>
              ))}
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

      {/* 05 — TECHNICAL SKILLS */}
      <section id="skills" className="py-20 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Technical Skills</h2>
            <h3 className="text-3xl font-bold">Tools & Technologies I Work With</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all">
                <h4 className="text-lg font-bold capitalize mb-4 text-blue-400">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-medium text-gray-300 border border-white/5 hover:text-white hover:border-blue-500/30 transition-all">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — SERVICES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Services</h2>
          <h3 className="text-3xl font-bold">What I Can Build For You</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div key={srv.id} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:-translate-y-1 transition-all group">
              <span className="text-3xl font-extrabold text-blue-500/40 group-hover:text-blue-400 transition-colors mb-4 block">{srv.id}</span>
              <h4 className="text-xl font-bold mb-3">{srv.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{srv.description}</p>
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
                <div className="w-full lg:w-1/2 h-64 rounded-xl bg-gradient-to-tr from-blue-900/20 to-purple-900/20 border border-white/10 flex items-center justify-center p-6 text-center">
                  <div>
                    <Code2 size={48} className="text-blue-400 mx-auto mb-2" />
                    <span className="text-lg font-bold">{proj.title} Preview</span>
                  </div>
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
                      <Github size={16} /> GitHub
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
            <a href="/resume.pdf" download className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all flex items-center gap-2">
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
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" size={18} /> {personalInfo.contact.email}
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="text-blue-400" size={18} /> LinkedIn Profile
              </div>
              <div className="flex items-center gap-3">
                <Github className="text-blue-400" size={18} /> GitHub Repository
              </div>
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