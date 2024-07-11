import fs from 'fs';
import path from 'path';
import ProjectCard from './ProjectCard';

export interface Project{
  project_slug: string,
      title: string,
      description: string,
      body: string,
      date: string,
      tags: string[],
      imagePath: string,
      demo?: string,
    repo?: string
}

export default function ProjectsContainer() {

    const filePath = path.join(
        process.cwd(),
        "src",
        "resources",
        "projects.json"
      );
      const jsonData = fs.readFileSync(filePath, "utf-8");
      const projects = JSON.parse(jsonData);
  return (
    <section id="projects-section" className="flex flex-col items-center">
        
    <div className="projects-container w-[80%] flex flex-col lg:flex-row gap-8 mt-6 flex-wrap justify-center">
        {projects.map(
          (project:Project) => (
            <ProjectCard key={project.project_slug} project={project} />
          )
        )}

      
    </div>
  </section>
  )
}



// JSON FOR ADDING NEW PROJECTS
// {
//     "project_slug": "",
//     "title": "",
//     "description": "",
//     "body": "",
//     "date": "",
//     "tags": [],
//     "imagePath": "",
//     "demo": "",
//     "repo": ""
//   }