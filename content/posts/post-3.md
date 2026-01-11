---
title: "Analyse du protocole ARP et Simulation d'Attaque par Empoisonnement (Spoofing)"
date: 2025-03-15
image: /images/post/arp-spoofing.png
categories: ["Sécurité", "Réseaux"]
featured: false
draft: false
pdf: "Projets_IT_ARP_Spoofing.pdf"
---

Le protocole **ARP (Address Resolution Protocol)** est essentiel au fonctionnement des réseaux IPv4, mais il présente des vulnérabilités critiques. Dans ce projet, j'ai exploré le fonctionnement interne de la résolution d'adresses et simulé une attaque de type "Man-in-the-Middle" par empoisonnement du cache ARP.

## Objectifs du Projet

L'objectif était de comprendre comment les machines associent les adresses IP aux adresses MAC et de démontrer comment une faille de conception dans ce protocole peut permettre l'interception de données.

## Environnement de Test
* **Outils d'analyse :** Wireshark (capture de trames ICMP et ARP).
* **Simulation d'attaque :** Utilisation de **Scapy** (Python) pour forger des paquets réseau.
* **Topologie :** Un sous-réseau IPv4 avec plusieurs machines cibles et une passerelle.

## Étapes clés de la réalisation

### 1. Configuration et Connectivité
Mise en place d'un sous-réseau, configuration des masques et tests de connectivité (Ping). Observation de la table ARP initiale pour vérifier la correspondance IP/MAC.

### 2. Analyse de trafic avec Wireshark
Capture et analyse des requêtes *ARP Request* (Broadcast) et des réponses *ARP Reply* (Unicast). Cette phase a permis de visualiser le processus de "Who has...?" et "Is at...".

### 3. Simulation d'ARP Spoofing
Utilisation d'un script Python avec la bibliothèque **Scapy** pour envoyer en boucle de fausses réponses ARP à une cible. 



L'idée est de faire croire à la cible que l'adresse MAC de l'attaquant est celle de la passerelle par défaut.

### 4. Résultats et Empoisonnement réussi
Vérification sur la machine cible : la table ARP a été modifiée dynamiquement, redirigeant tout le trafic vers l'attaquant. Les captures Wireshark confirment la réussite de l'interception des trames.

## Compétences validées
* Analyse approfondie des trames Ethernet et du protocole ARP.
* Maîtrise de l'outil de diagnostic réseau **Wireshark**.
* Programmation réseau avec **Scapy** pour la cybersécurité.
* Compréhension des attaques de type Man-in-the-Middle (MITM).
