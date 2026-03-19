export default function Header() {
  return (
    <header className="py-14 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
        RAMASSAMY Ryan
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Développeur Logiciel / Web
      </p>
      <a
  href="/CV.pdf"
  download={"CV_Ryan_Ramassamy.pdf"}
  className="fixed bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
>
  Mon CV
</a>
    </header>
    
  )
}
