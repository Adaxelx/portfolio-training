import React from 'react';
import NavBar from './components/navigation/navBar.js'
import NavOpen from './components/navigation/navOpen.js'
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
    <div className="App">
        <NavBar active={this.state.active} handleClick={this.handleClick}/>
        < NavOpen active = {
          this.state.active
        }
        handleClick = {
          this.handleClick
        }
        />
    </div>
  );
  }
}

export default App;
