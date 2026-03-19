import { Link } from "react-router-dom"

export default function BackHomeButton() {
  return (
    <div className="mb-10">
      <Link
        to="/"
        className="
          inline-flex items-center gap-2
          px-5 py-2.5
          rounded-xl
          bg-white
          shadow-md
          text-slate-700
          font-medium
          hover:bg-blue-700
          hover:text-white
          transition
        "
      >
        ← Accueil
      </Link>
    </div>
  )
}
