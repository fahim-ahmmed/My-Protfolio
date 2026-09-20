import { AlertTriangle } from "lucide-react";

import Container from "../shared/Container";

export default function ProjectChallenges({ project }) {
  return (
    <section className="py-20">
      <Container>
        <h2 className="mb-8 text-3xl font-bold text-white">Challenges</h2>

        <div className="space-y-4">
          {project.challenges.map((challenge) => (
            <div key={challenge} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900 p-5">
              <AlertTriangle className="mt-1 text-primary" size={18} />
              <p className="text-slate-200">{challenge}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
