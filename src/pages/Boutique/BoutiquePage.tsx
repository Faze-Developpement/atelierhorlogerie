import { Link } from "react-router-dom"
import "./Boutique.css"

const CATEGORIES = [
  {
    titre: "Montres d'Occasion",
    tag: "Occasion",
    desc: "Pièces sélectionnées, révisées et authentifiées par notre maître horloger. Chaque montre est livrée avec son historique et les documents disponibles.",
    details: ["Vérifiées & révisées", "Authentifiées", "Avec documents disponibles"],
  },
  {
    titre: "Articles Neufs",
    tag: "Neuf",
    desc: "Sélection d'articles neufs disponibles en boutique : montres, bracelets métal et cuir, piles, accessoires et pièces détachées.",
    details: ["Garantie fabricant", "Facture fournie", "Conseil personnalisé"],
  },
  {
    titre: "Pièces & Accessoires",
    tag: "Accessoires",
    desc: "Bracelets, couronnes, verres, boîtiers et mouvements. Si vous cherchez une pièce spécifique, contactez-nous — nous la trouverons.",
    details: ["Pièces d'origine", "Commande sur mesure", "Délais variables"],
  },
]

export default function BoutiquePage() {
  return (
    <main className="boutique-page">

      <section className="page-hero section-sm">
        <div className="container">
          <p className="eyebrow">Disponible sur place — Trouville-sur-Mer</p>
          <h1 className="section-title">La Boutique</h1>
          <div className="ornament">— Vente en atelier uniquement —</div>
          <p className="section-lead">
            Notre sélection de montres et accessoires est disponible directement
            à l'atelier. Venez nous rendre visite ou contactez-nous pour
            connaître le stock actuel.
          </p>
        </div>
      </section>

      {/* ── NOTICE ── */}
      <section className="section-sm boutique-notice-section">
        <div className="container">
          <div className="boutique-notice">
            <div className="boutique-notice-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="32" height="32">
                <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="16" cy="16" r="1.5" fill="currentColor" />
                <line x1="16" y1="16" x2="21" y2="13" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
                <line x1="16" y1="16" x2="16" y2="9.5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="boutique-notice-title">Vente en boutique uniquement</p>
              <p className="boutique-notice-text">
                Nous ne proposons pas de vente en ligne. Toutes nos pièces sont
                à découvrir directement à l'atelier, au <strong>133 Rue Général de Gaulle,
                14360 Trouville-sur-Mer</strong>. Contactez-nous pour connaître
                les disponibilités actuelles avant votre déplacement.
              </p>
            </div>
            <Link to="/contact" className="btn btn-outline boutique-notice-btn">Nous contacter</Link>
          </div>
        </div>
      </section>

      {/* ── CATÉGORIES ── */}
      <section className="section boutique-categories">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Notre sélection</p>
            <h2 className="section-title">Ce que vous trouverez</h2>
          </div>
          <div className="categories-grid">
            {CATEGORIES.map((cat, i) => (
              <article key={cat.titre} className="category-card">
                <div className="category-header">
                  <span className="category-num">0{i + 1}</span>
                  <span className="tag">{cat.tag}</span>
                </div>
                <h3>{cat.titre}</h3>
                <p>{cat.desc}</p>
                <ul className="category-details">
                  {cat.details.map(d => (
                    <li key={d}>
                      <span className="category-check" aria-hidden="true">◆</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUES DISPONIBLES ── */}
      <section className="section boutique-marques">
        <div className="container">
          <div className="section-header section-header-centered">
            <p className="eyebrow">Expertise reconnue</p>
            <h2 className="section-title">Marques en Stock</h2>
            <div className="divider" />
            <p className="section-lead" style={{ textAlign: "center", margin: "0 auto" }}>
              Notre stock d'occasion tourne régulièrement. Nous travaillons principalement
              sur ces grandes maisons mais traitons également d'autres marques sur demande.
            </p>
          </div>
          <div className="boutique-brands">
            {[
              "Rolex", "Omega", "Cartier", "TAG Heuer", "Longines",
              "Breitling", "Tudor", "Seiko", "Hermès", "IWC",
              "Patek Philippe", "Audemars Piguet", "Vacheron Constantin",
              "Jaeger-LeCoultre", "Blancpain", "Chopard",
            ].map(brand => (
              <span key={brand} className="boutique-brand">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section boutique-cta">
        <div className="container boutique-cta-inner">
          <div>
            <p className="eyebrow">Intéressé ?</p>
            <h2 className="section-title">Venez découvrir notre sélection</h2>
            <p className="section-lead">
              Notre stock évolue en permanence. Appelez-nous ou envoyez-nous un email
              pour savoir ce qui est disponible en ce moment.
            </p>
          </div>
          <div className="boutique-cta-actions">
            <a href="tel:+33231883271" className="btn btn-primary">+33 (0)2 31 88 32 71</a>
            <Link to="/contact" className="btn btn-ghost">Formulaire de contact</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
