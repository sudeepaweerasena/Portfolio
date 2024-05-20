import React from 'react';
import { getImagesUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
        <p>Feel free to reach out!</p></div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src = {getImagesUrl("contact/emailIcon.png")} alt="Emial icon"/>
                <a href='mailto:sudeepaweerasena@gmial.com'>Email</a>
            </li>
            <li className={styles.link}> 
                <img src = {getImagesUrl("contact/linkedinIcon.png")} alt="linkediIcon"/>
                <a href='https://www.linkedin.com/in/sudeepa-weerasena-4a0a2b260/'>LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src = {getImagesUrl("contact/githubIcon.png")} alt="github icon"/>
                <a href='https://github.com/sudeepaweerasena'>github</a>
            </li>
        </ul>
    </footer>
  )
}
