import React from 'react';
import styles from '../../Styles/Modules/StartPage/Project.module.sass'

let scrollV

class Projects extends React.Component {
    state = {
        active: false
     }

    handleScroll = () =>{
        const {section} = this
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

    section= React.createRef()

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    render() {
        const {section} = this
        return (
            <article ref={section} className={`${styles.container} ${this.state.active ? styles.active : ''}`}>
                <section className={styles.bg}>
                    <h2 className={styles.title}>Projekty</h2>
                </section>
            </article>
        );
    }
}

export default Projects;