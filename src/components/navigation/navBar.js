import React from 'react';
import styles from '../../Styles/Modules/Navigation.module.sass'

class NavBar extends React.Component{
    render(){
        return (
            <div className={styles.nav}>
                <span className={`${styles.bar} ${styles.top}`}></span>
                <span className={`${styles.bar} ${styles.mid}`}></span>
                <span className={`${styles.bar} ${styles.bot}`}></span>
            </div>
         );
    }
}

export default NavBar;