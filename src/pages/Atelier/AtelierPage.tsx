import { Link } from "react-router-dom"
import "./Atelier.css"

export default function AtelierPage() {
  return (
    <main className="atelier-page">

      <section className="page-hero section-sm">
        <div className="container">
          <p className="eyebrow">133 Rue Général de Gaulle · Trouville-sur-Mer</p>
          <h1 className="section-title">L'Atelier</h1>
          <div className="ornament">— Un lieu, un métier, une passion —</div>
          <p className="section-lead">
            Au cœur de Trouville-sur-Mer, notre atelier perpétue la tradition
            horlogère avec le savoir-faire d'un maître horloger.
          </p>
        </div>
      </section>

      {/* ── SAVOIR-FAIRE ── */}
      <section className="section atelier-section">
        <div className="container atelier-grid">
          <div className="atelier-text">
            <p className="eyebrow">Notre métier</p>
            <h2 className="section-title">Un savoir-faire<br />d'exception</h2>
            <div className="atelier-divider" />
            <p>
              L'horlogerie est l'une des disciplines artisanales les plus exigeantes qui soit.
              Chaque garde-temps est un monde en soi : des centaines de pièces assemblées avec une
              précision de l'ordre du micron, des alliages rares, des complications mécaniques
              d'une ingéniosité sans égal.
            </p>
            <p>
              Notre atelier vous accueille pour toute intervention, qu'il s'agisse d'une révision
              de routine ou de la restauration d'une pièce de famille. Chaque montre qui nous est
              confiée repart réglée, huilée et vérifiée — comme neuve.
            </p>
            <p>
              Nous travaillons sur toutes les marques, de la montre de grand-père aux plus grandes
              manufactures suisses.
            </p>
          </div>

          <div className="atelier-visual">
            <div className="atelier-clock-container" aria-hidden="true">
              <svg viewBox="0 0 200 200" width="100%" height="100%">
                {/* Cadran principal */}
                <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="86" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />

                {/* Indices */}
                {Array.from({ length: 60 }, (_, i) => {
                  const angle = (i * 6 - 90) * Math.PI / 180
                  const isHour = i % 5 === 0
                  const r1 = isHour ? 72 : 78
                  const r2 = isHour ? 82 : 80
                  return (
                    <line
                      key={i}
                      x1={100 + r1 * Math.cos(angle)}
                      y1={100 + r1 * Math.sin(angle)}
                      x2={100 + r2 * Math.cos(angle)}
                      y2={100 + r2 * Math.sin(angle)}
                      stroke="currentColor"
                      strokeWidth={isHour ? 1.5 : 0.5}
                      opacity={isHour ? 1 : 0.5}
                    />
                  )
                })}

                {/* Chiffres romains */}
                {[
                  [100, 24, "XII"], [162, 58, "III"],
                  [100, 186, "VI"], [38, 58, "IX"],
                ].map(([x, y, label]) => (
                  <text
                    key={String(label)}
                    x={Number(x)} y={Number(y)}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="10"
                    fontFamily="Georgia, serif"
                    fill="currentColor"
                    opacity="0.6"
                  >{label}</text>
                ))}

                {/* Aiguilles */}
                <line x1="100" y1="100" x2="100" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="100" y1="100" x2="148" y2="80" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="100" y1="100" x2="100" y2="136" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />
                <circle cx="100" cy="100" r="3" fill="currentColor" />
                <circle cx="100" cy="100" r="1.5" fill="var(--bg)" />

                {/* Logo centre */}
                <text x="100" y="70" textAnchor="middle" fontSize="6" fontFamily="Georgia, serif" fill="currentColor" opacity="0.4" letterSpacing="2">ATELIER</text>
                <text x="100" y="78" textAnchor="middle" fontSize="4.5" fontFamily="Georgia, serif" fill="currentColor" opacity="0.3" letterSpacing="1.5">HORLOGERIE</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="section valeurs-section">
        <div className="container">
          <div className="section-header section-header-centered">
            <p className="eyebrow">Ce qui nous guide</p>
            <h2 className="section-title">Nos Valeurs</h2>
            <div className="divider" />
          </div>
          <div className="valeurs-grid">
            {[
              {
                roman: "I",
                titre: "Précision",
                texte: "Chaque intervention est minutieuse. Nous travaillons sous loupe et binoculaire, avec les outils de la horlogerie professionnelle.",
              },
              {
                roman: "II",
                titre: "Authenticité",
                texte: "Nous n'utilisons que des pièces d'origine ou de qualité équivalente. Votre montre repart conforme aux spécifications de la manufacture.",
              },
              {
                roman: "III",
                titre: "Conseil",
                texte: "Avant toute intervention, nous vous informons clairement du diagnostic et du devis. Aucune surprise à la livraison.",
              },
              {
                roman: "IV",
                titre: "Passion",
                texte: "L'horlogerie est notre vocation depuis des décennies. Chaque montre qui nous est confiée est traitée comme une œuvre.",
              },
            ].map(v => (
              <div key={v.titre} className="valeur-card">
                <span className="valeur-roman" aria-hidden="true">{v.roman}</span>
                <h3>{v.titre}</h3>
                <p>{v.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCALISATION ── */}
      <section className="section localisation-section">
        <div className="container">
          <div className="localisation-grid">
            <div className="localisation-info">
              <p className="eyebrow">Nous trouver</p>
              <h2 className="section-title">L'Atelier</h2>
              <div className="localisation-adresse">
                <p>133 Rue Général de Gaulle<br />14360 Trouville-sur-Mer</p>
                <p>
                  <a href="tel:+33231883271">+33 (0)2 31 88 32 71</a><br />
                  <a href="tel:+33660711515">+33 (0)6 60 71 15 15</a>
                </p>
                <p>
                  <a href="mailto:atelier.horlogerie@wanadoo.fr">
                    atelier.horlogerie@wanadoo.fr
                  </a>
                </p>
              </div>
              <div className="localisation-horaires">
                <p className="eyebrow" style={{ marginBottom: "10px" }}>Réception</p>
                <p>Sur rendez-vous uniquement.<br />Contactez-nous par téléphone ou email.</p>
              </div>
              <Link to="/contact" className="btn btn-primary">Prendre rendez-vous</Link>
            </div>

            <div className="localisation-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.3!2d0.0757!3d49.3628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0aabc00000001%3A0x1!2s133+Rue+G%C3%A9n%C3%A9ral+de+Gaulle%2C+14360+Trouville-sur-Mer!5e0!3m2!1sfr!2sfr!4v1700000000000"
                loading="lazy"
                title="Localisation Atelier Horlogerie"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
