import React from 'react';
import skills from "../../data/skills.json"
import { getImagesUrl } from '../../utils';
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
  <section className={styles.container} id='experience'>
    <h2 className={styles.title}>Skills and Languages</h2>
    <div className={styles.content}>
        <div className={styles.skills}>
            {skills.map((skill,id) => {
                return (
                    <div key = {id} className={styles.skill}>
                        <div className={styles.skillImageContainer}><img src={getImagesUrl(skill.imageSrc)} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                 </div>
            );
        })}
        </div>
        
    </div>
    
  </section>
    );
};
