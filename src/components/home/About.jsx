"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import aboutData from "@/data/aboutData";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <Container>

        <SectionTitle
          subtitle="About Me"
          title="Know More About Me"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity:0,x:-50 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.6 }}
            viewport={{ once:true }}
          >

            <h3 className="text-3xl font-bold mb-6">
              {aboutData.title}
            </h3>

            <p className="text-slate-400 leading-8">
              {aboutData.descriptionOne}
            </p>

            <p className="text-slate-400 leading-8 mt-5">
              {aboutData.descriptionTwo}
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              {aboutData.highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-primary"
                  />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity:0,x:50 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.7 }}
            viewport={{ once:true }}
            className="flex justify-center"
          >

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 w-80 text-center">

              <h2 className="text-7xl font-bold text-primary">
                {aboutData.experience}
              </h2>

              <p className="mt-4 text-xl text-slate-300">
                Years Experience
              </p>

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}