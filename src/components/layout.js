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
import "./layout.css"
import MenuIcon from "./navbar/menuIcon"

const Layout = ({ children }) => {

  return (
    <>
      <div className="header">
        <button className="btn btn-primary">تواصل معنا</button>
        <Navbar />
        <MenuIcon />
      </div>
      <NavbarOverlay />
      
        <main>{children}</main>
        <footer>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
