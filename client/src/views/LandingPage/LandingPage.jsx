import React from "react";
import styles from './LandingPage.module.css';

import { Link } from "react-router-dom";


const LandingPage = () => {
    return(
        <>
        <div className={styles.containerlandin}>
        <h1 className={styles.h1landing} >Welcome To Henry Countries </h1>
        <div className={styles.wrap} >
        <Link to={"/home"} >
        <button className={styles.buttonlanding} >Home</button>
        </Link>
        </div>
        </div>
        </>
    )
}

export default LandingPage;