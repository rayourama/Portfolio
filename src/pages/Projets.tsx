// pages/Projets.tsx
import { useState } from "react";
import BackHomeButton from "../components/BackHomeButton";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { PROJECTS } from "../constants/projects";
import type { Project } from "../constants/projects";

export default function Projets() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="bg-slate-100 min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <BackHomeButton />

        <h1 className="text-3xl font-bold text-center mt-10 mb-12">
          Mes Projets
        </h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </section>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </main>
  );
}