import { DiCss3, DiHtml5, DiJsBadge, DiMongodb, DiPostgresql, DiPython, DiReact } from 'react-icons/di'
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiJest, SiTypescript } from 'react-icons/si'

export default function SkillsContainer() {
  return (
    <section id="">
        <section
          id="skills-container"
          className="rounded-xl flex items-center w-full"
        >
          <div className="w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 flex flex-col items-center">
            <div
              id="skills-content"
              className="flex flex-col sm:grid grid-cols-3 gap-4 mb-8"
            >
              <div>
                <h3 className="text-2xl my-2 font-semibold">
                  Web & Mobile Dev
                </h3>
                <ul>
                  <li className="py-1 text-left">
                    <p className="font-semibold">Frontend:</p> Building sleek
                    UIs with <a className="italic">HTML</a>,{" "}
                    <a className="italic">CSS</a>,{" "}
                    <a className="italic">JavaScript</a>, and modern frameworks
                    like <a className="italic">React</a>.
                  </li>
                  <li className="py-1 text-left">
                    <p className="font-semibold">Backend:</p> Creating robust
                    servers with <a className="italic">Node.js</a> and{" "}
                    <a className="italic">Express</a>. Desiging and building
                    RESTful APIs with <a className="italic">PostgreSQL</a> and{" "}
                    <a className="italic">MongoDB</a> .
                  </li>
                  <li className="py-1 text-left">
                    <p className="font-semibold">Mobile:</p> Developing apps
                    with <a className="italic">React Native</a> and{" "}
                    <a className="italic">Flutter</a>. Basic porting to{" "}
                    <a className="italic">iOS</a> (Swift) and{" "}
                    <a className="italic">Android</a> (Android Studio) .
                  </li>
                  <li className="py-1 text-left">
                    <p className="font-semibold">Design:</p> Crafting
                    user-friendly interfaces with{" "}
                    <a className="italic">Figma</a> and{" "}
                    <a className="italic">Dribble</a>.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl my-2 font-semibold">Data & Testing</h3>
                <ul>
                  <li className="py-1 text-left">
                    <p className="font-semibold">Databases:</p> Managing data
                    with <a className="italic">MongoDB</a> and{" "}
                    <a className="italic">PostgreSQL</a>. Experience with{" "}
                    <a className="italic">Supabase</a>.
                  </li>
                  <li className="py-1 text-left">
                    <p className="font-semibold">Testing:</p> Strictly adhering
                    to Test Driven Development (TDD) using{" "}
                    <a className="italic">Jest</a> and{" "}
                    <a className="italic">Cypress</a>.
                  </li>
                  <li className="py-1 text-left">
                    <p className="font-semibold">CI/CD:</p> Following Agile
                    continuous development principles and setting up CI/CD
                    pipelines with tools such as{" "}
                    <a className="italic">GitHub Actions</a>.
                  </li>
                  <li className="py-1 text-left">
                    <p className="font-semibold">AI:</p> Integrating AI features
                    using <a className="italic">CohereAI</a>,{" "}
                    <a className="italic">TensorFlow.js</a> and{" "}
                    <a className="italic">Python</a>.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl my-2 font-semibold">
                  Project Management
                </h3>
                <ul>
                  <li className="py-1 text-left">
                    <p className="font-semibold">Agile:</p> Practicing{" "}
                    <a className="italic">Scrum</a> and{" "}
                    <a className="italic">Kanban</a> using{" "}
                    <a className="italic">Trello</a>, and{" "}
                    <a className="italic">Miro</a>.
                  </li>
                  <li className="py-1 text-left">
                    <p className="font-semibold">Collaboration:</p> Experienced
                    with pair programming and using team communication platforms
                    such as <a className="italic">Slack</a>,{" "}
                    <a className="italic">Zoom</a>, and{" "}
                    <a className="italic">Microsoft Teams</a>.
                  </li>
                  <li className="py-1 text-left">
                    <p className="font-semibold">Leadership:</p> Leading daily
                    standups and managing interpersonal relationships to ensure
                    strong culture and high quality output on group projects.
                  </li>
                </ul>
              </div>
            </div>

            <div
              id="icons-container"
              className="mt-4 flex flex-wrap place-items-center place-content-evenly gap-3 sm:w-[60%]"
            >
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125  p-4 my-2">
                  <DiHtml5 className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>

              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <DiCss3 className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <DiJsBadge className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <RiNodejsFill className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <SiJest className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <DiPostgresql className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <DiReact className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <SiExpress className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>
              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <SiTypescript className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>

              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <DiMongodb className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>

              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <RiTailwindCssFill className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>

              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <RiNextjsFill className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>

              <div className="flex flex-col items-center  gap-4">
                <span className="shrink-0 rounded-lg bg-neutral text-primary opacity-40 hover:opacity-70 transition-all delay-100 ease-in-out hover:scale-125 p-4 my-2">
                  <DiPython className="hover:scale-150 transition-transform ease-in-out text-4xl" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
  )
}
