import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
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
