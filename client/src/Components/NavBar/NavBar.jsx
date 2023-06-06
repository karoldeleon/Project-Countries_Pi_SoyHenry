import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../NavBar/NavBar.module.css';
import myImagehome from '../../Backgrounds/myImagehome.png';
import myImageactivity from '../../Backgrounds/myimagenaddactiviti.png';

const NavBar = () => {
    return (
        <div className={styles.sidenav} >
            <NavLink to="/home">
            <img src={myImagehome} alt="" className={styles.image} />
            </NavLink>
            <NavLink to="/form">
            <img src={myImageactivity} alt="" className={styles.image} />
            </NavLink>
        </div>
    )
}

export default NavBar;