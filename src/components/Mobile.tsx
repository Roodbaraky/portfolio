import { BsAndroid2 } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpo } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import IconSpan from "./IconSpan";
import Skill from "./Skill";

export default function Mobile() {
  return (
    <Skill
      title="Mobile Development"
      description={
        <p>Building responsive apps for android and iOS, with a vested interest in <strong>progressive web applications (PWAs)</strong> and versatility</p>
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
          <IconSpan>
<BsAndroid2 className=" text-4xl mx-auto"/>
Android Studio
          </IconSpan>
          <IconSpan >
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 192.77" ><path className="cls-1 fill-secondary-content" d="M376.82,158.24l14.79-37.4h42.71L414.05,64.1,439.4,0,512,192.77H458.46l-12.41-34.53Z"/><path className="cls-2 fill-secondary-content" d="M331.14,192.77,408.86,0H357.34L304.17,124.57,266.36,0H226.75L186.16,124.57,157.53,67.81l-25.91,79.81,26.31,45.15h50.71L245.32,81.06l35,111.71Z"/><path className="cls-1 fill-secondary-content" d="M48.91,126.59H80.65a93.79,93.79,0,0,0,25.68-3.21l8.21-25.29,22.94-70.68a55.61,55.61,0,0,0-6-7.85Q113.84,0,79.8,0H0V192.77H48.91Zm42-82.24q6.9,6.94,6.9,18.59T91.75,81.55q-6.65,7.64-24.5,7.64H48.91V37.4H67.39Q84,37.4,90.92,44.35Z"/></svg>
          Progressive Web Apps
            </IconSpan>
     </div>
    
    </Skill>
  );
}
