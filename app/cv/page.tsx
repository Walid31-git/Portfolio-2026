'use client'

import { ArrowLeft, Download } from 'lucide-react'
import Link from 'next/link'

export default function CV() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-card border border-border hover:bg-card/80 px-4 py-2 rounded-full shadow-sm transition-all duration-200 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={16} />
              Retour au portfolio
            </Link>
            <div className="inline-flex items-center gap-3 bg-card border border-border px-6 py-3 rounded-full shadow-sm">
              <div className="w-3 h-3 bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">CV - Walid Allal</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Curriculum Vitae</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Développeur Full Stack & Futur Chef de Projet Informatique
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
              <a
                href="/CV_ALTERNANCE2026.pdf"
                download="CV_ALTERNANCE2026.pdf"
                className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap"
              >
                <Download size={18} />
                Télécharger PDF
              </a>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="p-8">
            <div className="bg-muted/50 rounded-xl p-6 border border-border mb-6">
              <div className="flex items-center gap-3 mb-4">
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
                <iframe
                  src="/CV_ALTERNANCE2026.pdf"
                  className="w-full h-[600px] rounded-lg"
                  title="CV - Walid Allal"
                />
              </div>
            </div>

            {/* Alternative download link */}
            <div className="text-center text-muted-foreground text-sm">
              <p>
                Problème d'affichage ?{' '}
                <a
                  href="/CV_ALTERNANCE2026.pdf"
                  download="CV_ALTERNANCE2026.pdf"
                  className="text-primary hover:underline font-semibold"
                >
                  Téléchargez directement le PDF
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

