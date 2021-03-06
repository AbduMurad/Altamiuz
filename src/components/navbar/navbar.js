import React from "react"
import "./navbar.css"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"

const Navbar = () => {

    const data = useStaticQuery(graphql`
        query {
            file (relativePath: {eq: "lettermarkLogo1.png"}) {
                childImageSharp {
                    fixed (width: 60, height: 60) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `)

    const image = data.file.childImageSharp.fixed

    return (
        <nav className="navbar">
            <ul className="navbar__items">
                <li className="navbar__item"><Link to="/#" className="navbar__logo"><Img fixed={image} alt="Altamiuz Icon" /></Link></li>
                <li className="navbar__item"><Link to="/#services__section">الخدمات</Link></li>
                <li className="navbar__item"><Link to="/#courses__heading">التدريب</Link></li>
                <li className="navbar__item"><Link to="/about-us">حولنا</Link></li>
                <li className="navbar__item">المدونة</li>
            </ul>
        </nav>
    )
}

export default Navbar