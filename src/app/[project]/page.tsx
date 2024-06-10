import fs from 'fs'
import Image from 'next/image'
import path from 'path'

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

  const projectData = projects.find((p: { project_slug: string; }) => p.project_slug === project);

  if (!projectData) {
    return <p>Project not found</p>;
  }

  return (
    <article>
      <h1>{projectData.title}</h1>
      <p>{projectData.description}</p>
      <Image
        alt="project image"
        src={projectData.imagePath}
        width={600}
        height={600}
        priority={true}
      ></Image>
    </article>
  );
}
