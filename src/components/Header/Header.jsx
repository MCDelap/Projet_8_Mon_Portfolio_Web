import React, { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import "./Header.scss";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
       {open ? (
          <button className="header__close-btn" onClick={() => setOpen(false)} aria-label="Fermer le menu">
            <LuX />
          </button>
        ) : (
          <button className="header__burger-btn" onClick={() => setOpen(true)} aria-label="Ouvrir le menu">
            <LuMenu />
          </button>
        )}

        <nav className={`header__nav ${open ? "is-open" : ""}`}>
          <ul className="header__nav-list">
            <li>
              <a href="#hero" className="header__nav-link" onClick={() => setOpen(false)}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" className="header__nav-link" onClick={() => setOpen(false)}>
                À propos
              </a>
            </li>
            <li>
              <a href="#skills" className="header__nav-link" onClick={() => setOpen(false)}>
                Compétences
              </a>
            </li>
            <li>
              <a href="#projects" className="header__nav-link" onClick={() => setOpen(false)}>
                Portfolio
              </a>
            </li>

            {/* Le lien Contact s'affiche en bas de la liste uniquement quand le menu est déplié */}
            {open && (
              <li>
                <a
                  href="#contact"
                  className="header__nav-link"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
              </li>
            )}
          </ul>
        </nav>

       {/* Le bouton bleu "Me contacter" s'affiche uniquement quand le menu est fermé */}
        {!open && (
          <div className="header__action">
            <a href="#contact" className="header__btn-contact">
              Me contacter
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
