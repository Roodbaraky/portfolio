import { DiCss3, DiHtml5, DiJsBadge, DiReact } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiTestinglibrary, SiTypescript } from "react-icons/si";
import IconSpan from "./IconSpan";
import Skill from "./Skill";

export default function Frontend() {
  return (
    <Skill
      title="Web Development"
      description={
        <p>
          Building <strong>responsive</strong> websites and applications, using
          modern frontend frameworks like <strong>React and Next.js</strong>
        </p>
      }
    >
      <div className="flex flex-wrap justify-evenly gap-2">
        <IconSpan>
          <DiHtml5 className=" text-4xl mx-auto" />
          HTML
        </IconSpan>
        <IconSpan>
          <DiCss3 className=" text-4xl mx-auto" />
          CSS
        </IconSpan>
        <IconSpan>
          <DiJsBadge className=" text-4xl mx-auto" />
          <span className="flex flex-wrap ">JavaScript</span>
        </IconSpan>
        <IconSpan>
          <SiTypescript className="mx-auto text-4xl" />
          <span className="flex flex-wrap ">TypeScript</span>
        </IconSpan>
        <IconSpan>
          <DiReact className=" text-4xl mx-auto" />
          React
        </IconSpan>
        <IconSpan>
          <RiNextjsFill className=" text-4xl mx-auto" />
          Next
        </IconSpan>
      </div>
    </Skill>
  );
}
