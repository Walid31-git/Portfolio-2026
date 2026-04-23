import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, Car, LayoutDashboard } from 'lucide-react'

const projects = [
  {
    logo: '/Dashboard STX.jpeg',
    title: 'STX Tracker',
    subtitle: 'SaaS — Chef de Projet & Développeur Lead',
    description:
      'SaaS d\'Intelligence Marketing transformant les données Telegram en indicateurs business (KPI). En tant que Chef de Projet & Développeur Lead, j\'ai piloté une équipe de 2 mois pour construire cette plateforme 100% fonctionnelle. Architecture complète avec monitoring, optimisation des canaux et tunnel de vente mesurable.',
    tags: ['TypeScript', 'Next.js', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/Walid31-git',
    demo: null,
    page: '/stx-tracker',
    accentColor: 'text-cyan-400',
    badgeColor: 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400',
  },
  {
    logo: '/WherEat Logo.jpg',
    title: 'WherEat',
    subtitle: 'Application Mobile — Projet de fin de licence',
    description:
      'Développement complet d\'une application Android/iOS via Flutter en utilisant une méthodologie Agile. Architecture Full Stack avec backend fonctionnel et rédaction technique sous LaTeX. Intégration d\'une carte interactive, système de notation et itinéraire vers les restaurants.',
    tags: ['Flutter', 'Dart', 'PHP', 'Google Maps API', 'MySQL'],
    github: null,
    demo: null,
    page: '/wherEat',
    accentColor: 'text-orange-400',
    badgeColor: 'bg-orange-400/10 border-orange-400/20 text-orange-400',
  },
  {
    icon: Car,
    title: 'Carocar',
    subtitle: 'Site Web — Concessionnaire Automobile',
    description:
      'Site internet développé pour un concessionnaire automobile. Les utilisateurs peuvent parcourir le catalogue, consulter les fiches détaillées de chaque véhicule et envoyer des demandes de contact. Une architecture solide avec une API back-end Java.',
    tags: ['Spring Boot', 'Java', 'HTML', 'CSS', 'MySQL'],
    github: null,
    demo: null,
    page: '/carocar',
    accentColor: 'text-emerald-400',
    badgeColor: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400',
  },
]

export default function Projects() {
  return (
    <section id="projets" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Projets
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Ce que j'ai réalisé
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Des projets concrets développés durant ma formation et en autonomie, reflétant
            mes compétences en développement full stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => {
            return (
              <article
                key={project.title}
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${project.badgeColor} border`}
                  >
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={28}
                        height={28}
                        className="rounded-lg"
                      />
                    ) : (
                      <div className="text-foreground">
                        <Car size={22} />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub - ${project.title}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Demo - ${project.title}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-foreground font-bold text-lg mb-1">{project.title}</h3>
                  <p className={`text-xs font-medium mb-3 ${project.accentColor}`}>
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-muted-foreground text-xs px-2.5 py-1 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.page && (
                  <Link
                    href={project.page}
                    className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Découvrir
                  </Link>
                )}
              </article>
            )
          })}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/Walid31-git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200"
          >
            <Github size={16} />
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
