import Image from "next/image";
import { BsFileEarmarkArrowDown, BsGithub, BsLinkedin } from "react-icons/bs";
import Icon from "./icon";

export default function About() {
  const techStack = ["typescript", "nextjs", "react", "nodejs", "postgresql"];
  return (
    <section
      id="about-section"
      className="mt-32 mx-auto self-center flex flex-col"
    >
      <div className="lg:self-start">
        <h1 className=" text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl text-center lg:text-left mb-4 lg:ml-8 font-sans inl">
          Hi, I&apos;m <strong className="font-semibold">Koo</strong>
        </h1>
      
      </div>
      <div>
        <div
          id="about-content"
          className="mx-auto w-full flex flex-col self-center lg:flex-row lg:justify-evenly md:justify-evenly md:gap-8"
        >
          <div className=" aspect-square lg:w-full self-center lg:items-start bg-gradient-to-b from-current rounded-full max-w-[500px]">
            <Image
              src={"/assets/claypp2-removebg.png"}
              className="aspect-square w-full self-center lg:items-start lg:w-full max-w-[500px]"
              width={500}
              height={500}
              alt=""
              priority={true}
            />
          </div>
          <article className="flex flex-col items-center self-center lg:items-start w-fit">
            <h2 className="mb-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center lg:text-left font-sans">
              Software Developer
            </h2>

            <div className="max-w-prose text-center lg:text-left space-y-3 lg:space-y-4">
              <p className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
                I <u>love</u> solving problems.
              </p>
              <p className="text-lg lg:text-xl">
                <em>P.S. I&apos;m really good at it</em>
              </p>
              <p className="text-2xl lg:text-3xl">
                I specialise in{" "}
                <strong>React, NextJS, TypeScript, NodeJS</strong> and{" "}
                <strong>PostgreSQL</strong>.
              </p>
            <div className="flex flex-row self-end justify-center gap-6 py-2">
            {techStack.map((tech) => (
              <Icon key={tech} iconName={tech} 
              className="hover:scale-105 hover:drop-shadow-2xl transition-all duration-300 ease-in-out"
              />
            ))}
          </div>
              <p className="text-3xl lg:text-3xl pb-4">
                Take a look at my{" "}
                <a href="#projects" className="underline font-semibold">
                  projects
                </a>{" "}
                or my{" "}
                <a
                  className="underline font-semibold"
                  href="https://github.com/Roodbaraky"
                  target="_blank"
                >
                  GitHub
                </a>{" "}
                for examples of my work
              </p>
              <div className="flex flex-col gap-5 justify-center lg:flex-row lg:py-4 lg:justify-end ">
                <div className="flex gap-5 self-center ">
                  <a
                    className="btn btn-secondary rounded-full"
                    href="https://www.linkedin.com/in/koorosh-roodbaraky/"
                  >
                    <BsLinkedin />
                    LinkedIn
                  </a>
                  <a
                    className="btn btn-secondary rounded-full"
                    href="https://github.com/Roodbaraky"
                  >
                    <BsGithub />
                    GitHub
                  </a>
                  <a
                    className="btn btn-outline btn-secondary rounded-full w-48 mx-auto lg:mx-0 lg:w-fit flex-nowrap text-nowrap"
                    href="https://2ly.link/1ygni"
                    target="_blank"
                  >
                    <BsFileEarmarkArrowDown />
                    Download my CV
                  </a>
                </div>
                <div className="w-fit self-center">
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="text-center mt-6">
          {/* <div tabIndex={0} className="collapse mx-auto w-5/6 text-center">
              <div className="collapse-title text-xl font-medium self-center mx-auto text-center">
                <p className="font-light btn btn-outline btn-primary opacity-5 hover:opacity-100 text-center rounded-full shadow-lg">
                  (Read more)
                </p>
              </div>
              <div className="collapse-content text-justify ">
                <p
                  tabIndex={0}
                  className="text-2xl lg:text-3xl mb-4 text-center "
                >
                  Well spotted.
                </p>
                <p tabIndex={0} className=" md:text-lg lg:text-xl">
                  I have been fascinated with computers for essentially as long
                  as I&apos;ve been able to walk and talk.{" "}
                  <em className="text-sm">
                    - Thanks Dad, for letting me take your machines to bits.
                  </em>
                </p>
                <p tabIndex={0} className=" md:text-lg lg:text-xl">
                  What I love about working in this field now, is the constantly
                  growing and changing technological landscape and having the
                  means to take concepts from mere ideas, to fully fledged apps.
                </p>
                <p tabIndex={0} className=" md:text-lg lg:text-xl my-4">
                  <em>
                    {" "}
                    Also, it&apos;s <strong>really</strong> satisfying to solve
                    problems - did I say that already?
                  </em>
                </p>
                <p tabIndex={0} className=" md:text-lg lg:text-xl">
                  When I&apos;m not busy getting square-eyes, though, I like to
                  unwind with meditation and yoga{" "}
                  <em className="text-sm">
                    - don&apos;t even get me started on saunas!
                  </em>
                </p>
                <p tabIndex={0} className=" md:text-lg lg:text-xl">
                  But equally, I adore{" "}
                  <em>
                    <strong>all things techno</strong>
                  </em>
                  , and I DJ a little bit on the side. If you saw me at the
                  rave... <em>no you didn&apos;t</em>.
                </p>
                <p
                  tabIndex={0}
                  className="text-lg md:text-xl lg:text-2xl my-4 text-center"
                >
                  Thanks for reading, I&apos;m touched ♥
                </p>
              </div> */}
          {/* </div> */}
         
        </div>
      </div>
    </section>
  );
}
