import { DiCss3, DiHtml5, DiJsBadge, DiReact } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiJest, SiPytest, SiTestinglibrary, SiTypescript, SiVitest } from "react-icons/si";
import IconSpan from "./IconSpan";
import Skill from "./Skill";

export default function Testing() {
  return (
    <Skill
      title="Testing"
      description={
<p>
<strong>Test-Driven Development (TDD)</strong> for <strong>unit, integration</strong> and end-to-end testing, using extended matcher libraries, Mock Functions and more
</p>      }
    >
      <div className="flex flex-wrap justify-evenly gap-2">
        
      <IconSpan>
          <SiJest className=" text-4xl mx-auto" />
            Jest
          </IconSpan>
          <IconSpan>
          <SiVitest className=" text-4xl mx-auto" />
            Vitest
          </IconSpan>
        <IconSpan>
          <SiTestinglibrary className=" text-4xl mx-auto" />
          Testing Library
        </IconSpan>
        <IconSpan>
            <SiPytest className=" text-4xl mx-auto"/>
            Pytest
        </IconSpan>
      </div>
    </Skill>
  );
}
