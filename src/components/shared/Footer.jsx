import Link from "next/link";

import {
    FaGithub,
    FaLinkedin,
    FaFacebook
} from "react-icons/fa";

import Container from "./Container";

export default function Footer(){

return(

<footer className="border-t border-slate-800">

<Container>

<div className="py-16">

<div className="flex flex-col md:flex-row justify-between gap-8">

<div>

<h2 className="text-3xl font-bold">

Fahim<span className="text-primary">.</span>

</h2>

<p className="mt-4 text-slate-400 max-w-sm">

Frontend Developer passionate about creating
modern web applications.

</p>

</div>

<div className="flex gap-4">

<Link
href="https://github.com/fahim-ahmmed"
target="_blank"
className="btn btn-circle btn-outline"
>

<FaGithub/>

</Link>

<Link
href="#"
className="btn btn-circle btn-outline"
>

<FaLinkedin/>

</Link>

<Link
href="#"
className="btn btn-circle btn-outline"
>

<FaFacebook/>

</Link>

</div>

</div>

<div className="divider"/>

<p className="text-center text-slate-500">

© {new Date().getFullYear()} Fahim Ahmed.

All Rights Reserved.

</p>

</div>

</Container>

</footer>

)

}