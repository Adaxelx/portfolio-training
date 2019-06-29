import React from 'react';
import styles from '../../Styles/Modules/StartPage/Skills.module.sass'
import Title from '../Title'
import Skill from '../Skill'
/* images */

/* zmienic jak w project te karty*/

import html from '../../images/skills/html.png'
import css from '../../images/skills/css.png'
import git from '../../images/skills/git.png'
import react from '../../images/skills/React.png'
import js from '../../images/skills/js.png'
import node from '../../images/skills/nodejslogo.png'
import sass from '../../images/skills/sass.png'

const Skills = () => {
    const data = [{
        title: 'HTML',
        src: html
    },
    {
        title: 'CSS',
        src: css
    },
    {
        title: 'JavaScript',
        src: js
    },
    {
        title: 'Sass',
        src: sass
    },
    {
        title: 'React',
        src: react
    },
    {
        title: 'Git + Github',
        src: git
    },
    {
        title: 'Node.js',
        src: node
    }]
    const sections = data.map(sec => <Skill key={sec.title} src={sec.src} title={sec.title}/> )
    return (
        <article className={styles.container}>
            <Title white={false} content='Umiejętności'/>
            <section className={styles.images}>
                {sections}
            </section>
        </article>
    );
}

export default Skills;