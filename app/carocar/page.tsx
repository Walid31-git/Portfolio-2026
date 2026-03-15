import Link from 'next/link'

export default function CarocarPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-12 lg:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          ← Retour à l'accueil
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Carocar</h1>
          <p className="text-sm font-medium text-emerald-300/90">Site Web — Concessionnaire Automobile</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Carocar est une plateforme web conçue pour un concessionnaire automobile, permettant de
            parcourir le catalogue de véhicules, consulter des fiches techniques détaillées, et
            contacter l'équipe commerciale pour toute demande ou essai.
          </p>
        </header>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-emerald-300">Fonctionnalités</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Catalogue de véhicules avec filtres (marque, prix, type, etc.)</li>
              <li>Pages de détails avec fiche technique et galerie de photos</li>
              <li>Formulaire de contact / demande de devis intégré</li>
              <li>Back-office (API Java) pour gérer le stock de véhicules</li>
            </ul>

            <p className="text-muted-foreground">
              Projet réalisé avec Spring Boot côté serveur et une interface moderne en HTML/CSS.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-300">Rapport (PDF)</h2>
            <div className="rounded-2xl overflow-hidden border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
              <div className="px-6 py-5 bg-slate-950/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Consultez le rapport technique complet ou téléchargez-le pour une lecture hors ligne.
                  </p>
                </div>
                <a
                  href="/RAPPORT_B2_CAROCAR.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
                >
                  Télécharger le rapport
                </a>
              </div>
              <div className="h-[40rem] sm:h-[50rem]">
                <object data="/RAPPORT_B2_CAROCAR.pdf" type="application/pdf" width="100%" height="100%">
                  <p className="p-6 text-sm text-muted-foreground">
                    Le navigateur ne peut pas afficher le PDF. <a href="/RAPPORT_B2_CAROCAR.pdf" className="text-emerald-300 underline" target="_blank" rel="noreferrer">Ouvrir le PDF</a>
                  </p>
                </object>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
