import Image from "next/image";

import Container from "../shared/Container";

export default function ProjectGallery({ project }) {
  return (
    <section className="py-20">
      <Container>
        <h2 className="mb-8 text-3xl font-bold text-white">Project Gallery</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {project.images.map((image, index) => (
            <div key={index} className="relative h-72 overflow-hidden rounded-2xl border border-slate-800">
              <Image src={image} alt={`${project.title} screenshot ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
