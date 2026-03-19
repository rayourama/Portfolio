import BackHomeButton from "../components/BackHomeButton"
import stages from "../assets/stages.png"
import uspn from "../assets/projets/sae6.01.jpg"
import ups from "../assets/ups.png"

export default function Parcours() {
  return (
      <main className="bg-slate-100 min-h-screen py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <BackHomeButton />
        </div>
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10">

          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Mon parcours
            </h1>
          </header>

          <h2 className="text-2xl font-bold text-slate-900">
            Le BUT Informatique : une base solide pour mon parcours
          </h2>
          <img 
            src={uspn}
            alt="Illustration de parcours"
            className="rounded-xl shadow-md w-full h-25"
          />
          
          <section className="space-y-6 text-slate-700 text-lg leading-relaxed">
            <p>
              Actuellement étudiant en master d’ingénierie logicielle à l’Université Paris-Saclay, j'ai avant cela
              effectué et obtenu un BUT Informatique à l’IUT de Villetaneuse à l'Université Sorbonne Paris Nord. Ce parcours 
              m’a permis d’acquérir une solide base de connaissances en informatique et j’ai progressivement développé un fort 
              intérêt pour le développement logiciel et l’architecture des systèmes modernes.
            </p>

            <h2 className="text-2xl font-bold text-slate-900">
              Mes stages
            </h2>

            <p>
              Au fil de mes études, j’ai travaillé sur différents projets académiques
              et personnels.
            </p>

            <img 
            src={stages}
            alt="Illustration de parcours"
            className="w-full rounded-xl shadow-md"
            />

            <h3 className="text-xl font-semibold text-slate-800">
              BUT 2 : Développeur Full-Stack chez BNP Paribas
            </h3>

            <p>
              Le stage a signifié la découverte du monde professionnel et l'intégration d'une entreprise. 
              Pour ma part, j'ai effectué un stage chez BNP Paribas en tant que développeur Full-Stack. 
              Découvrir un nouvel environnement de travail une nouvelle ambiance, de nouveaux collègues, 
              tout cela était nouveau pour moi mais j'ai rapidement su m'intégrer au sein de l'équipe notamment 
              à l'aide de réunions quotidiennes qui me permettaient d'être en contact fréquemment avec les autres
               membres de l'équipe ou encore le fait de travailler en open space qui permet de faciliter la 
               communication et la vie d'entreprise.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">
              BUT 3 : Développeur de tests de service chez Orange (Stage de fin d'études)
            </h3>
            <p>
              Ce second stage m'a permis de mettre en pratique les leçons tirées du stage précédent. 
              Pour ma part, j'ai effectué ce stage chez Orange en tant que développeur de tests de service. 
              J'y ai découvert de nouvelles technologies, de nouvelles méthodologies de travail mais également 
              un tout nouvel environnement. Ce qui a donc engrangé un certain temps d'adaptation, cependant bien 
              plus court que lors du premier stage en raison de l'expérience que j'ai pu engranger ainsi que de mon 
              autonomie.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">
              M1 - Ingénierie logicielle
            </h3>
            <img 
            src={ups}
            alt="Illustration de parcours"
            className="w-full rounded-xl shadow-md"
            />

            <p>
              Après l’obtention de mon diplôme, j’ai intégré le Master en Ingénierie Logicielle à l’université
              Paris Saclay où j’ai pu renforcer mes compétences en développement, et en développer de nouvelles,
              notamment en gestion de projet, ingénierie logicielle ou encore en analyse de données. 
            </p>
          </section>
        </article>
      </main>
  )
}
