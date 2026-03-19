type Project = {
  id: string;
  title: string;
  imageCard: string;
  imageModal: string;
  description: string;
  link: string;
};

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition transform"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageCard}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="text-white font-semibold">Voir le projet</span>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-slate-800">
          {project.title}
        </h2>
      </div>
    </div>
  );
}