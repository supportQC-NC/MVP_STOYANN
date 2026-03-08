#!/usr/bin/env python3
"""
🗂️ Script d'organisation de structure pour App SaaS
Organise automatiquement les fichiers dans la bonne structure
sans modifier leur contenu.

Usage: python organize_structure.py
(À exécuter depuis le dossier src/)
"""

import os
import shutil
from pathlib import Path

# 📁 Définir le chemin de base (exécuté depuis src/)
BASE_PATH = Path(".")

# 🎨 Couleurs pour le terminal
class Colors:
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    RESET = '\033[0m'
    BOLD = '\033[1m'

def print_header():
    """Affiche l'en-tête du script"""
    print(f"""
{Colors.CYAN}{Colors.BOLD}
╔══════════════════════════════════════════════════════════════╗
║           🗂️  ORGANISATEUR DE STRUCTURE SAAS                 ║
║                                                              ║
║   Organise automatiquement tes fichiers React                ║
╚══════════════════════════════════════════════════════════════╝
{Colors.RESET}
""")

def create_structure():
    """Crée la structure de dossiers complète"""
    
    folders = [
        # Components
        "Components/Global/Button",
        "Components/Global/Input",
        "Components/Global/Textarea",
        "Components/Global/Select",
        "Components/Global/Checkbox",
        "Components/Global/Alert",
        "Components/Global/Badge",
        "Components/Global/Card",
        "Components/Global/Modal",
        "Components/Global/Loader",
        "Components/Global/Avatar",
        "Components/Layout",
        "Components/Utils",
        
        # Screens - Public
        "Screens/Public/HomeScreen",
        "Screens/Public/AboutScreen",
        "Screens/Public/ContactScreen",
        "Screens/Public/PricingScreen",
        "Screens/Public/FeaturesScreen",
        "Screens/Public/NotFoundScreen",
        
        # Screens - Auth
        "Screens/Auth/LoginScreen",
        "Screens/Auth/RegisterScreen",
        "Screens/Auth/ForgotPasswordScreen",
        "Screens/Auth/ResetPasswordScreen",
        "Screens/Auth/VerifyEmailScreen",
        
        # Screens - Private
        "Screens/Private/DashboardScreen",
        "Screens/Private/ProfileScreen",
        "Screens/Private/SettingsScreen",
        "Screens/Private/BillingScreen",
        "Screens/Private/NotificationsScreen",
        
        # Screens - Admin
        "Screens/Admin/AdminDashboardScreen",
        "Screens/Admin/UsersManagementScreen",
        "Screens/Admin/AnalyticsScreen",
        "Screens/Admin/AdminSettingsScreen",
        
        # CSS
        "CSS",
        
        # Autres
        "hooks",
        "services",
        "store",
        "utils",
        "assets/images",
        "assets/icons",
        "assets/fonts",
    ]
    
    print(f"{Colors.BLUE}📁 Création de la structure des dossiers...{Colors.RESET}\n")
    
    created_count = 0
    for folder in folders:
        folder_path = BASE_PATH / folder
        if not folder_path.exists():
            folder_path.mkdir(parents=True, exist_ok=True)
            print(f"  {Colors.GREEN}✓{Colors.RESET} Créé: {folder}")
            created_count += 1
        else:
            print(f"  {Colors.YELLOW}○{Colors.RESET} Existe déjà: {folder}")
    
    print(f"\n{Colors.GREEN}✅ {created_count} dossiers créés{Colors.RESET}\n")

