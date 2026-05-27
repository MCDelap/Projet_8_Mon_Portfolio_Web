import { LuMail, LuMapPin, LuGithub, LuSend } from "react-icons/lu";
import "./Contact.scss";

function Contact() {
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <span className="section-label">Contact</span>
        <h2 className="contact__title">
          Travaillons <span className="highlight">ensemble.</span>
        </h2>
        <p className="contact__description">
          Une idée, un projet, une question ? N'hésitez pas — je réponds sous
          48h ouvrées.
        </p>

        <div className="contact__wrapper">
          {/* ========================================== */}
          {/* --- COLONNE INFOS & RÉSEAUX SOCIAUX ---    */}
          {/* ========================================== */}
          <div className="contact__info">
            {/* Carte Localisation */}
            <div className="info-card">
              <div className="icon-wrapper">
                <LuMapPin />
              </div>
              <div className="info-card__text">
                <span>LOCALISATION</span>
                <strong>Le Havre, France</strong>
              </div>
            </div>

            {/* Liens de réseaux sociaux */}
            <div className="contact__socials">
              <a
                href="https://github.com/MCDelap"
                target="_blank"
                className="social-button"
              >
                <LuGithub /> GitHub
              </a>
            </div>
          </div>
          {/* ========================================== */}
          {/* --- COLONNE FORMULAIRE DE CONTACT ---      */}
          {/* ========================================== */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact__form"
          >
            {/* Configuration Web3Forms */}
            <input type="hidden" name="access_key" value={web3FormsKey} />
            <input type="hidden" name="from_name" value="Portfolio de Marie" />

            {/* Protection contre le spam */}
            <input type="hidden" name="botcheck" />

            {/* Champs du formulaire */}
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="vous@exemple.fr"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Parlez-moi de votre projet"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Envoyer le message <LuSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
