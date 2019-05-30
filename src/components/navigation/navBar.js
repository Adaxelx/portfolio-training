import React from 'react';
import styles from '../../Styles/Modules/ButtonNav.module.sass'

const NavBar = (props) =>{
    return (
        <button className={`${styles.nav} ${props.active ? styles.active : ''}`} onClick={props.handleClick}>
            <div className={`${styles.bars} ${props.active ? styles.active : ''}`}>
                <span className={`${styles.bar} ${styles.top} ${props.active ? styles.active : ''}`}></span>
                <span className={`${styles.bar} ${styles.bot} ${props.active ? styles.active : ''}`}></span>
            </div>
        </button>
    );
}


export default NavBar;