'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ghoutiallal@gmail.com',
    href: 'mailto:ghoutiallal@gmail.com',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '06 99 60 92 23',
    href: 'tel:+33699609223',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Lyon, France',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'walid-allal-87baa2332',
    href: 'https://www.linkedin.com/in/walid-allal-87baa2332/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Walid31-git',
    href: 'https://github.com/Walid31-git',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Contact
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Travaillons ensemble
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Une opportunité, un projet ou simplement envie d'échanger ? N'hésitez pas à me
            contacter, je serai ravi de vous répondre.
          </p>
        </div>

        <div className="space-y-8">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-foreground font-semibold mb-6">Coordonnées</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  const inner = (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">{item.label}</p>
                        <p className="text-foreground text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block hover:bg-secondary/50 rounded-lg p-2 -m-2 transition-colors"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label} className="p-2 -m-2">
                      {inner}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-foreground font-semibold mb-1">Mon CV</h3>
                <p className="text-muted-foreground text-sm">Téléchargez mon CV complet en PDF</p>
              </div>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex-shrink-0"
              >
                <Download size={14} />
                Télécharger
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
