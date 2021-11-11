import React, {useEffect} from "react";
import styles from "./Home.module.scss";

import {useDispatch, useSelector} from "react-redux";
import {setLoading, getPosts} from '../../store/actions/GeneralActions';


import Navbar from "../Navbar/Navbar";
import Casos from "../Casos/Casos";
import videoBanner from "../../assets/images/header.mp4";
import videoLoading from "../../assets/images/loading.mp4";
import left from '../../assets/images/left.svg';
import right from '../../assets/images/right.svg';
import ReactPlayer from 'react-player';

import {useMediaQuery} from "react-responsive";
import TextLoop from "react-text-loop";

import Slider from "react-slick";

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
    adaptiveHeight: true
};

const servicesList = [
'Branding', 
'Perfomance', 
'Creacion de contenido', 
'Campañas 360',
'Diseño',
'Redes sociales',
'Estrategia',
'Creatividad',
'Web'
]

const Home = () => {

    const state = useSelector((state) => state.general);
   	const dispatch = useDispatch();
	const isMobile = useMediaQuery({ query: "(max-width: 991px)" });

 	useEffect(() => {
  		dispatch(getPosts())
        setTimeout(() => {
			dispatch(setLoading())
        }, 5000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

	const renderPerfomance = () => {
		if(isMobile) {
			return (
				<div className={styles.perfomanceContainerMobile}>
					<div className={styles.textContainer}>
						<div className={styles.text}>
							<TextLoop children={servicesList} interval={1500}/>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<>
					<div className={styles.perfomanceContainer}>
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
				</>
			)
		}
	}

    return (
        <div className={(state.loading) ? styles.loadingContainer : styles.container}>
		{(state.loading) ?
			(<div className={styles.videoContainer}>
				<video autoPlay muted loop>
					<source src={videoLoading} type="video/mp4"/>
					<source src={videoLoading} type="video/ogg"/>
					Your browser does not support the video tag.
				</video>
			</div>
			) : (
				<div>
					<Navbar/>
					<ReactPlayer
						className={styles.reactPlayer}
						url={videoBanner}
						playing
						loop
						muted
					/>
					<Casos/>
					{renderPerfomance()}
					<div className={styles.sliderContainer}>
						<Slider {...settings}>
							{state.posts.map((value, index) => {
								return (
									<div key={index}>
										<a href={value.link} target="_blank" rel="noreferrer">
											<img src={value.thumbnail} alt={value.title}/>
										</a>
									</div>
								)
							})}
						</Slider>
					</div>
				</div>
			)}
        </div>
    );
};

export default Home;