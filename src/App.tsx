import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Presentation"
import Cards from "./components/Cards"
import ContactSection from "./components/Contact/ContactSection"

// Pages
import Parcours from "./pages/Parcours"
import Competences from "./pages/Competences"
import Projets from "./pages/Projets"
import Applications from "./pages/Applications"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-100 to-slate-200 text-slate-800">
        <Routes>

          {/* PAGE D'ACCUEIL */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="max-w-6xl mx-auto px-6 space-y-20">
                  <Hero />

                  <section className="text-center text-lg text-slate-700 max-w-3xl mx-auto">
                    Je suis à la recherche d’un stage d'une durée de 2 à 4 mois.
                    Je souhaite continuellement me développer et apprendre de nouvelles choses.
                    Je suis particulièrement intéressé par la data, l’ingénierie logicielle
                    et le développement web.
                  </section>

                  <Cards />
                  <ContactSection />
                </main>
              </>
            }
          />

          {/* AUTRES PAGES */}
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/applications" element={<Applications />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
