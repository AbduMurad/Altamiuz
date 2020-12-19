import React from "react"
import "./Footer.css"
// import Img from "gatsby-image"
// import { Link, graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faMapMarked } from "@fortawesome/free-solid-svg-icons"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       file(relativePath: { eq: "lettermarkLogo1.png" }) {
  //         childImageSharp {
  //           fluid(quality: 100) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }
  //     }
  //   `)

  //   const image = data.file.childImageSharp.fluid

  return (
    <div className="footer">
      <div className="footer-menu">
        <div className="footer-contact-us">
          <h4 className="footer-title">تواصل معنا</h4>
          <a
            href="https://www.linkedin.com/company/altamiuz/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} aria-label="Mute volume" />
          </a>
          <a href="MAILTO:info@altamiuz.ly">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: "1rem" }}
            />
            info@Altamiuz.ly
          </a>
          <a href="Tel:+218917373202" className="phone-number">
            <FontAwesomeIcon
              icon={faMobileAlt}
              style={{ marginRight: "1rem" }}
            />
            +218 91 737-3202
          </a>
          <h4>
            طرابلس - ليبيا
            <FontAwesomeIcon
              icon={faMapMarked}
              style={{ marginRight: "1rem" }}
            />
          </h4>
        </div>
        {/* <Link to="#" className="footer-logo"><Img fluid={image} alt="Altamiuz Icon" /></Link> */}
      </div>
      <p className="copyrite">
        جميع الحقوق محفوظة لصالح شركة التميز{" "}
        <FontAwesomeIcon icon={faCopyright} /> Altamiuz
      </p>
    </div>
  )
}

export default Footer
