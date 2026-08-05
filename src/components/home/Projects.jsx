"use client";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

import projects from "@/data/projects";

import FeaturedProject from "../projects/FeaturedProject";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="py-24"
    >
      <Container>

        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <FeaturedProject
          project={featuredProject}
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {otherProjects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </Container>
    </section>
  );
}