import Base from "@layouts/Baseof";

export default function VeilleTechnologique() {
  // On crée l'objet "data" pour satisfaire les exigences de Baseof.js
  const data = {
    frontmatter: {
      title: "Ma Veille Technologique",
      description: "Suivi des évolutions du secteur Systèmes et Réseaux.",
    }
  };

  return (
    <Base title={data.frontmatter.title} data={data}>
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="h1 text-dark dark:text-darkmode-light">
              Ma Veille Technologique
            </h1>
            <p className="mt-4 text-lg">
              Suivi et analyse des innovations dans le domaine de la Cybersécurité et du Cloud.
            </p>
          </div>
          
          <div className="row justify-center">
            <div className="col-12 md:col-8 lg:col-6 text-center">
              <div className="p-8 border border-border dark:border-darkmode-border rounded-lg shadow-sm">
                <p className="italic text-gray-500">
                  Le contenu détaillé de ma veille technologique est en cours d'intégration.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}