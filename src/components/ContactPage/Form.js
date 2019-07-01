import React from 'react';
import styles from '../../Styles/Modules/ContactPage/Form.module.sass'

class Form extends React.Component {
    state = {
        username: '',
        number: '',
        message:'',
     }

     handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
     }

    render() {
        return (
            <form action="" className={styles.form}>
                <h3 className={styles.title}>Opowiedz swoją historię: </h3>
                <label className='story' htmlFor="story">
                    <p className={styles.content}>Nazywam się </p><input placeholder='Imię i nazwisko' type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}></input>
                    <p></p>
                </label>
            </form>
        );
    }
}

export default Form