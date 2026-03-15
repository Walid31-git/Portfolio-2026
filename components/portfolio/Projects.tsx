import Link from 'next/link'
import { ExternalLink, Github, MapPin, Car, LayoutDashboard } from 'lucide-react'

const projects = [
  {
    icon: MapPin,
    title: 'WherEat',
    subtitle: 'Application Mobile — Projet de fin de licence',
    description:
      'Application mobile développée pour le projet de fin d\'études. Elle intègre une carte interactive permettant de découvrir des restaurants à proximité, consulter leurs informations, les noter, et obtenir un itinéraire pour s\'y rendre. Un vrai projet de A à Z.',
    tags: ['Flutter', 'Dart', 'PHP', 'Google Maps API', 'MySQL'],
    github: null,
    demo: null,
    page: '/wherEat',
    accentColor: 'text-blue-400',
    badgeColor: 'bg-blue-400/10 border-blue-400/20 text-blue-400',
  },
  {
    icon: Car,
    title: 'AutoElite',
    subtitle: 'Site Web — Concessionnaire Automobile',
    description:
      'Plateforme web complète pour un concessionnaire automobile. Les utilisateurs peuvent parcourir le catalogue de véhicules, consulter les fiches techniques et prendre contact. Architecture robuste avec une API back-end Java.',
    tags: ['Spring Boot', 'Java', 'HTML', 'CSS', 'MySQL'],
    github: null,
    demo: null,
    accentColor: 'text-amber-400',
    badgeColor: 'bg-amber-400/10 border-amber-400/20 text-amber-400',
  },
  {
    icon: LayoutDashboard,
    title: 'SaaS Platform',
    subtitle: 'Application SaaS — TypeScript',
    description:
      'Plateforme SaaS entièrement développée en TypeScript. Projet personnel démontrant la maîtrise des architectures modernes, de la gestion multi-tenant, et des bonnes pratiques du développement full stack en TypeScript.',
    tags: ['TypeScript', 'Node.js', 'React', 'PostgreSQL'],
    github: null,
    demo: null,
    accentColor: 'text-primary',
    badgeColor: 'bg-primary/10 border-primary/20 text-primary',
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
            const Icon = project.icon
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
                    <Icon size={22} />
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
