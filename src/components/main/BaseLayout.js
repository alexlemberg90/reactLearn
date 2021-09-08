import React from "react";
import styles from './BaseLoyout.module.css';
import {useHistory} from "react-router-dom";
import logo from '../../images/main.png';
import DropMenu from "../additionalСomponent/dropdown/DropMenu";

export const Baselayout = ({children}) =>{

    const history = useHistory()

    const toHome = () => {
        history.push(`/`)
    }

    return (
        <div className={styles.mainWrapper}>
            <header>
                <DropMenu/>
                <img className={'mainImg'} onClick={toHome} src={logo} alt={'main logo'}/>
                <div>Finder</div>
            </header>
            {/*<Themes/>*/}
            <main>
                {children}
            </main>
            <footer>footer</footer>
        </div>
    )
}