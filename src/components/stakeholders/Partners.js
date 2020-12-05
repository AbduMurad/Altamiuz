import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "./StakeholdersSection.css"

const Partners = () => {

    const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativePath: {in: ["xertiance-logo.png", "data-protect-logo-1.jpg"]}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const xertianceImage = data.allFile.edges[1].node.childImageSharp.fluid
  const dataProtectImage = data.allFile.edges[0].node.childImageSharp.fluid

    return (
        <div className="partners">
            <h1 className="partners-heading">شركاؤنا</h1>
            <div className="partners-images">
                <div className="partner-info">
                    <Img fluid={xertianceImage} className="partner-image" />
                    <h2 className="partner-name">Xertiance</h2>
                </div>
                <div className="partner-info">
                    <Img fluid={dataProtectImage} className="partner-image" />
                    <h2 className="partner-name">Data Protect</h2>
                </div>
            </div>
        </div>
    )
}

export default Partners