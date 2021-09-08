import React from "react";
import styles from './BaseLoyout.module.css';
import {useHistory} from "react-router-dom";
import logo from '../../images/main.png';

export const Baselayout = ({children}) =>{

    const history = useHistory()

    const toHome = () => {
        history.push(`/`)
    }

    return (
        <div className={styles.mainWrapper}>
            <header><img className={'mainImg'} onClick={toHome} src={logo} alt={'main logo'}/></header>
            {/*<Themes/>*/}
            <main>
                {children}
            </main>
            <footer>footer</footer>
        </div>
    )
}