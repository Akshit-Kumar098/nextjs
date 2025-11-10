import Image from "next/image";
import Hero from "./homepage/hero";
import Whyus from "./homepage/whyus";
import Cards from "./homepage/cards";
import Readytohire from "./homepage/readytohire";
import Faq from "@/components/faq";
import Partner from "./homepage/partner";
import Testimonial from "@/components/testimonial";


export default function Home() {
  return (
    <div>
      
      <Hero />
      <Whyus />
      <Cards />
      <Partner />
      <Testimonial/>
      <Readytohire />
      <Faq/>
    </div>
  );
}
