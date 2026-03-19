import SkillCard from "./SkillCard";
import type { SkillCategory as Category } from "../../constants/skills";

export default function SkillCategory({ title, skills }: Category) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}