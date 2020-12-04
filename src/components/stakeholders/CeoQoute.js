import React from "react"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./StakeholdersSection.css"

const CeoQoute = () => {
    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "ceo.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const ceoImage = data.file.childImageSharp.fluid

    return (
        <div className="stakeholders">
            <div className="ceo-word">
                <p className="qoutation"><i className="qoutation-mark">"</i>يمكن لأي أحد إنشاء شركة أو مشاريع على الورق، وإعداد كتيب خاص بها، وكتابة ما يشاء عنها، ولكن سيظل التحدي الأكبر تحويل كل تلك الأفكار والأحلام لمشاريع ناجحة على أرض الواقع."</p>
                <div className="ceo-info">
                    <Img fluid={ceoImage} className="ceo-image"/>
                    <h6 className="ceo-title">م. صلاح الدين علي الشتيوي<br/>المدير التنفيذي</h6>
                </div>
            </div>
            <button className="hero__heading btn" id="hero__cta"><Link href="#contact-us" style={{textDecoration: "none"}}>تواصل معنا</Link></button>
        </div>
    )
}

export default CeoQoute