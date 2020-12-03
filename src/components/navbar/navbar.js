import React from "react"
import "./navbar.css"
import Icon from "../../images/enLogo.png"
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__items">
                <li className="navbar__item"><Link to="#" className="navbar__logo"><img src={Icon} alt="Altamiuz Icon" /></Link></li>
                <li className="navbar__item"><Link to="#services__section">الخدمات</Link></li>
                <li className="navbar__item"><Link to="#courses__section">الدورات</Link></li>
                <li className="navbar__item"><Link to="#training__section">التدريب</Link></li>
                <li className="navbar__item">حولنا</li>
                <li className="navbar__item">المدونة</li>
            </ul>
        </nav>
    )
}

export default Navbar