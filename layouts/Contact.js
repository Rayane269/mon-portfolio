import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, description, form_action } = frontmatter;

  const [status, setStatus] = useState(""); // "", "SUCCESS", "ERROR"

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row relative pb-16">
          <div className="lg:col-6">
            {markdownify(title, "h1", "h1 text-left lg:text-[55px] mt-12")}
            <div className="content text-left mt-4">
              {markdownify(description, "p")}
            </div>
          </div>

          <div className="contact-form-wrapper rounded border border-border p-6 dark:border-darkmode-border lg:col-6 mt-12 lg:mt-0">
            {status === "SUCCESS" ? (
              <div className="bg-theme-light dark:bg-darkmode-theme-dark p-8 rounded text-center">
                <h3 className="text-primary h3 mb-4">Message envoyé !</h3>
                <p>Merci, je reviens vers vous très rapidement.</p>
                <button onClick={() => setStatus("")} className="btn btn-primary mt-6">Renvoyer un message</button>
              </div>
            ) : (
              <form 
                onSubmit={submitForm}
                action={form_action}
                method="POST"
                className="contact-form"
              >
                <div className="mb-6">
                  <label className="mb-2 block font-secondary" htmlFor="name">Nom complet :</label>
                  <input className="form-input w-full" name="name" type="text" placeholder="Ex: Jean Dupont" required />
                </div>
                <div className="mb-6">
                  <label className="mb-2 block font-secondary" htmlFor="email">Votre Email :</label>
                  <input className="form-input w-full" name="email" type="email" placeholder="nom@exemple.com" required />
                </div>
                <div className="mb-6">
                  <label className="mb-2 block font-secondary" htmlFor="message">Message :</label>
                  <textarea className="form-textarea w-full" name="message" rows="7" placeholder="Comment puis-je vous aider ?" required />
                </div>
                
                <button type="submit" className="btn btn-primary w-full">Envoyer</button>
                
                {status === "ERROR" && <p className="text-red-500 mt-4 text-center">Oups ! Une erreur est survenue.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;