import { Code, Palette, Rocket, Search, Smartphone, Globe } from "lucide-react";
import Link from "next/link";

export default function Servicespage() {
    const services = [
        {
            icon: <Globe className="h-10 w-10"/>,
            title: 'Création de site Vitrine',
            description: "Des sites web élégants et performants qui présentent votre activité sous son meilleur jour. Optimisés pour tous les appareils.",
            features: ["Design Responsive", "Optimisation SEO", "Formulaire de contact", "Hébergement inclus"],
        },
        {
            icon: <Smartphone className="h-10 w-10 text-secondary" />,
            title: "Applications Web & Mobile",
            description: "Transformation de vos processus métier en applications web fluides et intuitives. Une expérience utilisateur sans compromis.",
            features: ["PWA (Progressive Web Apps)", "Tableaux de bord", "Systèmes de gestion", "Temps réel"],
        },
        {
            icon: <Palette className="h-10 w-10 text-accent" />,
            title: "Design UI/UX",
            description: "Nous concevons des interfaces qui ne sont pas seulement belles, mais qui convertissent vos visiteurs en clients fidèles.",
            features: ["Maquettage Figma", "Prototypage", "Charte graphique", "Audit UX"],
        },
        {
            icon: <Search className="h-10 w-10 text-blue-500" />,
            title: "SEO & Référencement",
            description: "Ne soyez plus invisible. Nous optimisons votre présence en ligne pour que vos clients vous trouvent facilement.",
            features: ["Audit technique", "Optimisation de contenu", "Performance web", "Suivi de positionnement"],
        },
        {
            icon: <Code className="h-10 w-10 text-green-500" />,
            title: "Maintenance & Support",
            description: "Votre tranquillité d'esprit est notre priorité. Nous assurons la sécurité et la mise à jour de votre plateforme.",
            features: ["Mises à jour de sécurité", "Sauvegardes quotidiennes", "Support réactif", "Monitoring 24/7"],
        },
        {
            icon: <Rocket className="h-10 w-10 text-orange-500" />,
            title: "Stratégie Digitale",
            description: "Un accompagnement global pour définir et atteindre vos objectifs commerciaux grâce au numérique.",
            features: ["Audit digital", "Plan d'action", "Analyse de données", "Conseil stratégique"],
        },
    ]

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800_1px,transparent_1px), linear-gradient(to_bottom,#8080800_1px,trasnparent_1px)] bg-[size:14px_24px]"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6 animate-in slide-in-from-bottom-4 fade-in duration-700">
                        Nos Services
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
                        Une expertise complète pour tous vos besoins digitaux. De la conception à la mise en ligne, nous sommes votre partenaire de confiance.
                    </p>
                </div>
            </section>

            {/* seervice Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index}
                            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group flex flex-col h-full animate-in zoom-in-50 fade-in duration-500"
                            style={{animationDelay: `${index * 100}ms`}}>
                            
                            <div className="mb-6 p-4 bg-gray-50 dark:bg-black w-fit rounded-xl groip-hover:scale-110 transition-transform duration-300 ring-1 ring-gray-100 dark:ring-gray-800">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                                {service.description}
                            </p>
                            <ul className="space-y-3 pt-6 border-t border-gray-100 dark:border-gray-80">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                                        <span className="w-1.5 h-1.5 rounded full bg-primary/50 mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* call To action */}
                <div className="mt-20 text-center">
                    <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:scale-105">
                        Demander un devis
                    </Link>
                </div>
            </section>
        </div>
    )
}