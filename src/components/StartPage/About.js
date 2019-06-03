import React from 'react';
import styles from '../../Styles/Modules/StartPage/About.module.sass'
import img from '../../images/Tkd.jpg'
let scrollV = window.scrollY
class About extends React.Component{
    state = {
        active: false,
    }

    handleScroll = () =>{
        const {section, title} = this
        scrollV = window.scrollY
        if(scrollV>section.current.offsetTop - window.innerHeight + 200){
            this.setState({
                active: true
            })
        }
        // else{
        //     this.setState({
        //         active: false
        //     })
        // }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    section = React.createRef();
    title = React.createRef()

    render(){
    const {section,title} = this
    const {active} = this.state
    return (
        <article ref={section} className={`${styles.about} ${active ? styles.active : ''}`}>
            <section className={styles.container}>
                <h2 ref={title}className={styles.title}>O mnie</h2>
            </section>
            <section className={styles.content}>
                <img src={img} alt="ME2018"/>
                <p>Nazywam się Adrian Mostowski i jestem maturzystą. Moimi pasjami są webdevelopment i sztuka walki Taekwon-Do</p>

                <p>Samym webdevelpmentem zainteresowałem się na początku liceum. Jednak przez brak pomysłów wróciłem do niego dopiero w wakacje 2018 roku. Od tamtej pory regularnie przerabiam kursy i piszę własne projekty oraz staram się rozwijać, aby mój kod był jak najczystszy.</p>

                <p>Aktualnie większość moich projektów jest oparta na Reactcie, ale zwykły HTML czy JS również nie jest mi obcy co można zobaczyć w projektach poniżej.</p>
            </section>
        </article>
     );
    }

}

export default About;