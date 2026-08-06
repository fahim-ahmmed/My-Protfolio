"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: .3 }}
      className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
    >
      <div className="relative h-60 overflow-hidden">

        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition duration-500 hover:scale-110"
        />

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
  {project.title}
</h3>

<p className="text-primary text-sm mt-1">
  {project.subtitle}
</p>

        <p className="text-slate-400 mt-4">
          {project.shortDescription}
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className="btn btn-primary mt-8 w-full"
        >
          View Project
        </Link>

      </div>
    </motion.div>
  );
}