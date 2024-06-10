import fs from 'fs';
import Image from 'next/image'
import path from 'path';
import React from 'react'
import ProjectCard from './ProjectCard';

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
        
    <div className="projects-container w-[80%] flex flex-col lg:flex-row gap-8 mt-6">
        {projects.map(
          (project: {
            project_slug: string;
            imagePath: string;
            date: string;
            title: string;
            body: string;
          }) => (
            <ProjectCard key={project.project_slug} project={project} />
          )
        )}

      
    </div>
  </section>
  )
}
