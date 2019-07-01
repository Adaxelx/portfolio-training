import React from 'react';
import styles from '../../Styles/Modules/ContactPage/ContactPage.module.sass'
import Title from '../Title'
class ContactPage extends React.Component {
    state = {  }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() {
        return (
        <article className={styles.contact}>
            <Title white={false} content="Kontakt"/>
        </article> );
    }
}

export default ContactPage