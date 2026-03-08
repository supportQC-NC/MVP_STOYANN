import { useState } from "react";
import {
  FaHome,
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
  FaCog,
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
  // States pour les démos interactives
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

  // Options pour le Select
  const countryOptions = [
    { value: "fr", label: "France" },
    { value: "be", label: "Belgique" },
    { value: "ch", label: "Suisse" },
    { value: "ca", label: "Canada" },
  ];

  // Simulation de chargement
  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="home-screen">
      <div className="container">
        {/* ===== HEADER ===== */}
        <header className="home-header">
          <h1>🎨 Design System</h1>
          <p>Bibliothèque de composants React réutilisables</p>
        </header>

        {/* ===== SECTION BUTTONS ===== */}
        <section className="section">
          <h2>Boutons</h2>

          <div className="subsection">
            <h3>Variantes</h3>
            <div className="component-row">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
              <Button variant="success">Success</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="alert">Alert</Button>
            </div>
          </div>

          <div className="subsection">
            <h3>Styles alternatifs</h3>
            <div className="component-row">
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
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
              <Button variant="primary" icon={<FaSave />}>
                Sauvegarder
              </Button>
              <Button variant="danger" icon={<FaTrash />}>
                Supprimer
              </Button>
              <Button variant="secondary" icon={<FaEdit />}>
                Éditer
              </Button>
              <Button variant="success" icon={<FaPlus />}>
                Ajouter
              </Button>
              <Button
                variant="outline"
                icon={<FaDownload />}
                iconPosition="right"
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
              <Button variant="primary" onClick={handleLoadingDemo}>
                {isLoading ? "Chargement..." : "Cliquez-moi"}
              </Button>
            </div>
          </div>

          <div className="subsection">
            <h3>Liens</h3>
            <div className="component-row">
              <Button variant="primary" to="/">
                Lien interne (Router)
              </Button>
              <Button variant="secondary" href="https://google.com">
                Lien externe
              </Button>
            </div>
          </div>
        </section>

        {/* ===== SECTION INPUTS ===== */}
        <section className="section">
          <h2>Champs de formulaire</h2>

          <div className="form-grid">
            <Input
              label="Nom d'utilisateur"
              name="username"
              placeholder="Entrez votre nom"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              icon={<FaUser />}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="exemple@email.com"
              icon={<FaEnvelope />}
              required
            />

            <Input
              label="Mot de passe"
              name="password"
              type="password"
              placeholder="••••••••"
              icon={<FaLock />}
              helperText="Minimum 8 caractères"
            />

            <Input
              label="Recherche"
              name="search"
              placeholder="Rechercher..."
              icon={<FaSearch />}
            />

            <Input
              label="Champ avec erreur"
              name="error-field"
              placeholder="Texte invalide"
              error="Ce champ contient une erreur"
            />

            <Input
              label="Champ validé"
              name="success-field"
              placeholder="Texte valide"
              value="Valeur correcte"
              success
            />

            <Input
              label="Champ désactivé"
              name="disabled-field"
              placeholder="Non modifiable"
              disabled
            />
          </div>

          <div className="subsection">
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

          <div className="subsection">
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

          <div className="subsection">
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
        <section className="section">
          <h2>Alertes</h2>

          <div className="alerts-grid">
            {alerts.success && (
              <Alert
                variant="success"
                title="Succès !"
                dismissible
                onDismiss={() => setAlerts({ ...alerts, success: false })}
              >
                Votre action a été effectuée avec succès.
              </Alert>
            )}

            {alerts.danger && (
              <Alert
                variant="danger"
                title="Erreur"
                dismissible
                onDismiss={() => setAlerts({ ...alerts, danger: false })}
              >
                Une erreur est survenue lors du traitement.
              </Alert>
            )}

            {alerts.alert && (
              <Alert
                variant="alert"
                title="Attention"
                dismissible
                onDismiss={() => setAlerts({ ...alerts, alert: false })}
              >
                Cette action est irréversible.
              </Alert>
            )}

            {alerts.info && (
              <Alert
                variant="info"
                title="Information"
                dismissible
                onDismiss={() => setAlerts({ ...alerts, info: false })}
              >
                Voici une information importante à connaître.
              </Alert>
            )}

            <Alert variant="success" icon={false}>
              Alerte sans icône
            </Alert>
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
            >
              Réafficher les alertes
            </Button>
          )}
        </section>

        {/* ===== SECTION BADGES ===== */}
        <section className="section">
          <h2>Badges</h2>

          <div className="subsection">
            <h3>Variantes</h3>
            <div className="component-row">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="tertiary">Tertiary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="alert">Alert</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="light">Light</Badge>
            </div>
          </div>

          <div className="subsection">
            <h3>Tailles</h3>
            <div className="component-row">
              <Badge variant="primary" size="sm">
                Small
              </Badge>
              <Badge variant="primary" size="md">
                Medium
              </Badge>
              <Badge variant="primary" size="lg">
                Large
              </Badge>
            </div>
          </div>

          <div className="subsection">
            <h3>Avec icônes</h3>
            <div className="component-row">
              <Badge variant="success" icon={<FaCheck />}>
                Validé
              </Badge>
              <Badge variant="danger" icon={<FaBell />}>
                3 notifications
              </Badge>
              <Badge variant="primary" icon={<FaStar />}>
                Premium
              </Badge>
              <Badge variant="secondary" icon={<FaRocket />}>
                Nouveau
              </Badge>
            </div>
          </div>

          <div className="subsection">
            <h3>Non arrondis</h3>
            <div className="component-row">
              <Badge variant="primary" rounded={false}>
                Tag
              </Badge>
              <Badge variant="success" rounded={false}>
                Publié
              </Badge>
              <Badge variant="danger" rounded={false}>
                Urgent
              </Badge>
            </div>
          </div>
        </section>

        {/* ===== SECTION AVATARS ===== */}
        <section className="section">
          <h2>Avatars</h2>

          <div className="subsection">
            <h3>Tailles</h3>
            <div className="component-row">
              <Avatar name="Jean Dupont" size="xs" />
              <Avatar name="Jean Dupont" size="sm" />
              <Avatar name="Jean Dupont" size="md" />
              <Avatar name="Jean Dupont" size="lg" />
              <Avatar name="Jean Dupont" size="xl" />
              <Avatar name="Jean Dupont" size="2xl" />
            </div>
          </div>

          <div className="subsection">
            <h3>Avec image</h3>
            <div className="component-row">
              <Avatar
                src="https://i.pravatar.cc/150?img=1"
                alt="User 1"
                size="lg"
              />
              <Avatar
                src="https://i.pravatar.cc/150?img=2"
                alt="User 2"
                size="lg"
              />
              <Avatar
                src="https://i.pravatar.cc/150?img=3"
                alt="User 3"
                size="lg"
              />
            </div>
          </div>

          <div className="subsection">
            <h3>Status</h3>
            <div className="component-row">
              <Avatar name="En ligne" size="lg" status="online" />
              <Avatar name="Occupé" size="lg" status="busy" />
              <Avatar name="Absent" size="lg" status="away" />
              <Avatar name="Hors ligne" size="lg" status="offline" />
            </div>
          </div>

          <div className="subsection">
            <h3>Groupe d'avatars</h3>
            <div className="avatar-group">
              <Avatar src="https://i.pravatar.cc/150?img=10" size="md" />
              <Avatar src="https://i.pravatar.cc/150?img=11" size="md" />
              <Avatar src="https://i.pravatar.cc/150?img=12" size="md" />
              <Avatar src="https://i.pravatar.cc/150?img=13" size="md" />
              <Avatar name="+5" size="md" />
            </div>
          </div>
        </section>

        {/* ===== SECTION CARDS ===== */}
        <section className="section">
          <h2>Cartes</h2>

          <div className="cards-grid">
            <Card
              title="Carte simple"
              subtitle="Sous-titre de la carte"
              hoverable
            >
              <p>Contenu de la carte avec du texte explicatif.</p>
            </Card>

            <Card
              image="https://picsum.photos/400/200?random=1"
              imageAlt="Image exemple"
              title="Carte avec image"
              subtitle="Une belle image"
              hoverable
            >
              <p>Cette carte contient une image en en-tête.</p>
            </Card>

            <Card
              title="Carte avec footer"
              subtitle="Actions en bas"
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

            <Card
              image="https://picsum.photos/400/200?random=2"
              title="Carte complète"
              subtitle="Avec tous les éléments"
              hoverable
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

            <Card variant="outlined" title="Carte outlined">
              <p>Style avec bordure au lieu d'ombre.</p>
            </Card>

            <Card variant="flat" title="Carte flat">
              <p>Style plat avec fond gris.</p>
            </Card>
          </div>
        </section>

        {/* ===== SECTION MODALS ===== */}
        <section className="section">
          <h2>Modales</h2>

          <div className="component-row">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
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

        {/* ===== SECTION LOADERS ===== */}
        <section className="section">
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
              <div className="loader-dark-bg">
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

        {/* ===== SECTION COMBINAISONS ===== */}
        <section className="section">
          <h2>Exemple de formulaire complet</h2>

          <Card className="form-card">
            <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
              <h3>Créer un compte</h3>

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
                <Button variant="primary" type="submit" icon={<FaRocket />}>
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
