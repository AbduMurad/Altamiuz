import React from "react"
import "./header.css"
import BackgroundImage from "gatsby-background-image"
import { Link, graphql, useStaticQuery } from "gatsby"


const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "Hero-ar.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const ImageData = [`linear-gradient(269.69deg, rgba(12, 74, 173, 0.5) 0.23%, rgba(7, 33, 75, 0.5) 99.72%)`, data.file.childImageSharp.fluid, ]
  
  return (
    <BackgroundImage Tag="section" className="hero" id="home" fluid={ImageData}>
      <div className="hero__right-side">
        <h1 className="hero__heading hero__heading-title">التميز</h1>
        <h2 className="hero__heading hero__heading-discription">للاستشارات وأمن المعلومات</h2>
        <div className="hero__heading">
          <h4 className="hero__heading hero__heading-cta">قم بتأمين وحماية بيانات مؤسستك<br/>باتباع أفضل الأساليب<br/>وأكثرها موثوقية</h4>
          <button className="hero__heading btn" id="hero__cta"><Link to="#contact-us" style={{textDecoration: "none"}}>تواصل معنا</Link></button>
        </div>
      </div>
      <div className="hero__left-side"></div>
    </BackgroundImage>
  )
}
export default Header