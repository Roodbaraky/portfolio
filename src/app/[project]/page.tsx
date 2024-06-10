import fs from "fs";
import Image from "next/image";
import Link from "next/link";
import path from "path";

export default async function ProjectPage({
  params,
}: {
  params: { project: string };
}) {
  const { project } = params;
  const filePath = path.join(
    process.cwd(),
    "src",
    "resources",
    "projects.json"
  );
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const projects = JSON.parse(jsonData);

  const projectData = projects.find(
    (p: { project_slug: string }) => p.project_slug === project
  );

  if (!projectData) {
    return <p>Project not found</p>;
  }

  return (
    <section className="mt-16 mx-auto self-center flex flex-col">
      <article className="p-12">
        <h1 className="text-5xl">{projectData.title}</h1>
        <p className="text-justify my-2">{projectData.description}</p>
        <Image
          alt="project image"
          src={projectData.imagePath}
          width={600}
          height={600}
          priority={true}
          className="rounded-xl"
        />
        <p className="py-2">{projectData.body}</p>
        <p className="text-center text-xl">See it in action <Link target='_blank' className='underline' href={`${projectData.demo}`}>here </Link> </p>
        <p className="text-center text-xl">Peep the code <Link target='_blank' className='underline' href={`${projectData.repo}`}>here </Link> </p>

      </article>
    </section>
  );
}
