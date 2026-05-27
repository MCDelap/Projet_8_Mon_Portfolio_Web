import projectsData from "../../data/projects.json";
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { LuExternalLink } from "react-icons/lu";
import "./Projects.scss";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        {/* Label et Titre de section */}
        <span className="section-label">Portfolio</span>
        <h2 className="projects__title">
          Une sélection de projets <span className="highlight">récents.</span>
        </h2>
        <p className="projects__description">
          Chaque projet illustre une approche différente : du développement
          front-end ambitieux à l'optimisation technique.
        </p>

        {/* Grille de projets */}
        <div className="projects__grid">
          {projectsData.map((project, projectIndex) => (
            <article key={projectIndex} className="project-card">
              {/* Bannière colorée : Applique la classe définie dans le JSON */}
              <div className={`project-card__banner ${project.themeClass}`}>
                <h3>{project.title}</h3>
              </div>

              <div className="project-card__content">
                <span className="project-card__category">
                  {project.category}
                </span>
                <h4 className="project-card__name">{project.title}</h4>
                <p className="project-card__text">{project.description}</p>

                {/* Tags (badges) */}
                <div className="project-card__tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card__links">
                  <button
                    className="project-link"
                    aria-label={`Voir ${project.title}`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <LuExternalLink /> Voir le projet
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* Affiche la modale uniquement si un projet est sélectionné */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
