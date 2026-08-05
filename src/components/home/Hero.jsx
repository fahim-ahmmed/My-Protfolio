"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "../shared/Container";
import ResumeButton from "../shared/ResumeButton";
import SocialLinks from "../shared/SocialLinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >
            <p className="text-primary font-semibold mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Fahim
              <span className="text-primary"> Ahmed</span>
            </h1>

            <h2 className="text-2xl mt-4 text-slate-300">
              Frontend Developer
            </h2>

            <p className="mt-6 text-slate-400 leading-8 max-w-xl">
              I build modern, responsive and high-performance web
              applications using React, Next.js and Tailwind CSS.
              I love crafting beautiful user interfaces and
              exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <ResumeButton />

              <a
                href="#contact"
                className="btn btn-outline rounded-xl"
              >
                Contact Me
                <ArrowRight size={18} />
              </a>

            </div>

            <SocialLinks />

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-30"></div>

              <Image
                src="/images/profile/profile.png"
                alt="Profile"
                width={420}
                height={420}
                priority
                className="relative rounded-full border-4 border-primary object-cover"
              />

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}