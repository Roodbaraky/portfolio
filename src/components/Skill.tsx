import { HTMLAttributes, ReactNode } from "react";

interface SkillProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: ReactNode;
}

export default function Skill({ title, description, children }: SkillProps) {
  return (
    <div
      id={title.toLowerCase()}
      aria-label={`${title} skils section`}
      className="outline outline-1 outline-base-content hover:outline-secondary hover:outline-4 hover:scale-105  shadow hover:shadow-lg transition-all duration-500 ease-in-out rounded-2xl p-4 flex flex-col justify-between min-h-96 min-w-96 max-w-96"
    >
      <div>
        <h3 className="text-2xl text-center ">{title}</h3>
        <div className="place-content-center text-center">{description}</div>
      </div>
      <div className="flex justify-center gap-2">{children}</div>
    </div>
  );
}
