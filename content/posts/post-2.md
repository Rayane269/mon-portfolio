---
title: "Installation et Configuration d'Active Directory sur Windows Server 2025"
date: 2025-11-20
image: /images/post/active-directory-2025.png
categories: ["Administration Windows"]
featured: true
draft: false
pdf: "Active_Directory_Windows_Server_2025.pdf"
---

L'Active Directory (AD) est le pilier de la gestion des identités et des ressources dans un environnement Windows. Dans ce projet, j'ai documenté et réalisé l'installation complète d'un contrôleur de domaine utilisant la toute dernière version de **Windows Server 2025**.

## Objectifs du Projet

L'enjeu était de mettre en place une structure centralisée permettant de gérer les utilisateurs, les ordinateurs et les politiques de sécurité (GPO) de manière efficace et hiérarchisée.

## Environnement Technique
* **Système d'exploitation :** Windows Server 2025.
* **Services :** AD DS (Active Directory Domain Services), DNS, Gestion des stratégies de groupe.
* **Client de test :** Windows 11.

## Étapes clés de la réalisation

### 1. Préparation et Promotion
Configuration de l'environnement réseau (IP statique, nom de la machine) et promotion du serveur en tant que **Contrôleur de Domaine**. Cette étape inclut la configuration des services DNS intégrés à l'AD.

### 2. Structuration des Unités d'Organisation (OU)
Mise en place d'une structure organisationnelle logique pour séparer les différents départements de l'entreprise (ex: Direction, Informatique, RH). Une bonne hiérarchie est essentielle pour une délégation de tâches propre.

### 3. Gestion des Utilisateurs et Groupes
Création et intégration de nouveaux utilisateurs dans le domaine, tout en gérant les permissions d'accès via des groupes de sécurité.

### 4. Application des Stratégies de Groupe (GPO)
Mise en œuvre de politiques de sécurité automatisées. Par exemple, la configuration d'une GPO "PaperWall" pour uniformiser le fond d'écran des postes clients, démontrant la puissance de la centralisation des paramètres.


## Compétences validées
* Installation et promotion de services de domaine (AD DS).
* Administration avancée de Windows Server 2025.
* Conception de structures d'Unités d'Organisation.
* Maîtrise des objets de stratégie de groupe (GPO).
