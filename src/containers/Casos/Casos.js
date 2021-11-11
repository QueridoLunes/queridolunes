import React from "react";
import styles from "./Casos.module.scss";
import HoverImage from "react-hover-image";

import brif1 from "../../assets/images/BRIF/brif1.png";
import brif2 from "../../assets/images/BRIF/brif2.png";

import galicia1 from "../../assets/images/GALICIA/Galicia1.png";
import galicia2 from "../../assets/images/GALICIA/Galicia2.png";

import wecover1 from "../../assets/images/WECOVER/cover1.png";
import wecover4 from "../../assets/images/WECOVER/cover4.png";

import cultura1 from "../../assets/images/CULTURA/cultura1.png";
import cultura2 from "../../assets/images/CULTURA/cultura2.gif";

import ebras1 from "../../assets/images/EBRAS/ebras1.png";
import ebras2 from "../../assets/images/EBRAS/ebras2.gif";

import flixxo1 from "../../assets/images/FLIXXO/flixxo1.png";
import flixxo2 from "../../assets/images/FLIXXO/flixxo2.gif";

import adila1 from "../../assets/images/ADILA/adila1.png";
import adila2 from "../../assets/images/ADILA/adila2.gif";

import uarp from "../../assets/images/UARP/portada.png";

import ql1 from "../../assets/images/QL/ql1.png";
import ql2 from "../../assets/images/QL/ql2.png";

import calle1 from "../../assets/images/CALLE/calle1.png";
import calle2 from "../../assets/images/CALLE/calle2.gif";

import edify from "../../assets/images/EDIFY/portada.png";

import mins1 from "../../assets/images/MINS/mins1.png";
import mins2 from "../../assets/images/MINS/mins2.gif";


const Casos = () => {

    return (
        <div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.imageContainer}>
					<HoverImage src={brif1} hoverSrc={brif2} />
				</div>
				<div className={styles.imageContainer}>
					<HoverImage src={galicia1} hoverSrc={galicia2} />
				</div>
				<div className={styles.imageContainer}>
					<HoverImage src={wecover1} hoverSrc={wecover4} />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.imageContainer}>
					<HoverImage src={cultura1} hoverSrc={cultura2} />
				</div>
				<div className={styles.imageContainer}>
					<HoverImage src={ebras1} hoverSrc={ebras2} />
				</div>
				<div className={styles.imageContainer}>
					<HoverImage src={flixxo1} hoverSrc={flixxo2} />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.imageContainer}>
					<HoverImage src={adila1} hoverSrc={adila2} />
				</div>
				<div className={styles.imageContainer}>
					<HoverImage src={uarp} hoverSrc={uarp} />
				</div>
				<div className={styles.imageContainer}>
					<HoverImage src={ql1} hoverSrc={ql2} />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.imageContainer}>
					<HoverImage src={calle1} hoverSrc={calle2} />
				</div>
				<div className={styles.imageContainer}>
					<HoverImage src={edify} hoverSrc={edify} />
				</div>
				<div className={styles.imageContainer}>
					<HoverImage src={mins1} hoverSrc={mins2} />
				</div>
			</div>
        </div>
    );
};

export default Casos;