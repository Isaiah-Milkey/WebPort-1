import * as React from 'react'
import Layout from '../components/layout'
//import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    //Using the layout i made in components...
    <Layout pageTitle="Home Page"> { /* //Every layout needs a pageTitle, and childern. Title is defined here */ }
      <p>Hello! This is the beginning of my personal portfolio, which I'm building with Gatsby and React</p> { /* //I guess this would count as children? */ }
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage