"use client";

import Image from "next/image";

import Link from "next/link";

import { motion } from "framer-motion";
 import { FaGithub } from "react-icons/fa";

import {
  ArrowLeft,
  GithubIcon,
  ExternalLink,
} from "lucide-react";

import Container from "../shared/Container";

import TechBadge from "../projects/TechBadge";

export default function ProjectHero({project}){

return(

<section className="py-20">

<Container>

<motion.div

initial={{opacity:0,y:60}}

animate={{opacity:1,y:0}}

transition={{duration:.7}}

>

<Link

href="/"

className="btn btn-ghost mb-10"

>

<ArrowLeft/>

Back

</Link>

<div className="grid lg:grid-cols-2 gap-14 items-center">

<div>

<p className="text-primary uppercase">

{project.category}

</p>

<h1 className="text-5xl font-bold mt-4">

{project.title}

</h1>

<p className="text-slate-400 leading-8 mt-8">

{project.description}

</p>

<div className="flex flex-wrap gap-3 mt-8">

{

project.technologies.map((tech)=>(

<TechBadge

key={tech}

>

{tech}

</TechBadge>

))

}

</div>

<div className="flex gap-4 mt-10">

<Link

href={project.live}

target="_blank"

className="btn btn-primary"

>

<ExternalLink/>

Live

</Link>

<Link

href={project.github}

target="_blank"

className="btn btn-outline"

>

<FaGithub />

Github

</Link>

</div>

</div>

<div>

<div className="relative h-[500px] rounded-3xl overflow-hidden">

<Image

src={project.thumbnail}

fill

priority

alt={project.title}

className="object-cover"

/>

</div>

</div>

</div>

</motion.div>

</Container>

</section>

)

}