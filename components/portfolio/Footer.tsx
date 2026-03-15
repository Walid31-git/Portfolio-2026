export default function Footer() {
  return (
    <footer className="border-t border-border py-8 bg-card/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} ALLAL Walid — Développeur Full Stack
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:ghoutiallal@gmail.com"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            ghoutiallal@gmail.com
          </a>
          <a
            href="https://github.com/Walid31-git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/walid-allal-87baa2332/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
