import { notFound } from "next/navigation";

import {
    getProject,
    getProjects,
} from "@/lib/projects";

import ProjectHero from "@/components/project-details/ProjectHero";
import ProjectInfo from "@/components/project-details/ProjectInfo";
import ProjectGallery from "@/components/project-details/ProjectGallery";
import ProjectFeatures from "@/components/project-details/ProjectFeatures";
import ProjectChallenges from "@/components/project-details/ProjectChallenges";
import ProjectFuture from "@/components/project-details/ProjectFuture";

export async function generateStaticParams() {

    return getProjects().map((project)=>({

        slug:project.slug

    }))

}

export async function generateMetadata({ params }) {

    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
        };
    }

    return {
        title: project.title,
        description: project.description,
    };

}

export default async function ProjectPage({ params }) {

    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {

        notFound();

    }

    return(

        <>

            <ProjectHero project={project}/>

            <ProjectInfo project={project}/>

            <ProjectGallery project={project}/>

            <ProjectFeatures project={project}/>

            <ProjectChallenges project={project}/>

            <ProjectFuture project={project}/>

        </>

    )

}