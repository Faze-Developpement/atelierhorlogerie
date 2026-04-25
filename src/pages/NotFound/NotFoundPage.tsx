import { Link } from "react-router-dom"
import "./NotFound.css"

export default function NotFoundPage() {
  return (
    <main className="notfound-page">
      <div className="notfound-inner">
        <div className="notfound-clock" aria-hidden="true">
          <svg viewBox="0 0 120 120" width="120" height="120">
            <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="0.7" />
            <circle cx="60" cy="60" r="2.5" fill="currentColor" />
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i * 30 - 90) * Math.PI / 180
              return (
                <line
                  key={i}
                  x1={60 + 44 * Math.cos(angle)} y1={60 + 44 * Math.sin(angle)}
                  x2={60 + 50 * Math.cos(angle)} y2={60 + 50 * Math.sin(angle)}
                  stroke="currentColor" strokeWidth="1.2"
                />
              )
            })}
            <line x1="60" y1="60" x2="60" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="60" y1="60" x2="82" y2="48" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>

        <p className="notfound-code">404</p>
        <h1 className="notfound-title">Page introuvable</h1>
        <div className="ornament notfound-ornament">— Temps perdu —</div>
        <p className="notfound-text">
          Cette page ne semble pas exister, comme une montre sans aiguilles.
          Retournez à l'accueil pour retrouver votre chemin.
        </p>
        <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
      </div>
    </main>
  )
}
