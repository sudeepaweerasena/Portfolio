import React from 'react';
import { getImagesUrl } from '../../utils';
// Ensure that the CSS module is properly imported and exists in your project
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  // Correct destructuring of the project object
  const { title, level, description, skills, source } = project;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.level}>{level}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.skills}>Skills:{skills} </p>
         
      
      <a href={source} className={styles.link}>Source</a>
      
    </div>
  );
};
