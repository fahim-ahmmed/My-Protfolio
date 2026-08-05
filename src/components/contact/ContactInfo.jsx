import contact from "@/data/contact";

import ContactCard from "./ContactCard";

export default function ContactInfo(){

return(

<div className="grid gap-6">

{

contact.map(item=>(

<ContactCard

key={item.id}

icon={item.icon}

title={item.title}

value={item.value}

link={item.link}

/>

))

}

</div>

)

}