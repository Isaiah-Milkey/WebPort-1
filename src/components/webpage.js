import * as React from 'react'
import { Link} from 'gatsby'
import Pic from "../images/isaiahpic.png" 
import GitPic from "../images/gitpic.png" 
import LinkedinPic from "../images/linkedinpic.png" 
import HandshakePic from "../images/handshakepic.png" 

import ProjectItem from '../components/projectitem'
import { 
    project
    } from './projectitem.module.css'

import { 
    background, styling, splashText, left, right, textLeft, textTitle, resize, vertical, horizontal, socialBox, socialItem, handshakeImg
    } from './webpage.module.css'



 const Webpage = ({header, leftpane, rightpane, children}) => {
    return(
        <div className={background}>
        <div className={styling}>
            <div className = {splashText}>
                <h1 >
                    Hey! I'm 
                </h1>
                <h1>
                    Isaiah Milkey ☀
                </h1>
            </div>  
        
            <div>
            <div className={left}>
                <div className={vertical}>
                <img src={Pic} className={resize}/>
                    <div className={textLeft} >
                        <p>
                        Welcome to my portfolio! This is a site I made using React and the Gatsby framework.
                        Here you can find my projects, and learn a little about me too.
                        </p>
                    </div>
                </div>
                <div>
                    <div className={textLeft} >
                        <h2 className={textTitle}>About Me:</h2>
                        <p>
                            I'm currently an undergraduate at Arizona State University, working on getting my Bachelor's degree.
                            I've been programming since highschool, and have always loved the intersection of technology and computers. 
                        </p>
                        <p>
                            My favorite projects have always had a touch of real-world interactivity, or something to do with real-time data. 
                        </p>
                        <p> 
                            Outside of doing school and working on personal projects, I've been keeping busy by drawing and teaching myself to skateboard.
                            I just started picking up guitar too, but no one told me how bad my fingers would hurt after  ＞︿＜
                        </p>
                        <h2 className={textTitle}>Contact:</h2>
                        <p>
                            isaiahmilkey@gmail.com
                        </p>
                        <div className={horizontal}>
                            <div className={socialBox}>
                                    <Link to="https://github.com/Isaiah-Milkey"><img src={GitPic} className={socialItem}/> </Link>
                                    <Link to="https://www.linkedin.com/in/isaiahmilkey/"><img src={LinkedinPic} className={socialItem}/></Link>
                                    <div className={handshakeImg}>
                                        <Link to="https://app.joinhandshake.com/stu/users/42095524"><img src={HandshakePic} className={socialItem} /></Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className={right}>
                <a href="https://github.com/Isaiah-Milkey/WebPort-1">
                <ProjectItem projectTitle="Project 1: Portfolio Website" language1="JS" language2="HTML" language3="React">
                    <p>The website you are currently viewing! Designed using Figma, then adapted with JavaScript/HTML/CSS. I used the Gatsby tutorial to learn the basics, then customized it to make it my own.</p>
                    <br></br>
                </ProjectItem>
                </a>

                {/* <a href="https://github.com/Isaiah-Milkey">
                <ProjectItem projectTitle="Project 2:" language1="HTML" language2="React">
                    <p>This is example text for the project. Here information and fun facts will be put on display for the project. MORE INTDFSKNLAKSDFM LASDNLAKSDLK ASNDA ASN </p>
                    <br></br>
                </ProjectItem>
                </a>
                
                <a href="https://github.com/Isaiah-Milkey">
                <ProjectItem projectTitle="Project 3:" language1="HTML" language2="React">
                    <p>This is example text for the project. Here information and fun facts will be put on display for the project. MORE INTDFSKNLAKSDFM LASDNLAKSDLK ASNDA ASN </p>
                    <br></br>
                </ProjectItem>
                </a>

                <a href="https://github.com/Isaiah-Milkey">
                <ProjectItem projectTitle="Project 4:" language1="HTML" language2="React">
                    <p>This is example text for the project. Here information and fun facts will be put on display for the project. MORE INTDFSKNLAKSDFM LASDNLAKSDLK ASNDA ASN </p>
                    <br></br>
                </ProjectItem>
                </a> */}

            </div>
            </div>
           

        </div>
        </div>
    )
 }

 export default Webpage