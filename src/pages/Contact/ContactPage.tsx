import "./Contact.css"

export default function ContactPage() {
  return (
    <main className="contact-page">

      <section className="page-hero section-sm">
        <div className="container">
          <p className="eyebrow">Sur rendez-vous</p>
          <h1 className="section-title">Prendre Rendez-vous</h1>
          <div className="ornament">— Réponse sous 24 à 48 heures ouvrables —</div>
          <p className="section-lead">
            Remplissez ce formulaire ou appelez-nous directement.
            Nous vous recontactons dans les plus brefs délais pour convenir d'un créneau.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-layout">

          {/* ── FORMULAIRE ── */}
          <form className="contact-form" noValidate>
            <div className="form-section-title">Votre demande</div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="prenom">Prénom</label>
                <input id="prenom" name="prenom" type="text" placeholder="Votre prénom" autoComplete="given-name" />
              </div>
              <div className="form-field">
                <label htmlFor="nom">Nom</label>
                <input id="nom" name="nom" type="text" placeholder="Votre nom" autoComplete="family-name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="votre@email.fr" autoComplete="email" />
              </div>
              <div className="form-field">
                <label htmlFor="telephone">Téléphone</label>
                <input id="telephone" name="telephone" type="tel" placeholder="+33 6 00 00 00 00" autoComplete="tel" />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="prestation">Type de prestation</label>
              <select id="prestation" name="prestation">
                <option value="">— Sélectionner —</option>
                <option value="reparation">Réparation / Révision</option>
                <option value="pendule">Pendule / Horloge ancienne</option>
                <option value="luxe">Montre de luxe</option>
                <option value="estimation">Expertise / Estimation</option>
                <option value="achat-occasion">Achat — Montre d'occasion</option>
                <option value="achat-neuf">Achat — Article neuf</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="marque">Marque de la montre <span className="form-optional">(si applicable)</span></label>
              <input id="marque" name="marque" type="text" placeholder="Ex : Rolex, Omega, Patek Philippe…" />
            </div>

            <div className="form-field">
              <label htmlFor="message">Votre message</label>
              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Décrivez votre besoin, la panne constatée, ou posez votre question…"
              />
            </div>

            <div className="form-footer">
              <button type="submit" className="btn btn-primary">
                Envoyer la demande
              </button>
              <p className="form-note">
                Réponse sous 24–48 h ouvrables · Vos données restent confidentielles.
              </p>
            </div>
          </form>

          {/* ── INFORMATIONS ── */}
          <aside className="contact-info">
            <div className="info-block">
              <p className="eyebrow">Adresse</p>
              <address>
                133 Rue Général de Gaulle<br />
                14360 Trouville-sur-Mer<br />
                Normandie, France
              </address>
            </div>

            <div className="info-block">
              <p className="eyebrow">Téléphone</p>
              <a href="tel:+33231883271">+33 (0)2 31 88 32 71</a>
              <a href="tel:+33660711515">+33 (0)6 60 71 15 15</a>
            </div>

            <div className="info-block">
              <p className="eyebrow">Email</p>
              <a href="mailto:atelier.horlogerie@wanadoo.fr">
                atelier.horlogerie@wanadoo.fr
              </a>
            </div>

            <div className="info-block">
              <p className="eyebrow">Réception</p>
              <p>Sur rendez-vous uniquement.<br />Nous intervenons également<br />sur devis pour les flottes.</p>
            </div>

            <div className="contact-clock" aria-hidden="true">
              <svg viewBox="0 0 100 100" width="80" height="80">
                <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.7" />
                <circle cx="50" cy="50" r="2" fill="currentColor" />
                {Array.from({ length: 12 }, (_, i) => {
                  const angle = (i * 30 - 90) * Math.PI / 180
                  const r1 = 36, r2 = 42
                  return (
                    <line
                      key={i}
                      x1={50 + r1 * Math.cos(angle)} y1={50 + r1 * Math.sin(angle)}
                      x2={50 + r2 * Math.cos(angle)} y2={50 + r2 * Math.sin(angle)}
                      stroke="currentColor" strokeWidth="1"
                    />
                  )
                })}
                <line x1="50" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <line x1="50" y1="50" x2="68" y2="42" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              </svg>
            </div>
          </aside>
        </div>
      </section>

    </main>
  )
}
