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
      className="border-2 border-secondary rounded-2xl p-4 flex flex-col justify-between min-h-96 min-w-96 max-w-96"
    >
      <div>
        <h3 className="text-2xl text-center ">{title}</h3>
        <p className="place-content-center text-center">{description}</p>
      </div>
      <div className="flex justify-center gap-2">{children}</div>
    </div>
  );
}
