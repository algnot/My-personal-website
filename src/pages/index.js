import React from "react";
import About from "../components/About";
import Project from "../components/Project";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default function Index() {
  return (
    <div>
      <About />
      <Project />
      <Resume />
      <Contact />
    </div>
  );
}
