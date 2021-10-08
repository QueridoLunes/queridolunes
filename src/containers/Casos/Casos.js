import React from "react";
import styles from "./Casos.module.scss";

import brif from "../../assets/images/BRIF/portada.png";
import galicia from "../../assets/images/GALICIA/portada.png";
import wecover from "../../assets/images/WECOVER/portada.png";

import cultura from "../../assets/images/CULTURA/portada.png";
import ebras from "../../assets/images/EBRAS/portada.png";
import flixxo from "../../assets/images/FLIXXO/portada.png";

import adila from "../../assets/images/ADILA/portada.png";
import uarp from "../../assets/images/UARP/portada.png";
import ql from "../../assets/images/QL/portada.png";

import calle from "../../assets/images/CALLE/portada.png";
import edify from "../../assets/images/EDIFY/portada.png";
import mins from "../../assets/images/MINS/portada.png";

const Casos = () => {

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.imageContainer}>
                    <img src={brif}/>
                </div>
                <div className={styles.imageContainer}>
                    <img src={galicia}/>
                </div>
                <div className={styles.imageContainer}>
                    <img src={wecover}/>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.imageContainer}>
                    <img src={cultura}/>
                </div>
                <div className={styles.imageContainer}>
                    <img src={ebras}/>
                </div>
                <div className={styles.imageContainer}>
                    <img src={flixxo}/>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.imageContainer}>
                    <img src={adila}/>
                </div>
                <div className={styles.imageContainer}>
                    <img src={uarp}/>
                </div>
                <div className={styles.imageContainer}>
                    <img src={ql}/>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.imageContainer}>
                    <img src={calle}/>
                </div>
                <div className={styles.imageContainer}>
                    <img src={edify}/>
                </div>
                <div className={styles.imageContainer}>
                    <img src={mins}/>
                </div>
            </div>
        </div>
    );
};

export default Casos;