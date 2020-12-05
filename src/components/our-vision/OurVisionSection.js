import React from "react"
import "./OurVisionSection.css"
import Img from "gatsby-image"
import { Link, graphql, StaticQuery } from "gatsby"


const OurVision = ({ data }) => {
    return (
        <StaticQuery
            query = {graphql`
                    query imgQuery {
                        fluidImage: file(relativePath: {eq: "arLogo.png"}) {
                            childImageSharp {
                                fluid(maxWidth: 583) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                `}
            render={ data => (
                <div className="our-vision__container">
                    <div className="our-vision">
                        <h2 className="our-vision__title">رؤيتنا</h2>
                        <p className="our-vision__paragraph">
                        "فيما يخص زبائننا فإن رؤيتنا هي إيجاد الشريك المحلي الذي يقدم الحلول في مجال أمن المعلومات وجمع أهم الخبرات في ليبيا تحت جسم واحد نسعى ليكون المظلة التي توفر المنتجات، الخدمات والأفراد المؤهلين في نفس الوقت لتغطية جزء من حاجة السوق الليبي، أما فيما يخص الأطراف الاخرى في سوق الاتصالات وتقنية المعلومات فإننا اعتمدنا سياسة الباب المفتوح لكل الراغبين في عقد اتفاقيات التعاون مع شركة التميز بأي شكل من أشكال التعاون الذي يرونه مناسبا ليتم ضبطه لاحقا بالشكل التنظيمي والقانوني الذي سيحفظ حقوق زبائن الشركة."</p>
                        <ul aria-label="القيم" className="our-values">
                            <li>الالتزام</li>
                            <li>النزاهة والشفافية</li>
                            <li>الانفتاح والتنوع</li>
                            <li>التحسين المستمر</li>
                        </ul>
                        <p className="our-vision__paragraph">كما تدعم شركة التميز الأهداف العالمية السبعة عشر للتنمية المستدامة<br/>بكل الوسائل المادية والمعنوية لأجل ليبيا وأهلها</p>
                        <button className="hero__heading btn" id="hero__cta"><Link to="#contact-us" style={{textDecoration: "none"}}>تواصل معنا</Link></button>
                    </div>
                    <div className="our-vision__process">
                        <Img fluid={data.fluidImage.childImageSharp.fluid} alt="Our Vision Process" />
                    </div>
                </div>
            )}
        />
    )
}


export default OurVision