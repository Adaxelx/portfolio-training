import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/navigation/navBar.js'
import NavOpen from './components/navigation/navOpen.js'
import './Styles/Global/MainStyle.sass'
class App extends React.Component{
  state = {
    active: false
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render(){
  return (
    <div className="container">
    <Router>
        <NavBar active={this.state.active} handleClick={this.handleClick}/>
        <NavOpen active={this.state.active} handleClick={this.handleClick}/>
    </Router>
    </div>
  );
  }
}

export default App;
