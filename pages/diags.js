import Base from "@layouts/Baseof";
import Image from "next/image";
import { useState } from "react";

export default function GanttProject() {
  const [isOpen, setIsOpen] = useState(false);

  const data = {
    frontmatter: {
      title: "Gestion de Projet | Diagramme de Gantt",
      description: "Planification des projets, livrables et compétences sur l'ensemble du parcours BTS SIO.",
    }
  };

  // Liste structurée à partir de ton vrai diagramme Gantt
  const periodes = [
    {
      title: "Période 1 : Socle de l'infrastructure",
      date: "Sept 2024 - Nov 2024",
      status: "100% Complété",
      tasks: ["Virtualisation (VMware Workstation)", "Services DHCP / DNS", "Routage & VLANs"],
      color: "border-l-blue-500"
    },
    {
      title: "Période 2 : Sécurisation & Gestion des Accès",
      date: "Déc 2024 - Fév 2025",
      status: "100% Complété",
      tasks: ["Active Directory (AD DS)", "GPO & Unités d'Organisation (UO)", "Pare-feu pfSense & VPN"],
      color: "border-l-red-500"
    },
    {
      title: "Période 3 : Stage chez SCIENDI",
      date: "Mars 2025 - Mai 2025",
      status: "100% Complété",
      tasks: ["Support technique & Helpdesk", "Réponse aux incidents de niveau 1 & 2"],
      color: "border-l-green-500"
    },
    {
      title: "Période 4 : Optimisation & Haute Disponibilité",
      date: "Juin 2025 - Août 2025",
      status: "100% Complété",
      tasks: ["Agrégation de liens (LACP)", "DNS Récursif (Unbound)", "Audit de sécurité (Kali/Hydra)"],
      color: "border-l-orange-500"
    }
  ];

  return (
    <Base title={data.frontmatter.title} data={data}>
      <article className="section pt-10">
        <div className="container max-w-[1000px]">
          
          {/* --- EN-TÊTE DE LA PAGE --- */}
          <header className="mb-12 text-center">
            <h1 className="h1 text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
              Planification <span className="text-primary">Gantt</span>
            </h1>
            <p className="text-xl font-medium opacity-80 mb-10">
              Conduite de projet et suivi des réalisations professionnelles.
            </p>

            {/* --- BLOC SYNTHÈSE (Inspiré de ton modèle de veille) --- */}
            <div className="max-w-4xl mx-auto text-left bg-white dark:bg-black p-8 md:p-10 rounded-2xl border border-border shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] px-4 py-1 font-bold uppercase tracking-widest">
                Méthodologie
              </div>

              <div className="space-y-6 text-base md:text-lg leading-relaxed text-dark dark:text-light">
                <p>
                  Afin d'assurer la traçabilité et la validation de mes compétences en <strong>BTS SIO</strong>, j'ai structuré mon parcours sous forme de projet transverse managé via <strong>GanttProject</strong>. Cette approche me permet de piloter mes apprentissages systèmes, réseaux et applicatifs comme un cycle de déploiement réel en entreprise.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                      Approche Par Périodes
                    </h3>
                    <p className="text-sm opacity-80">
                      Mes livrables techniques sont découpés en jalons trimestriels. Chaque bloc valide un périmètre métier précis : du socle réseau architectural jusqu'aux audits avancés de sécurité cyber.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                      Projets Transversaux Fil Rouge
                    </h3>
                    <p className="text-sm opacity-80">
                      Parallèlement aux blocs d'infrastructure, des tâches de fond s'étendent sur les 22 mois, notamment le développement continu de mon portfolio moderne (<strong>rayane-it.com</strong>) et la maintenance de ma veille.
                    </p>
                  </div>
                </div>

                <p className="border-t border-border pt-6 font-medium italic text-sm opacity-90">
                  "Ce diagramme de Gantt illustre l'alignement entre la théorie académique et la mise en œuvre de solutions d'infrastructures résilientes, d'automatisation DevOps et de gestion de la sécurité."
                </p>
              </div>
            </div>
          </header>

          {/* --- SECTION VISUEL DU DIAGRAMME (Avec Zoom intégré) --- */}
          <div className="pt-2 mb-12">
            <div className="flex items-center mb-6">
              <h2 className="bg-dark text-white px-4 py-1 text-sm font-bold uppercase italic">
                Aperçu Global du Planning
              </h2>
            </div>
            
            <div 
              onClick={() => setIsOpen(true)}
              className="relative w-full aspect-[16/9] rounded-xl overflow-hidden cursor-zoom-in border border-border shadow-md group"
            >
              <Image 
                src="/images/post/Gantt.png" 
                alt="Diagramme de Gantt complet Rayane Soulaiman"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="bg-white text-dark text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  🔍 Cliquer pour inspecter le diagramme en grand
                </span>
              </div>
            </div>
          </div>

          {/* --- GRILLE DES PÉRIODES DÉTAILLÉES (Même design que tes analyses de veille) --- */}
          <div className="pt-2">
            <div className="flex items-center mb-6">
              <h2 className="bg-dark text-white px-4 py-1 text-sm font-bold uppercase italic">
                Détail des Jalons et Compétences
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {periodes.map((p, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 bg-gray-50 dark:bg-darkmode-theme-light rounded-xl border-l-4 ${p.color} border-y border-r border-border shadow-sm flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className="text-xs font-semibold text-gray-400">{p.date}</span>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                        {p.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-dark dark:text-darkmode-light mb-4">
                      {p.title}
                    </h3>
                    <ul className="space-y-2">
                      {p.tasks.map((task, i) => (
                        <li key={i} className="text-sm opacity-80 flex items-center gap-2">
                          <span className="text-primary text-xs">▪</span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- LIGHTBOX (MODALE DE ZOOM) --- */}
          {isOpen && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
              onClick={() => setIsOpen(false)}
            >
              <button 
                className="absolute top-6 right-6 text-white text-4xl font-light hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
              <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
                <img 
                  src="/images/post/Gantt.png" 
                  alt="Diagramme Gantt Grand Format" 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          )}

        </div>
      </article>
    </Base>
  );
}