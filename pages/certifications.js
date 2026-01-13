import Base from "@layouts/Baseof";

export default function Certifications() {
  // On crée un objet "data" fictif pour éviter l'erreur data.frontmatter
  const data = {
    frontmatter: {
      title: "Mes Certifications",
      description: "Liste de mes certifications techniques",
    }
  };

  return (
     <Base title={data.frontmatter.title} data={data}>
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="h1 text-dark dark:text-darkmode-light">
              Mes Certifications
            </h1>
            <p className="mt-4 text-lg">
            Les parcours de certifications complémentaires (PCC) permettent de valider l'acquisition des compétences supplémentaires.
            </p>
          </div>
          
          <div className="row justify-center">
            <div className="col-12 md:col-8 lg:col-6 text-center">
              <div className="p-8 border border-border dark:border-darkmode-border rounded-lg shadow-sm">
                <p className="italic text-gray-500">
                 Contenu est en cours d'intégration...
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
    
  );
}