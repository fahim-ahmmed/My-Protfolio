"use client";

import { motion } from "framer-motion";

export default function SkillCard({ category, items }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg"
    >
      <h3 className="text-2xl font-semibold text-primary mb-6">
        {category}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <span
            key={skill}
            className="badge badge-outline badge-lg px-4 py-4"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}