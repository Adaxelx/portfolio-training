import React from 'react';
import styles from '../../Styles/Modules/ContactPage/Form.module.sass'

class Form extends React.Component {
    state = {
        username: '',
        company: '',
        reason: '',
        message: '',
        email: '',
        number: ''
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
                <label className={styles.container} htmlFor="user">
                    <p className={styles.content}>Nazywam się </p><input className={styles.input} placeholder='imię i nazwisko' type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}></input>
                </label>
                <label className={styles.container} htmlFor="user">
                    <p className={styles.content}>Pracuje dla firmy</p><input className={styles.input} placeholder='nazwa firmy' type="text" id="user" name="company" value={this.state.company} onChange={this.handleChange}></input>
                </label>
                <label className={styles.container} htmlFor="user">
                    <p className={styles.content}>Powód wiadomości</p><input className={styles.input} placeholder='powód' type="text" id="user" name="reason" value={this.state.reason} onChange={this.handleChange}></input>
                </label>
                <label className={styles.container} htmlFor="message">
                    <p className={styles.content}>Napisz coś więcej</p>
                    <textarea className={styles.message} id="message" name="message" value={this.state.message} placeholder='nie krępuj się' onChange={this.handleChange}></textarea>
                </label>
                <label className={styles.container} htmlFor="user">
                    <p className={styles.content}>Jak się z tobą skontaktować?</p><input className={styles.input} placeholder='email' type="e-mail" id="user" name="email" value={this.state.email} onChange={this.handleChange}></input>
                    <input className={styles.input} placeholder='numer telefonu' type="number" id="user" name="number" value={this.state.number} onChange={this.handleChange}></input>
                </label>
            </form>
        );
    }
}

export default Form