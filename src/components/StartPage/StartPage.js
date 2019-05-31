import React from 'react';
import Home from './Home.js'
import About from './About.js'
class StarPage extends React.Component {
    state = {  }
    render() {
        return (
        <article>
            <Home/>
            <About/>
        </article> );
    }
}

export default StarPage;