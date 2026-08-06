import Link from "next/link";

export default function NotFound(){

return(

<div className="min-h-screen flex flex-col items-center justify-center">

<h1 className="text-8xl font-bold">

404

</h1>

<p className="text-slate-400 mt-6">

Page Not Found

</p>

<Link

href="/"

className="btn btn-primary mt-10"

>

Go Home

</Link>

</div>

)

}