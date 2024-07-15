import React from "react";
import Skill from "./Skill";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpo } from "react-icons/si";
import IconSpan from "./IconSpan";

export default function Mobile() {
  return (
    <Skill
      title="Mobile Development"
      description={
        "Building responsive apps for android and iOS, with a vested interest in progressive web apps (PWAs)"
      }
     
    >
     <div className="flex flex-wrap justify-evenly gap-2">
          <IconSpan>
            <TbBrandReactNative className=" text-4xl mx-auto" />
           <span className="flex flex-wrap "> React Native</span>
          </IconSpan>
    
          <IconSpan>
            <RiTailwindCssFill className=" text-4xl mx-auto" />
            NativeWind
          </IconSpan>
    
          <IconSpan>
            <SiExpo className=" text-4xl  mx-auto" />
            Expo Router
          </IconSpan>
     </div>
    
    </Skill>
  );
}
