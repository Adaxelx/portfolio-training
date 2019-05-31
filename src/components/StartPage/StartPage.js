import React from 'react';
import Home from './Home.js'
import About from './About.js'
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
        </article> );
    }
}

export default StarPage;