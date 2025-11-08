import AgeSections from "@/components/AgeSection";
import Cta from "@/components/Cta";
import Features from "@/components/Features";
import Form from "@/components/Forms";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div >
 
      <Hero />
      <Features />
      <Stats />
      <AgeSections />
      <Testimonials />
      <Cta />
      <Form />
     
    </div>
  );
}
