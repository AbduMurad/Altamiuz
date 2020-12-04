/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar/navbar"
import NavbarOverlay from "./navbar/navbarOverlay"
import MenuIcon from "./navbar/menuIcon"
import Footer from "./footer/Footer"
import { Link } from "gatsby"
// import { Helmet } from "react-helmet"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
        {/* <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet> */}
      <div className="header">
        <MenuIcon />
        <Navbar />
        <button className="btn btn-primary"><Link to="#contact-us" style={{textDecoration: "none"}}>تواصل معنا</Link></button>
      </div>
      <NavbarOverlay />
      
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
