"use client";

import { useEffect, useState } from "react";

import { ChevronUp } from "lucide-react";

export default function ScrollTop(){

const[show,setShow]=useState(false);

useEffect(()=>{

const handleScroll=()=>{

setShow(window.scrollY>400);

}

window.addEventListener("scroll",handleScroll);

return()=>window.removeEventListener("scroll",handleScroll)

},[])

return(

<button

onClick={()=>window.scrollTo({

top:0,

behavior:"smooth"

})}

className={`
fixed
bottom-8
right-8
btn
btn-primary
btn-circle
transition
${show?"scale-100":"scale-0"}
`}

>

<ChevronUp/>

</button>

)

}