import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

import ContactInfo from "../contact/ContactInfo";
import ContactForm from "../contact/ContactForm";

export default function Contact(){

return(

<section

id="contact"

className="py-24"

>

<Container>

<SectionTitle

subtitle="Contact"

title="Let's Work Together"

/>

<div

className="
grid
lg:grid-cols-2
gap-14
"

>

<ContactInfo/>

<ContactForm/>

</div>

</Container>

</section>

)

}