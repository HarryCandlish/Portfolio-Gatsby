import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Harry Candlish</h1>
      <h2>Full-Stack Developer</h2>
      <Link to="/contact">Contact here</Link>
    </Layout>
  )
}

export default IndexPage
