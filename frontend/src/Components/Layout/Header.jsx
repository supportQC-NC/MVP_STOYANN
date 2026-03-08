import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCogs,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simuler l'état de connexion

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <NavLink to="/" className="header-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">MonSaaS</span>
        </NavLink>

        {/* Navigation Desktop */}
        <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaHome />
            <span>Accueil</span>
          </NavLink>
          <NavLink
            to="/services"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaCogs />
            <span>Services</span>
          </NavLink>
          <NavLink
            to="/apropos"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaInfoCircle />
            <span>À propos</span>
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaEnvelope />
            <span>Contact</span>
          </NavLink>
        </nav>

        {/* Auth Buttons */}
        <div className="header-auth">
          {isLoggedIn ? (
            <div className="user-menu">
              <button className="user-avatar">
                <FaUser />
              </button>
              <button
                className="btn-logout"
                onClick={() => setIsLoggedIn(false)}
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <NavLink to="/login" className="btn-login">
                Connexion
              </NavLink>
              <NavLink to="/register" className="btn-register">
                S'inscrire
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay mobile */}
      {isMenuOpen && (
        <div className="nav-overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default Header;
