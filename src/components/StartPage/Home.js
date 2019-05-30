import React from 'react';
import img from '../../images/mostoski.png'
import styles from '../../Styles/Modules/StartPage/Home.module.sass'
const Home = () => {
    return (
        <section className={styles.home}>
            <h1 className={styles.title}>Adrian Mostowski</h1>
            <h2 className={styles.subtitle}>- Front-End Developer</h2>
            <div className={styles.bg}>
            <img src={img} alt="to ja" className={styles.img}/>
            </div>
        </section>
     );
}

export default Home;