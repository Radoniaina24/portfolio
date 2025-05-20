"use client";
import About from "@/components/About/About";
import ButtonTop from "@/components/Button/ButtonTop";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Project from "@/components/Project/Project";
import Skills from "@/components/Skills/Skills";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Project />
      {/* <Testimonials /> */}
      <Contact />
      <ButtonTop />
    </>
  );
}
