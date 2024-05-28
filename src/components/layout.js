import * as React from 'react'
import { Link} from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
 } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className = {container}>
            <nav> {/*//For Nav bar?*/}
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/404" className={navLinkText}>404</Link>
                    </li>
                </ul>
            </nav>

            <main> {/*//Every page will contain... a Title, with children under it*/}
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>

        </div>
    )
}
//remember to export!!
export default Layout
