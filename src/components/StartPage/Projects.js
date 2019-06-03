import React from 'react';
import styles from '../../Styles/Modules/StartPage/Project.module.sass'
import img1 from '../../images/projects/strona1.png'
import img2 from '../../images/projects/strona2.png'
import img3 from '../../images/projects/strona3.png'
let scrollV

class Projects extends React.Component {
    state = {
        active: false
     }

    images = []

    handleScroll = () =>{
        const {section} = this
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

    section= React.createRef()

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        for(let i=0;i<3;i++){
            this.images[i] = React.createRef()
        }
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    render() {
        const {section} = this
        return (
            <article ref={section} className={`${styles.container} ${this.state.active ? styles.active : ''}`}>
                <section className={styles.bg}>
                    <h2 className={styles.title}>Projekty</h2>
                </section>
                <section className={styles.project}>
                    <img src={img1} alt=""/>
                    <p>Jest to projekt salonu fryzjerskiego. Jest to strona oparta na reactcie wraz z użytmi m.in react-routerem czy react-transition-group, które pomogły upiększyć przejścia między poszczególnymi podstronami </p>
                    <a target="_blank" href="https://adaxelx.github.io/strona-salonu/"><button className={styles.button}><i className="fab fa-github"></i></button></a>
                </section>
                <section className={styles.project}>
                    <img src={img2} alt=""/>
                    <p>Jest to szablon strony opartej na reactcie. Dodatkiem do niej jest react - router oraz kilka ciekawych animacji</p>
                    <a target="_blank" href="https://adaxelx.github.io/react-react-router-2/"><button className={styles.button}><i className="fab fa-github"></i></button></a>
                </section>
                <section className={styles.project}>
                    <img src={img3} alt=""/>
                    <p>Jeden z moich pierwszych projektów opartych na reactcie. Jest w nim jednak kilka ciekawych rozwiązań i animacji, które warto zobaczyć.</p>
                    <a target="_blank" href="https://adaxelx.github.io/react-with-router/"><button className={styles.button}><i className="fab fa-github"></i></button></a>
                </section>
            </article>
        );
    }
}

export default Projects;