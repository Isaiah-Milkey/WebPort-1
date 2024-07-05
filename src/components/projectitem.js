import * as React from 'react'
import { Link} from 'gatsby'

import { 
    project, textTitle, languageContainer, language
    } from './projectitem.module.css'


const ProjectItem = ({ projectTitle, language1, language2, language3, children }) => {
    return(
        <div className={project}>
            <h2 className={textTitle}>{projectTitle}</h2> 
            {children}
            <div className={languageContainer}>
                <div className={language}>{language1}</div>
                <div className={language}>{language2}</div>
                <div className={language}>{language3}</div>      
            </div>
                        
        </div>
    )
}

export default ProjectItem