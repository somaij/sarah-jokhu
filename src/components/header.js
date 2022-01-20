import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = ({ siteTitle }) => (
  <nav>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-5">
        <Link
          to="/"
        >
          Sarah Jokhu
        </Link>
        </div>
        <div class="col-7 menu text-right d-flex justify-content-end">
        <Link
          to="/blog"
        >
          Blog
        </Link>
        <Link
          to="/#contact"
        >
          Contact
        </Link>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Jason Somai`,
}

export default Header
