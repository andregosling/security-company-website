import React, { useEffect, useState } from 'react';
import styles from './main.module.scss';

import Logo from '../../assets/logo.png';
import acessApp from '../../assets/acessApp.svg';

export const Header = (props: any) => {
    return (
        <footer>
            <div {...props} className={styles.personHeader}>
                <div className={styles.headerContent}>
                    <div className={styles.leftPart}>
                        <img src={Logo} alt="Logo da empresa" />
                    </div>
                    <div className={styles.rightPart}>
                        <div className={styles.redirectItem}>
                            <img src={acessApp} alt="Ícone de saída, indicando redirecionamento para o aplicativo de celular." />
                            <p>Acesse o app</p>
                        </div>
                        <div className={styles.primaryButton}>
                            <button>
                                <p>Cadastre-se</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

