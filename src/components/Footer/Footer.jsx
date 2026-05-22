import { LuGithub } from "react-icons/lu";
import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © {currentYear} Marie-Claire Delaplanche — Tous droits réservés.
        </p>

        <div className="footer__socials">
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
    </footer>
  );
}

export default Footer;
