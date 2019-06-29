import React from 'react'
import styles from '../Styles/Modules/Footer.module.sass'
import Title from './Title'
const Footer = () => {
    return(
        <footer className={styles.footer}>
            <Title white={false} content='Zobacz więcej!'/>
            <section className={styles.github}>
                <p className={styles.content}>Zaprazsam na mojego githuba gdzie mozna znaleźć większość moich ciekawszych projektów, innych niz w sekcji powyzej:</p>
                <button className={styles.button}>github</button>
            </section>
        </footer>
    )
}

export default Footer