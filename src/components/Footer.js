import React from 'react'
import styles from '../Styles/Modules/Footer.module.sass'
import Title from './Title'
const Footer = () => {
    return(
        <footer className={styles.footer}>
            <Title white={false} content='Zobacz więcej!'/>
            <section className={styles.contents}>
            <section className={styles.contener}>
                <p className={styles.content}>Zaprazsam na mojego githuba gdzie mozna znaleźć większość moich ciekawszych projektów, innych niz w sekcji powyzej:</p>
                <button className={styles.button}>github</button>
            </section>
            <section className={styles.contener}>
                <p className={styles.content}>Jezeli chcesz się ze mną skontaktować to mozesz to zrobić za pomocą:</p>
                <p className={styles.p}>adaxelx@o2.pl</p>
                <p className={styles.p}>912 390 000</p>
            </section>
            </section>
        </footer>
    )
}

export default Footer