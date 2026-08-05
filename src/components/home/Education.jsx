"use client";

import education from "@/data/education";
import TimelineCard from "../cards/TimeLineCard";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24"
    >
      <Container>

        <SectionTitle
          subtitle="Education"
          title="Academic Journey"
        />

        <div className="space-y-8">

          {education.map((item) => (

            <TimelineCard
              key={item.id}
              year={item.year}
              title={item.degree}
              subtitle={item.institute}
              description={item.description}
            />

          ))}

        </div>

      </Container>
    </section>
  );
}