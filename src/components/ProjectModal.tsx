type Project = {
  title: string;
  imageModal: string;
  description: string;
  link: string;
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <img
          src={project.imageModal}
          alt={project.title}
          className="w-full h-56 object-cover"
        />

        {/* Contenu */}
        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold">{project.title}</h2>

          <p className="text-slate-600">{project.description}</p>

          <a
            href={project.link}
            target="_blank"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
          >
            Voir le projet
          </a>

          <button
            onClick={onClose}
            className="text-sm text-slate-500 hover:text-black"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}