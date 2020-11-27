import React from "react"
import "./navbar.css"
import Icon from "../../images/enLogo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__items">
                <li className="navbar__item">المدونة</li>
                <li className="navbar__item">حولنا</li>
                <li className="navbar__item">التدريب</li>
                <li className="navbar__item">الدورات</li>
                <li className="navbar__item">الخدمات</li>
                <img src={Icon} alt="Altamiuz Icon" className="navbar__logo" />
            </ul>
        </nav>
    )
}

export default Navbar