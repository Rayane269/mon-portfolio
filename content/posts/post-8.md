---
title: "Plan d'adressage et Routage Inter-sites (Cisco)"
date: 2025-02-04
image: /images/post/routing-project.png
categories: ["Réseaux"]
featured: true
pdf: "Projet_Routage.pdf"
draft: false
---

Dans le cadre de ma première année de BTS SIO, j'ai conçu et déployé une infrastructure réseau interconnectant deux sites géographiques : le site **Administration** et le site **Stocks**. Ce projet m'a permis de comprendre les mécanismes fondamentaux du routage et de la segmentation réseau.

## Objectif du projet

L'objectif était de créer un plan d'adressage IP efficace pour deux réseaux locaux (LAN) distincts et d'assurer la communication entre ces sites via un lien WAN, en utilisant des équipements Cisco (réels ou simulés).

## Environnement Technique
* **Simulateur :** Cisco Packet Tracer.
* **Équipements :** 2 Routeurs Cisco, 2 Switchs, 6 Postes de travail.
* **Protocoles :** Routage statique, Adressage IPv4.



## Réalisations principales

### 1. Conception du Plan d'Adressage
Établissement d'un plan rigoureux pour segmenter les sites :
* **Site Administration :** 192.168.1.0/24.
* **Site Stocks :** 192.168.2.0/24 (étendu à 192.168.3.0/24 lors des tests).
* **Lien WAN :** 10.0.0.0/30 (réseau point-à-point entre routeurs).

### 2. Configuration des Routeurs
Mise en place de la connectivité via la ligne de commande Cisco (CLI) :
* **Configuration des interfaces :** Attribution des passerelles par défaut et des adresses WAN.
* **Routage Statique :** Définition des routes pour que chaque routeur sache comment joindre le réseau distant.
* **Persistance :** Sauvegarde des configurations actives dans la NVRAM (`copy running-config startup-config`).

### 3. Tests et Validation
Vérification de la communication de bout en bout à l'aide de commandes de diagnostic :
* **Ping :** Test de connectivité entre les PC de l'Administration et de la Comptabilité.
* **Traceroute :** Analyse du chemin emprunté par les paquets pour valider le passage par les sauts (hops) configurés.

## Compétences validées
* Conception de plans d'adressage IP.
* Configuration de base de matériels Cisco (CLI).
* Implémentation du routage statique.
* Diagnostic et dépannage réseau (Troubleshooting).