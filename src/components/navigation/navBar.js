import React from 'react';
import styles from '../../Styles/Modules/Navigation.module.sass'

class NavBar extends React.Component{
    state = {
        active: false
    }

    handleClick = () =>{
        this.setState({
            active: !this.state.active
        })
    }

    render(){
        return (
            <div className={`${styles.nav} ${this.state.active ? styles.active : ''}`} onClick={this.handleClick}>
                    <div className={`${styles.bars} ${this.state.active ? styles.active : ''}`}>
                    <span className={`${styles.bar} ${styles.top} ${this.state.active ? styles.active : ''}`}></span>
                    <span className={`${styles.bar} ${styles.bot} ${this.state.active ? styles.active : ''}`}></span>
                </div>
            </div>
         );
    }
}

export default NavBar;