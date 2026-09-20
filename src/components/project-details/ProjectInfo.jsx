import Link from "next/link";
import { ExternalLink, GitBranch } from "lucide-react";

import Container from "../shared/Container";

export default function ProjectInfo({ project }) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Category</p>
            <h3 className="mt-3 text-2xl font-bold text-white">{project.category}</h3>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Live Demo</p>
            <Link
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-primary hover:opacity-90"
            >
              Open Project <ExternalLink size={16} />
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">GitHub</p>
            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-primary hover:opacity-90"
            >
              View Code <GitBranch size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
