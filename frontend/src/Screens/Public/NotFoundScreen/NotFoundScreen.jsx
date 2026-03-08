import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaRocket } from "react-icons/fa";
import { Button } from "../../../Components/Global";
import "./NotFoundScreen.css";

const NotFoundScreen = () => {
  return (
    <div className="not-found-screen">
      {/* Éléments décoratifs flottants */}
      <div className="floating-elements">
        <div className="floating-element element-1">404</div>
        <div className="floating-element element-2">?</div>
        <div className="floating-element element-3">!</div>
      </div>

      <div className="not-found-content">
        {/* Icône animée */}
        <div className="not-found-icon">
          <FaSearch />
        </div>

        {/* Code 404 */}
        <h1 className="not-found-code">404</h1>

        {/* Message */}
        <h2 className="not-found-title">Page introuvable</h2>
        <p className="not-found-message">
          Oups ! La page que vous recherchez semble avoir disparu dans
          l'espace...
        </p>

        {/* Boutons d'action */}
        <div className="not-found-actions">
          <Button variant="primary" size="lg" icon={<FaHome />} to="/">
            Retour à l'accueil
          </Button>
          <Button variant="outline" size="lg" icon={<FaRocket />} to="/contact">
            Nous contacter
          </Button>
        </div>

        {/* Ligne décorative */}
        <div className="not-found-decoration">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundScreen;
