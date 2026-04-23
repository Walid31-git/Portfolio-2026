import { GraduationCap, Briefcase, Calendar } from 'lucide-react'

const timeline = [
  {
    icon: Briefcase,
    period: '2024 – Présent',
    title: '3ème année CDEV — IPI Lyon',
    subtitle: 'Alternance chez OUISOF',
    description:
      'Développement et optimisation d\'applications critiques sous Oracle APEX et PL/SQL. Maintenance corrective et évolutive d\'architectures complexes et intégration de fonctionnalités stratégiques. Gestion du support utilisateur avancé et résolution d\'anomalies sensibles.',
    highlight: true,
  },
  {
    icon: GraduationCap,
    period: '2023 – 2024',
    title: 'Bachelor 2 BDEV — IPI Lyon',
    subtitle: 'Développement web et logiciel',
    description:
      'Consolidation des compétences en développement full stack et approfondissement des technologies web modernes. Stage de fin d\'études réalisé.',
    highlight: false,
  },
  {
    icon: GraduationCap,
    period: 'Obtenu Mai 2024',
    title: 'Licence Informatique',
    subtitle: "Université des Sciences et de la Technologie d'Oran",
    description:
      'Spécialité Systèmes informatiques, filière Informatique. Solide base en algorithmique, systèmes et réseaux. Stage de fin d\'études de 6 mois effectué chez AdexCloud.',
    highlight: false,
  },
]

export default function About() {
  return (
    <section id="a-propos" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Text */}
          <div className="flex-1">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
              À propos
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
              Qui suis-je ?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Je suis <span className="text-foreground font-semibold">Walid Allal</span>,
                développeur Full Stack & futur Chef de Projet Informatique. Actuellement en 3ème année de Bachelor à l'IPI Lyon et en alternance chez{' '}
                <span className="text-foreground font-semibold">OUISOF</span>, je me prépare à un
                Master en Chefferie de Projet pour la rentrée 2026.
              </p>
              <p>
                Je combine rigueur académique, expertise technique et leadership de projet.
                Mon parcours mêle une formation universitaire algérienne solide et une
                spécialisation française en développement moderne, me permettant de piloter
                des projets complexes avec une vision globale et pragmatique.
              </p>
              <p>
                J'accorde une grande importance au{' '}
                <span className="text-foreground font-semibold">code propre</span>,
                à l'autonomie, à l'adaptabilité et au leadership d'équipe. En quête de
                nouvelles bonnes pratiques en gestion de projet et développement logiciel.
              </p>
            </div>

            {/* Traits */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Esprit d\'équipe', 'Autonomie', 'Rigueur', 'Code propre', 'Adaptabilité'].map(
                (trait) => (
                  <span
                    key={trait}
                    className="bg-primary/10 border border-primary/20 text-primary text-sm px-4 py-1.5 rounded-full font-medium"
                  >
                    {trait}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="flex-1">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
              Parcours
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-8 text-balance">
              Formation & Expérience
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

              <div className="space-y-8">
                {timeline.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="relative flex gap-6 pl-14">
                      {/* Icon circle */}
                      <div
                        className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border ${
                          item.highlight
                            ? 'bg-primary border-primary text-primary-foreground'
                            : 'bg-secondary border-border text-muted-foreground'
                        }`}
                      >
                        <Icon size={16} />
                      </div>

                      <div className="bg-card border border-border rounded-xl p-5 flex-1">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                          <Calendar size={12} />
                          <span>{item.period}</span>
                        </div>
                        <h3 className="text-foreground font-semibold text-base mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-primary text-sm font-medium mb-2">{item.subtitle}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
