import Base from "@layouts/Baseof";
import Image from "next/image";
import { useState } from "react";

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const data = {
    frontmatter: {
      title: "Mes Certifications",
      description: "Liste de mes certifications techniques et expertises en cybersécurité.",
    }
  };

  const certifs = [
    
    {
      title: "Junior Penetration Tester (PT1)",
      issuer: "TryHackMe",
      date: "27 Janvier 2026",
      id: "THM-68hO7df22c65530d8e7ea532",
      image: "/images/certifs/Rayane Soulaiman.png", 
      description: "Une certification intensive de 37 heures (Score: 816/750) simulant un environnement d'entreprise ultra-réaliste. Au-delà du pentest classique, cet examen a mis à l'épreuve ma capacité à briser les silos techniques en corrélant des vulnérabilités Web complexes avec des architectures Active Directory (AD) et des couches réseaux interconnectées.",
      skills: ["Active Directory Security", "Network Enumeration", "Web App Hacking", "Privilege Escalation", "Pivoting"]
    }
  ];

  const openLightbox = (imgUrl) => {
    setSelectedImage(imgUrl);
    setIsOpen(true);
  };

  return (
    <Base title={data.frontmatter.title} data={data}>
      <section className="section">
        <div className="container max-w-5xl">
          {/* --- EN-TÊTE --- */}
          <div className="text-center mb-16">
            <h1 className="h1 text-dark dark:text-darkmode-light uppercase tracking-tighter font-black">
              Parcours de <span className="text-primary">Certifications</span>
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto opacity-80">
              Les parcours de certifications complémentaires (PCC) permettent de valider officiellement l'acquisition de compétences techniques pointues et recherchées sur le marché.
            </p>
          </div>

          {/* --- LISTE DES CERTIFICATIONS (Mise en page horizontale) --- */}
          <div className="space-y-12">
            {certifs.map((cert, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 bg-white dark:bg-black rounded-2xl border border-border dark:border-darkmode-border shadow-md transition-all duration-300 hover:shadow-xl"
              >
                {/* Côté Image (Aperçu cliquable) */}
                <div className="w-full md:w-2/5">
                  <div 
                    onClick={() => openLightbox(cert.image)}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-zoom-in group shadow-md border border-gray-200 dark:border-gray-700"
                  >
                    <Image 
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    {/* Overlay au survol */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="bg-white/90 text-dark text-xs font-bold px-3 py-2 rounded-full shadow flex items-center gap-1">
                        🔍 Cliquer pour zoomer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Côté Texte & Description */}
                <div className="w-full md:w-3/5 space-y-4">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                      {cert.issuer}
                    </span>
                    <h2 className="text-2xl font-bold text-dark dark:text-darkmode-light mt-2 leading-tight">
                      {cert.title}
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">
                      Délivrée le {cert.date} • ID : <code className="text-xs font-mono bg-gray-200 dark:bg-gray-800 px-1 rounded text-dark dark:text-light">{cert.id}</code>
                    </p>
                  </div>

                  <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Badges de compétences */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cert.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="text-[11px] font-bold bg-white dark:bg-darkmode-body border border-border dark:border-darkmode-border px-2.5 py-1 rounded-md text-gray-700 dark:text-gray-300 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- STRUCTURE LIGHTBOX MODALE (Zoom fluide) --- */}
          {isOpen && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in cursor-zoom-out"
              onClick={() => setIsOpen(false)}
            >
              {/* Bouton Fermer */}
              <button 
                className="absolute top-6 right-6 text-white text-4xl font-light hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
              
              {/* Image en grand */}
              <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Certification Grand Format" 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
                />
              </div>
            </div>
          )}

        </div>
      </section>
    </Base>
  );
}