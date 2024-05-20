import React from 'react';
import { getImagesUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (<section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Sudeepa Weerasena</h1>
            <h5 className={styles.title2}>SOFTWARE ENGINEER</h5>
        <p className={styles.description}>
        Welcome to my portfolio! <br></br>
        As a dedicated software engineer, I blend technical proficiency with creative problem-solving to craft innovative solutions. Explore my projects to see how I combine technology and design to create impactful experiences.        </p>
        <a href='mailto:sudeepaweerasena@gmai.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImagesUrl('hero/heroImage1.jpeg')} alt='Hero image' className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
}
