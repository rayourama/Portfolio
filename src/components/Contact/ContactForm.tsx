import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | null>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSending(true)
    setStatus(null)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success")
          formRef.current?.reset()
        },
        () => {
          setStatus("error")
        }
      )
      .finally(() => {
        setIsSending(false)
      })
  }

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Nom"
        required
        className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <textarea
        name="message"
        placeholder="Message"
        required
        className="w-full border border-slate-300 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <button
        type="submit"
        disabled={isSending}
        className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition font-medium disabled:opacity-50"
      >
        {isSending ? "Envoi..." : "Envoyer"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm text-center">
          Message envoyé avec succès ✔
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Une erreur est survenue. Réessayez.
        </p>
      )}
    </form>
  )
}
