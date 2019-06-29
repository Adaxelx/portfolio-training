import React from 'react'
import styles from '../Styles/Modules/Skill.module.sass'

class Skill extends React.Component{

    state = {active: false}

    handleScroll = () =>{
        const { ref } = this
        if (ref.current !== undefined && ref.current !== null) {
          const off = ref.current.getBoundingClientRect().top;
          if (off < window.innerHeight - 100) {
            this.setState({
              active: true,
            })
          }
        }
    }

    ref = React.createRef()

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    render(){
        const {active} = this.state
        const {src,title} = this.props
        const {ref}= this
        return(
            <section ref={ref} className={`${styles.image} ${active ? styles.active : ''}`}>
                <div className={styles.back}>
                    <img src={src} alt={title}/>
                </div>
                <div className={styles.front}>
                    <div className={styles.bgH3}><h3>{title}</h3></div>
                </div>
            </section>
        )
    }
}

export default Skill