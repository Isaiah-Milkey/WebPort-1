import * as React from 'react'
import { Link} from 'gatsby'
import { 
    styling, splashText
 } from './webpage.module.css'

 const Webpage = ({header, leftpane, rightpane, children}) => {
    return(
        <div className={styling}>
                
            <div className = {splashText}>
                <h1 >
                    Hey! I'm 
                </h1>
                <h1>
                    Isaiah Milkey 🌞
                </h1>
            </div>  

        </div>
    )
 }

 export default Webpage