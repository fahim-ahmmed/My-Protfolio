import Link from "next/link";
import Image from "next/image";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-24">
      <Container>
        <SectionTitle subtitle="Portfolio" title="All Projects" />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-lg"
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
                <p className="text-sm uppercase tracking-[0.2em] text-primary">
                  {project.category}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-base text-primary">{project.subtitle}</p>
                <p className="mt-4 text-slate-400">{project.shortDescription}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                  >
                    View Details
                  </Link>

                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
