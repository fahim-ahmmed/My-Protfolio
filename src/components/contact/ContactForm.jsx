"use client";

export default function ContactForm(){

return(

<form
className="
rounded-3xl
border
border-slate-800
bg-slate-900
p-8
space-y-5
"
>

<input

type="text"

placeholder="Your Name"

className="input input-bordered w-full"

/>

<input

type="email"

placeholder="Your Email"

className="input input-bordered w-full"

/>

<textarea

rows="6"

placeholder="Message"

className="textarea textarea-bordered w-full"

/>

<button

className="btn btn-primary w-full"

>

Send Message

</button>

</form>

)

}