import { SKILLS } from "../constants/skills";
import SkillCategory from "../components/Competences/SkillCategory";
import BackHomeButton from "../components/BackHomeButton";

export default function Competences() {
  return (
    <div className="max-w-6xl mx-auto py-20 space-y-16">
      <BackHomeButton />

      <h1 className="text-4xl font-extrabold text-slate-900">Compétences</h1>

      {SKILLS.map((category) => (
        <SkillCategory key={category.title} {...category} />
      ))}
    </div>
  );
}