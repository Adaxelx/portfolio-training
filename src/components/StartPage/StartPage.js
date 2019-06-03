import React from 'react';
import Home from './Home.js'
import About from './About.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
class StarPage extends React.Component {
    state = {  }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() {
        return (
        <article>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
        </article> );
    }
}

export default StarPage;