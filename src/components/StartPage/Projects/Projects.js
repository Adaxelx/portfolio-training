import React from 'react';
import styles from '../../../Styles/Modules/StartPage/Project.module.sass'
import Project from './Project'
import img1 from '../../../images/projects/salon.png'
import img2 from '../../../images/projects/react-router-2.png'
import img3 from '../../../images/projects/react-router.png'
import img4 from '../../../images/projects/windows.png'
import Title from '../../Title'

const Projects = () => {
    const data = [{
        key: 0,
        src: img1,
        content:'Jedna z wielu prób utworzenia strony salonu fryzjerskiego. Mozna tam znaleźć animacje na scrolla, formularz, rózne nawigacje na desktop/mobile oraz ciekawą animacje routingu. Strona oparta na reactcie z wykorzystaniem react-routera, react - transition - group oraz preprocesora Sass.',
        link: 'https://adaxelx.github.io/strona-salonu/'
    },
    {
        key: 1,
        title: 'Windows',
        src: img4,
        content:
          'Jest to mój pierwszy wspólny projekt, czyli klasyczny windows. Przenoszenie ikon, pasek zadań z zegarkiem i menu start otwierające się okna z połączonymi ściezkami - to wszystko jest tutaj. Projekt jest oparty na reactcie, ale nie zabrakło tam tez styled-components czy context-api.',
        link: 'https://github.com/superkacper4/windows',
    },
    {
        key: 2,
        src: img2,
        content: 'Jest to szablon strony opartej na reactcie. Dodatkiem do niej jest react-router oraz kilka ciekawych animacji',
        link: 'https://adaxelx.github.io/react-react-router-2/'
    },
    {
        key: 3,
        src: img3,
        content: 'Jeden z moich pierwszych projektów opartych na reactcie. Jest w nim jednak kilka ciekawych rozwiązań i animacji, które warto zobaczyć.',
        link: 'https://adaxelx.github.io/react-with-router/'
    },];
    const sections = data.map(sec => <Project src={sec.src} content={sec.content} key={sec.key} link={sec.link}/>);
        return (
            <article className={styles.container}>
                <Title white={true} content='Projekty'/>
                <section className={styles.sections}>
                    {sections}
                </section>
            </article>
        );
}


export default Projects;