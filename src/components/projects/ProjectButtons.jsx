import Link from "next/link";

import {
  ArrowRight,
  Github,
  ExternalLink,
} from "lucide-react";

export default function ProjectButtons({
  github,
  live,
  slug,
}) {
  return (
    <div className="flex flex-wrap gap-4 mt-8">

      <Link
        href={live}
        target="_blank"
        className="btn btn-primary"
      >
        <ExternalLink size={18} />
        Live Demo
      </Link>

      <Link
        href={github}
        target="_blank"
        className="btn btn-outline"
      >
        <Github size={18} />
        GitHub
      </Link>

      <Link
        href={`/projects/${slug}`}
        className="btn btn-ghost"
      >
        Details

        <ArrowRight size={18} />
      </Link>

    </div>
  );
}