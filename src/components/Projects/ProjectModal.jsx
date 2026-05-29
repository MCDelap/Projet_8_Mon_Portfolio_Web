import React from "react";
import {
  LuX,
  LuExternalLink,
  LuGithub,
  LuLayers,
  LuTarget,
  LuAward,
  LuTrendingUp,
  LuCheck,
  LuGauge,
} from "react-icons/lu";
import "./ProjectModal.scss";

function ProjectModal({ project, onClose }) {
  // Si pas de projet sélectionné, on n'affiche rien
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Bouton Fermer */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Fermer"
        >
          <LuX />
        </button>

        {/* SECTION HERO (Bannière) */}
        {project.cover && (
          <div className={`modal-hero ${project.themeClass}`}>
            <img
              src={project.cover}
              alt={`Capture du projet ${project.title}`}
              className="modal-mockup-image"
            />
          </div>
        )}

        {/* CORPS DE LA MODALE */}
        <div className="modal-body">
          <span className="project-subtitle">{project.category}</span>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>

          <div className="modal-content-layout">
            {/* COLONNE GAUCHE */}
            <div className="column-main">
              {/* Contexte */}
              {project.context && (
                <div className="project-card-info">
                  <div className="card-header">
                    <div className="card-icon">
                      <LuLayers />
                    </div>
                    <div>
                      <h3>Contexte</h3>
                      <span>SITUATION ET ENJEUX</span>
                    </div>
                  </div>
                  <p>{project.context}</p>
                </div>
              )}

              {/* Objectifs */}
              {project.objectifs && (
                <div className="project-card-info">
                  <div className="card-header">
                    <div className="card-icon">
                      <LuTarget />
                    </div>
                    <div>
                      <h3>Objectifs</h3>
                      <span>BUTS À ATTEINDRE</span>
                    </div>
                  </div>
                  <ul>
                    {project.objectifs.map((objectif, objectifIndex) => (
                      <li key={objectifIndex}>
                        <span className="bullet-icon">
                          <LuCheck />
                        </span>{" "}
                        {objectif}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Compétences */}
              {project.competences && (
                <div className="project-card-info">
                  <div className="card-header">
                    <div className="card-icon">
                      <LuAward />
                    </div>
                    <div>
                      <h3>Compétences développées</h3>
                      <span>APPRENTISSAGES</span>
                    </div>
                  </div>
                  <ul>
                    {project.competences.map((competence, competenceIndex) => (
                      <li key={competenceIndex}>
                        <span className="bullet-icon">
                          <LuCheck />
                        </span>
                        {competence}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Résultats */}
              {project.livrables && (
                <div className="project-card-info">
                  <div className="card-header">
                    <div className="card-icon">
                      <LuCheck />
                    </div>
                    <div>
                      <h3>Résultats et impact</h3>
                      <span>LIVRABLES</span>
                    </div>
                  </div>
                  <ul>
                    {project.livrables.map((livrable, livrableIndex) => (
                      <li key={livrableIndex}>
                        <span className="bullet-icon"><LuCheck /></span>{livrable}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* COLONNE DROITE */}
            <div className="column-side">
              {/* Scores Lighthouse */}
              {project.lighthouseScores && (
                <div className="project-card-info lighthouse-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <LuGauge />
                    </div>
                    <div>
                      <h3>Scores Lighthouse</h3>
                      <span>PERFORMANCES VÉRIFIÉES</span>
                    </div>
                  </div>
                  <div className="lighthouse-flex">
                    <div className="lighthouse-item score-high">
                      <div className="score-circle">
                        {project.lighthouseScores.performance}
                      </div>
                      <span>Performance</span>
                    </div>
                    <div className="lighthouse-item score-high">
                      <div className="score-circle">
                        {project.lighthouseScores.accessibility}
                      </div>
                      <span>Accessibilité</span>
                    </div>
                    <div className="lighthouse-item score-high">
                      <div className="score-circle">
                        {project.lighthouseScores.bestPractices}
                      </div>
                      <span>Bonnes pratiques</span>
                    </div>
                    <div className="lighthouse-item score-high">
                      <div className="score-circle">
                        {project.lighthouseScores.seo}
                      </div>
                      <span>SEO</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Stack Technique */}
              {project.tags && (
                <div className="project-card-info">
                  <div className="card-header">
                    <div className="card-icon">
                      <LuLayers />
                    </div>
                    <div>
                      <h3>Stack technique</h3>
                    </div>
                  </div>
                  <div className="tags-container">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Perspectives */}
              {project.perspectives && (
                <div className="project-card-info">
                  <div className="card-header">
                    <div className="card-icon">
                      <LuTrendingUp />
                    </div>
                    <div>
                      <h3>Perspectives d'amélioration</h3>
                    </div>
                  </div>
                  <ul>
                    {project.perspectives.map(
                      (perspective, perspectiveIndex) => (
                        <li key={perspectiveIndex}>
                          <span className="bullet-icon"><LuCheck /></span>{perspective}</li>
                      ),
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PIED DE MODALE (Liens) */}
        <div className="modal-footer">
          {project.siteLive && (
            <a href={project.siteLive} target="_blank" className="btn btn-live">
              <LuExternalLink /> Visiter le site live
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" className="btn btn-github">
              <LuGithub /> Parcourir le code source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