def find_and_move_files():
    """Trouve les fichiers mal placés et les déplace"""
    
    # Mapping des fichiers vers leur destination
    file_mappings = {
        # Components Global
        "Button.jsx": "Components/Global/Button/",
        "Button.css": "Components/Global/Button/",
        "Input.jsx": "Components/Global/Input/",
        "Input.css": "Components/Global/Input/",
        "Textarea.jsx": "Components/Global/Textarea/",
        "Textarea.css": "Components/Global/Textarea/",
        "Select.jsx": "Components/Global/Select/",
        "Select.css": "Components/Global/Select/",
        "Checkbox.jsx": "Components/Global/Checkbox/",
        "Checkbox.css": "Components/Global/Checkbox/",
        "Alert.jsx": "Components/Global/Alert/",
        "Alert.css": "Components/Global/Alert/",
        "Badge.jsx": "Components/Global/Badge/",
        "Badge.css": "Components/Global/Badge/",
        "Card.jsx": "Components/Global/Card/",
        "Card.css": "Components/Global/Card/",
        "Modal.jsx": "Components/Global/Modal/",
        "Modal.css": "Components/Global/Modal/",
        "Loader.jsx": "Components/Global/Loader/",
        "Loader.css": "Components/Global/Loader/",
        "Avatar.jsx": "Components/Global/Avatar/",
        "Avatar.css": "Components/Global/Avatar/",
        
        # Layout
        "Header.jsx": "Components/Layout/",
        "Header.css": "Components/Layout/",
        "Footer.jsx": "Components/Layout/",
        "Footer.css": "Components/Layout/",
        "Sidebar.jsx": "Components/Layout/",
        "Sidebar.css": "Components/Layout/",
        
        # Utils
        "PrivateRoute.jsx": "Components/Utils/",
        "AdminRoute.jsx": "Components/Utils/",
        
        # CSS Global
        "variables.css": "CSS/",
        "reset.css": "CSS/",
        "base.css": "CSS/",
        "utilities.css": "CSS/",
        "components.css": "CSS/",
        "animations.css": "CSS/",
        
        # Screens
        "HomeScreen.jsx": "Screens/Public/HomeScreen/",
        "HomeScreen.css": "Screens/Public/HomeScreen/",
        "AboutScreen.jsx": "Screens/Public/AboutScreen/",
        "AboutScreen.css": "Screens/Public/AboutScreen/",
        "ContactScreen.jsx": "Screens/Public/ContactScreen/",
        "ContactScreen.css": "Screens/Public/ContactScreen/",
        "PricingScreen.jsx": "Screens/Public/PricingScreen/",
        "PricingScreen.css": "Screens/Public/PricingScreen/",
        "FeaturesScreen.jsx": "Screens/Public/FeaturesScreen/",
        "FeaturesScreen.css": "Screens/Public/FeaturesScreen/",
        "NotFoundScreen.jsx": "Screens/Public/NotFoundScreen/",
        "NotFoundScreen.css": "Screens/Public/NotFoundScreen/",
        
        "LoginScreen.jsx": "Screens/Auth/LoginScreen/",
        "LoginScreen.css": "Screens/Auth/LoginScreen/",
        "RegisterScreen.jsx": "Screens/Auth/RegisterScreen/",
        "RegisterScreen.css": "Screens/Auth/RegisterScreen/",
        "ForgotPasswordScreen.jsx": "Screens/Auth/ForgotPasswordScreen/",
        "ForgotPasswordScreen.css": "Screens/Auth/ForgotPasswordScreen/",
        "ResetPasswordScreen.jsx": "Screens/Auth/ResetPasswordScreen/",
        "ResetPasswordScreen.css": "Screens/Auth/ResetPasswordScreen/",
        "VerifyEmailScreen.jsx": "Screens/Auth/VerifyEmailScreen/",
        "VerifyEmailScreen.css": "Screens/Auth/VerifyEmailScreen/",
        
        "DashboardScreen.jsx": "Screens/Private/DashboardScreen/",
        "DashboardScreen.css": "Screens/Private/DashboardScreen/",
        "ProfileScreen.jsx": "Screens/Private/ProfileScreen/",
        "ProfileScreen.css": "Screens/Private/ProfileScreen/",
        "SettingsScreen.jsx": "Screens/Private/SettingsScreen/",
        "SettingsScreen.css": "Screens/Private/SettingsScreen/",
        "BillingScreen.jsx": "Screens/Private/BillingScreen/",
        "BillingScreen.css": "Screens/Private/BillingScreen/",
        "NotificationsScreen.jsx": "Screens/Private/NotificationsScreen/",
        "NotificationsScreen.css": "Screens/Private/NotificationsScreen/",
        
        "AdminDashboardScreen.jsx": "Screens/Admin/AdminDashboardScreen/",
        "AdminDashboardScreen.css": "Screens/Admin/AdminDashboardScreen/",
        "UsersManagementScreen.jsx": "Screens/Admin/UsersManagementScreen/",
        "UsersManagementScreen.css": "Screens/Admin/UsersManagementScreen/",
        "AnalyticsScreen.jsx": "Screens/Admin/AnalyticsScreen/",
        "AnalyticsScreen.css": "Screens/Admin/AnalyticsScreen/",
        "AdminSettingsScreen.jsx": "Screens/Admin/AdminSettingsScreen/",
        "AdminSettingsScreen.css": "Screens/Admin/AdminSettingsScreen/",
    }
    
    print(f"{Colors.BLUE}🔍 Recherche des fichiers à déplacer...{Colors.RESET}\n")
    
    moved_count = 0
    
    # Parcourir tous les fichiers du projet
    for root, dirs, files in os.walk(BASE_PATH):
        # Ignorer node_modules et .git
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'build', 'dist']]
        
        for file in files:
            if file in file_mappings:
                current_path = Path(root) / file
                target_dir = BASE_PATH / file_mappings[file]
                target_path = target_dir / file
                
                # Vérifier si le fichier n'est pas déjà au bon endroit
                if current_path.parent != target_dir:
                    # Créer le dossier cible si nécessaire
                    target_dir.mkdir(parents=True, exist_ok=True)
                    
                    # Déplacer le fichier
                    if not target_path.exists():
                        shutil.move(str(current_path), str(target_path))
                        print(f"  {Colors.GREEN}✓{Colors.RESET} Déplacé: {file}")
                        print(f"    {Colors.CYAN}De:{Colors.RESET} {current_path.parent}")
                        print(f"    {Colors.CYAN}Vers:{Colors.RESET} {target_dir}\n")
                        moved_count += 1
                    else:
                        print(f"  {Colors.YELLOW}⚠{Colors.RESET} Conflit: {file} existe déjà dans {target_dir}")
    
    print(f"\n{Colors.GREEN}✅ {moved_count} fichiers déplacés{Colors.RESET}\n")

