import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaSearch,
  FaSave,
  FaTrash,
  FaEdit,
  FaPlus,
  FaCheck,
  FaDownload,
  FaHeart,
  FaStar,
  FaRocket,
  FaBell,
} from "react-icons/fa";

import {
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Alert,
  Badge,
  Card,
  Modal,
  Loader,
  Avatar,
} from "../../../Components/Global";

import "./HomeScreen.css";

const HomeScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alerts, setAlerts] = useState({
    success: true,
    danger: true,
    alert: true,
    info: true,
  });

  const countryOptions = [
    { value: "fr", label: "France" },
    { value: "be", label: "Belgique" },
    { value: "ch", label: "Suisse" },
    { value: "ca", label: "Canada" },
  ];

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="home-screen">
      {/* ===== PARTICULES DÉCORATIVES ===== */}
      <div className="home-particles">
        <div className="particle particle-1 animate-morphBlob"></div>
        <div className="particle particle-2 animate-morphBlob"></div>
        <div className="particle particle-3 animate-float"></div>
        <div className="particle particle-4 animate-breathe"></div>
        <div className="particle particle-5 animate-floatShadow"></div>
      </div>

      <div className="container">
        {/* ===== HEADER ===== */}
        <header className="home-header">
          <div className="header-badge animate-scaleInBounce">
            <Badge variant="primary" icon={<FaStar />}>
              Design System 2026
            </Badge>
          </div>
          <h1>
            <span className="title-icon animate-float">🎨</span>
            <span className="title-text animate-fadeInUp animate-textGlow">
              Design System
            </span>
          </h1>
          <p className="animate-fadeInUp delay-200">
            Bibliothèque de composants React réutilisables
          </p>
          <div className="header-cta animate-fadeInUp delay-300">
            <Button
              variant="primary"
              size="lg"
              icon={<FaRocket />}
              className="hover-lift hover-shine"
            >
              Commencer
            </Button>
            <Button variant="outline" size="lg" className="hover-glow">
              Documentation
            </Button>
          </div>
        </header>

        {/* ===== SECTION BUTTONS ===== */}
        <section className="section animate-fadeInUp">
          <h2>Boutons</h2>

          <div className="subsection">
            <h3>Variantes</h3>
            <div className="component-row">
              <Button variant="primary" className="hover-lift">
                Primary
              </Button>
              <Button variant="secondary" className="hover-lift">
                Secondary
              </Button>
              <Button variant="tertiary" className="hover-lift">
                Tertiary
              </Button>
              <Button variant="success" className="hover-lift">
                Success
              </Button>
              <Button variant="danger" className="hover-lift">
                Danger
              </Button>
              <Button variant="alert" className="hover-lift">
                Alert
              </Button>
            </div>
          </div>

          <div className="subsection">
            <h3>Styles alternatifs</h3>
            <div className="component-row">
              <Button variant="outline" className="hover-glow">
                Outline
              </Button>
              <Button variant="ghost" className="hover-scale">
                Ghost
              </Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="subsection">
            <h3>Tailles</h3>
            <div className="component-row">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </div>

          <div className="subsection">
            <h3>Avec icônes</h3>
            <div className="component-row">
              <Button
                variant="primary"
                icon={<FaSave />}
                className="hover-shine"
              >
                Sauvegarder
              </Button>
              <Button
                variant="danger"
                icon={<FaTrash />}
                className="hover-shine"
              >
                Supprimer
              </Button>
              <Button
                variant="secondary"
                icon={<FaEdit />}
                className="hover-shine"
              >
                Éditer
              </Button>
              <Button
                variant="success"
                icon={<FaPlus />}
                className="hover-shine"
              >
                Ajouter
              </Button>
              <Button
                variant="outline"
                icon={<FaDownload />}
                iconPosition="right"
                className="hover-shine"
              >
                Télécharger
              </Button>
            </div>
          </div>

          <div className="subsection">
            <h3>États</h3>
            <div className="component-row">
              <Button variant="primary" disabled>
                Désactivé
              </Button>
              <Button variant="primary" loading>
                Chargement
              </Button>
              <Button
                variant="primary"
                onClick={handleLoadingDemo}
                className="hover-lift"
              >
                {isLoading ? "Chargement..." : "Cliquez-moi"}
              </Button>
            </div>
          </div>

          <div className="subsection">
            <h3>Liens</h3>
            <div className="component-row">
              <Button variant="primary" to="/" className="hover-lift">
                Lien interne (Router)
              </Button>
              <Button
                variant="secondary"
                href="https://google.com"
                className="hover-lift"
              >
                Lien externe
              </Button>
            </div>
          </div>
        </section>

        {/* ===== SECTION LOADERS ===== */}
        <section className="section animate-fadeInUp delay-700">
          <h2>Loaders</h2>

          <div className="subsection">
            <h3>Tailles</h3>
            <div className="component-row">
              <Loader size="sm" />
              <Loader size="md" />
              <Loader size="lg" />
              <Loader size="xl" />
            </div>
          </div>

          <div className="subsection">
            <h3>Variantes</h3>
            <div className="component-row">
              <Loader variant="primary" />
              <Loader variant="secondary" />
              <div className="loader-dark-bg animate-morphBlob">
                <Loader variant="white" />
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3>Avec texte</h3>
            <div className="component-row">
              <Loader text="Chargement en cours..." />
            </div>
          </div>
        </section>

        {/* ===== SECTION INPUTS ===== */}
        <section className="section animate-fadeInUp delay-100">
          <h2>Champs de formulaire</h2>

          <div className="form-grid">
            <div className="animate-fadeInLeft delay-100">
              <Input
                label="Nom d'utilisateur"
                name="username"
                placeholder="Entrez votre nom"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                icon={<FaUser />}
              />
            </div>

            <div className="animate-fadeInRight delay-150">
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="exemple@email.com"
                icon={<FaEnvelope />}
                required
              />
            </div>

            <div className="animate-fadeInLeft delay-200">
              <Input
                label="Mot de passe"
                name="password"
                type="password"
                placeholder="••••••••"
                icon={<FaLock />}
                helperText="Minimum 8 caractères"
              />
            </div>

            <div className="animate-fadeInRight delay-300">
              <Input
                label="Recherche"
                name="search"
                placeholder="Rechercher..."
                icon={<FaSearch />}
              />
            </div>

            <div className="animate-fadeInLeft delay-400">
              <Input
                label="Champ avec erreur"
                name="error-field"
                placeholder="Texte invalide"
                error="Ce champ contient une erreur"
              />
            </div>

            <div className="animate-fadeInRight delay-500">
              <Input
                label="Champ validé"
                name="success-field"
                placeholder="Texte valide"
                value="Valeur correcte"
                success
              />
            </div>

            <div className="animate-fadeInUp delay-600">
              <Input
                label="Champ désactivé"
                name="disabled-field"
                placeholder="Non modifiable"
                disabled
              />
            </div>
          </div>

          <div className="subsection animate-fadeInUp delay-200">
            <h3>Zone de texte</h3>
            <Textarea
              label="Message"
              name="message"
              placeholder="Écrivez votre message ici..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              maxLength={500}
              showCount
              helperText="Décrivez votre demande en détail"
            />
          </div>

          <div className="subsection animate-fadeInUp delay-300">
            <h3>Liste déroulante</h3>
            <div className="form-grid">
              <Select
                label="Pays"
                name="country"
                options={countryOptions}
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                placeholder="Choisir un pays"
              />
              <Select
                label="Avec erreur"
                name="country-error"
                options={countryOptions}
                error="Veuillez sélectionner un pays"
              />
              <Select
                label="Désactivé"
                name="country-disabled"
                options={countryOptions}
                disabled
              />
            </div>
          </div>

          <div className="subsection animate-fadeInUp delay-400">
            <h3>Cases à cocher</h3>
            <div className="checkbox-grid">
              <Checkbox
                label="J'accepte les conditions d'utilisation"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <Checkbox label="S'inscrire à la newsletter" />
              <Checkbox label="Option désactivée" disabled />
              <Checkbox label="Coché et désactivé" checked disabled />
            </div>
          </div>
        </section>

        {/* ===== SECTION ALERTS ===== */}
        <section className="section animate-fadeInUp delay-200">
          <h2>Alertes</h2>

          <div className="alerts-grid">
            {alerts.success && (
              <div className="animate-slideInLeft">
                <Alert
                  variant="success"
                  title="Succès !"
                  dismissible
                  onDismiss={() => setAlerts({ ...alerts, success: false })}
                >
                  Votre action a été effectuée avec succès.
                </Alert>
              </div>
            )}

            {alerts.danger && (
              <div className="animate-slideInRight delay-100">
                <Alert
                  variant="danger"
                  title="Erreur"
                  dismissible
                  onDismiss={() => setAlerts({ ...alerts, danger: false })}
                >
                  Une erreur est survenue lors du traitement.
                </Alert>
              </div>
            )}

            {alerts.alert && (
              <div className="animate-slideInLeft delay-200">
                <Alert
                  variant="alert"
                  title="Attention"
                  dismissible
                  onDismiss={() => setAlerts({ ...alerts, alert: false })}
                >
                  Cette action est irréversible.
                </Alert>
              </div>
            )}

            {alerts.info && (
              <div className="animate-slideInRight delay-300">
                <Alert
                  variant="info"
                  title="Information"
                  dismissible
                  onDismiss={() => setAlerts({ ...alerts, info: false })}
                >
                  Voici une information importante à connaître.
                </Alert>
              </div>
            )}

            <div className="animate-fadeInUp delay-400">
              <Alert variant="success" icon={false}>
                Alerte sans icône
              </Alert>
            </div>
          </div>

          {!Object.values(alerts).some(Boolean) && (
            <Button
              variant="outline"
              onClick={() =>
                setAlerts({
                  success: true,
                  danger: true,
                  alert: true,
                  info: true,
                })
              }
              className="animate-popIn"
            >
              Réafficher les alertes
            </Button>
          )}
        </section>

        {/* ===== SECTION BADGES ===== */}
        <section className="section animate-fadeInUp delay-300">
          <h2>Badges</h2>

          <div className="subsection">
            <h3>Variantes</h3>
            <div className="component-row">
              <span className="animate-popIn delay-75">
                <Badge variant="primary" className="hover-scale">
                  Primary
                </Badge>
              </span>
              <span className="animate-popIn delay-150">
                <Badge variant="secondary" className="hover-scale">
                  Secondary
                </Badge>
              </span>
              <span className="animate-popIn delay-200">
                <Badge variant="tertiary" className="hover-scale">
                  Tertiary
                </Badge>
              </span>
              <span className="animate-popIn delay-300">
                <Badge variant="success" className="hover-scale">
                  Success
                </Badge>
              </span>
              <span className="animate-popIn delay-400">
                <Badge variant="danger" className="hover-scale">
                  Danger
                </Badge>
              </span>
              <span className="animate-popIn delay-500">
                <Badge variant="alert" className="hover-scale">
                  Alert
                </Badge>
              </span>
              <span className="animate-popIn delay-600">
                <Badge variant="outline" className="hover-scale">
                  Outline
                </Badge>
              </span>
              <span className="animate-popIn delay-700">
                <Badge variant="light" className="hover-scale">
                  Light
                </Badge>
              </span>
            </div>
          </div>

          <div className="subsection">
            <h3>Tailles</h3>
            <div className="component-row">
              <Badge variant="primary" size="sm" className="animate-scaleIn">
                Small
              </Badge>
              <Badge
                variant="primary"
                size="md"
                className="animate-scaleIn delay-100"
              >
                Medium
              </Badge>
              <Badge
                variant="primary"
                size="lg"
                className="animate-scaleIn delay-200"
              >
                Large
              </Badge>
            </div>
          </div>

          <div className="subsection">
            <h3>Avec icônes</h3>
            <div className="component-row">
              <Badge
                variant="success"
                icon={<FaCheck />}
                className="animate-popIn hover-glow"
              >
                Validé
              </Badge>
              <Badge
                variant="danger"
                icon={<FaBell />}
                className="animate-popIn delay-100 animate-pulse"
              >
                3 notifications
              </Badge>
              <Badge
                variant="primary"
                icon={<FaStar />}
                className="animate-popIn delay-200 hover-glow"
              >
                Premium
              </Badge>
              <Badge
                variant="secondary"
                icon={<FaRocket />}
                className="animate-popIn delay-300 hover-scale"
              >
                Nouveau
              </Badge>
            </div>
          </div>

          <div className="subsection">
            <h3>Non arrondis</h3>
            <div className="component-row">
              <Badge
                variant="primary"
                rounded={false}
                className="animate-fadeInUp"
              >
                Tag
              </Badge>
              <Badge
                variant="success"
                rounded={false}
                className="animate-fadeInUp delay-100"
              >
                Publié
              </Badge>
              <Badge
                variant="danger"
                rounded={false}
                className="animate-fadeInUp delay-200 animate-pulse"
              >
                Urgent
              </Badge>
            </div>
          </div>
        </section>

        {/* ===== SECTION AVATARS ===== */}
        <section className="section animate-fadeInUp delay-400">
          <h2>Avatars</h2>

          <div className="subsection">
            <h3>Tailles</h3>
            <div className="component-row">
              <span className="animate-scaleInBounce delay-75">
                <Avatar name="Jean Dupont" size="xs" className="hover-lift" />
              </span>
              <span className="animate-scaleInBounce delay-150">
                <Avatar name="Jean Dupont" size="sm" className="hover-lift" />
              </span>
              <span className="animate-scaleInBounce delay-200">
                <Avatar name="Jean Dupont" size="md" className="hover-lift" />
              </span>
              <span className="animate-scaleInBounce delay-300">
                <Avatar name="Jean Dupont" size="lg" className="hover-lift" />
              </span>
              <span className="animate-scaleInBounce delay-400">
                <Avatar name="Jean Dupont" size="xl" className="hover-lift" />
              </span>
              <span className="animate-scaleInBounce delay-500">
                <Avatar name="Jean Dupont" size="2xl" className="hover-lift" />
              </span>
            </div>
          </div>

          <div className="subsection">
            <h3>Avec image</h3>
            <div className="component-row">
              <span className="animate-flipInY">
                <Avatar
                  src="https://i.pravatar.cc/150?img=1"
                  alt="User 1"
                  size="lg"
                  className="hover-scale"
                />
              </span>
              <span className="animate-flipInY delay-150">
                <Avatar
                  src="https://i.pravatar.cc/150?img=2"
                  alt="User 2"
                  size="lg"
                  className="hover-scale"
                />
              </span>
              <span className="animate-flipInY delay-300">
                <Avatar
                  src="https://i.pravatar.cc/150?img=3"
                  alt="User 3"
                  size="lg"
                  className="hover-scale"
                />
              </span>
            </div>
          </div>

          <div className="subsection">
            <h3>Status</h3>
            <div className="component-row">
              <span className="animate-fadeInUp">
                <Avatar
                  name="En ligne"
                  size="lg"
                  status="online"
                  className="hover-lift"
                />
              </span>
              <span className="animate-fadeInUp delay-100">
                <Avatar
                  name="Occupé"
                  size="lg"
                  status="busy"
                  className="hover-lift"
                />
              </span>
              <span className="animate-fadeInUp delay-200">
                <Avatar
                  name="Absent"
                  size="lg"
                  status="away"
                  className="hover-lift"
                />
              </span>
              <span className="animate-fadeInUp delay-300">
                <Avatar
                  name="Hors ligne"
                  size="lg"
                  status="offline"
                  className="hover-lift"
                />
              </span>
            </div>
          </div>

          <div className="subsection">
            <h3>Groupe d'avatars</h3>
            <div className="avatar-group animate-fadeInLeft">
              <Avatar src="https://i.pravatar.cc/150?img=10" size="md" />
              <Avatar src="https://i.pravatar.cc/150?img=11" size="md" />
              <Avatar src="https://i.pravatar.cc/150?img=12" size="md" />
              <Avatar src="https://i.pravatar.cc/150?img=13" size="md" />
              <Avatar name="+5" size="md" />
            </div>
          </div>
        </section>

        {/* ===== SECTION CARDS ===== */}
        <section className="section animate-fadeInUp delay-500">
          <h2>Cartes</h2>

          <div className="cards-grid">
            <div className="animate-fadeInUp delay-100">
              <Card
                title="Carte simple"
                subtitle="Sous-titre de la carte"
                hoverable
                className="hover-lift"
              >
                <p>Contenu de la carte avec du texte explicatif.</p>
              </Card>
            </div>

            <div className="animate-fadeInUp delay-200">
              <Card
                image="https://picsum.photos/400/200?random=1"
                imageAlt="Image exemple"
                title="Carte avec image"
                subtitle="Une belle image"
                hoverable
                className="hover-lift"
              >
                <p>Cette carte contient une image en en-tête.</p>
              </Card>
            </div>

            <div className="animate-fadeInUp delay-300">
              <Card
                title="Carte avec footer"
                subtitle="Actions en bas"
                className="hover-border-glow"
                footer={
                  <div className="card-actions">
                    <Button variant="ghost" size="sm">
                      Annuler
                    </Button>
                    <Button variant="primary" size="sm">
                      Confirmer
                    </Button>
                  </div>
                }
              >
                <p>Cette carte a un footer avec des boutons d'action.</p>
              </Card>
            </div>

            <div className="animate-fadeInUp delay-400">
              <Card
                image="https://picsum.photos/400/200?random=2"
                title="Carte complète"
                subtitle="Avec tous les éléments"
                hoverable
                className="hover-lift"
                footer={
                  <div className="card-actions">
                    <Button variant="outline" size="sm" icon={<FaHeart />}>
                      J'aime
                    </Button>
                    <Button variant="primary" size="sm">
                      Voir plus
                    </Button>
                  </div>
                }
              >
                <p>Une carte complète avec image, contenu et actions.</p>
                <div
                  className="component-row"
                  style={{ marginTop: "var(--space-sm)" }}
                >
                  <Badge variant="primary" size="sm">
                    React
                  </Badge>
                  <Badge variant="secondary" size="sm">
                    CSS
                  </Badge>
                </div>
              </Card>
            </div>

            <div className="animate-fadeInUp delay-500">
              <Card
                variant="outlined"
                title="Carte outlined"
                className="hover-border-glow"
              >
                <p>Style avec bordure au lieu d'ombre.</p>
              </Card>
            </div>

            <div className="animate-fadeInUp delay-600">
              <Card variant="flat" title="Carte flat" className="hover-scale">
                <p>Style plat avec fond gris.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* ===== SECTION MODALS ===== */}
        <section className="section animate-fadeInUp delay-600">
          <h2>Modales</h2>

          <div className="component-row">
            <Button
              variant="primary"
              onClick={() => setIsModalOpen(true)}
              className="hover-lift animate-pulseGlow"
            >
              Ouvrir la modale
            </Button>
          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Titre de la modale"
            footer={
              <>
                <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                  Annuler
                </Button>
                <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                  Confirmer
                </Button>
              </>
            }
          >
            <p>
              Ceci est le contenu de la modale. Vous pouvez y mettre n'importe
              quel contenu React.
            </p>
            <Input
              label="Exemple de champ"
              name="modal-input"
              placeholder="Tapez quelque chose..."
            />
          </Modal>
        </section>

        {/* ===== SECTION FORM COMPLET ===== */}
        <section className="section animate-fadeInUp delay-800">
          <h2>Exemple de formulaire complet</h2>

          <Card className="form-card hover-border-glow">
            <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="animate-textGlow">Créer un compte</h3>

              <div className="form-grid">
                <Input
                  label="Prénom"
                  name="firstname"
                  placeholder="Jean"
                  icon={<FaUser />}
                  required
                />
                <Input
                  label="Nom"
                  name="lastname"
                  placeholder="Dupont"
                  icon={<FaUser />}
                  required
                />
              </div>

              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="jean.dupont@email.com"
                icon={<FaEnvelope />}
                required
              />
              <Input
                label="Mot de passe"
                name="password"
                type="password"
                placeholder="••••••••"
                icon={<FaLock />}
                helperText="Minimum 8 caractères avec une majuscule et un chiffre"
                required
              />
              <Select
                label="Pays"
                name="country"
                options={countryOptions}
                placeholder="Sélectionnez votre pays"
                required
              />
              <Textarea
                label="Bio"
                name="bio"
                placeholder="Parlez-nous de vous..."
                rows={3}
                maxLength={200}
                showCount
              />

              <Checkbox label="J'accepte les conditions générales d'utilisation" />
              <Checkbox label="Je souhaite recevoir la newsletter" />

              <div className="form-actions">
                <Button variant="ghost" type="reset">
                  Réinitialiser
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  icon={<FaRocket />}
                  className="hover-lift hover-shine"
                >
                  Créer mon compte
                </Button>
              </div>
            </form>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
