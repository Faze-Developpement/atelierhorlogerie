import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-ornament" aria-hidden="true">
        <span />
        <svg viewBox="0 0 32 32" width="28" height="28">
          <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" />
          <line x1="16" y1="4" x2="16" y2="10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="16" y1="22" x2="16" y2="28" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="4" y1="16" x2="10" y2="16" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="22" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="16" y1="16" x2="21" y2="13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <line x1="16" y1="16" x2="16" y2="10.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
        <span />
      </div>

      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-wordmark">Atelier Horlogerie</p>
          <p className="footer-tagline">Maître Horloger · Trouville-sur-Mer</p>
          <p className="footer-desc">
            Réparation, révision et vente de montres de luxe et de collection.
            Savoir-faire artisanal depuis des décennies au cœur de la Normandie.
          </p>
        </div>

        <div className="footer-nav">
          <h4>Navigation</h4>
          <Link to="/">Accueil</Link>
          <Link to="/services">Services</Link>
          <Link to="/atelier">L'Atelier</Link>
          <Link to="/boutique">Boutique</Link>
          <Link to="/contact">Rendez-vous</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <a href="tel:+33231883271">+33 (0)2 31 88 32 71</a>
          <a href="tel:+33660711515">+33 (0)6 60 71 15 15</a>
          <a href="mailto:atelier.horlogerie@wanadoo.fr">atelier.horlogerie@wanadoo.fr</a>
          <address>
            133 Rue Général de Gaulle<br />
            14360 Trouville-sur-Mer
          </address>
        </div>

        <div className="footer-hours">
          <h4>Horaires</h4>
          <p>Sur rendez-vous uniquement</p>
          <p>Contactez-nous par téléphone<br />ou par email pour convenir<br />d'un créneau.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Atelier Horlogerie · Tous droits réservés</span>
          <span>133 Rue Général de Gaulle, 14360 Trouville-sur-Mer</span>
        </div>
      </div>
    </footer>
  )
}
