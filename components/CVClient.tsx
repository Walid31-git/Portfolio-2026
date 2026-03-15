'use client'

import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ea580c', // Orange primary color
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ea580c', // Orange primary color
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  contact: {
    fontSize: 10,
    color: '#666',
    marginBottom: 3,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ea580c', // Orange primary color
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 5,
  },
  experienceItem: {
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  jobSubtitle: {
    fontSize: 11,
    color: '#666',
    marginBottom: 2,
  },
  jobPeriod: {
    fontSize: 9,
    color: '#888',
    marginBottom: 5,
  },
  list: {
    marginLeft: 10,
  },
  listItem: {
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 3,
  },
})

// CV Document Component
const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Walid Allal</Text>
        <Text style={styles.title}>Développeur Full Stack</Text>
        <Text style={styles.contact}>Lyon, France | ghoutiallal@gmail.com | 06 99 60 92 23</Text>
        <Text style={styles.contact}>LinkedIn: walid-allal-87baa2332 | GitHub: Walid31-git</Text>
      </View>

      {/* Profil */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profil</Text>
        <Text style={styles.text}>
          Développeur Full Stack passionné avec une solide expérience en développement web et mobile.
          Spécialisé dans les technologies JavaScript/TypeScript, je maîtrise l'écosystème moderne du développement
          avec React, Next.js, Node.js et les bases de données. Mon parcours académique à l'IPI Lyon m'a permis
          d'acquérir une expertise technique approfondie, complétée par des expériences professionnelles enrichissantes.
          Je suis motivé par les défis techniques et l'innovation, avec un intérêt particulier pour l'automatisation
          des processus et l'optimisation des performances.
        </Text>
      </View>

      {/* Expérience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expérience</Text>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Développeur Full Stack & DataBases</Text>
          <Text style={styles.jobSubtitle}>OuiSof · Contrat en alternance</Text>
          <Text style={styles.jobPeriod}>sept. 2025 - aujourd'hui · 7 mois</Text>
          <Text style={styles.text}>Lyon, Auvergne-Rhône-Alpes, France · Hybride</Text>
          <Text style={styles.text}>
            Développement d'applications web complexes utilisant React, Next.js et Node.js.
            Conception et optimisation de bases de données avec PostgreSQL et MongoDB.
            Mise en place de solutions d'automatisation avec N8N pour améliorer l'efficacité opérationnelle.
            Collaboration en équipe avec méthodologies agiles (Scrum/Kanban).
          </Text>
          <Text style={styles.text}>Compétences: Kanban, Méthodes agiles</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Développeur Fullstack</Text>
          <Text style={styles.jobSubtitle}>OuiSof · Stage</Text>
          <Text style={styles.jobPeriod}>mars 2025 - juin 2025 · 4 mois</Text>
          <Text style={styles.text}>Lyon, Auvergne-Rhône-Alpes, France · Hybride</Text>
          <Text style={styles.text}>
            Développement d'interfaces utilisateur modernes avec React et TypeScript.
            Intégration d'APIs REST et GraphQL pour la communication client-serveur.
            Optimisation des performances et mise en place de tests automatisés.
            Travail sur des projets de migration technologique et d'amélioration continue.
          </Text>
          <Text style={styles.text}>Compétences: Oracle Database, Kanban</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>Développeur Web Full Stack</Text>
          <Text style={styles.jobSubtitle}>AdexCloud · Stage</Text>
          <Text style={styles.jobPeriod}>juin 2024 - août 2024 · 3 mois</Text>
          <Text style={styles.text}>Lyon, Auvergne-Rhône-Alpes, France · Présentiel</Text>
          <Text style={styles.text}>
            Conception et développement d'applications web responsive avec React et Node.js.
            Mise en place d'architectures serverless et optimisation des performances cloud.
            Développement d'APIs sécurisées et gestion d'authentification utilisateur.
            Participation à l'amélioration de l'expérience utilisateur et de l'accessibilité.
          </Text>
          <Text style={styles.text}>Compétences: React, Node.js, API REST, Cloud Computing</Text>
        </View>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      {/* Formation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formation</Text>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>3ème année CDEV — IPI Lyon</Text>
          <Text style={styles.jobSubtitle}>Institut Polytechnique de Lyon</Text>
          <Text style={styles.jobPeriod}>2023 - 2026</Text>
          <Text style={styles.text}>Lyon, France</Text>
          <Text style={styles.text}>
            Formation intensive en développement logiciel avec spécialisation en cybersécurité.
            Cours approfondis en algorithmique, structures de données, et architectures système.
            Projets pratiques en développement web, mobile et embarqué.
            Stage de fin d'études en entreprise pour valider les compétences acquises.
          </Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>2ème année CDEV — IPI Lyon</Text>
          <Text style={styles.jobSubtitle}>Institut Polytechnique de Lyon</Text>
          <Text style={styles.jobPeriod}>2022 - 2023</Text>
          <Text style={styles.text}>Lyon, France</Text>
          <Text style={styles.text}>
            Consolidation des bases en programmation et découverte des technologies web modernes.
            Apprentissage des frameworks JavaScript et des bonnes pratiques de développement.
            Projets collaboratifs et initiation aux méthodologies de gestion de projet.
          </Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>1ère année CDEV — IPI Lyon</Text>
          <Text style={styles.jobSubtitle}>Institut Polytechnique de Lyon</Text>
          <Text style={styles.jobPeriod}>2021 - 2022</Text>
          <Text style={styles.text}>Lyon, France</Text>
          <Text style={styles.text}>
            Découverte de la programmation avec focus sur les langages fondamentaux.
            Introduction aux concepts de l'informatique et aux bases de données.
            Développement de la logique algorithmique et des compétences en résolution de problèmes.
          </Text>
        </View>
      </View>

      {/* Compétences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compétences</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Langages: JavaScript, TypeScript, Python, Java, C++, PHP</Text>
          <Text style={styles.listItem}>• Frontend: React, Next.js, HTML5, CSS3, Tailwind CSS</Text>
          <Text style={styles.listItem}>• Backend: Node.js, Express.js, NestJS, PHP</Text>
          <Text style={styles.listItem}>• Bases de données: PostgreSQL, MongoDB, MySQL, Oracle</Text>
          <Text style={styles.listItem}>• Outils: Git, Docker, AWS, Vercel, N8N</Text>
          <Text style={styles.listItem}>• Méthodologies: Agile, Scrum, Kanban</Text>
        </View>
      </View>

      {/* Centres d'intérêt */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Centres d'intérêt</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Sports : Natation, Volley-ball en club</Text>
          <Text style={styles.listItem}>• Voyages : Découverte de nouvelles cultures et pratique des langues</Text>
          <Text style={styles.listItem}>• Tech : Veille technologique et participation à des projets Open Source</Text>
          <Text style={styles.listItem}>• Loisirs : Lecture (Science-fiction) et Cinéma</Text>
        </View>
      </View>
    </Page>
  </Document>
)

export default function CVClient() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-card border border-border hover:bg-card/80 px-4 py-2 rounded-full shadow-sm transition-all duration-200 text-muted-foreground hover:text-foreground"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour au portfolio
            </a>
            <div className="inline-flex items-center gap-3 bg-card border border-border px-6 py-3 rounded-full shadow-sm">
              <div className="w-3 h-3 bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">CV - Walid Allal</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Curriculum Vitae
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Développeur Full Stack passionné avec une expertise en technologies modernes
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
          {/* Download Section */}
          <div className="bg-gradient-to-r from-primary to-primary/80 px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-primary-foreground">
                <h2 className="text-xl font-semibold mb-1">Télécharger mon CV</h2>
                <p className="text-primary-foreground/80 text-sm">Version PDF complète et professionnelle</p>
              </div>
              <PDFDownloadLink
                document={<CVDocument />}
                fileName="CV_Walid_Allal.pdf"
                className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                {({ loading }) => (
                  <>
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        Génération...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Télécharger PDF
                      </>
                    )}
                  </>
                )}
              </PDFDownloadLink>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="p-8">
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Aperçu du CV</h3>
                  <p className="text-sm text-muted-foreground">Visualisez votre CV avant de le télécharger</p>
                </div>
              </div>

              <div className="bg-card rounded-lg shadow-inner border border-border overflow-hidden">
                <PDFViewer
                  width="100%"
                  height="600"
                  style={{
                    border: 'none',
                    borderRadius: '8px'
                  }}
                >
                  <CVDocument />
                </PDFViewer>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            CV généré automatiquement • Dernière mise à jour: Mars 2026
          </p>
        </div>
      </div>
    </div>
  )
}