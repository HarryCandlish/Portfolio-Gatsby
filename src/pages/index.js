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
          <br />
          <br />
          <Link to="/contact">CONTACT</Link>
        </p>
      </div>
      <div>
        <h1 className={homeStyles.projectTitle}>PROJECTS</h1>
        <ol className={homeStyles.projects}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={homeStyles.project}>
                <h2>{edge.node.frontmatter.title}</h2>
                <h3>{edge.node.frontmatter.author}</h3>
                <p>
                  {edge.node.excerpt}
                  <br />
                  <br />
                  <a href="#">
                    <h4>CODE</h4>
                  </a>
                  <hr />
                  <a href="#">
                    <h4>APP</h4>
                  </a>
                </p>
              </li>
            )
          })}
        </ol>
        <div>
          <h1 className={homeStyles.projectTitle}>EXPERIENCE</h1>
          <ol className={homeStyles.projects}>
            <li className={homeStyles.project}>
              <img
                alt="Enspiral"
                className={homeStyles.images}
                src="dev-academy.png"
              />
              <h2>ENSPIRAL</h2>
              <p>
                The Enspiral programme involves over 1000 hours of coding
                experience, and relies on its students to be self-directed,
                hardworking, competent in working with others. And because
                Enspiral simulates a real work environment, it demands of its
                students that they conduct themselves professionally throughout
                the course.
              </p>
              <h3>My responsibilities at Enspiral:</h3>
              <p className={homeStyles.lists}>1.Self-directed Learning </p>
              <p>2. Helping others through the course. </p>
              <p>3. Self-discipline.</p>
              <p>
                4. In coding sixty hours a week, when something comes up outside
                of the course, handle it accordingly and keep going.
              </p>
              <p>
                5. Staying passionate and setting goals and planning on how to
                reach those goals.
              </p>

              <h4>REFEREE</h4>
              <hr />
            </li>
            <li className={homeStyles.project}>
              <img
                alt="RedCross"
                className={homeStyles.images}
                src="./redcross.jpg"
              />
              <h2>RED CROSS</h2>
              <p>
                Volunteering had a significant influence on how it is I view the
                world, it helped me discover the rewards associated with helping
                others, and though my role was small in comparison to what some
                others are doing. It really gave me a sense of what I want to do
                going forward, which is to impact society in a positive way.
              </p>

              <h3>My responsibilities as a volunteer included:</h3>
              <p className={homeStyles.lists}>
                1. Helping with finance and teaching how to use finance related
                technologies and systems.
              </p>
              <p>2. Health and medical appointments. </p>
              <p>3. Flat maintenance and paperwork</p>
              <p>
                4. Accompanying him to meetings, Wellington City Council, Work
                and Income.
              </p>
              <p>5. Coffee</p>

              <h4>REFEREE</h4>
              <hr />
            </li>
            <li className={homeStyles.project}>
              <img alt="hospo" className={homeStyles.images} src="hospo.jpg" />
              <h2>HOSPITALITY</h2>
              <p>
                Customer service skills are important in any industry, and
                through my time working in hospitality I’ve learnt how to
                communicate with anyone that has had a significant impact on my
                relationships outside the role.
              </p>
              <h3>My responsibilities in hospitality:</h3>
              <p className={homeStyles.lists}>1. Costumer Service</p>
              <p>2. Staff Training. </p>
              <p>3. Communication</p>
              <p>4. Money Handling.</p>
              <p>5. Dealing with disgruntled customers.</p>
              <h4>REFEREE</h4>
              <hr />
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
          <a
            href="https://www.linkedin.com/in/harry-candlish-875154a1/"
            className={homeStyles.link}
            to="./contact"
          >
            <img
              alt="linkedin"
              className={homeStyles.linkIcon}
              src="linkedin.png"
            />
          </a>
          <a
            href="https://github.com/HarryCandlish"
            className={homeStyles.link}
            to="./contact"
          >
            <img alt="git" className={homeStyles.gitIcon} src="git.png" />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
