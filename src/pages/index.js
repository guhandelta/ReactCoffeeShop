import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp } from 'react-icons'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to the Coffee Shop <FaGulp /></p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage