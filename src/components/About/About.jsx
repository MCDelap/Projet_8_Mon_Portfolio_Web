import { LuTarget, LuSparkles, LuRocket } from "react-icons/lu";
import "./About.scss";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <span className="section-label">À Propos</span>

        <h2 className="about__title">
          Une développeuse passionnée par{" "}
          <span className="highlight">l'expérience utilisateur </span> et la{" "}
          <span className="highlight">performance</span>.
        </h2>

        <div className="about__pitch">
          <p>
            Mon parcours chez OpenClassrooms m'a permis de transformer ma
            rigueur naturelle en une expertise technique centrée sur
            l'utilisateur.
          </p>
          <p>
            Je suis convaincue qu'un produit d'excellence naît de l'équilibre
            entre une interface intuitive, une architecture technique rigoureuse
            et une optimisation invisible. C'est cette exigence que je porte
            dans chaque projet, du soin apporté aux détails à l'optimisation
            SEO, pour transformer des concepts en expériences numériques
            durables.
          </p>
          <p>
            Mon ambition est aujourd'hui de mettre mon expertise technique au
            service de projets innovants, en accompagnant des porteurs de
            solutions à fort impact dans la création d'interfaces intelligentes,
            performantes et scalables.
          </p>
        </div>

        <div className="about__grid">
          {/* Carte Parcours */}
          <div className="about__card">
            <div className="icon-wrapper">
              <LuTarget />
            </div>
            <h3>Parcours</h3>
            <p>
              Formation intensive validant des compétences en architecture
              logicielle, méthodes Agiles et développement d'applications
              modernes.
            </p>
          </div>

          {/* Carte Expertise */}
          <div className="about__card">
            <div className="icon-wrapper">
              <LuSparkles />
            </div>
            <h3>Expertise</h3>
            <p>
              Spécialisée en React pour le développement d'interfaces
              dynamiques. Maîtrise du SEO technique et de l'accessibilité
              (WCAG).
            </p>
          </div>

          {/* Carte Objectifs */}
          <div className="about__card">
            <div className="icon-wrapper">
              <LuRocket />
            </div>
            <h3>Vision</h3>
            <p>
              Bâtir un web inclusif et rapide, où chaque ligne de code sert la
              fluidité de l'expérience et la visibilité du projet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
