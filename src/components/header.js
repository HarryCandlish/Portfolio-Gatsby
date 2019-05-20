import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <div>
      <nav className={headerStyles.nav}>
        <ul>
          <li>
            <img alt="nav" className={headerStyles.image} src="./nav.png" />
            <ul>
              <li>
                <Link to="/blog">Blog &nbsp; &nbsp; </Link>
              </li>
              <li>
                <Link to="/contact">Contact </Link>
              </li>
              <li>
                <Link to="/">Home &nbsp; </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
