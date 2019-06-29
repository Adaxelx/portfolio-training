import React from 'react'
import styles from '../../../Styles/Modules/StartPage/ProjectCon.module.sass'

class Project extends React.Component{

    state = { active: false }

  ref = React.createRef()

  componentDidMount() {
    setTimeout(this.handleScroll, 500)
    setTimeout(() => window.addEventListener('scroll', this.handleScroll), 500)
  }

  componentWillUnmount() {
    setTimeout(() => window.removeEventListener('scroll', this.handleScroll), 500)
  }

  handleScroll = () => {
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

    render(){
        const {src,content,link} = this.props
        const {ref} = this
        return(
            <section ref={ref} className={`${styles.project} ${this.state.active ? styles.active : ''}`}>
                <img src={src} alt=""/>
                <p>{content}</p>
                <a href={link}><button className={styles.button}><i className="fab fa-github"></i></button></a>
            </section>
        )
    }
}

export default Project
