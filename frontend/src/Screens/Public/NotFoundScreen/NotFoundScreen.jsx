import { FaHome, FaSearch, FaRocket, FaSatellite } from "react-icons/fa";
import { Button } from "../../../Components/Global";
import "./NotFoundScreen.css";

const NotFoundScreen = () => {
  return (
    <div className="not-found-screen">
      {/* ===== PARTICULES D'ARRIÈRE-PLAN ===== */}
      <div className="nf-particles">
        <div className="nf-particle nf-particle-1"></div>
        <div className="nf-particle nf-particle-2"></div>
        <div className="nf-particle nf-particle-3"></div>
        <div className="nf-particle nf-particle-4"></div>
        <div className="nf-particle nf-particle-5"></div>
        <div className="nf-particle nf-particle-6"></div>
      </div>

      {/* ===== ORBITES DÉCORATIVES ===== */}
      <div className="orbit-container">
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
        <div className="orbit orbit-3"></div>
        <div className="orbit-planet orbit-planet-1"></div>
        <div className="orbit-planet orbit-planet-2"></div>
        <div className="orbit-planet orbit-planet-3"></div>
      </div>

      {/* ===== ÉLÉMENTS FLOTTANTS ===== */}
      <div className="floating-elements">
        <div className="floating-element element-1 animate-float">4</div>
        <div className="floating-element element-2 animate-float delay-300">
          0
        </div>
        <div className="floating-element element-3 animate-float delay-600">
          4
        </div>
        <div className="floating-element element-4 animate-morphBlob">
          <FaSatellite />
        </div>
      </div>

      {/* ===== CONTENU PRINCIPAL ===== */}
      <div className="not-found-content">
        {/* Icône animée */}
        <div className="not-found-icon animate-scaleInBounce">
          <div className="icon-glow"></div>
          <div className="icon-ring animate-spin"></div>
          <div className="icon-ring icon-ring-2"></div>
          <FaSearch className="icon-search animate-pulse" />
        </div>

        {/* Code 404 avec effet glitch */}
        <div className="not-found-code-wrapper">
          <h1 className="not-found-code">
            <span className="code-digit animate-flipInY">4</span>
            <span className="code-digit code-zero animate-flipInY delay-150 animate-breathe">
              0
            </span>
            <span className="code-digit animate-flipInY delay-300">4</span>
          </h1>
          <div className="glitch-overlay" aria-hidden="true">
            <span className="glitch-text" data-text="404">
              404
            </span>
          </div>
        </div>

        {/* Message */}
        <h2 className="not-found-title animate-fadeInUp delay-400">
          Page introuvable
        </h2>
        <p className="not-found-message animate-fadeInUp delay-500">
          Oups ! La page que vous recherchez semble avoir disparu dans
          l'espace...
          <br />
          <span className="message-highlight animate-textGlow">
            Peut-être a-t-elle été déplacée ou supprimée ?
          </span>
        </p>

        {/* Boutons d'action */}
        <div className="not-found-actions animate-fadeInUp delay-600">
          <Button
            variant="primary"
            size="lg"
            icon={<FaHome />}
            to="/"
            className="hover-lift hover-shine animate-pulseGlow"
          >
            Retour à l'accueil
          </Button>
          <Button
            variant="outline"
            size="lg"
            icon={<FaRocket />}
            to="/contact"
            className="hover-lift hover-glow"
          >
            Nous contacter
          </Button>
        </div>

        {/* Décoration */}
        <div className="not-found-decoration animate-fadeIn delay-700">
          <span className="decoration-line"></span>
          <div className="decoration-dots">
            <span className="animate-bounce delay-100"></span>
            <span className="animate-bounce delay-200"></span>
            <span className="animate-bounce delay-300"></span>
          </div>
          <span className="decoration-line"></span>
        </div>

        {/* Suggestions */}
        <div className="not-found-suggestions animate-fadeInUp delay-800">
          <p>Vous pouvez aussi essayer :</p>
          <div className="suggestions-links">
            <a href="/" className="suggestion-link hover-scale">
              Accueil
            </a>
            <span className="suggestion-separator">•</span>
            <a href="/features" className="suggestion-link hover-scale">
              Fonctionnalités
            </a>
            <span className="suggestion-separator">•</span>
            <a href="/pricing" className="suggestion-link hover-scale">
              Tarifs
            </a>
            <span className="suggestion-separator">•</span>
            <a href="/contact" className="suggestion-link hover-scale">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundScreen;
