import "./Hero.scss";
import { LuArrowRight, LuGithub } from "react-icons/lu";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <span className="section-label">Bienvenue sur mon portfolio</span>

        <h1 className="hero__title">
          Bonjour, je suis <span className="hero__name">M-Claire Delaplanche</span>
        </h1>

        <h2 className="hero__subtitle">Développeuse Web Junior</h2>

        <p className="hero__description">
          Passionnée par le Front-end, je crée des interfaces élégantes tout en
          garantissant un SEO technique solide et une accessibilité optimale.
          Mon approche est centrée sur la performance, pour des sites rapides et
          visibles sur tous les moteurs de recherche.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn-primary">
            Voir mes projets <LuArrowRight />
          </a>
          <a href="#contact" className="btn-outline">
            Discutons de votre projet
          </a>
        </div>

        <div className="hero__socials">
          <a
            href="https://github.com/MCDelap"
            target="_blank"
            className="social-link"
            aria-label="Voir mon profil GitHub"
          >
            <LuGithub className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
