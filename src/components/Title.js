import React from 'react'
import styles from '../Styles/Modules/Title.module.sass'

class Title extends React.Component{

    state = {active: false}

    handleScroll = () =>{
        const scrollV = window.scrollY
        const { ref } = this
        if (ref.current !== undefined && ref.current !== null) {
          const off = ref.current.offsetTop
          if (off < scrollV + window.innerHeight - 50) {
            this.setState({
              active: true,
            })
          }
        }
    }

    ref = React.createRef()

    componentDidMount() {
        const {handleScroll} = this
        setTimeout(handleScroll,500)
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    render(){
        const {ref} = this
        const {active} = this.state
        const {white,content} = this.props
        return(
            <section ref={ref} className={`${styles.bg} ${white ? '' : styles.bg2} ${active ? styles.active : ""}`}>
                <h2 className={styles.title}>{content}</h2>
            </section>
        )
    }
   
}

export default Title;