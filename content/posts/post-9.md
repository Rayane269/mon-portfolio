---
title: "Supervision Zabbix 7.4 et Authentification Sécurisée AD/LDAPS"
date: 2026-06-02
image: /images/post/zabbix-project.png
categories: ["Systèmes", "Sécurité"]
featured: true
pdf: "Documentation_Technique_Zabbix_LDAPS.pdf"
draft: false
---

Dans le cadre de ma formation, j'ai déployé une solution de supervision réseau **Zabbix 7.4** intégrée à un annuaire **Active Directory (Windows Server 2025)**. Ce projet m'a permis de centraliser la gestion des alertes et de sécuriser les accès à la plateforme via le protocole chiffré LDAPS.

## Objectif du projet

L'objectif était de mettre en place un serveur de supervision opérationnel sous Linux, d'y connecter un agent Windows (Contrôleur de domaine) pour collecter ses métriques, et d'externaliser l'authentification des administrateurs sur l'Active Directory de manière hautement sécurisée.

## Environnement Technique
* **Systèmes :** Debian 12 (Zabbix), Windows Server 2025 (AD DS & PKI).
* **Supervision :** Zabbix Server 7.4, Zabbix Agent, MariaDB.
* **Sécurité & Protocoles :** LDAPS (Port 636), Certificats SSL/TLS (OpenSSL), Wireshark.

---

## Réalisations principales

### 1. Déploiement de l'infrastructure Zabbix
Installation complète de la solution de supervision sur un serveur Debian 12 :
* **Base de données :** Initialisation et sécurisation d'une base MariaDB dédiée à Zabbix.
* **Frontend Web :** Configuration d'Apache2 et finalisation de l'assistant d'installation web (PHP).
* **Supervision Windows :** Déploiement de l'agent Zabbix sur le contrôleur de domaine, ouverture des flux de pare-feu (Port 10050) et liaison via le modèle de supervision natif.

### 2. Intégration Active Directory & Authentification LDAP
Centralisation de la gestion des accès utilisateurs :
* **Compte de liaison :** Création d'un compte de service dédié dans une Unité d'Organisation (OU) sur l'AD.
* **Interconnexion :** Configuration du connecteur LDAP de Zabbix pour mapper les comptes du domaine via l'attribut `sAMAccountName`.

### 3. Sécurisation des flux via LDAPS (LDAP over SSL)
Chiffrement des requêtes d'authentification pour éliminer les risques d'interception :
* **Infrastructure de clés publiques (PKI) :** Déploiement du rôle AD CS (Services de certificats) pour générer un certificat racine d'entreprise.
* **Magasin de confiance Linux :** Export et conversion du certificat Windows au format `.crt`, puis intégration sur le serveur Debian (`update-ca-certificates`).
* **Bascule de flux :** Migration du connecteur Zabbix vers le port sécurisé 636 (`ldaps://`).

### 4. Analyse Réseau et Validation
* **Vérification OpenSSL :** Validation de la chaîne de confiance et de la poignée de main (handshake) TLS.
* **Audit Wireshark :** Analyse comparative des trames réseaux montrant le passage de requêtes LDAP lisibles en clair à des paquets `Application Data` totalement chiffrés.

## Compétences validées
* Administration avancée de serveurs Linux (Debian) et Windows Server.
* Configuration et exploitation d'une solution de supervision (Zabbix).
* Déploiement et gestion d'une Autorité de Certification (PKI).
* Sécurisation des flux applicatifs et analyse de protocoles (Wireshark).