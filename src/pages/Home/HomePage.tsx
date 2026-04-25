import { Link } from "react-router-dom"
import "./Home.css"

const BRANDS = [
  "Rolex", "Patek Philippe", "Audemars Piguet", "Vacheron Constantin",
  "Jaeger-LeCoultre", "Breitling", "IWC", "Omega", "Cartier",
  "Blancpain", "Chopard", "TAG Heuer", "Longines", "Tudor",
  "Hermès", "Seiko",
]

export default function HomePage() {
  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-bg-circle hero-bg-circle-1" />
          <div className="hero-bg-circle hero-bg-circle-2" />
        </div>

        <div className="container hero-inner">
          <p className="eyebrow">Maître Horloger — Trouville-sur-Mer</p>

          <div className="hero-clock" aria-hidden="true">
            <svg viewBox="0 0 120 120" width="120" height="120">
              <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="0.6" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
              {/* Indices heures */}
              {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
                const angle = (i * 30 - 90) * Math.PI / 180
                const isMain = i % 3 === 0
                const r1 = isMain ? 44 : 46
                const r2 = isMain ? 50 : 48
                return (
                  <line
                    key={i}
                    x1={60 + r1 * Math.cos(angle)}
                    y1={60 + r1 * Math.sin(angle)}
                    x2={60 + r2 * Math.cos(angle)}
                    y2={60 + r2 * Math.sin(angle)}
                    stroke="currentColor"
                    strokeWidth={isMain ? 1.2 : 0.6}
                  />
                )
              })}
              {/* Aiguilles */}
              <line x1="60" y1="60" x2="60" y2="26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="60" y1="60" x2="78" y2="52" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              <circle cx="60" cy="60" r="2" fill="currentColor" />
            </svg>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">L'Art de la</span>
            <span className="hero-title-line hero-title-accent">Précision</span>
          </h1>

          <p className="hero-subtitle">
            Réparation, révision et vente de montres de prestige.<br />
            Un savoir-faire artisanal au service des plus grandes maisons.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Prendre rendez-vous</Link>
            <Link to="/services" className="btn btn-ghost">Nos prestations</Link>
          </div>

          <div className="hero-metrics">
            <div className="metric">
              <span className="metric-num">16+</span>
              <span className="metric-label">Marques agréées</span>
            </div>
            <div className="metric-sep" aria-hidden="true" />
            <div className="metric">
              <span className="metric-num">3</span>
              <span className="metric-label">Expertises</span>
            </div>
            <div className="metric-sep" aria-hidden="true" />
            <div className="metric">
              <span className="metric-num">∞</span>
              <span className="metric-label">Passion</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <span />
          <p>Découvrir</p>
        </div>
      </section>

      {/* ── SERVICES TEASER ── */}
      <section className="section services-teaser">
        <div className="container">
          <div className="section-header section-header-centered">
            <p className="eyebrow">Savoir-faire</p>
            <h2 className="section-title">Nos Prestations</h2>
            <div className="divider" />
          </div>

          <div className="services-grid">
            <Link to="/services" className="service-card">
              <div className="service-roman">I</div>
              <h3>Réparation & Révision</h3>
              <p>
                Remise en état complète de vos garde-temps : nettoyage,
                huilage, remplacement de pièces et réglage de précision.
              </p>
              <span className="service-link">En savoir plus →</span>
            </Link>

            <Link to="/services" className="service-card service-card-accent">
              <div className="service-roman">II</div>
              <h3>Montres de Luxe</h3>
              <p>
                Expertise sur les grandes maisons : Rolex, Patek Philippe,
                Audemars Piguet, Vacheron Constantin et bien d'autres.
              </p>
              <span className="service-link">En savoir plus →</span>
            </Link>

            <Link to="/boutique" className="service-card">
              <div className="service-roman">III</div>
              <h3>Vente & Occasions</h3>
              <p>
                Sélection de montres neuves et d'occasion vérifiées,
                disponibles en boutique sur place à Trouville-sur-Mer.
              </p>
              <span className="service-link">Voir la boutique →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARQUES ── */}
      <section className="section brands-section">
        <div className="brands-inner">
          <div className="container">
            <div className="section-header section-header-centered">
              <p className="eyebrow">Nos Agréments</p>
              <h2 className="section-title">Marques Traitées</h2>
              <div className="divider" />
              <p className="section-lead" style={{ textAlign: "center", margin: "0 auto" }}>
                Nous intervenons sur toutes les grandes manufactures horlogères suisses et internationales.
              </p>
            </div>
          </div>

          <div className="brands-ticker" aria-label="Marques de montres">
            <div className="brands-track">
              {[...BRANDS, ...BRANDS].map((brand, i) => (
                <span key={i} className="brand-item">
                  <span className="brand-dot" aria-hidden="true">◆</span>
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="container brands-grid-container">
            <div className="brands-grid">
              {BRANDS.map(brand => (
                <div key={brand} className="brand-badge">{brand}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA CONTACT ── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-block">
            <div className="cta-deco" aria-hidden="true">
              <svg viewBox="0 0 80 80" width="80" height="80">
                <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="0.6" />
                <circle cx="40" cy="40" r="2" fill="currentColor" />
                <line x1="40" y1="40" x2="40" y2="16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <line x1="40" y1="40" x2="56" y2="32" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              </svg>
            </div>
            <p className="eyebrow">Atelier & Boutique</p>
            <h2 className="section-title">Venez nous rendre visite</h2>
            <p className="cta-address">
              133 Rue Général de Gaulle — 14360 Trouville-sur-Mer<br />
              <a href="tel:+33231883271">+33 (0)2 31 88 32 71</a> &nbsp;·&nbsp;
              <a href="tel:+33660711515">+33 (0)6 60 71 15 15</a>
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-outline">Prendre rendez-vous</Link>
              <Link to="/atelier" className="btn btn-ghost">Découvrir l'atelier</Link>
            </div>
            <div className="cta-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.3!2d0.0757!3d49.3628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0aabc00000001%3A0x1!2s133+Rue+G%C3%A9n%C3%A9ral+de+Gaulle%2C+14360+Trouville-sur-Mer!5e0!3m2!1sfr!2sfr!4v1700000000000"
                loading="lazy"
                title="Atelier Horlogerie — Trouville-sur-Mer"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
