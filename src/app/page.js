import Link from "next/link";
import { ArrowRight, Code, Palette, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* hero section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right, #8080800a_1px, transparent_1px), linear-gradient(to_bottom, #8080800a_1px, transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-310px w-310px rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Créer l&apos;extraordinaire <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Avec NextVibe
            </span>
          </h1>
          <p className="text -xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-150">
            Nous transformons vos idées en expériences digitales immersives.
            Design moderne, performance inégalée, impact maximal.
          </p>
          <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <Link href="/contact"
            className="px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 flex items-center gap-2"
            >
              Démarrer Un projet <ArrowRight className="h-4 w-4"/>
            </Link>
            <Link href= "/services"
            className="px-8 py-3.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-foreground font-medium hover:border-primary/50 transition-all hover:-translate-y-0.5"
            >
              Nos Service
            </Link>
          </div>
        </div>
      </section>

      {/* services section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">Des solutions sur mesure pour votre croissance digitale</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Palette className="h-8 w-8 text-secondary"/>,
              title: "Design UI/UX",
              desc: "Interfaces captivantes et intuitives qui séduisent vos utilisateurs dès le premier regard.",
            },
            {
              icon: <Code className="h-8 w-8 text-primary"/>,
              title: "Développement Web",
              desc: "Sites web performants et réactifs, optimisés pour une expérience utilisateur fluide sur tous les appareils.",
            },
            {
              icon: <Rocket className="h-8 w-8 text-accent"/>,
              title: "Marketing Digital",
              desc: "Stratégies de marketing digital innovantes pour maximiser votre visibilité et atteindre vos objectifs commerciaux.",
            },
          ].map((service, index) => (
            <div key={index}
            className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="mb-4 p-3 bg-white dark:bg-black w-fit rounded-xl border border-gray-100 dark:border-gray-800 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* contact section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient to-secondary p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Prét a lancer Votre Projet ?</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Discutons de vos objectifs et créons ensemble la prochaine étape de votre réussite digitale.
            </p>
            <Link href="/contact"
            className="inline-block px-6 py-6 rounded-full bg-white text-primary font-bold hover:bg-gray-50 transition-all shadow-xl hover:scale-105"
            >
              Contactez-Nous
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
      </section>
    </div>
  );
}
