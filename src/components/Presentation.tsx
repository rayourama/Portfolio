import profilePhoto from "../assets/photo.jpg"

export default function Hero() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row gap-10 items-center">
      <img
        src={profilePhoto}
        alt="Photo de profil"
        className="w-44 h-44 rounded-2xl object-cover shadow-lg ring-4 ring-blue-700/10 shrink-0"
      />
      <div className="space-y-4 text-slate-700 text-lg">
        <p>
          Étudiant en première année de Master en ingénierie logicielle à
          l’Université Paris-Saclay.
        </p>
        <p>
          📞 <span className="font-medium">06&nbsp;76&nbsp;68&nbsp;29&nbsp;00</span>
          <br />
          📍​ <span className="font-medium">Île de France</span>
          <br />
          🚘​ <span className="font-medium">Permis B</span>
        </p>
      </div>
    </section>
  )
}