def create_index_files():
    """Crée les fichiers index.js pour les exports"""
    
    components_index = '''// ===== GLOBAL COMPONENTS EXPORT =====

// Form Components
export { default as Input } from "./Input/Input";
export { default as Textarea } from "./Textarea/Textarea";
export { default as Select } from "./Select/Select";
export { default as Checkbox } from "./Checkbox/Checkbox";

// UI Components
export { default as Button } from "./Button/Button";
export { default as Alert } from "./Alert/Alert";
export { default as Badge } from "./Badge/Badge";
export { default as Card } from "./Card/Card";
export { default as Modal } from "./Modal/Modal";
export { default as Loader } from "./Loader/Loader";
export { default as Avatar } from "./Avatar/Avatar";
'''
    
    index_path = BASE_PATH / "Components/Global/index.js"
    
    if not index_path.exists():
        index_path.parent.mkdir(parents=True, exist_ok=True)
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(components_index)
        print(f"{Colors.GREEN}✓{Colors.RESET} Créé: Components/Global/index.js")
    else:
        print(f"{Colors.YELLOW}○{Colors.RESET} Existe déjà: Components/Global/index.js")

def cleanup_empty_folders():
    """Supprime les dossiers vides"""
    
    print(f"{Colors.BLUE}🧹 Nettoyage des dossiers vides...{Colors.RESET}\n")
    
    removed_count = 0
    
    for root, dirs, files in os.walk(BASE_PATH, topdown=False):
        for dir_name in dirs:
            dir_path = Path(root) / dir_name
            if dir_path.exists() and not any(dir_path.iterdir()):
                dir_path.rmdir()
                print(f"  {Colors.RED}✗{Colors.RESET} Supprimé (vide): {dir_path.relative_to(BASE_PATH)}")
                removed_count += 1
    
    if removed_count == 0:
        print(f"  {Colors.GREEN}○{Colors.RESET} Aucun dossier vide trouvé")
    
    print(f"\n{Colors.GREEN}✅ {removed_count} dossiers vides supprimés{Colors.RESET}\n")

