import React, {useEffect} from "react";
import styles from "./Home.module.scss";

import {useDispatch, useSelector} from "react-redux";
import {setLoading} from '../../store/actions/GeneralActions';


import Navbar from "../Navbar/Navbar";
import Casos from "../Casos/Casos";
import videoBanner from "../../assets/images/header.mp4";
import videoLoading from "../../assets/images/loading.mp4";
import left from '../../assets/images/left.svg';
import right from '../../assets/images/right.svg';
import one from '../../assets/images/diario/1.png';
import two from '../../assets/images/diario/2.png';
import three from '../../assets/images/diario/3.png';
import four from '../../assets/images/diario/4.png';
import five from '../../assets/images/diario/5.png';
import six from '../../assets/images/diario/6.png';
import seven from '../../assets/images/diario/7.png';
import eight from '../../assets/images/diario/8.png';
import nine from '../../assets/images/diario/9.png';
import ten from '../../assets/images/diario/10.png';
import eleven from '../../assets/images/diario/11.png';
import twelve from '../../assets/images/diario/12.png';

import Slider from "react-slick";

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
    adaptiveHeight: true
};

const Home = () => {

    const state = useSelector((state) => state.general);
   	const dispatch = useDispatch();

 	useEffect(() => {
        setTimeout(() => {
			dispatch(setLoading())
        }, 5000);
    }, []);

	console.log(state);

    return (
        <div className={(state.loading) ? styles.loadingContainer : styles.container}>
			{(state.loading) &&
				<div className={styles.videoContainer}>
					<video autoPlay muted loop>
						<source src={videoLoading} type="video/mp4"/>
						<source src={videoLoading} type="video/ogg"/>
						Your browser does not support the video tag.
					</video>
				</div>
			}
			
			<Navbar/>
			<video controls autoPlay muted loop>
				<source src={videoBanner} type="video/mp4"/>
				<source src={videoBanner} type="video/ogg"/>
				Your browser does not support the video tag.
			</video>
			<Casos/>
			<div className={`${styles.perfomanceContainer}`}>
				<div className={styles.dialogBox}>
					<img src={left} alt="left"/>
					<div className={styles.textContainer}>
						<p className={styles.text}>Branding</p>
					</div>
					
				</div>
				<div className={styles.dialogBox}>
					<img src={right} alt="right"/>
					<div className={styles.textContainer}>
						<p className={styles.text}>Perfomance</p>
					</div>
				</div>
				<div className={styles.dialogBox}>
					<img src={left} alt="left"/>
					<div className={styles.textContainer}>
						<p className={styles.text}>Creacion de contenido</p>
					</div>
				</div>
				<div className={styles.dialogBox}>
					<img src={right} alt="right"/>
					<div className={styles.textContainer}>
						<p className={styles.text}>Campañas 360</p>
					</div>
				</div>
				<div className={styles.dialogBox}>
					<img src={left} alt="left"/>
					<div className={styles.textContainer}>
						<p className={styles.text}>Diseño</p>
					</div>
				</div>
			</div>
			<div className={`${styles.perfomanceContainer} ${styles.two}`}>
				<div className={styles.dialogBox}>
					<img src={left} alt="left"/>
					<div className={styles.textContainer}>
						<p className={styles.text}>Redes sociales</p>
					</div>
				</div>
				<div className={styles.dialogBox}>
					<img src={right} alt="right"/>
					<div className={styles.textContainer}>
						<p className={styles.text}>Estrategia</p>
					</div>
				</div>
				<div className={styles.dialogBox}>
					<img src={left} alt="left"/>
					<div className={styles.textContainer}>
						<p className={styles.text}>Creatividad</p>
					</div>
				</div>
				<div className={styles.dialogBox}>
					<img src={right} alt="right"/>
					<div className={styles.textContainer}>
						<p className={styles.text}>Web</p>
					</div>
				</div>
			</div>
			<div className={styles.sliderContainer}>
				<Slider {...settings}>
					<div>
						<img src={one} alt="one"/>
					</div>
					<div>
						<img src={two} alt="two"/>
					</div>
					<div>
						<img src={three} alt="three"/>
					</div>
					<div>
						<img src={four} alt="four"/>
					</div>
					<div>
						<img src={five} alt="five"/>
					</div>
					<div>
						<img src={six} alt="six"/>
					</div>
					<div>
						<img src={seven} alt="seven"/>
					</div>
					<div>
						<img src={eight} alt="eight"/>
					</div>
					<div>
						<img src={nine} alt="nine"/>
					</div>
					<div>
						<img src={ten} alt="ten"/>
					</div>
					<div>
						<img src={eleven} alt="eleven"/>
					</div>
					<div>
						<img src={twelve} alt="twelve"/>
					</div>
				</Slider>
			</div>
        </div>
    );
};

export default Home;