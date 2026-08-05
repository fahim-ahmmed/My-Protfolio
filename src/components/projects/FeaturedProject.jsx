"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {  FaGithub } from "react-icons/fa";

import TechBadge from "./TechBadge";

export default function FeaturedProject({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl"
    >
      <div className="grid lg:grid-cols-2">

        {/* Image */}

        <div className="relative h-[280px] lg:h-[500px] overflow-hidden">

          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent"></div>

        </div>

        {/* Content */}

        <div className="p-8 lg:p-12 flex flex-col justify-center">

          <span className="text-primary font-semibold uppercase tracking-widest">
            Featured Project
          </span>

          <h2 className="text-4xl font-bold mt-4">
            {project.title}
          </h2>

          <p className="text-slate-400 mt-6 leading-8">
            {project.shortDescription}
          </p>

          {/* Tech */}

          <div className="flex flex-wrap gap-3 mt-8">

            {project.technologies.map((tech) => (
              <TechBadge key={tech}>
                {tech}
              </TechBadge>
            ))}

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              href={project.live}
              target="_blank"
              className="btn btn-primary rounded-xl"
            >
              Live Demo
              {/* <ArrowUpRight size={18} /> */}
            </Link>

            <Link
              href={project.github}
              target="_blank"
              className="btn btn-outline rounded-xl"
            >
              <FaGithub size={20} />
              GitHub
            </Link>

            <Link
              href={`/projects/${project.slug}`}
              className="btn btn-ghost rounded-xl"
            >
              View Details →
            </Link>

          </div>

        </div>

      </div>
    </motion.article>
  );
}