import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImagesUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return( <nav className = {styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={
                menuOpen 
                ? getImagesUrl("nav/closeIcon.png")
                : getImagesUrl("nav/menuIcon.png")
            } 
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=> setMenuOpen(false)}>
                <li><a href = "#about">About</a></li>
                <li><a href = "#experience">Experience</a></li>
                <li><a href = "#projects">Projects</a></li>
                <li><a href = "#contact">Cantact</a></li>
            </ul>
        </div>
    </nav>
    );
}

