import React from 'react';
import styles from '../../Styles/Modules/OpenedNav.module.sass'
import {NavLink} from 'react-router-dom'

class navOpen extends React.Component {
    state = {  }

    render(props) {
        const {active,handleClick} = this.props
        return (
            <nav className={`${styles.nav} ${active ? styles.open : ''}`}>
                <div className={styles.content}>
                    <ul className={styles.list}>
                        <NavLink to='/' className={`${styles.link}`} onClick={handleClick}>
                            <li className={`${this.props.active ? styles.active : ''}`}>Start</li></NavLink>
                        <NavLink to='/about' className={`${styles.link}`} onClick={handleClick}>
                            <li className={`${styles.second} ${this.props.active ? styles.active : ''}`}>O mnie</li></NavLink>
                        <NavLink to='/contact' className={`${styles.link}`} onClick={handleClick}>
                            <li className={`${styles.third} ${this.props.active ? styles.active : ''}`}>Kontakt</li></NavLink>
                    </ul>
                    <aside className={`${styles.socials}`}>
                        <p className={`${styles.text} ${this.props.active ? styles.active : ''}`}>Jeżeli chcesz dowiedzieć się o mnie więcej zapraszam na moje media społecznościowe i githuba</p>
                        <i className={`fab fa-github ${this.props.active ? styles.active : ''}`}></i>
                        <i className={`fab fa-facebook-f ${this.props.active ? styles.active : ''}`}></i>
                        <i className={`fab fa-instagram ${this.props.active ? styles.active : ''}`}></i>
                    </aside>
                </div>
            </nav>
         );
    }
}

export default navOpen;