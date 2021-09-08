import React from "react";
import styles from './BaseLoyout.module.css'
import {useHistory} from "react-router-dom";

export const Baselayout = ({children}) =>{

    const history = useHistory()

    const toHome = () => {
        history.push(`/`)
    }

    return (
        <div className={styles.mainWrapper}>
            <header>header <button className={'mainButton'} onClick={() => toHome()}>Home Page</button></header>
            {/*<Themes/>*/}
            <main>
                {children}
            </main>
            <footer>footer</footer>
        </div>
    )
}