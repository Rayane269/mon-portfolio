---
title: "Déploiement Automatisé de Nextcloud"
date: 2025-11-20
image: "/images/post/nextcloud-banner.png"
categories: ["Systèmes", "DevOps"]
featured: false
draft: false
github_link: "https://github.com/Rayane269/nextcloud-auto-setup"
---


Dans le cadre de ma formation **BTS SIO SISR**, j'ai réalisé un projet visant à automatiser l'installation et la configuration d'un serveur de stockage **Nextcloud**. L'objectif était de garantir un déploiement rapide, fiable et reproductible sur des machines virtuelles Debian.

### Architecture Technique
Le service repose sur une pile logicielle **LAMP** (Linux, Apache, MariaDB, PHP) entièrement configurée via un script Bash personnalisé.



#### Fonctionnalités clés :
* **Automatisation complète :** Installation des dépendances et configuration de la base de données en une seule commande.
* **Sécurisation :** Mise en place des permissions d'accès et configuration des domaines de confiance.
* **Stockage Cloud :** Gestion du partage de fichiers, des utilisateurs et des quotas.

---

### Analyse des risques et solutions
Pendant le développement, j'ai dû faire face à des problématiques de droits Linux :

**Problème :** L'interface de Nextcloud indiquait que le répertoire `/data` n'était pas accessible.
**Solution :** J'ai intégré au script une commande de gestion des droits propriétaire (`chown -R www-data:www-data`) pour aligner le système de fichiers avec le serveur Web.

---

### Compétences validées
* **L1.1 :** Installation et configuration de serveurs.
* **L1.3 :** Automatisation des tâches d'administration (Scripting).
* **L3.2 :** Sécurisation des accès et des données.


