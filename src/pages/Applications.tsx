// pages/Applications.tsx
import { useState } from "react";
import BackHomeButton from "../components/BackHomeButton";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { APPLICATIONS } from "../constants/applications";
import type { Application } from "../constants/applications";

export default function Applications() {
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  return (
    <main className="bg-slate-100 min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <BackHomeButton />

        <h1 className="text-3xl font-bold text-center mt-10 mb-12">
          Mes Applications
        </h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {APPLICATIONS.map((app) => (
            <ProjectCard
              key={app.id}
              project={app}
              onClick={() => setSelectedApp(app)}
            />
          ))}
        </section>

        <ProjectModal
          project={selectedApp}
          onClose={() => setSelectedApp(null)}
        />
      </div>
    </main>
  );
}