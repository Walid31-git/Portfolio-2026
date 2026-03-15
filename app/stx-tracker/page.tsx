import Link from 'next/link'
import Image from 'next/image'

export default function StxTrackerPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">STX Tracker</h1>
          <p className="text-sm font-medium text-cyan-300/90">SaaS Analytics pour canaux Telegram</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            STX Tracker est un outil SaaS pleinement opérationnel, déjà utilisé par des
            utilisateurs réels pour suivre et optimiser la performance de leurs canaux Telegram.
            Il permet de transformer des données brutes en indicateurs métier clairs et actionnables.
          </p>
        </header>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-cyan-300">Ce que fait STX Tracker</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Tracking des membres entrants via des liens d'invitation personnalisés</li>
              <li>Calcul du taux de conversion entre canaux publics et privés</li>
              <li>Identification des départs et des points de friction</li>
              <li>Dashboard en temps réel avec graphiques et alertes</li>
            </ul>

            <p className="text-muted-foreground">
              Le produit est vendu à des utilisateurs et peut être configuré pour votre propre bot Telegram
              (token API), avec gestion dynamique des IDs de canaux sources et destinations.
            </p>

            <div className="rounded-2xl bg-slate-950/40 border border-cyan-500/20 p-6">
              <h3 className="text-lg font-semibold text-cyan-300">Technologies clés</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['TypeScript', 'Next.js', 'Supabase', 'Telegram API', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 bg-slate-900/70 px-3 py-1 rounded-full text-xs font-medium text-muted-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
              <div className="px-6 py-5 bg-slate-950/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">Voir le code source</h3>
                  <p className="text-sm text-muted-foreground">
                    Le dépôt public contient l'intégralité du code si vous souhaitez l'étudier ou le forker.
                  </p>
                </div>
                <a
                  href="https://lnkd.in/dR64b8UB"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition"
                >
                  Voir le dépôt GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-sm text-muted-foreground">
          <p>
            STX Tracker est déjà commercialisé auprès d'utilisateurs qui l'utilisent au quotidien.
            Je peux le déployer, le configurer et le personnaliser pour répondre à vos besoins.
          </p>
        </footer>

        <section className="mt-12 space-y-10">
          <h2 className="text-2xl font-semibold text-cyan-300">Aperçu visuel</h2>

          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
              <div className="relative h-96">
                <Image
                  src="/Dashboard STX.jpeg"
                  alt="Dashboard STX"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
              <div className="relative h-96">
                <Image
                  src="/Configuration STX.jpeg"
                  alt="Configuration STX"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
              <div className="relative h-96">
                <Image
                  src="/Lien STX.jpeg"
                  alt="Lien de tracking STX"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
