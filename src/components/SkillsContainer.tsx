import Backend from "./Backend";
import Frontend from "./Frontend";
import Mobile from "./Mobile";
import Testing from "./Testing";

export default function SkillsContainer() {
  return (
    <section
      id="skills-container"
      className="rounded-xl flex items-center w-full"
    >
      <div className="w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 flex flex-col items-center">
       
          {/* md:grid md:grid-cols-2 md:gap-20 */}
          <div className="flex flex-col gap-4  md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap  justify-evenly mx-auto">
          <Frontend />
          <Testing />
          <Mobile />
          <Backend />
        </div>
      </div>
    </section>
  );
}
