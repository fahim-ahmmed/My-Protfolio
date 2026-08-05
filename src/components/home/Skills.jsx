"use client";

import { motion } from "framer-motion";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import SkillCard from "../cards/SkillCard";

import skills from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionTitle
          subtitle="Skills"
          title="Technologies I Work With"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <SkillCard
                category={skill.category}
                items={skill.items}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}