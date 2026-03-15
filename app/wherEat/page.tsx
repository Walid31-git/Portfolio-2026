import Image from 'next/image'
import Link from 'next/link'

export default function WherEatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-12 lg:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          ← Retour à l'accueil
        </Link>

        <header className="mb-12 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg shadow-orange-500/20">
              <Image
                src="/WherEat Logo.jpg"
                alt="WherEat logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">WherEat</h1>
              <p className="text-sm font-medium text-orange-300/90">Application mobile — projet de fin d'études</p>
            </div>
          </div>

          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            WherEat est une application mobile permettant de découvrir des restaurants autour de soi,
            consulter leurs informations (horaires, avis, photos) et générer un itinéraire pour s'y rendre.
            Elle met l'accent sur la simplicité d'utilisation et la navigation intuitive.
          </p>
        </header>

        <section className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-orange-300">Fonctionnalités</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Carte interactive avec clusters de restaurants</li>
              <li>Fiches détaillées (notes, horaires, contact, photos)</li>
              <li>Navigation & itinéraire vers le restaurant choisi</li>
              <li>Système de notation et de favoris</li>
            </ul>

            <p className="text-muted-foreground">
              Ce projet a été réalisé avec Flutter et Dart, en utilisant l'API Google Maps pour
              l'affichage cartographique et la navigation.
            </p>

            <div className="rounded-2xl bg-slate-950/40 border border-orange-500/20 p-6">
              <h3 className="text-lg font-semibold text-orange-300">Technologies</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Flutter', 'Dart', 'Google Maps API', 'Firebase', 'REST API'].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 bg-slate-900/70 px-3 py-1 rounded-full text-xs font-medium text-muted-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-orange-300" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-orange-300">Mémoire (PDF)</h2>
              <div className="rounded-2xl overflow-hidden border border-orange-500/20 shadow-lg shadow-orange-500/10">
                <div className="px-6 py-5 bg-slate-950/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Consultez le rapport directement dans le navigateur ou téléchargez la version complète.
                    </p>
                  </div>
                  <a
                    href="/Memoire_final.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-orange-400 transition"
                  >
                    Télécharger le mémoire
                  </a>
                </div>
                <div className="h-[40rem] sm:h-[50rem]">
                  <object data="/Memoire_final.pdf" type="application/pdf" width="100%" height="100%">
                    <p className="p-6 text-sm text-muted-foreground">
                      Le navigateur ne peut pas afficher le PDF. <a href="/Memoire_final.pdf" className="text-orange-300 underline" target="_blank" rel="noreferrer">Ouvrir le PDF</a>
                    </p>
                  </object>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-orange-300">Vidéo du projet</h2>
              <div className="rounded-2xl overflow-hidden border border-orange-500/20 shadow-lg shadow-orange-500/10">
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-auto bg-black"
                >
                  <source src="/Video_pfe_1.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Si la lecture ne démarre pas, cliquez <a href="/Video_pfe_1.mp4" className="text-orange-300 underline" target="_blank" rel="noreferrer">ici pour ouvrir la vidéo</a> dans un nouvel onglet.
              </p>

              <p className="text-sm text-muted-foreground">
                La vidéo présente le parcours utilisateur, les fonctionnalités clés et les choix
                techniques réalisés pendant le développement.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
