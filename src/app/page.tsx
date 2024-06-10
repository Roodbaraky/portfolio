import About from "@/components/About";
import Contact from "@/components/Contact";
import ProjectsContainer from "@/components/ProjectsContainer";
import SegmentDivider from "@/components/SegmentDivider";
import SkillsContainer from "@/components/SkillsContainer";

export default function Home() {
  return (
    <main className="px-2 mx-auto w-full">
      <a id="about" className="absolute -top-24"></a>
      <About />
      <SegmentDivider title="Skills" />
      <SkillsContainer />
      <SegmentDivider title="Projects" />
      <ProjectsContainer />
      <SegmentDivider title="Contact" />
      <Contact />
    </main>
  );
}
