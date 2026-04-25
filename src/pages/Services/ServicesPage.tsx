import { Link } from "react-router-dom"
import "./Services.css"

const LUXURY_BRANDS = [
  "Rolex", "Patek Philippe", "Audemars Piguet", "Vacheron Constantin",
  "Jaeger-LeCoultre", "Breitling", "IWC", "Omega", "Cartier",
  "Blancpain", "Chopard", "TAG Heuer", "Longines", "Tudor", "Hermès", "Seiko",
]

export default function ServicesPage() {
  return (
    <main className="services-page">

      <section className="page-hero section-sm">
        <div className="container">
          <p className="eyebrow">Maître Horloger</p>
          <h1 className="section-title">Nos Prestations</h1>
          <div className="ornament">— Trouville-sur-Mer —</div>
          <p className="section-lead">
            De la révision complète au remplacement de pièces introuvables,
            chaque montre est traitée avec la rigueur qu'elle mérite.
          </p>
        </div>
      </section>

      {/* ── RÉPARATION ── */}
      <section className="section services-block">
        <div className="container">
          <div className="services-block-header">
            <span className="block-num">I</span>
            <div>
              <p className="eyebrow">Expertise technique</p>
              <h2 className="section-title">Réparation & Révision</h2>
            </div>
          </div>

          <div className="prestation-grid">
            <article className="prestation-card">
              <h3>Révision Complète</h3>
              <p>
                Démontage intégral, nettoyage aux ultrasons, inspection pièce par pièce,
                huilage des pivots, remontage et réglage. Résultat : précision retrouvée.
              </p>
            </article>
            <article className="prestation-card">
              <h3>Montres Automatiques & Mécaniques</h3>
              <p>
                Tous mouvements, toutes complications. Remontoir, quantième,
                phase de lune, tourbillon — aucune complication ne nous résiste.
              </p>
            </article>
            <article className="prestation-card">
              <h3>Chronographes</h3>
              <p>
                Intervention spécialisée sur les mouvements chronographes colonne,
                verticaux ou horizontaux. Remise à l'état d'origine garantie.
              </p>
            </article>
            <article className="prestation-card">
              <h3>Pendules & Horloges Anciennes</h3>
              <p>
                Restauration de pendules de parquet, comtoises, cartels,
                mouvements d'époque et horloges de cheminée. Pièces fabriquées sur-mesure si nécessaire.
              </p>
            </article>
            <article className="prestation-card">
              <h3>Remplacement de Verre</h3>
              <p>
                Verre minéral, saphir et acrylique. Couronnes, tiges,
                bracelets, fermoirs — toutes pièces de rechange.
              </p>
            </article>
            <article className="prestation-card">
              <h3>Étanchéité</h3>
              <p>
                Test d'étanchéité, remplacement des joints, révision des
                poussoirs et couronnes vissées. Certification waterproof.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── MARQUES DE LUXE ── */}
      <section className="section services-luxury">
        <div className="container">
          <div className="services-block-header">
            <span className="block-num">II</span>
            <div>
              <p className="eyebrow">Grandes Maisons</p>
              <h2 className="section-title">Montres de Luxe</h2>
            </div>
          </div>

          <p className="services-luxury-lead">
            Nous traitons les montres des plus grandes manufactures avec un soin et une précision absolus.
            Chaque intervention respecte les spécifications d'origine de la manufacture.
          </p>

          <div className="luxury-brands-grid">
            {LUXURY_BRANDS.map(brand => (
              <div key={brand} className="luxury-brand-item">
                <span className="luxury-brand-dot" aria-hidden="true">◆</span>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENTE ── */}
      <section className="section services-block">
        <div className="container">
          <div className="services-block-header">
            <span className="block-num">III</span>
            <div>
              <p className="eyebrow">En boutique</p>
              <h2 className="section-title">Vente & Occasions</h2>
            </div>
          </div>

          <div className="prestation-grid prestation-grid-2">
            <article className="prestation-card prestation-card-large">
              <h3>Montres d'Occasion</h3>
              <p>
                Sélection rigoureuse de montres d'occasion vérifiées, révisées et garanties.
                Chaque pièce est authentifiée et livrée avec ses documents disponibles.
                Stock en évolution permanente — disponibilité sur place à l'atelier.
              </p>
              <Link to="/boutique" className="btn btn-outline" style={{ marginTop: "8px", alignSelf: "flex-start" }}>
                Voir la boutique
              </Link>
            </article>
            <article className="prestation-card prestation-card-large">
              <h3>Articles Neufs</h3>
              <p>
                Sélection d'articles neufs disponibles en boutique :
                montres, bracelets, accessoires et pièces détachées.
                Conseil personnalisé pour chaque achat.
              </p>
              <Link to="/contact" className="btn btn-outline" style={{ marginTop: "8px", alignSelf: "flex-start" }}>
                Nous contacter
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── ESTIMATION ── */}
      <section className="section services-block services-block-dark">
        <div className="container">
          <div className="services-block-header">
            <span className="block-num">IV</span>
            <div>
              <p className="eyebrow">Conseil</p>
              <h2 className="section-title">Expertise & Estimation</h2>
            </div>
          </div>
          <div className="expertise-content">
            <p>
              Vous souhaitez connaître la valeur de votre montre ? Nous proposons
              un service d'expertise et d'estimation pour les montres de collection,
              anciennes ou de grande marque. Un regard d'expert pour valoriser votre pièce.
            </p>
            <Link to="/contact" className="btn btn-primary">Prendre rendez-vous</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
