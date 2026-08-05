import Link from "next/link";

export default function ContactCard({

icon:Icon,

title,

value,

link

}){

return(

<Link

href={link}

className="
rounded-2xl
border
border-slate-800
bg-slate-900
p-6
hover:border-primary
transition
"

>

<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">

<Icon className="text-primary"/>

</div>

<h3 className="mt-5 text-xl font-semibold">

{title}

</h3>

<p className="mt-2 text-slate-400">

{value}

</p>

</Link>

)

}