import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Moon, Sun } from './Icons'

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Team', to: '/team' },
  { label: 'Apply', to: '/apply' },
  { label: 'Contact', to: '/contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('becoming-her-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('becoming-her-theme', theme)
  }, [theme])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('menu-is-open')
    }
  }, [menuOpen])

  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <p>In-person mentoring in Maryland · Virtual mentoring across the United States</p>
          <a href="mailto:info.becomingherhq@gmail.com">info.becomingherhq@gmail.com</a>
        </div>
      </div>
      <header className="site-header">
        <div className="shell site-header__inner">
          <Link className="wordmark" to="/" aria-label="Becoming Her home">
            Becoming Her<span aria-hidden="true">.</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((item) => (
              <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
            <Link className="button button--small desktop-donate" to="/donate">Donate</Link>
            <button
              className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

      </header>
      <div id="mobile-navigation" className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          {navLinks.map((item, index) => (
            <NavLink key={item.to} to={item.to} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </NavLink>
          ))}
          <NavLink className="mobile-menu__donate" to="/donate" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Donate</NavLink>
        </nav>
        <div className="mobile-menu__footer">
          <p>Heal. Grow. Thrive.</p>
          <a href="mailto:info.becomingherhq@gmail.com" tabIndex={menuOpen ? 0 : -1}>Email our team</a>
        </div>
      </div>
    </>
  )
}
