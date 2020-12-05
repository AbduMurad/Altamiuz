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
                <p className="qoutation"><i className="qoutation-mark">"</i>لقد تعلمت طيلة مسيرة عملي بين القطاعين العام والخاص العسكري والمدني وتنفيذي لعشرات المشاريع التي لها علاقة بالاتصالات وأمن المعلومات أو تلك المشاريع التدريبية القتالية مع القوات البحرية لحلف الناتو منذ العام 2003 كجزء من العديد من الفرق أن أهم عنصر يمكننا من خلاله الحكم على نجاح او فشل المشاريع هو الإدارة ووضوح سير العمليات وستكون كل الاعمال الفنية وكل وسائل التقنية الأخرى وسائل مساعدة للوصول لذلك النجاح.</p>
                <div className="ceo-info">
                    <Img fluid={ceoImage} className="ceo-image"/>
                    <h6 className="ceo-title">عقيد متقاعد أ.م صلاح الدين الشتيوي<br/>المدير التنفيذي</h6>
                </div>
            </div>
            <button className="hero__heading btn" id="hero__cta"><Link to="#contact-us" style={{textDecoration: "none"}}>تواصل معنا</Link></button>
        </div>
    )
}

export default CeoQoute