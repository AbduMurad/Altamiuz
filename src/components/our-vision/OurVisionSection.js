import React from "react"
import "./OurVisionSection.css"
import Img from "gatsby-image"
import { Link, graphql, StaticQuery } from "gatsby"


const OurVision = ({ data }) => {
    return (
        <StaticQuery
            query = {graphql`
                    query imgQuery {
                        fluidImage: file(relativePath: {eq: "ourWay.png"}) {
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
                        " توفير بوتقة محلية تقدم الحلول في مجال أمن المعلومات، وتجمع أهم الخبرات في ليبيا تحت جسم الشركة حتى نكون المظلة التي توفر الخدمات والأشخاص المؤهلين لتغطية حاجة السوق الليبي.
                        ونحن ندعو كافة المتخصصين والمهتمين باعتبار أن مساحة المشاركة الفعلية والمعنوية مفتوحة للمشاركة من خلالها بأي شكل من أشكال التعاون الذي يرونه مناسب ليتم ضبطه لاحقا بالشكل التنظيمي والقانوني الذي سيحفظ حقوق زبائن الشركة.
                        "</p>
                        <button className="hero__heading btn" id="hero__cta"><Link href="#contact-us" style={{textDecoration: "none"}}>تواصل معنا</Link></button>
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