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
            <header>header <button onClick={() => toHome()}>To Home Page</button></header>
            <main>
                {children}
            </main>
            <footer>footer</footer>
        </div>
    )
}