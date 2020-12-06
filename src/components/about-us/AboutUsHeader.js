import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./AboutUsHeader.css"

const AboutUsHeader = () => {
    const data = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "ceo.jpg"}) {
            childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
            }
        }
    }`)

    const ceoImage = data.file.childImageSharp.fluid

    return (
        <header className="about-us__header">
            <div className="ceo-intro">
                <Img fluid={ceoImage} className="ceo-image"/>
                <div className="ceo-informations">
                    <h6 className="ceo-title">عقيد متقاعد أ.م صلاح الدين الشتيوي<br/>المدير التنفيذي</h6>
                    <ul>
                        <li className="ceo-information">مشغل عام نظم اتصالات</li>
                        <li className="ceo-information">ماجستير أمن الاتصالات وتقنية المعلومات</li>
                        <li className="ceo-information">ضابط أمن نظم معلومات معتمد</li>
                        <li className="ceo-information">خبير حماية نظم الدفع الإلكتروني معتمد</li>
                        <li className="ceo-information">كبير مسؤولي تنفيذ نظام إدارة أمن المعلومات معتمد</li>
                        <li className="ceo-information">خبير اختراقات معتمد</li>
                        <li className="ceo-information">اخصائي أمن شبكات فورتينت المستوى الثالث</li>
                        <li className="ceo-information">خبير أمن شبكات معتمد</li>
                    </ul>
                </div>
            </div>
            <div className="ceo-word">
                <p className="qoutation"><i className="qoutation-mark">"</i>لقد تعلمت طيلة مسيرة عملي بين القطاعين العام والخاص العسكري والمدني وتنفيذي لعشرات المشاريع التي لها علاقة بالاتصالات وأمن المعلومات أو تلك المشاريع التدريبية القتالية مع القوات البحرية لحلف الناتو منذ العام 2003 كجزء من العديد من الفرق أن أهم عنصر يمكننا من خلاله الحكم على نجاح او فشل المشاريع هو الإدارة ووضوح سير العمليات وستكون كل الاعمال الفنية وكل وسائل التقنية الأخرى وسائل مساعدة للوصول لذلك النجاح.</p>
            </div>
        </header>
    )
}

export default AboutUsHeader