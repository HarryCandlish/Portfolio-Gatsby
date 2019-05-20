import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              author
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Harry Candlish</h1>
      <h2>Full-Stack Developer</h2>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.author}</p>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
      <Link to="/contact">Contact here</Link>
    </Layout>
  )
}

export default IndexPage
