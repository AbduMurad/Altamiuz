import React from "react"
import "./Footer.css"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"


const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            file (relativePath: {eq: "arLogo.png"}) {
                childImageSharp {
                    fixed (width: 250, height: 250) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `)

    const image = data.file.childImageSharp.fixed

    return (
        <div className="footer">
            <div className="footer-menu">
                <div className="footer-contact-us">
                    <h4 className="footer-title">تواصل معنا</h4>
                    <a href="MAILTO:ceo@altamiuz.ly">CEO@Altamiuz.ly</a>
                    <a href="Tel:+218917373202" className="phone-number">+218 91 737-3202</a>
                    <h4>طرابلس - ليبيا</h4>
                </div>
                <div className="footer-links">
                    <Link to="#services__section" className="footer-title">الخدمات</Link>
                    <Link to="#training__section" className="footer-title">التدريب</Link>
                    <Link to="#courses__section" className="footer-title">الدورات</Link>
                </div>
                <Link to="#" className="footer-logo"><Img fixed={image} alt="Altamiuz Icon" /></Link>
            </div>
            <p className="copyrite">جميع الحقوق محفوظة لصالح شركة التميز<br/>&copy;Altamiuz</p>
        </div>
    )
}

export default Footer