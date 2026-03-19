import { SOCIALS } from "../../constants/constants"
import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section className="text-center space-y-10 pb-20">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900">
        CONTACTEZ-MOI
      </h2>

      <div className="flex justify-center gap-10">
        {SOCIALS.map((s) => {
          const Icon = s.icon
          return (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              aria-label={s.name}
            >
              <Icon className="w-6 h-6 text-blue-700" />
            </a>
          )
        })}
      </div>

      <ContactForm />
    </section>
  )
}
