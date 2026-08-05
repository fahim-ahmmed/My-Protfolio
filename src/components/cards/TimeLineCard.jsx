"use client";

import { motion } from "framer-motion";

export default function TimelineCard({
  year,
  title,
  subtitle,
  description,
}) {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      transition={{ duration: .3 }}
      className="relative pl-10 pb-12 border-l border-slate-700"
    >
      <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary"></span>

      <p className="text-primary text-sm mb-2">
        {year}
      </p>

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <h4 className="text-slate-400 mt-1">
        {subtitle}
      </h4>

      <p className="mt-4 text-slate-400 leading-7">
        {description}
      </p>
    </motion.div>
  );
}