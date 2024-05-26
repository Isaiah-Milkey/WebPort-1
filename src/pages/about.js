import * as React from 'react'
import Layout from '../components/layout'
//import { Link } from 'gatsby'

const AboutPage = () => {
  return (
  //Using Layout from components... 
    <Layout pageTitle="About Me"> { /* //Define page title */}
      <p>Welcome! This is the "about me" section of the site...</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage