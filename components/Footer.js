import Link from "next/link";
import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";


export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mab-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Zap className="h-5 w-5 text-primary"/>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-foreground">NextVibe</span>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Nous créons des expériences digitales exceptionnelles qui propulsent votre entreprise vers le futur. Design premium, performance maximale.
                        </p>
                    </div>

                    {/* links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                                    Acceuil
                                </Link>
                            </li>
                            <li>
                                <Link href = "/services" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href = "/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                                    A Propos
                                </Link>
                            </li>
                            <li>
                                <Link href = "/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* services */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-600 dark:text-gray-400 text-sm">Développement Web</li>
                            <li className="text-gray-600 dark:text-gray-400 text-sm">Design UI/UX</li>
                            <li className="text-gray-600 dark:text-gray-400 text-sm">SEO & Performance</li>
                            <li className="text-gray-600 dark:text-gray-400 text-sm">Consulting</li>
                        </ul>
                    </div>

                    {/* contact */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Reston Connectés</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="p-2 bg-white dark:bg-gray-900 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-110 transition-all shadow-sm">
                                <Twitter className="h-4 w-4"/>
                            </a>
                            <a href="#" className="p-2 bg-white dark:bg-gray-900 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-110 transition-all shadow-sm">
                                <Linkedin className="h-4 w-4"/>
                            </a>
                            <a href="#" className="p-2 bg-white dark:bg-gray-900 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-110 transition-all shadow-sm">
                                <Github className="h-4 w-4"/>
                            </a>
                        </div>
                        <a href="mailto:hello@nextvibe.studio" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                            <Mail className="h-4 w-4"/>
                            hello@nextvibe.studio
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                        &copy; {currentYear} NextVibe. Tous droits réservés.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Mentions Légales</a>
                        <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">onfidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}