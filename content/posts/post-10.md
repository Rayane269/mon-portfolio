---
title: "Projet fil rouge AssurCorp : fondation de l'infrastructure du siège"
date: 2026-10-12
image: /images/post/assurcorp-project.png
categories: ["Systèmes & Réseaux", "Sécurité"]
featured: true
pdf: "Projet_AssurCorp_Phase1_Documentation_technique.pdf"
draft: false
---

Premier projet de mon **Bachelor Administrateur d'Infrastructures Sécurisées (AIS)**, AssurCorp est un projet fil rouge qui consiste à bâtir, sécuriser puis faire évoluer le système d'information d'une compagnie d'assurance fictive. Cette **phase 1** pose les fondations du siège : routeur pare-feu **pfSense**, deux contrôleurs de domaine **Windows Server** redondants, partages de fichiers répliqués **DFS-R** et gestion de parc **GLPI** reliée à l'annuaire.

> La phase 1 est en cours : la documentation jointe (v0.1) rend compte de ce qui est réalisé et prouvé à ce jour, ainsi que de ce qui reste à faire.

## Objectif du projet

Mettre en place une maquette entièrement virtualisée d'un siège d'entreprise, documentée de façon reproductible : chaque opération est accompagnée des commandes utilisées et d'une capture qui en apporte la preuve. Cette infrastructure servira de base aux phases suivantes du projet (intégration d'un second site, audit de sécurité puis remédiation).

## Environnement Technique
* **Virtualisation :** VMware Workstation sur poste Linux, réseau NAT pour Internet et réseau hôte isolé (vmnet2) pour le LAN du siège.
* **Réseau :** pfSense CE 2.7.2 (passerelle 192.168.10.1), LAN 192.168.10.0/24 avec plan d'adressage (IP fixes de .1 à .99, DHCP de .100 à .200).
* **Systèmes :** Windows Server 2022 (SRV-DC1, SRV-DC2), Debian 13 « trixie » (SRV-GLPI), poste client Windows (PC-GEST01).
* **Services :** Active Directory, DNS, DHCP en basculement, DFS Namespace et DFS Replication, GPO.
* **Gestion de parc :** GLPI 12, Apache, MariaDB, agent GLPI, liaison LDAP.

---

## Réalisations principales

### 1. Routeur pfSense et réseau isolé
* **Réseau dédié :** création d'un réseau virtuel *host-only* sans DHCP, isolé de la machine hôte : seul pfSense accède à Internet via le NAT.
* **Configuration :** correction de l'adresse LAN par défaut (192.168.10.254 → 192.168.10.1/24), serveur DHCP de pfSense désactivé au profit de celui de l'Active Directory, mot de passe administrateur remplacé.

### 2. Serveur de gestion de parc SRV-GLPI (Debian 13)
* **Système :** partitionnement manuel, disque de données dédié monté sur `/data`, SSH sécurisé.
* **Pile LAMP :** Apache, PHP et MariaDB, base de données GLPI stockée sur le disque de données, utilisateur SQL à mot de passe fort.
* **GLPI 12 :** installation, puis liaison à l'annuaire via un compte de service dédié `svc_glpi` (et non un compte d'administration) : test LDAP réussi sur les 5 étapes, 17 entrées trouvées.

### 3. Deux contrôleurs de domaine redondants
* **SRV-DC1 :** création de la forêt `assurcorp.local`, DNS intégré avec redirecteur, serveur DHCP autorisé avec l'étendue LAN-SIEGE.
* **SRV-DC2 :** second contrôleur de domaine, réplication Active Directory sans échec, DNS sur les deux serveurs.
* **Haute disponibilité DHCP :** basculement en équilibrage de charge 50 % / 50 % entre les deux contrôleurs, état *Normal*.

### 4. Annuaire structuré et modèle AGDLP
* **Import :** 16 comptes et 5 groupes globaux importés, réplication vérifiée depuis SRV-DC2.
* **Arborescence d'OU :** une OU par service (IT, RH, Compta, Direction, Gestionnaires), et des OU séparées pour les serveurs, les postes, les comptes de service et les comptes d'administration.
* **AGDLP :** comptes → groupes globaux (`GG_*`) → groupes de domaine local (`DL_*`) → droits NTFS. Exemple : la Direction peut consulter la Comptabilité en lecture seule grâce à `DL_Partage_Compta_R`.

### 5. Partages de fichiers DFS et DFS-R
* **Espace de noms :** `\\assurcorp.local\Partages`, avec énumération basée sur l'accès (chaque utilisateur ne voit que les dossiers auxquels il a droit).
* **Réplication :** cinq dossiers de service, chacun avec deux cibles (DC1 et DC2), groupe de réplication à l'état *Normal*. Test validé : un fichier créé sur DC1 apparaît sur DC2, sa suppression est elle aussi répliquée.

### 6. Sécurité : pare-feu et GPO
* **Pare-feu Windows :** actif sur les trois profils des deux contrôleurs, seule règle ajoutée : l'écho ICMPv4 limité au profil Domaine.
* **GPO créées en PowerShell** (donc reproductibles) : stratégie de mots de passe et de verrouillage, `GPO-Poste-Securite` sur les postes, `GPO-Utilisateurs-Restrictions` sur les utilisateurs, et lecteur réseau `P:` mappé par GPO Preferences.

### 7. Gestion des actifs (CMDB GLPI)
* **Agents GLPI** déployés sur les deux contrôleurs et le poste client : les machines remontent automatiquement dans l'inventaire.
* **CMDB :** fiche du routeur PF-SIEGE avec son port LAN, création des premiers applicatifs (service Active Directory…).

---

## Incidents résolus
Un projet réel ne se déroule jamais sans accroc. Quelques problèmes rencontrés et leur résolution :
* **Réseau vmnet2 absent** dans VMware : redémarrage des services réseau de l'hôte (`vmware-networks --stop` puis `--start`).
* **Résolution DNS en échec sur Debian** : le paquet `dhcpcd` écrasait `resolv.conf` ; suppression du paquet et configuration manuelle.
* **Copier-coller impossible** sans VMware Tools et clavier mal interprété (QWERTY/AZERTY) : transfert des scripts par un serveur HTTP temporaire sur SRV-GLPI, limité au LAN puis supprimé.
* **Espace de noms DFS non créé** : le partage racine manquait ; création du partage `D:\DFSRoots\Partages` puis de l'espace de noms seul, sans relancer le script complet (pour éviter les doublons DFS-R).

## Prochaines étapes
* Sauvegarde **Veeam** sur un serveur dédié (SRV-BKP) : planification, rétention, test de restauration, RPO et RTO.
* Finalisation de pfSense, de la CMDB GLPI et des preuves du poste client (accès aux partages par service, GPO appliquées).

## Compétences mobilisées
* Conception d'une architecture virtualisée et d'un plan d'adressage IP.
* Administration Windows Server : Active Directory, DNS, DHCP haute disponibilité, DFS-R, GPO.
* Administration Linux (Debian) et déploiement d'une application web (LAMP, GLPI).
* Gestion des identités et des droits (modèle AGDLP, comptes de service dédiés).
* Gestion de parc et des configurations (CMDB GLPI).
* Documentation technique reproductible et résolution d'incidents.