def show_final_structure():
    """Affiche la structure finale"""
    
    print(f"{Colors.BLUE}📂 Structure finale:{Colors.RESET}\n")
    
    def print_tree(path, prefix=""):
        entries = sorted(path.iterdir(), key=lambda x: (x.is_file(), x.name))
        entries = [e for e in entries if e.name not in ['node_modules', '.git', 'build', 'dist']]
        
        for i, entry in enumerate(entries):
            is_last = i == len(entries) - 1
            current_prefix = "└── " if is_last else "├── "
            next_prefix = "    " if is_last else "│   "
            
            if entry.is_dir():
                print(f"{prefix}{current_prefix}{Colors.CYAN}{entry.name}/{Colors.RESET}")
                print_tree(entry, prefix + next_prefix)
            else:
                ext_color = Colors.GREEN if entry.suffix in ['.jsx', '.js'] else Colors.YELLOW
                print(f"{prefix}{current_prefix}{ext_color}{entry.name}{Colors.RESET}")
    
    if BASE_PATH.exists():
        print(f"{Colors.CYAN}src/{Colors.RESET}")
        print_tree(BASE_PATH)

def main():
    """Fonction principale"""
    
    print_header()
    
    # Vérifier qu'on est bien dans src
    if not (BASE_PATH / "index.js").exists() and not (BASE_PATH / "index.jsx").exists():
        print(f"{Colors.RED}❌ Erreur: Ce script doit être exécuté depuis le dossier 'src/'!{Colors.RESET}")
        print(f"{Colors.YELLOW}💡 Placez ce fichier dans src/ et exécutez:{Colors.RESET}")
        print(f"   cd src")
        print(f"   python organize_structure.py")
        return
    
    print(f"{Colors.CYAN}📍 Dossier de travail: {Path.cwd()}{Colors.RESET}\n")
    
    # Confirmer avant de continuer
    response = input(f"{Colors.YELLOW}Voulez-vous continuer? (o/n): {Colors.RESET}").strip().lower()
    
    if response != 'o':
        print(f"\n{Colors.RED}❌ Opération annulée.{Colors.RESET}")
        return
    
    print()
    
    # Étape 1: Créer la structure
    create_structure()
    
    # Étape 2: Déplacer les fichiers
    find_and_move_files()
    
    # Étape 3: Créer les index.js
    create_index_files()
    
    # Étape 4: Nettoyer les dossiers vides
    cleanup_empty_folders()
    
    # Étape 5: Afficher la structure finale
    show_final_structure()
    
    print(f"""
{Colors.GREEN}{Colors.BOLD}
╔══════════════════════════════════════════════════════════════╗
║                    ✅ ORGANISATION TERMINÉE!                  ║
╚══════════════════════════════════════════════════════════════╝
{Colors.RESET}

{Colors.YELLOW}⚠️  N'oubliez pas de mettre à jour les imports dans vos fichiers!{Colors.RESET}

{Colors.CYAN}Exemple d'import après réorganisation:{Colors.RESET}
  import {{ Button, Input, Alert }} from "../Components/Global";
  import Header from "../Components/Layout/Header";

{Colors.CYAN}💡 Vous pouvez supprimer ce script après utilisation:{Colors.RESET}
  del organize_structure.py

""")

if __name__ == "__main__":
    main()
