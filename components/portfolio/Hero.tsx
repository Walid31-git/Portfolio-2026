import { MapPin, ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(0.95 0.008 80) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.95 0.008 80) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Orange glow */}
      <div
        className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'oklch(0.63 0.2 42)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Disponible en alternance · Lyon
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-none mb-6">
              <span className="text-muted-foreground text-3xl md:text-4xl font-medium block mb-2">
                Bonjour, je suis
              </span>
              <span className="text-foreground">ALLAL </span>
              <span className="text-primary">Walid</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
              Développeur{' '}
              <span className="text-foreground font-semibold">Full Stack</span>
            </p>

            <p className="text-muted-foreground leading-relaxed max-w-xl mb-4 text-balance">
              3ème année CDEV à l'IPI Lyon, en alternance chez{' '}
              <span className="text-foreground font-semibold">OUISOF</span>.
              Passionné par le développement web moderne, le code propre et les
              bonnes pratiques.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-10 justify-center lg:justify-start">
              <MapPin size={14} className="text-primary" />
              <span>Lyon, France</span>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Walid31-git"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/walid-allal-87baa2332/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ghoutiallal@gmail.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6">
            <div className="relative">
              <div className="p-3 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl shadow-xl">
                <div className="w-64 h-64 rounded-2xl bg-card border border-border overflow-hidden shadow-lg">
                  <Image
                    src="/AllalWalid.jpeg"
                    alt="Photo de Walid Allal"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
                Full Stack
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <a
            href="#a-propos"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Défiler vers le bas"
          >
            <span className="text-xs uppercase tracking-widest">Découvrir</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
