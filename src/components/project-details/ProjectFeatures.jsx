import { CheckCircle2 } from "lucide-react";
import Container from "../shared/Container";

export default function ProjectFeatures({ project }) {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold mb-8">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <CheckCircle2 className="text-primary mt-1" />

              <p>{feature}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}