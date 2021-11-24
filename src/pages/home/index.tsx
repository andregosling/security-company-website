import React, { useEffect, useState, useRef } from 'react';
import styles from './main.module.scss';

import AOS from 'aos';
import { useSpring, animated } from 'react-spring';

import { Header } from '../../components/header';

import imgSecurity from '../../assets/securityImage.png';
import contactUs from '../../assets/secondContainer.png';
import socialsImage from '../../assets/socialsImage.png';
import instagramIcon from '../../assets/instagramIcon.png';
import usersSecurity from '../../assets/usersSecurity.png';
import casesSecurity from '../../assets/casesSecurity.png';

import { format } from '../../utils/functions';

export const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    const scrollDestinationRef = useRef<any>();

    const usersStats = useSpring({
        val: 1235120, from: { val: 0 }, config: { duration: 4000 }, scroll: scrollDestinationRef?.current?.getBoundingClientRect().top
    });
    const casesStats = useSpring({ val: 202670, from: { val: 0 }, config: { duration: 4000 } });

    console.log(window.visualViewport.scale)

    return (
        <>
            <Header />
            <main className={styles.homeMain} style={{ width: document.documentElement.clientWidth }}>
                <div>
                    <div className={`${styles.homeFirstItem}`} style={{ height: window.screen.height - ((20 / 100) * window.screen.height), width: document.documentElement.clientWidth }}>
                        <div className={styles.geralContainer}>
                            <div data-aos="fade-right">
                                <div className={`${styles.geralTextContainer} ${styles.firstTextContainer}`}>
                                    <h1>A sua segurança é a nossa prioridade.</h1>
                                    <p>Essa é a nossa razão para realizar o nosso trabalho. Sempre que se sentir inseguro nas ruas, terá um serviço de guarda-costas. À sua disposição, profissionais especializados irão te protejer.</p>
                                </div>
                            </div>
                            <div data-aos="fade-left">
                                <div className={styles.imageContainer}>
                                    <img src={imgSecurity} alt="Imagem ilustrativa sobre segurança" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeSecondItem} style={{ height: window.screen.height - ((40 / 100) * window.screen.height) }}>
                        <div className={styles.geralContainer}>
                            <div data-aos="fade-right">
                                <div className={`${styles.geralTextContainer} ${styles.secondTextContainer}`}>
                                    <h2>Entre em contato conosco e garanta sua segurança.</h2>
                                    <p>Saiba de todas as informações necessárias para criar sua conta conosco.</p>
                                    <button>
                                        Ficar por dentro
                                    </button>
                                </div>
                            </div>
                            <div data-aos="fade-left">
                                <div className={styles.imageContainer}>
                                    <img src={contactUs} alt="Imagem ilustrativa sobre segurança" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.imageBackground} ${styles.secondBackground}`}></div>
                    <div className={styles.homeThirdItem}>
                        <div className={styles.geralContainer}>
                            <div className={styles.flexStatsContainer} ref={scrollDestinationRef.current}>
                                <div data-aos="fade-right" className={styles.statsItem}>
                                    <img src={usersSecurity} alt="Imagem de usuários em segurança" />
                                    <h3>
                                        <animated.div className="number">
                                            {usersStats.val.interpolate(val => format(Math.floor(val)))}
                                        </animated.div>
                                    </h3>

                                    <p>Usuários em segurança</p>
                                </div>
                                <div data-aos="fade-left" className={styles.statsItem}>
                                    <img src={casesSecurity} alt="Imagem de uma mão segurando um escudo" />
                                    <h3>
                                        <animated.div className="number">
                                            {casesStats.val.interpolate(val => format(Math.floor(val)))}
                                        </animated.div>
                                    </h3>
                                    <p>Casos evitados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.imageBackground} ${styles.thirdBackground}`}></div>
                    <div className={styles.homeItem} style={{ height: window.screen.height }}>
                        <div className={styles.geralContainer}>
                            <div data-aos="fade-right">
                                <div className={`${styles.geralTextContainer} ${styles.thirdTextContainer}`}>
                                    <h2>Informe-se de nossos dados</h2>
                                    <div className={styles.empressInformationContainer}>
                                        <div className={styles.informationItem}>
                                            <h5>Endereço comercial</h5>
                                            <a href='https://www.google.com.br/maps/place/R.+Heitor+Penteado,+830+-+Sumarezinho,+São+Paulo+-+SP,+05437-000/@-23.5474637,-46.688915,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5794cf82f2a7:0xd537a8e1e0ff4c6d!8m2!3d-23.5474686!4d-46.686721' target='_blank'>Rua Heitor Penteado, 830, Sumaré, São Paulo, SP</a>
                                        </div>
                                        <div className={styles.informationItem}>
                                            <h5>Número de contato</h5>
                                            <a href='tel:112687-3529' target='_blank'>(11) 2687-3529</a>
                                        </div>
                                        <div className={styles.informationItem}>
                                            <h5>Email</h5>
                                            <a href='mailto:keepcourtkc@gmail.com' target='_blank'>keepcourtkc@gmail.com</a>
                                        </div>
                                        <div className={styles.informationItem}>
                                            <h5>Redes sociais</h5>
                                            <div className={styles.flexBasics}>
                                                <a href="https://www.instagram.com/sioux.seguranca/" target='_blank'><img src={instagramIcon} alt="Logo do instagram" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-left">
                                <div className={styles.imageContainer}>
                                    <img src={socialsImage} alt="Imagem ilustrativa sobre redes sociais" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

