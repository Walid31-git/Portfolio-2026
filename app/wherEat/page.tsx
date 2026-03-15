import Link from 'next/link'

export default function WherEatPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          ← Retour à l'accueil
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">WherEat</h1>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            WherEat est une application mobile développée dans le cadre de mon projet de
            fin d'études. Elle permet de découvrir des restaurants autour de soi, consulter leurs
            informations (horaires, avis, photos) et générer un itinéraire pour s'y rendre.
          </p>
        </header>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Fonctionnalités</h2>
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
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Vidéo du projet</h2>
            <div className="rounded-xl overflow-hidden border border-border">
              <video
                controls
                src="/Video_pfe_1.mp4"
                className="w-full h-auto bg-black"
              >
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
