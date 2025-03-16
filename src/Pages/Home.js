import React from "react";
import HeroSection from "../Components/Sections/HeroSection";
import About from "../Components/Sections/About";
import ProjectTabs from "../Components/Sections/ProjectTabs";
export default function Home() {
  return (
    <div className="MainBody">
      <HeroSection></HeroSection>
      <About></About>
      <ProjectTabs></ProjectTabs>
    </div>
  );
}
