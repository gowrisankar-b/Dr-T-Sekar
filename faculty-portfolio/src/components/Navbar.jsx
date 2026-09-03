import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import cvFile from '../assets/cv.pdf'
import './Navbar.css'

const navItems = [
  { path: '/',             label: 'Home' },
  { path: '/research',     label: 'Research'},
  { path: '/publications', label: 'Publications'},
  { path: '/experience',   label: 'Experience'},
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
        {/* <NavLink to="/" className="navbar__brand" onClick={() => setMenuOpen(false)}>
          <div className="navbar__logo">ST</div>
          <div className="navbar__brand-text">
            <span className="navbar__name">Dr. Sekar T.</span>
            <span className="navbar__title">Assoc. Professor &amp; Head</span>
          </div>
        </NavLink> */}

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
         {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
