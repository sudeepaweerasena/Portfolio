import React from 'react';
import projects from "../../data/projects.json";
import { ProjectCard } from './ProjectCard';
// Ensure that the CSS module is properly imported and exists in your project
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}> {/* Ensure this class is defined in your CSS */}
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
