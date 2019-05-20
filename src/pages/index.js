import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import homeStyles from "./homeStyles.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              author
            }
            excerpt(format: PLAIN, pruneLength: 1000)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <img className={homeStyles.image} alt="octopus1" src="./octopus1.png" />
        <h2 className={homeStyles.title}>Harry Candlish</h2>
        <p className={homeStyles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        </p>
      </div>
      <div>
        <h1 className={homeStyles.projectTitle}>Projects</h1>
        <ol className={homeStyles.projects}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={homeStyles.project}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.author}</p>
                <p>{edge.node.excerpt}</p>
              </li>
            )
          })}
        </ol>
        <div>
          <h1 className={homeStyles.projectTitle}>Experience</h1>
          <ol className={homeStyles.projects}>
            <li className={homeStyles.project}>
              <img
                alt="Enspiral"
                className={homeStyles.images}
                src="dev-academy.png"
              />
              <h2>ENSPIRAL</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosq. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
                tellus sed augue semper porta. Mauris massa. Vestibulum lacinia
                arcu eget nulla. Class aptent taciti sociosq.
              </p>
            </li>
            <li className={homeStyles.project}>
              <img
                alt="RedCross"
                className={homeStyles.images}
                src="./redcross.jpg"
              />
              <h2>RED CROSS</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosq. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
                tellus sed augue semper porta. Mauris massa. Vestibulum lacinia
                arcu eget nulla. Class aptent taciti sociosq.
              </p>
            </li>
            <li className={homeStyles.project}>
              <img alt="hospo" className={homeStyles.images} src="hospo.jpg" />
              <h2>HOSPITALITY</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosq. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
                tellus sed augue semper porta. Mauris massa. Vestibulum lacinia
                arcu eget nulla. Class aptent taciti sociosq.
              </p>
            </li>
          </ol>
        </div>
        <div className={homeStyles.container}>
          <img
            alt="seahorse"
            className={homeStyles.images1}
            src="seahorse1.svg"
          />

          <br />
          <Link className={homeStyles.link} to="./contact">
            <h1 className={homeStyles.contact}>CONTACT</h1>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
