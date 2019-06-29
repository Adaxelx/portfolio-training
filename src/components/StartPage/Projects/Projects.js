import React from 'react';
import styles from '../../../Styles/Modules/StartPage/Project.module.sass'
import Project from './Project'
import img1 from '../../../images/projects/strona1.png'
import img2 from '../../../images/projects/strona2.png'
import img3 from '../../../images/projects/strona3.png'
import img4 from '../../../images/projects/windows.png'
let scrollV

class Projects extends React.Component {
    state = {
        active: false
     }

    images = []
    data = [{
        key: 0,
        src: img1,
        content:'Jedna z wielu prób utworzenia strony salonu fryzjerskiego. Mozna tam znaleźć animacje na scrolla, formularz, rózne nawigacje na desktop/mobile oraz ciekawą animacje routingu. Strona oparta na reactcie z wykorzystaniem react-routera, react - transition - group oraz preprocesora Sass.',
        link: 'https://adaxelx.github.io/strona-salonu/'
    },
    {
        key: 1,
        src: img2,
        content: 'Jest to szablon strony opartej na reactcie. Dodatkiem do niej jest react-router oraz kilka ciekawych animacji',
        link: 'https://adaxelx.github.io/react-react-router-2/'
    },
    {
        key: 2,
        src: img3,
        content: 'Jeden z moich pierwszych projektów opartych na reactcie. Jest w nim jednak kilka ciekawych rozwiązań i animacji, które warto zobaczyć.',
        link: 'https://adaxelx.github.io/react-with-router/'
    },
    {
        key: 3,
        title: 'Windows',
        src: img4,
        content:
          'Jest to mój pierwszy wspólny projekt, czyli klasyczny windows. Przenoszenie ikon, pasek zadań z zegarkiem i menu start otwierające się okna z połączonymi ściezkami - to wszystko jest tutaj. Projekt jest oparty na reactcie, ale nie zabrakło tam tez styled-components czy context-api.',
        link: 'https://github.com/superkacper4/windows',
      },]

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
        const {section,data} = this
        const sections = data.map(sec => <Project src={sec.src} content={sec.content} key={sec.key} link={sec.link}/>)
        return (
            <article ref={section} className={`${styles.container} ${this.state.active ? styles.active : ''}`}>
                <section className={styles.bg}>
                    <h2 className={styles.title}>Projekty</h2>
                </section>
                {sections}
            </article>
        );
    }
}

export default Projects;