import React from "react";
import styles from "./Navbar.module.scss";
import {Link} from "react-router-dom";

import logo from "../../assets/images/logoql.png";
import en from "../../assets/images/en.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import behance from "../../assets/images/behance.png";
import mail from "../../assets/images/mail.png";

const Navbar = () => {

    return (
        <div className={styles.container}>
            <Link to={"/"}>
                <img src={logo}/>
            </Link>            

            <div className={styles.linkContainer}>
                <ul>
                    <li>
                        <Link to={"/en"}>
                            <img src={en}/>
                        </Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/queridolunesar/" target="_blank" rel="noreferrer">
                            <img src={instagram}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/queridolunes/" target="_blank" rel="noreferrer">
                            <img src={linkedin}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/queridolunes/moodboards" target="_blank" rel="noreferrer">
                            <img src={behance}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={mail}/>
                        </a>
                    </li>
                </ul>			
            </div>
        </div>
    );
};

export default Navbar;