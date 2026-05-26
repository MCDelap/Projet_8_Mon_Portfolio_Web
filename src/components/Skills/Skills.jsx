import {
  SiReact,
  SiJavascript,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGooglechrome,
  SiGithub,
} from "react-icons/si";
import "./Skills.scss";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <span className="section-label">Compétences</span>
        <h2 className="skills__title">La stack qui propulse mes projets.</h2>
        <p className="skills__description">
          Des outils choisis avec soin pour livrer des applications rapides,
          maintenables et accessibles à tous.
        </p>

        <div className="skills__grid">
          {/* Ligne 1 : Frontend */}
          <div className="skill-card">
            <span className="skill-card__level">Avancé</span>
            <div className="skill-card__content">
              <SiReact className="skill-card__icon" />
              <h3>React</h3>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-card__level">Avancé</span>
            <div className="skill-card__content">
              <SiJavascript className="skill-card__icon" />
              <h3>JavaScript</h3>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-card__level">Avancé</span>
            <div className="skill-card__content">
              <SiSass className="skill-card__icon" />
              <h3>Sass</h3>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-card__level">Avancé</span>
            <div className="skill-card__content">
              <SiGooglechrome className="skill-card__icon" />
              <h3>SEO & Access</h3>
            </div>
          </div>

          {/* Ligne 2 : Backend & Tools */}
          <div className="skill-card">
            <span className="skill-card__level">Confirmé</span>
            <div className="skill-card__content">
              <SiNodedotjs className="skill-card__icon" />
              <h3>Node.js</h3>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-card__level">Confirmé</span>
            <div className="skill-card__content">
              <SiExpress className="skill-card__icon" />
              <h3>Express</h3>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-card__level">Confirmé</span>
            <div className="skill-card__content">
              <SiMongodb className="skill-card__icon" />
              <h3>MongoDB</h3>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-card__level">Avancé</span>
            <div className="skill-card__content">
              <SiGithub className="skill-card__icon" />
              <h3>Git & GitHub</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
