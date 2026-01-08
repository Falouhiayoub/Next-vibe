import { Target, Users, Zap, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px), linear-gradient(to_bottom,#8080800a_1px,transaprent_1px)] bg-[size:14px_24px]"></div>
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-8 animmate-in slide-in-from-bottom-4 fade-in duration-1000">
                        Notre Mission
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150">
                        Chez NextVibe, nous croyons que le digital est le moteur du changement. Notre passion est de créer des expériences web qui ne sont pas seulement fonctionnelles, mais mémorables.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-foreground">Notre Histoire</h2>
                        <p className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                            Fondé par une équipe de passionnés du web, NextVibe est né d&apos;une ambition simple : redéfinir les standards du web moderne.
                        </p>
                        <p>
                            Nous avons commencé comme un petit collectif de designers et développeurs, unis par la volonté de repousser les limites techniques et créatives. Aujourd&apos;hui, nous accompagnons des startups ambitieuses et des entreprises établies dans leur transformation digitale.
                        </p>
                        <p>
                            Chaque projet est pour nous une nouvelle aventure, une opportunité d&apos;innover et de délivrer une qualité exceptionnelle.
                        </p>
                    </div>
                    <div className="pt-6 grid grid-cols-3 gap-8 text-center border-t border-gray-100 dark:border-gray-800">
                        <div>
                            <div className="text-3xl font-bold text-primary">50+</div>
                            <div className="text-sm text-gray-500">Projets Livrés</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary">30+</div>
                            <div className="text-sm text-gray-500">Experts</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary">10+</div>
                            <div className="text-sm text-gray-500">Satisfaction</div>
                        </div>
                    </div>
                </div>

                <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-balck/50 to-transparent"></div>
                    <div className="text-center p-8 relative z-10">
                        <Users className="h-24 w-24 text-white/20 mx-auto mb-4"/>
                            <div className="text-2xl font-bold text-white/50">L&apos;Equipe NextVibe</div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">Nous Valeurs</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all">
                            <div className="p-3 bg-primary/10 w-fit rounded-xl mb-6">
                                <Zap className="h-6 w-6 text-primary"/>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Innovation</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Nous restons à la pointe de la technologie pour vous offrir des solutions pérennes et performantes.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all">
                            <div className="p-3 bg-primary/10 w-fit rounded-xl mb-6">
                                <Target className="h-6 w-6 text-secondary"/>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Exellence</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Chaque pixel compte. Nous ne nous contentons pas de bien, nous visons le parfait.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all">
                            <div className="p-3 bg-primary/10 w-fit rounded-xl mb-6">
                                <Heart className="h-6 w-6 text-accent"/>
                            </div>
                            <h3 className="text-xl font-bold mb-3">passion</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Nous aimons ce que nous faisons, et cela se ressent dans la qualité de notre travail et nos relations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-6">Envie de rejoindre l&apos;aventure ?</h2>
                <Link href="/contact" className="text-primary hover:text-primary/80 font-medium text-lg flex items-center justify-center gap-2">
                    Contactez-Nous <Zap className="h-5 w-5" />
                </Link>
            </section>
        </div>
    )
}