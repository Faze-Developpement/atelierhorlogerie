import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import "./Header.css"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header-top-bar" aria-hidden="true" />

      <div className="header-inner">
        <Link to="/" className="wordmark" onClick={close} aria-label="Atelier Horlogerie — Accueil">
          <span className="wordmark-atelier">Atelier</span>
          <span className="wordmark-divider" aria-hidden="true">
            <span />
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="12" cy="12" r="1.2" fill="currentColor" />
              <line x1="12" y1="3.5" x2="12" y2="8" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              <line x1="12" y1="12" x2="16" y2="10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
            </svg>
            <span />
          </span>
          <span className="wordmark-horlogerie">Horlogerie</span>
          <span className="wordmark-location">Trouville-sur-Mer</span>
        </Link>

        <button
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav${menuOpen ? " nav-open" : ""}`} aria-label="Navigation principale">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={close}>Accueil</NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={close}>Services</NavLink>
          <NavLink to="/atelier" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={close}>L'Atelier</NavLink>
          <NavLink to="/boutique" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={close}>Boutique</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link nav-link-cta${isActive ? " active" : ""}`} onClick={close}>Rendez-vous</NavLink>
        </nav>
      </div>
    </header>
  )
}
