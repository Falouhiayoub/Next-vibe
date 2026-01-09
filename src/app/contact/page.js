"use client"

import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDafault()
        setIsSubmitting(true)

        // simulate api call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setSubmitted(true)
        setFormData({name:'', email: '', subject: '', message: ''})
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            {/* Header */}
            <section className="relative py-20 px-4 sm:px-6 lg:-8 bg-gray-50 dark:bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px, transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[14px_24px]"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6 animate-in slide-in-from-bottom-4 fade-in duration-700">
                        Contactez-Nous
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
                        Une idée ? Un projet ? N&apos;hésitez pas à nous écrire. Notre équipe est là pour vous répondre rapidement.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* contact info */}
                    <div className="space-y-12 animate-in slide-in-from-left-8 fade-in duration-700 delay-300">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Nos Cordonnées</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <MapPin className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Adresse</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            33 Rue Asni2, Derb Talianne <br />
                                            Casablanca, Maroc
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-lg">
                                        <Mail className="h-6 w-6 text-secondary"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Email</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Hello@nextvibe
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 rounded-lg">
                                        <Phone className="h-6 w-6 text-accent"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Téléphone</h3>
                                        <p className="text-gray-600 dark:text-gray-400">+212 5 55 55 55 55</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xl font-bold mb-4">Heures d&apos;ouverture</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex justify-between">
                                    <span>Lundi - Vendredi</span>
                                    <span className="font-medium text-foreground">9:00 - 17:00  </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Samedi</span>
                                    <span className="font-medium text-foreground">10:00 - 14:00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Dimanche</span>
                                    <span className="font-medium text-foreground">Fermé</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* contact form */}
                    <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg animate-in slide-in-from-right-8 fade-in duration-700 delay-300">
                        {submitted ? (
                            <div className="h-full flex flex-cols items-center justify-center text-center space-y-4">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                    <Send className="w-8 h-8 text-green-600 dark:text-green-400"/>
                                </div>
                                <h3 className="text-2xl font-bold">Messsage Envoyé !</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                                </p>
                                <button onClick={() => setSubmitted(false)}
                                    className="text-primary font-medium hover:underline mt-4">
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                            Nom Complet
                                        </label>
                                        <input type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            placeholder="Ayoub Falouhi"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                            Email
                                        </label>
                                        <input type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            placeholder="XgMlI@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Sujet
                                    </label>
                                    <select 
                                        id="subject"
                                        name="subject"
                                        required
                                        value={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    >
                                        <option value="">Sélectionnez un sujet</option>
                                        <option value="devis">Demande de devis</option>
                                        <option value="info">Renseignements</option>
                                        <option value="partenariat">Partenariat</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Message
                                    </label>
                                    <textarea id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                        placeholder="Écrivez votre message ici...">
                                    </textarea>
                                </div>
                                <button type="submit"
                                disabled= {isSubmitting}
                                className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                    {isSubmitting ? 
                                        ('Envoi en cours...'
                                    ) : (
                                        <>
                                            Envoyer le message <Send className="h-5 w-5"/>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}