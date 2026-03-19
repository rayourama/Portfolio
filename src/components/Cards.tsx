import { useState } from "react";
import { Link } from "react-router-dom";
import { CARDS } from "../constants/constants";
import { PROJECTS } from "../constants/projects";
import ProjectModal from "./ProjectModal";
import type { Project } from "../constants/projects";
import { APPLICATIONS } from "../constants/applications";

export default function Cards() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (id?: string) => {
  if (!id) return;

  const project = PROJECTS.find((p) => p.id === id);
  const application = APPLICATIONS.find((a) => a.id === id);

  if (project) setSelectedProject(project);
  else if (application) setSelectedProject(application);
};

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition transform"
          >
            {/* HEADER (navigation normale) */}
            <Link
              to={card.link}
              className="block bg-blue-700 text-white py-4 text-center font-semibold text-lg"
            >
              {card.title}
            </Link>

            <div className="p-6 text-slate-700 flex flex-col gap-4">
              <p>{card.description}</p>

              {card.featured && (
                <span
                  onClick={() => openModal(card.featured?.projectId)}
                  className="cursor-pointer mt-2 inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-blue-200 hover:scale-105 transition"
                >
                  {card.featured.label}
                </span>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* MODALE */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}