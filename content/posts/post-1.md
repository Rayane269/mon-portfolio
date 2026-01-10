---
title: "Mise en place d'un serveur DNS récursif avec Unbound"
date: 2026-01-10
image: /images/post/dns-project.png
categories: ["Systèmes & Réseaux"]
featured: true
pdf: "Serveur_DNS_unbound.pdf" # <-- AJOUTE CETTE LIGNE
draft: false
---

Dans le cadre d'un projet d'infrastructure, j'ai réalisé l'installation et la configuration complète d'un **serveur DNS récursif** performant. L'objectif principal était de garantir une résolution de noms rapide, privée et sécurisée pour un réseau local, tout en s'affranchissant des serveurs DNS publics.

## Pourquoi un serveur DNS récursif ?

Le déploiement d'un résolveur DNS interne permet d'offrir aux utilisateurs un accès DNS rapide grâce à une gestion fine du cache. Contrairement à un DNS classique, un serveur récursif interroge directement les serveurs racines, offrant ainsi un contrôle total sur le trafic et une meilleure résilience.

## Environnement Technique
* **Hyperviseur :** Proxmox VE.
* **OS :** Ubuntu 24.04 LTS Live-Server.
* **Service :** Unbound DNS.

## Réalisations principales

### 1. Virtualisation et Système
Création d'une machine virtuelle optimisée sur **Proxmox VE** et installation d'Ubuntu Server en respectant les bonnes pratiques de partitionnement et de configuration réseau.

### 2. Configuration d'Unbound
Mise en place du service avec une configuration axée sur la performance et la sécurité :
* **Sécurité renforcée :** Activation de la minimisation de requêtes (QNAME minimisation) et protection contre les attaques DNS.
* **Optimisation :** Configuration du *prefetch* pour renouveler les entrées populaires avant expiration et gestion multi-thread.
* **Contrôle d'accès :** Restriction des requêtes aux seuls clients du réseau local autorisés.

## Compétences validées
* Administration Linux (Ubuntu Server).
* Maîtrise de la virtualisation (Proxmox).
* Configuration avancée de services réseau (DNS récursif).
* Sécurisation des flux réseau.

