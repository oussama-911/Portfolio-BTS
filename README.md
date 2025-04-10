# Portfolio Oussama Brouri

Ce projet est un site portfolio personnel développé avec React, TypeScript et Tailwind CSS.

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

## Structure du projet

- `/src` - Code source de l'application
  - `/assets` - Ressources statiques
    - `/images` - Images utilisées dans l'application
  - `/components` - Composants React réutilisables
  - `/pages` - Composants de page
- `/public` - Fichiers statiques accessibles directement

## Configuration des images

Pour que les images fonctionnent correctement, vous devez placer vos images dans le dossier `src/assets/images`. Voici la liste des images nécessaires :

- `Logo Brouri.png` - Logo utilisé dans la navigation
- `moi-alger.png` - Photo de profil pour la page CV
- `mosquée.jpg` - Image d'arrière-plan pour la page d'accueil
- `planete4k.jpg` - Image pour la section contact
- Images pour la page E5 :
  - `Logo-ad.png`
  - `qu-est-ce-qu-apache.png`
  - `logo-filtrage-acl.png`
  - `GLPI_logo officiel.jpg`
  - `lampos-logo.jpg`
  - `nagios-xi-logo.jpeg`
  - `nat-logo.jpg`
  - `logo-pfsense.jpg`
  - `vtp-logo.jpg`
  - `logo-vlan.jpg`

Une fois les images placées dans ce dossier, décommentez les lignes d'importation dans les fichiers correspondants.

## Configuration des PDF

Pour la page E6, vous devez placer les fichiers PDF dans le dossier `public` :

- `FICHE E6 GLPI.pdf`
- `FICHE E6 SSH.pdf`

## Routes de l'application

- `/` - Page d'accueil
- `/cv` - Curriculum Vitae
- `/e5` - Épreuve E5
- `/e6` - Épreuve E6
- `/veille` - Veille technologique
- `/contact` - Page de contact