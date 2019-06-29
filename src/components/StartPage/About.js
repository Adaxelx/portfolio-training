import React from 'react';
import styles from '../../Styles/Modules/StartPage/About.module.sass'
import img from '../../images/Tkd.jpg'
import Title from '../Title'
let scrollV = window.scrollY

const About = () =>{
    return (
        <article className={styles.about}>
            <Title white={true} content='O mnie'/>
            <section className={styles.content}>
                <img src={img} alt="ME2018"/>

                <section className={styles.text}>
                <p>Nazywam się Adrian Mostowski i jestem maturzystą. Moimi pasjami są webdevelopment i sztuka walki Taekwon-Do</p>

                <p>Samym webdevelpmentem zainteresowałem się na początku liceum. Jednak przez brak pomysłów wróciłem do niego dopiero w wakacje 2018 roku. Od tamtej pory regularnie przerabiam kursy i piszę własne projekty oraz staram się rozwijać, aby mój kod był jak najczystszy.</p>

                <p>Aktualnie większość moich projektów jest oparta na Reactcie, ale zwykły HTML czy JS również nie jest mi obcy co można zobaczyć w projektach poniżej.</p>
                </section>
            </section>
        </article>
     );
}

export default About;