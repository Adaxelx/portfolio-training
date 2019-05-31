import React from 'react';
import styles from '../../Styles/Modules/StartPage/About.module.sass'

let scrollV = window.scrollY
class About extends React.Component{
    state = {
        active: false,
    }

    handleScroll = () =>{
        const {section, title} = this
        scrollV = window.scrollY
        if(scrollV>section.current.offsetTop - window.innerHeight + 200){
            this.setState({
                active: true
            })
        }
        else{
            this.setState({
                active: false
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    section = React.createRef();
    title = React.createRef()

    render(){
    const {section,title} = this
    const {active} = this.state
    return (
        <article ref={section} className={`${styles.about} ${active ? styles.active : ''}`}>
            <section className={styles.container}><h2 ref={title}className={styles.title}>O mnie</h2></section>
        </article>
     );
    }

}

export default About;