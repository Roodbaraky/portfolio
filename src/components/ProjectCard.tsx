import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Project} from './ProjectsContainer' 

export default function ProjectCard({
  project
}: {project:Project}) {
  return (
    <article className="project-img hover:scale-[102%] transition-all delay-150 ease-in-out relative rounded-lg shadow  hover:shadow-xl hover:drop-shadow-xlmx-4 overflow-hidden w-[550px] max-w-full sm:max-w-full self-center mx-auto">
      <Image
        alt=""
        src={project.imagePath}
        className="absolute inset-0 h-full w-full  object-cover rounded"
        width={600}
        height={600}
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-white/90">
            {" "}
            {project.date}{" "}
          </time>

          <Link href={`/${project.project_slug}`}>
            <h3 className="mt-0.5 text-lg text-white">{project.title}</h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {project.description}
          </p>
        </div>
      </div>
    </article>
  );
}
