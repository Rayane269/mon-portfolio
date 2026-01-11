---
title: "Mise en place d'une solution de gestion de parc et Helpdesk avec GLPI"
date: 2025-12-18
image: /images/post/glpi-management.png
categories: ["Systèmes & Réseaux", "Gestion de Parc"]
featured: true
draft: false
pdf: "glpi.pdf"
---

Dans le cadre d'un projet pour l'entreprise **TechnoCity**, j'ai déployé une solution complète de gestion de parc informatique et un centre de services (Helpdesk) utilisant **GLPI**. L'objectif était de remplacer une gestion manuelle obsolète par un système automatisé et centralisé.

## Contexte et Objectifs

TechnoCity avait besoin d'une visibilité totale sur ses actifs (ordinateurs, serveurs, licences) et d'un moyen structuré pour gérer les demandes d'assistance des utilisateurs.

## Environnement Technique
* **Serveur :** Linux (Debian) avec pile LAMP (Apache, MariaDB, PHP).
* **Application :** GLPI (Gestionnaire Libre de Parc Informatique).
* **Agents :** GLPI Agent pour l'inventaire automatique.
* **Intégration :** Liaison LDAP avec Windows Server (Active Directory).

## Étapes clés de la réalisation

### 1. Installation du Serveur Web et de GLPI
Mise en place de l'environnement serveur sous Linux, configuration de la base de données MariaDB et sécurisation de l'interface Web Apache.

### 2. Inventaire Automatique avec les Agents
Déploiement d'agents sur les postes clients Windows. Ces agents remontent automatiquement toutes les caractéristiques techniques (CPU, RAM, logiciels installés) vers le serveur central, éliminant les erreurs de saisie manuelle.

### 3. Gestion des Tickets (Helpdesk)
Configuration du système de ticketing. J'ai mis en place des flux de travail permettant aux utilisateurs de déclarer des incidents et aux techniciens de suivre la résolution, garantissant ainsi le respect des délais d'intervention.



### 4. Interconnexion LDAP / Active Directory
C'est un point majeur du projet : j'ai relié GLPI à l'**Active Directory**. Cela permet aux utilisateurs de s'authentifier avec leur session Windows habituelle (Single Sign-On) et synchronise automatiquement les comptes utilisateurs.

## Compétences validées
* Administration de serveurs Web (LAMP).
* Automatisation de l'inventaire matériel et logiciel.
* Configuration d'un outil de ticketing ITSM.
* Interconnexion de services hétérogènes (Linux/Windows via LDAP).

