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
        {/* <div
            id="skills-content"
            className="flex flex-col lg:grid grid-cols-3 gap-4 mb-8"
          >
            <div>
              <h3 className="text-2xl my-2 font-semibold">Web & Mobile Dev</h3>
              <ul>
                <li className="py-1 text-left">
                  <p className="font-semibold">Frontend:</p> Building sleek UIs
                  with <a className="italic font-semibold">HTML</a>,{" "}
                  <a className="italic font-semibold">CSS</a>,{" "}
                  <a className="italic font-semibold">JavaScript</a>, and modern
                  frameworks like <a className="italic font-semibold">React</a>.
                </li>
                <li className="py-1 text-left">
                  <p className="font-semibold">Backend:</p> Creating robust
                  servers with <a className="italic font-semibold">Node.js</a>{" "}
                  and <a className="italic font-semibold">Express</a>. Desiging
                  and building RESTful APIs with{" "}
                  <a className="italic font-semibold">PostgreSQL</a> and{" "}
                  <a className="italic font-semibold">MongoDB</a> .
                </li>
                <li className="py-1 text-left">
                  <p className="font-semibold">Mobile:</p> Developing apps with{" "}
                  <a className="italic font-semibold">React Native</a> and{" "}
                  <a className="italic font-semibold">
                    Progressive Web Applications (PWA)
                  </a>
                  . Basic porting to <a className="italic font-semibold">iOS</a>{" "}
                  (xcode) and <a className="italic font-semibold">Android</a>{" "}
                  (Android Studio) .
                </li>
                <li className="py-1 text-left">
                  <p className="font-semibold">Design:</p> Crafting
                  user-friendly interfaces with{" "}
                  <a className="italic font-semibold">Figma</a> and{" "}
                  <a className="italic font-semibold">Dribble</a>.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl my-2 font-semibold">Data & Testing</h3>
              <ul>
                <li className="py-1 text-left">
                  <p className="font-semibold">Databases:</p> Managing data with{" "}
                  <a className="italic font-semibold">MongoDB</a> and{" "}
                  <a className="italic font-semibold">PostgreSQL</a>. Experience
                  with <a className="italic font-semibold">Supabase</a>.
                </li>
                <li className="py-1 text-left">
                  <p className="font-semibold">Testing:</p> Strictly adhering to
                  Test Driven Development (TDD) using{" "}
                  <a className="italic font-semibold">Jest</a>.
                </li>
                <li className="py-1 text-left">
                  <p className="font-semibold">CI/CD:</p> Following Agile
                  continuous development principles and setting up CI/CD
                  pipelines with tools such as{" "}
                  <a className="italic font-semibold">GitHub Actions</a>.
                </li>
                <li className="py-1 text-left">
                  <p className="font-semibold">AI:</p> Integrating AI features
                  using <a className="italic font-semibold">CohereAI</a>,{" "}
                  <a className="italic font-semibold">TensorFlow.js</a> and{" "}
                  <a className="italic font-semibold">Python</a>.
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
                  <a className="italic font-semibold">Scrum</a> and{" "}
                  <a className="italic font-semibold">Kanban</a> using{" "}
                  <a className="italic font-semibold">Trello</a>, and{" "}
                  <a className="italic font-semibold">Miro</a>.
                </li>
                <li className="py-1 text-left">
                  <p className="font-semibold">Collaboration:</p> Experienced
                  with pair programming and using team communication platforms
                  such as <a className="italic font-semibold">Slack</a>,{" "}
                  <a className="italic font-semibold">Zoom</a>, and{" "}
                  <a className="italic font-semibold">Microsoft Teams</a>.
                </li>
                <li className="py-1 text-left">
                  <p className="font-semibold">Leadership:</p> Leading daily
                  standups and managing interpersonal relationships to ensure
                  strong culture and high quality output on group projects.
                </li>
              </ul>
            </div>
          </div> */}
          {/* md:grid md:grid-cols-2 md:gap-20 */}
          <div className="flex flex-col gap-4  md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap  justify-evenly">
          <Frontend />
          <Testing />
          <Mobile />
          <Backend />
        </div>
      </div>
    </section>
  );
}
