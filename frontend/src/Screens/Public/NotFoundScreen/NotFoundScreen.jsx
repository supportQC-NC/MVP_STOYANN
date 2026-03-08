import { useEffect, useRef, useState } from "react";
import { FaHome, FaRocket } from "react-icons/fa";
import { Button } from "../../../Components/Global";
import "./NotFoundScreen.css";

const NotFoundScreen = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const screenRef = useRef(null);

  // Effet Parallaxe Magnétique
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!screenRef.current) return;
      const rect = screenRef.current.getBoundingClientRect();

      // Position de la souris centrée (-0.5 à 0.5)
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="nf-2026-screen" ref={screenRef}>
      {/* --- COUCHE 1: AURORA BACKGROUND (Fluide) --- */}
      <div className="aurora-container">
        <div className="aurora-blob aurora-1"></div>
        <div className="aurora-blob aurora-2"></div>
        <div className="aurora-blob aurora-3"></div>
      </div>

      {/* --- COUCHE 2: GRILLE DE PROFONDEUR --- */}
      <div className="depth-grid"></div>

      {/* --- COUCHE 3: GRANULATION CINÉMATIQUE --- */}
      <div className="noise-overlay"></div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div
        className="content-container"
        style={{
          transform: `translateX(${position.x * 20}px) translateY(${position.y * 20}px) rotateY(${position.x * 5}deg) rotateX(${position.y * -5}deg)`,
        }}
      >
        {/* Le Numéro 404 en "Liquid Chrome" */}
        <div className="chrome-title-wrapper">
          <h1 className="chrome-title" data-text="404">
            <span className="chrome-text">404</span>
            <span className="chrome-reflection">404</span>
          </h1>
        </div>

        {/* Sous-titre flottant */}
        <div
          className="info-block"
          style={{
            transform: `translateX(${position.x * -30}px) translateY(${position.y * -30}px)`,
          }}
        >
          <h2 className="info-title">Espace non cartographié</h2>
          <p className="info-desc">
            Il semble que vous ayez franchi les limites de notre galaxie. La
            page que vous cherchez s'est évaporée dans le néant numérique.
          </p>

          <div className="actions-group">
            <Button
              variant="primary"
              size="lg"
              icon={<FaHome />}
              to="/"
              className="btn-magnetic"
            >
              Retour sur Terre
            </Button>
            <Button
              variant="ghost"
              size="lg"
              icon={<FaRocket />}
              to="/features"
              className="btn-ghost-custom"
            >
              Explorer l'app
            </Button>
          </div>
        </div>
      </div>

      {/* Élément décoratif : Anneau flottant */}
      <div
        className="floating-ring"
        style={{
          transform: `translateX(${position.x * 50}px) translateY(${position.y * 50}px) rotate(${position.x * 20}deg)`,
        }}
      ></div>
    </div>
  );
};

export default NotFoundScreen;
