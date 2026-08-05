"use client";

import experience from "@/data/experience";
import TimelineCard from "../cards/TimeLineCard";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
    >
      <Container>

        <SectionTitle
          subtitle="Experience"
          title="Professional Experience"
        />

        <div className="space-y-8">

          {experience.map((item) => (

            <TimelineCard
              key={item.id}
              year={item.year}
              title={item.position}
              subtitle={item.company}
              description={item.description}
            />

          ))}

        </div>

      </Container>
    </section>
  );
}