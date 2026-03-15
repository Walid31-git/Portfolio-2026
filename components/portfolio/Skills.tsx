const skillGroups = [
  {
    category: 'Langages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'C++', 'Dart', 'Kotlin'],
  },
  {
    category: 'Front-end',
    skills: ['HTML', 'CSS', 'Angular', 'Flutter', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Back-end',
    skills: ['PHP', 'Spring Boot', 'PL/SQL', 'Oracle APEX', 'Node.js', 'Express'],
  },
  {
    category: 'Bases de données',
    skills: ['MySQL', 'Oracle', 'SQL Developer', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Outils & Plateformes',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman', 'Figma'],
  },
  {
    category: 'Design & Multimédia',
    skills: ['Adobe Photoshop', 'Illustrator', 'Premiere Pro', 'Figma', 'Blender'],
  },
  {
    category: 'Marketing',
    skills: ['Meta Ads', 'Marketing Digital', 'Google Ads', 'SEO', 'Analytics'],
  },
  {
    category: 'Automatisation & Workflow',
    skills: ['N8N', 'Zapier', 'Make.com', 'IFTTT'],
  },
  {
    category: 'Mobile & Développement d\'Apps',
    skills: ['Flutter', 'React Native', 'Ionic'],
  },
]

export default function Skills() {
  return (
    <section id="competences" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Compétences
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Technologies maîtrisées
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Un ensemble de technologies couvrant l'ensemble de la stack — du front-end au
            back-end, en passant par les bases de données et le design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-200"
            >
              <h3 className="text-foreground font-semibold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary border border-border text-foreground text-sm px-3 py-1.5 rounded-lg font-medium hover:border-primary/40 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
