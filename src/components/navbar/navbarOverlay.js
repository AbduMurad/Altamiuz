import React from "react"
import "./navbar.css"

const NavbarOverlay = () => {
    return (
        <nav className="navbar-overlay">
            <ul id="navbar-overlay__items">
                <li className="navbar-overlay__item navbar-overlay__item-1">الرئيسية</li>
                <li className="navbar-overlay__item navbar-overlay__item-2">الخدمات</li>
                <li className="navbar-overlay__item navbar-overlay__item-3">الدورات</li>
                <li className="navbar-overlay__item navbar-overlay__item-4">التدريب</li>
                <li className="navbar-overlay__item navbar-overlay__item-6">حول شركتنا</li>
                <li className="navbar-overlay__item navbar-overlay__item-5">المدونة</li>
            </ul>
        </nav>
    )
}

export default NavbarOverlay