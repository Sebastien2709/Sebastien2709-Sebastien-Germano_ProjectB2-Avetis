**Documentation du Projet de B2_Avetis**

---

### 1. Introduction

Ce document présente la documentation complète du projet de développement d'un site web de répertoire d'adresses. Le projet vise à fournir une plateforme permettant aux utilisateurs d'ajouter, de consulter et de filtrer des adresses avec des informations associées. Il est conçu pour être évolutif, en commençant par des fonctionnalités de base et en ajoutant progressivement des fonctionnalités avancées.

### 2. Environnement de Développement

Le projet utilise les outils suivants pour le développement :

- **Éditeur de Code** : Visual Studio Code
- **Framework Frontend** : Next.js
- **Base de Données** : MongoDB
- **Dépendances NPM** : 
  - mongoose
  - yup
  - axios
  - formik
  - clsx

### 3. Configuration

1. **Fichier d'Environnement** :
   - Créez un fichier `.env.local` à la racine du projet.
   - Ajoutez la ligne suivante au fichier pour spécifier l'URL de la base de données locale :
     ```
     DB_URL=[URL DE VOTRE MONGODB]/DB_SEB
     ```

2. **Installation des Dépendances NPM** :
   - Exécutez la commande suivante dans le terminal pour installer les dépendances nécessaires :
     ```
     npm install mongoose yup axios formik clsx
     ```

### 4. Composants

#### a. `Button.jsx`

Composant utilisé pour afficher des boutons interactifs dans l'interface utilisateur.

#### b. `Form.jsx`

Composant qui encapsule les éléments de formulaire et gère la validation des données.

#### c. `FormField.jsx`

Composant représentant un champ de formulaire individuel avec des étiquettes et des zones de saisie.

#### d. `Title.jsx`

Composant utilisé pour afficher des titres ou des en-têtes dans différentes parties de l'application.

### 5. Pages

#### a. `edit.jsx`

Page permettant aux utilisateurs de modifier les informations d'une adresse existante.

#### b. `details.jsx`

Page affichant les détails complets d'une adresse spécifique.

#### c. `create.jsx`

Page d'en-tête de l'application, contenant les éléments de navigation principaux.

#### d. `_app.jsx`

Point d'entrée pour personnaliser le comportement global de l'application Next.js.

#### e. `document.jsx`

Page utilisée pour afficher des documents associés aux adresses répertoriées.

#### f. `index.jsx`

Page d'accueil de l'application, présentant un aperçu des fonctionnalités principales.

#### g. `todos.jsx`

Page affichant une liste de tâches à faire associées à l'administration de l'application.

### 6. Difficultés Rencontrées

J'ai rencontré des difficultés initiales pour m'adapter à la base de données MongoDB en raison de son modèle de données flexible et de ses requêtes spécifiques. Cependant, avec un apprentissage approfondi et des tests rigoureux, j'ai réussi à intégrer efficacement la base de données dans le projet.

### 7. Gestion du Temps

En raison d'une situation personnelle imprévue, j'ai dû m'absenter durant deux semaines en raison d'un décès familial à l’étranger. Cela a entraîné un retard dans la réalisation du projet, car je n'ai pas pu consacrer le temps initialement prévu au développement.

### 8. Tâches Planifiées

Les tâches du projet sont réparties sur une période de quatre semaines, en prenant en compte ces 2 semaines de retard.

### 9. Conclusion

Ce document fournit une vue d'ensemble complète du projet de développement du site web de répertoire d'adresses. Il inclut la configuration de l'environnement de développement, les détails des composants et des pages de l'application, ainsi que les difficultés rencontrées, la gestion du temps et les tâches planifiées pour l'achèvement du projet.

---

# Sebastien2709-Sebastien-Germano_ProjectB2-Avetis
