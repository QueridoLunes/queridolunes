import React from "react";
import styles from "./Navbar.module.scss";
import {Link} from "react-router-dom";

import logo from "../../assets/images/logoql.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import mail from "../../assets/images/mail.png";

const Navbar = () => {

    return (
        <div className={styles.container}>
            <Link to={"/"}>
                <img src={logo} alt={logo}/>
            </Link>            

            <div className={styles.linkContainer}>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/queridolunesar/" target="_blank" rel="noreferrer">
                            <img src={instagram} alt={instagram}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/queridolunes/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt={linkedin}/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:hola@queridolunes.com">
                            <img src={mail} alt={mail}/>
                        </a>
                    </li>
                </ul>			
            </div>
        </div>
    );
};

export default Navbar;