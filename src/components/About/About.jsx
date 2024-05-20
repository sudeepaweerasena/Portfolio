import React from 'react';
import styles from "./About.module.css";
import { getImagesUrl } from '../../utils';


export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                src={getImagesUrl("about/aboutImage.jpeg")} 
                alt="About image" 
                className={styles.aboutimage}
                />
            
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImagesUrl("about/cursorIcon.png")} 
                        alt="cursorIcon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend developer</h3>
                            <p>
                            I am a frontend developer with a keen eye for design and a passion for creating engaging user experiences. With a focus on building and optimizing user interfaces, I strive to deliver visually appealing and performance-driven applications
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImagesUrl("about/serverIcon.png")} alt="severIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend developer</h3>
                            <p>
                            I am a backend developer specializing in building robust and scalable server-side applications. With expertise in database management and API development, I am dedicated to creating efficient and secure backend systems
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImagesUrl("about/serverIcon.png")} alt="severIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Fullstack Developer</h3>
                            <p>
                            I am a full-stack developer with expertise in both front-end and back-end. I excel at creating seamless end-to-end solutions that meet user needs
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
  }