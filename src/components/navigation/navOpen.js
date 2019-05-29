import React from 'react';
import styles from '../../Styles/Modules/OpenedNav.module.sass'
import {NavLink} from 'react-router-dom'
class navOpen extends React.Component {
    state = {  }
    render(props) {
        return (
            <nav className={`${styles.nav} ${this.props.active ? styles.active : ''}`}>
                <div className={styles.content}>
                    <ul className={styles.list}>
                        <NavLink to='/'><li>Start</li></NavLink>
                        <NavLink to='/about'><li>O mnie</li></NavLink>
                        <NavLink to='/contact'><li>Kontakt</li></NavLink>
                    </ul>
                </div>
            </nav>
         );
    }
}

export default navOpen;