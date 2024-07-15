import React from "react";
import Skill from "./Skill";
import { DiCss3, DiHtml5, DiJsBadge, DiMongodb, DiPostgresql, DiPython, DiReact } from "react-icons/di";
import IconSpan from "./IconSpan";
import { SiExpress, SiFastapi, SiJest, SiTestinglibrary, SiVitest } from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";

export default function Backend() {
  return (
    <Skill
      title="Backend Development"
      description={
        "Building responsive websites and applications, with a vested interest in progressive web apps (PWAs)"
      }
     
    >
    <div className="flex flex-wrap justify-evenly gap-2">
          <IconSpan>
          <RiNodejsFill className=" text-4xl mx-auto" />
            Node
          </IconSpan>
          <IconSpan>
          <SiExpress className="mx-auto text-4xl" />
          Express
          </IconSpan>
          <IconSpan>
          <DiPostgresql className=" text-4xl mx-auto" />
            <span className="flex flex-wrap">PostgreSQL</span>
          </IconSpan>
          <IconSpan>
          <DiPython className=" text-4xl mx-auto" />
            Python
          </IconSpan>
          <IconSpan>
          <DiMongodb className=" text-4xl mx-auto" />

            <span className="flex flex-wrap">MongoDB</span>
          </IconSpan>
          <IconSpan>
            <SiFastapi className=" text-4xl mx-auto"/>
           FastAPI
          </IconSpan>
          <IconSpan>
          <SiJest className=" text-4xl mx-auto" />
            Jest
          </IconSpan>
          <IconSpan>
          <SiVitest className=" text-4xl mx-auto" />
            Vitest
          </IconSpan>
    </div>
    </Skill>
  );
}
