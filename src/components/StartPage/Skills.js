import React from 'react';
import styles from '../../Styles/Modules/StartPage/Skills.module.sass'

/* images */

import html from '../../images/skills/html.png'
import css from '../../images/skills/css.png'
import git from '../../images/skills/git.png'
import react from '../../images/skills/React.png'
import js from '../../images/skills/js.png'
import node from '../../images/skills/nodejslogo.png'
import sass from '../../images/skills/sass.png'

let scrollV = window.scrollY

class Skills extends React.Component {
    state = {
        active: false,
        activeCards: [false,false,false,false]
    }

    images = [
        this.image1,this.image2,this.image3,this.image4
    ]

    handleScroll = () =>{
        let activeCards = [false,false,false,false]
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

        this.images.forEach((img,i) => {
            const off = img.current.getBoundingClientRect().top
            const height = img.current.offsetHeight
            if(off < window.innerHeight - height / 4){
                activeCards[i] = true
            }
            this.setState({
                activeCards
            })
        })

        // if(scrollV>image1.current.offsetTop + image1.current.offsetHeight/2){

        // }
    }

    createRefs = () => {
        for(let i =0;i<7;i++){
            this.images[i] = React.createRef()
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        this.createRefs()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    section = React.createRef();
    title = React.createRef();
    title2 = React.createRef();
    section2 = React.createRef();
    render() {
        const {section,title,images,section2} = this
        const {active,activeCards} = this.state
        return (
        <article ref={section}  className={`${styles.container} ${active ? styles.active : ''}`}>
            <section className={styles.bg}>
                <h2 ref={title} className={styles.title}>Umiejętności</h2>
            </section>
            <section ref={section2} className={styles.images}>
                <section ref={images[0]} className={`${styles.image} ${activeCards[0] ? styles.active : ''}`}>
                    <div className={styles.back}>
                         <img src={html} alt="html"/>
                    </div>
                    <div className={styles.front}>
                        <div className={styles.bgH3}><h3>HTML</h3></div>
                    </div>
                </section>
                <section ref={images[1]} className={`${styles.image} ${activeCards[1] ? styles.active : ''}`}>
                    <div className={styles.back}>
                         <img src={css} alt="html"/>
                    </div>
                    <div className={styles.front}>
                        <div className={styles.bgH3}><h3>CSS</h3></div>
                    </div>
                </section>
                  <section ref={images[2]}  className={`${styles.image} ${activeCards[2] ? styles.active : ''}`}>
                    <div className={styles.back}>
                         <img src={js} alt="html"/>
                    </div>
                    <div className={styles.front}>
                        <div className={styles.bgH3}><h3>Javascript</h3></div>
                    </div>
                </section>
                <section ref={images[3]}  className={`${styles.image} ${activeCards[3] ? styles.active : ''}`}>
                    <div className={styles.back}>
                         <img src={git} alt="html"/>
                    </div>
                    <div className={styles.front}>
                       <div className={styles.bgH3}><h3>Git + github</h3></div>
                    </div>
                </section>
                <section ref={images[4]}  className={`${styles.image} ${activeCards[4] ? styles.active : ''}`}>
                    <div className={styles.back}>
                         <img src={react} alt="html"/>
                    </div>
                    <div className={styles.front}>
                       <div className={styles.bgH3}><h3>React</h3></div>
                    </div>
                </section>
                <section ref={images[5]}  className={`${styles.image} ${activeCards[5] ? styles.active : ''}`}>
                    <div className={styles.back}>
                         <img src={sass} alt="html"/>
                    </div>
                    <div className={styles.front}>
                       <div className={styles.bgH3}><h3>Sass</h3></div>
                    </div>
                </section>
                <section ref={images[6]}  className={`${styles.image} ${activeCards[6] ? styles.active : ''}`}>
                    <div className={styles.back}>
                         <img src={node} alt="html"/>
                    </div>
                    <div className={styles.front}>
                       <div className={styles.bgH3}><h3>Node.js</h3></div>
                    </div>
                </section>
            </section>
        </article>
        );
    }
}

export default Skills;