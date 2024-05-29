import * as React from 'react'
import { Link} from 'gatsby'
import Pic from "../images/isaiahpic.png" 
import GitPic from "../images/gitpic.png" 
import LinkedinPic from "../images/linkedinpic.png" 
import HandshakePic from "../images/handshakepic.png" 

import { 
    background, styling, splashText, left, right, textLeft,resize, vertical, horizontal, socialBox, socialItem, handshakeImg
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
                        <h2> About Me:</h2>
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
                        <h2> Contact:</h2>
                        <p>
                            isaiahmilkey@gmail.com
                        </p>
                        <div className={horizontal}>
                            <ul className={socialBox}>
                                <li>
                                    <img src={GitPic} className={socialItem}/>
                                </li>
                                <li>
                                    <img src={LinkedinPic} className={socialItem}/>
                                </li>
                                <li>
                                    <img src={HandshakePic} className={socialItem} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className={right}>
                THIS IS THE RIGHT!
            </div>

        </div>
        </div>
    )
 }

 export default Webpage