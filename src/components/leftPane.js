import * as React from 'react'
import { Link} from 'gatsby'
import { 
    leftside
 } from './layout.module.css'

 const LeftPane = ({children}) => {
    return (
        <main>
            <h1 className={leftside}>
                {children}
            </h1>
        </main>
    )
 }

 export default LeftPane
 