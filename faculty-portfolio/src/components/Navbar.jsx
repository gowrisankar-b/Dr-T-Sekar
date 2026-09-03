import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import cvFile from '../assets/cv.pdf'
import './Navbar.css'

const navItems = [
  { path: '/',             label: 'Home',         icon: '🏠' },
  { path: '/research',     label: 'Research',      icon: '🔬' },
  { path: '/publications', label: 'Publications',  icon: '📚' },
  { path: '/experience',   label: 'Experience',    icon: '🎓' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Brand */}
        <NavLink to="/" className="navbar__brand" onClick={() => setMenuOpen(false)}>
          <div className="navbar__logo">ST</div>
          <div className="navbar__brand-text">
            <span className="navbar__name">Dr. Sekar T.</span>
            <span className="navbar__title">Assoc. Professor &amp; Head</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={cvFile}
          className="btn btn-accent navbar__cta"
          download="Dr_Sekar_Tamilperuvalathan_CV.pdf"
        >
          ⬇ Download CV
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            <span>{item.icon}</span> {item.label}
          </NavLink>
        ))}
        <a href={cvFile} className="btn btn-accent" download="Dr_Sekar_Tamilperuvalathan_CV.pdf" style={{ margin: '0.5rem 1rem' }}>
          ⬇ Download CV
        </a>
      </div>
    </header>
  )
}
