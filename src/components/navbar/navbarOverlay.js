import React from "react"
import "./navbar.css"
import { Link } from "gatsby"
import { hideNavMenu } from "./menuIcon"

const NavbarOverlay = () => {
    return (
        <nav className="navbar-overlay">
            <ul id="navbar-overlay__items">
                <li className="navbar-overlay__item navbar-overlay__item-1"><Link to="/#" onClick={hideNavMenu}>الرئيسية</Link></li>
                <li className="navbar-overlay__item navbar-overlay__item-2"><Link to="/#services__section" onClick={hideNavMenu}>الخدمات</Link></li>
                <li className="navbar-overlay__item navbar-overlay__item-4"><Link to="/#courses__heading" onClick={hideNavMenu}>التدريب</Link></li>
                <li className="navbar-overlay__item navbar-overlay__item-6"><Link to="/about-us" onClick={hideNavMenu}>حولنا</Link></li>
                <li className="navbar-overlay__item navbar-overlay__item-5">المدونة</li>
            </ul>
        </nav>
    )
}

export default NavbarOverlay