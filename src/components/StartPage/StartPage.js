import React from 'react';
import Home from './Home.js'
import About from './About.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import styles from '../../Styles/Modules/StartPage/StartPage.module.sass'
class StarPage extends React.Component {
    state = {  }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() {
        return (
        <article className={styles.container}>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
        </article> );
    }
}

export default StarPage;