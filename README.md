# 🏠 Homepage

## In French

### Introduction

Ce projet est un petit site Internet conçu sous forme de page d'accueil pour les utilisateurs cherchant à avoir un accès rapide vers mes projets les plus aboutis. Il sert également de porte d'entrée vers mon [Portfolio](https://github.com/FlorianLeChat/Portfolio). Comme vous avez pu le deviner, l'apparence générale du site Internet est grandement inspirée de [craig-feldman/personal-website-react](https://github.com/craig-feldman/personal-website-react) et [perverse/vue-terminal-homepage](https://github.com/perverse/vue-terminal-homepage), le style est très orienté comme pour simuler un *vrai* terminal de commande sous Linux. Néanmoins, j'ai pris soin d'ajouter ma propre touche personnelle et d'utiliser des technologies différentes (comme [Svelte](https://svelte.dev/) 💖) pour le développement de ce projet.

> [!IMPORTANT]
> L'entièreté du code de ce projet est commenté dans ma langue natale (en français) et n'est pas voué à être traduit en anglais par soucis de simplicité de développement.

### Installation

> [!WARNING]
> Le déploiement en environnement de production nécessite un serveur Web déjà configuré comme [Nginx](https://nginx.org/en/), [Apache](https://httpd.apache.org/) ou [Caddy](https://caddyserver.com/) pour servir les fichiers statiques générés par Vite.

#### Développement local

- Installer [NodeJS LTS](https://nodejs.org/) (>20 ou plus) ;
- Installer les dépendances du projet avec la commande `npm install` ;
- Démarrer le serveur local Vite avec la commande `npm run dev`.

#### Déploiement en production

- Installer [NodeJS LTS](https://nodejs.org/) (>20 ou plus) ;
- Installer les dépendances du projet avec la commande `npm install` ;
- Compiler les fichiers statiques du site Internet avec la commande `npm run build` ;
- Utiliser un serveur Web pour servir les fichiers statiques générés à l'étape précédente.

> [!TIP]
> Pour tester le projet, vous *pouvez* également utiliser [Docker](https://www.docker.com/). Une fois installé, il suffit de lancer l'image Docker de développement à l'aide de la commande `docker compose up --detach --build`. Le site devrait être accessible à l'adresse suivante : http://localhost:5173/. Si vous souhaitez travailler sur le projet avec Docker, vous devez utiliser la commande `docker compose watch --no-up` pour que vos changements locaux soient automatiquement synchronisés avec le conteneur. 🐳

> [!CAUTION]
> L'image Docker **ne peut pas** et **n'a pas été conçue** pour fonctionner dans un environnement de production. Ce projet génère des fichiers statiques que **vous devez** servir avec un serveur Web déjà configuré et respectant aux bonnes pratiques de sécurité et d'optimisation. ⚠️

## In English

### Introduction

This project is a small website designed as a homepage for users looking for quick access to my most advanced projects. It also serves as a gateway to my [Portfolio](https://github.com/FlorianLeChat/Portfolio). As you may have guessed, the overall layout of the website is heavily inspired by [craig-feldman/personal-website-react](https://github.com/craig-feldman/personal-website-react) and [perverse/vue-terminal-homepage](https://github.com/perverse/vue-terminal-homepage), the style being very oriented to simulate a *real* Linux command terminal. However, I took care to add my own personal touch and to use different technologies (like [Svelte](https://svelte.dev/) 💖) for the development of this project.

> [!IMPORTANT]
> The whole code of this project is commented in my native language (in French) and will not be translated in English for easier programming.

### Setup

> [!WARNING]
> Deployment in a production environment requires a pre-configured web server such as [Nginx](https://nginx.org/en/), [Apache](https://httpd.apache.org/), or [Caddy](https://caddyserver.com/) to serve the static files generated by Vite.

#### Local development

- Install [NodeJS LTS](https://nodejs.org/) (>20 or higher) ;
- Install project dependencies using `npm install` ;
- Start Vite local server using `npm run dev`.

#### Production deployment

- Install [NodeJS LTS](https://nodejs.org/) (>20 or higher) ;
- Install project dependencies using `npm install` ;
- Build static website files using `npm run build` ;
- Remove development dependencies using `npm prune --production` ;
- Use a web server to serve the static files generated in the previous step.

> [!TIP]
> To try the project, you *can* also use [Docker](https://www.docker.com/) installed. Once installed, simply start the development Docker image with `docker compose up --detach --build` command. The website should be available at http://localhost:5173/. If you want to work on the project with Docker, you need to use `docker compose watch --no-up` to automatically synchronize your local changes with the container. 🐳

> [!CAUTION]
> The Docker image **cannot** and **was not designed** to run in a production environment. This project generates static files that must be served with a pre-configured web server adhering to security and optimization best practices. ⚠️

![image](https://github.com/FlorianLeChat/Homepage/assets/26360935/673692b0-c8bf-4ce5-845a-4e2fc66917c2)
