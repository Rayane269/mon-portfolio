---
title: "Implémentation d'une solution VPN Nomade sécurisée avec pfSense"
date: 2026-01-25
image: /images/post/pfsense-vpn.png
categories: ["Systèmes & Réseaux"]
featured: true
pdf: "IMPLEMENTATION_VPN_PFSENSE_SOULAIMAN.pdf"
draft: false
---

Dans le cadre d'un projet de sécurisation des accès distants, j'ai réalisé l'implémentation complète d'une solution **VPN Nomade** basée sur pfSense. L'objectif était de permettre aux collaborateurs d'accéder aux ressources internes de l'organisation de manière chiffrée et sécurisée depuis n'importe quel accès internet.

## Pourquoi un VPN Nomade pfSense ?

Le déploiement d'un accès VPN (Virtual Private Network) est essentiel pour garantir la confidentialité et l'intégrité des données lors d'un travail à distance. pfSense, en tant que solution open-source robuste, permet une gestion fine des tunnels OpenVPN, des certificats et des règles de filtrage.

## Environnement Technique
* **Émulateur Réseau :** GNS3.
* **Pare-feu / VPN :** pfSense.
* **Client de test :** Windows 10 (VM).
* **Protocole :** OpenVPN (SSL/TLS).

## Réalisations principales

### 1. Architecture et Virtualisation
Conception de la topologie réseau sous **GNS3** incluant un segment WAN (Internet), un segment LAN (Ressources internes) et le serveur pfSense faisant office de passerelle sécurisée.

### 2. Configuration d'OpenVPN et Sécurité
Mise en place du service avec une configuration axée sur la robustesse du chiffrement :
* **Gestion des certificats :** Création d'une Autorité de Certification (CA) interne et génération des certificats serveurs et clients.
* **Authentification :** Mise en place d'une double vérification (Certificat + Utilisateur).
* **Pare-feu :** Configuration des règles de filtrage (ACL) pour restreindre l'accès au LAN uniquement aux utilisateurs authentifiés via le tunnel.

## Compétences validées
* Maîtrise de la sécurité périmétrique (pfSense).
* Configuration de tunnels chiffrés (OpenVPN).
* Gestion des infrastructures à clé publique (PKI).
* Émulation d'architectures réseaux complexes (GNS3).