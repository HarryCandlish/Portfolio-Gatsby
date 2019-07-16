import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import homeStyles from "./homeStyles.module.scss"

import octopus from "../images/octopus1.png"
import meetups from "../images/meetsups.jpg"
import reads from "../images/hairyreads.jpg"
import alliswell from "../images/alliswell.jpg"
import alliswell2 from "../images/alliswell2.jpg"
import eda from "../images/dev-academy.png"
import redcross from "../images/redcross.jpg"
import seahorse from "../images/seahorse1.svg"
import hospo from "../images/hospo.jpg"
import git from "../images/git.png"
import linkedin from "../images/linkedin.png"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <img className={homeStyles.image} alt="octopus1" src={octopus} />
        <h2 className={homeStyles.title}>Harry Candlish</h2>
        <p className={homeStyles.description}>
          Building toward becoming a skilled software developer through
          augmenting my current skills and knowledge.
          <br />
          <br />
          <Link to="/contact">CONTACT</Link>
        </p>
      </div>
      <div>
        <h1 className={homeStyles.projectTitle}>PROJECTS</h1>
        <ol className={homeStyles.projects}>
          <li className={homeStyles.project}>
            <h2>CAPITAL MEET-UPS</h2>
            <img className={homeStyles.meetups} alt="meetups" src={meetups} />
            <p>
              the final project for Enspiral Dev Academy. The class was
              segmented into groups, and each group had a week to build a
              application for presentation. Our group that consisted of Alex,
              Nat, Arpo, Ranjit and myself worked on differing aspects of the
              project. At the beginning we assigned the components of the
              project based on the skills that people were not confident in.
              Through doing this we were required to focus on Agile based
              techniques in keeping up with tasks.
            </p>
            <h4>WHAT I LEARNT WORKING ON THE PROJECT</h4>
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
            <p>SQlite, React, Redux, Team Managment</p>
            <a href="https://github.com/kahu-2019/meet-ups">
              <h4>CODE</h4>
            </a>
            <a href="https://capitalmeetups.herokuapp.com/#/">
              <h4>APP</h4>
            </a>
          </li>
          <li className={homeStyles.project}>
            <h2>HAIRY-READS</h2>
            <img className={homeStyles.reads} alt="reads" src={reads} />
            <p>
              Worked on an individual project during Enspiral. The project was
              completed outside of class hours and was fundamental in helping us
              acknowledge our own strengths and weaknesses. My plan was to
              create a reading diary, wherein the user could follow their
              reading progress, what books they wanted to read, what books they
              were reading, etc. To do this I attempted to use the GoodReads API
              and use the data so the user could access numerous books. I was
              unable to access the API and was forced to settle for another API
              with less data.
            </p>

            <h4>WHAT I LEARNT WORKING ON THE PROJECT</h4>
            <p className={homeStyles.lists}>
              1. Self-Discipline in working independently on an individual
              project.
            </p>
            <p>2. Organising, planning, and time managment. </p>
            <p>
              3. The fundamental thing I learnt working on the project, was
              recognising my own abilities, what I'm best at and what I need to
              work on.
            </p>
            <p>
              4. In using external API's, you rely heavily on the organisation
              providing the API. In attempting to use the GoodReads API, I
              failed in that there wasn't much incentive for them to give out
              the data they have. This made it almost impossible to get.
            </p>
            <p>5. At all points, ask for help for reasons of effiency </p>
            <a href="https://github.com/HarryCandlish/HairyReads/blob/master/client/components/Fiction.jsx">
              <h4>CODE</h4>
            </a>
          </li>
          <li className={homeStyles.project}>
            <h2>ALL IS WELL</h2>
            <img className={homeStyles.mental} alt="health" src={alliswell} />
            <img className={homeStyles.mental2} alt="health" src={alliswell2} />
            <p>
              A business idea; selling branded clothing to promote mental health
              awareness in Wellington. Front-end is built using React, Chart-JS,
              Sass and HTML. Backend is built using Express, SQlite, Knex.
            </p>
            <h4>WHAT I LEARNT WORKING ON THE PROJECT</h4>
            <h2>Front-End</h2>
            <p className={homeStyles.lists}>1. Basic React functionality.</p>
            <p>2. State and props</p>
            <p>3. Handle Changes and events</p>
            <p>4. Accessing data Id</p>
            <p>5. Sass and design patterns</p>
            <p>6. Chart JS</p>
            <h2>Back-End</h2>
            <p className={homeStyles.lists}>1. Express</p>
            <p>2. Sqlite and Knex</p>
            <p>3. Creating Databases</p>
            <p>4. Routes</p>
            <p>5. Database Functions</p>
            <p>6. Sharing Data Across Back-End and Front-End</p>

            <a href="https://github.com/HarryCandlish/MentalHealth_NZ_BackEnd">
              {" "}
              <h4>Back-End Code</h4>{" "}
            </a>
            <a href="https://github.com/HarryCandlish/MentalHealth_NZ_Front">
              <h4>Front-End Code</h4>
            </a>
          </li>
        </ol>
      </div>
      <div>
        <h1 className={homeStyles.projectTitle}>EXPERIENCE</h1>
        <ol className={homeStyles.projects}>
          <li className={homeStyles.project}>
            <h2>ENSPIRAL DEV ACADEMY</h2>
            <img className={homeStyles.mental} alt="eda" src={eda} />
            <p>
              The Enspiral programme involves over 1000 hours of coding
              experience, and relies on its students to be self-directed,
              hardworking, competent in working with others. And because
              Enspiral simulates a real work environment, it demands of its
              students that they conduct themselves professionally throughout
              the course.
            </p>
            <h4>MY RESPONSIBILITIES AT ENSPIRAL</h4>
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
          </li>
          <li className={homeStyles.project}>
            <h2>NEW ZEALAND RED-CROSS</h2>
            <img className={homeStyles.mental} alt="redcross" src={redcross} />
            <p>
              Volunteering had a significant influence on how it is I view the
              world, it helped me discover the rewards associated with helping
              others, and though my role was small in comparison to what some
              others are doing. It really gave me a sense of what I want to do
              going forward, which is to impact society in a positive way.
            </p>

            <h4>MY RESPONSIBILITIES AS A VOLUNTEER</h4>
            <p className={homeStyles.lists}>
              1. Helping with finance and teaching how to use finance related
              technologies and systems.
            </p>
            <p>2. Health and medical appointments. </p>
            <p>3. Flat maintenance and paperwork</p>
            <p>
              4. Accompanying him to meetings, Wellington City Council, Work and
              Income.
            </p>
            <p>5. Coffee</p>
          </li>
          <li className={homeStyles.project}>
            <h2>HOSPITALITY : WELLINGTON HOSPITALITY GROUP</h2>
            <img className={homeStyles.mental} alt="hospo" src={hospo} />
            <p>
              Customer service skills are important in any industry, and through
              my time working in hospitality I’ve learnt how to communicate with
              anyone that has had a significant impact on my relationships
              outside the role.
            </p>
            <h4>MY RESPONSIBILITIES IN HOSPITALITY</h4>
            <p className={homeStyles.lists}>1. Costumer Service</p>
            <p>2. Staff Training. </p>
            <p>3. Communication</p>
            <p>4. Money Handling.</p>
            <p>5. Dealing with disgruntled customers.</p>
          </li>
        </ol>
      </div>
      <div className={homeStyles.container}>
        <img alt="seahorse" className={homeStyles.images1} src={seahorse} />

        <br />
        <Link className={homeStyles.link} to="./contact">
          <h1 className={homeStyles.contact}>CONTACT</h1>
        </Link>
        <a
          href="https://www.linkedin.com/in/harry-candlish-875154a1/"
          className={homeStyles.link}
          to="./contact"
        >
          <img alt="linkedin" className={homeStyles.linkIcon} src={linkedin} />
        </a>
        <a
          href="https://github.com/HarryCandlish"
          className={homeStyles.link}
          to="./contact"
        >
          <img alt="git" className={homeStyles.gitIcon} src={git} />
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
