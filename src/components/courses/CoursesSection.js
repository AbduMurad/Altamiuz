import React from "react"
import Card from "../card/Card"
import Img from "../../images/enLogo.png"
import "./CoursesSection.css"

const TrainingSection = () => {
    return (
        <section className="courses" id="courses__section">
            <h2 className="section__heading">دوراتنا الأمنية المعتمدة وبأحدث المناهج التعليمية</h2>
            <div className="courses__container">
                <ul className="courses__items">
                    <li><Card Item={Items[0]}/></li>
                    <li><Card Item={Items[1]}/></li>
                    <li><Card Item={Items[2]}/></li>
                    <li><Card Item={Items[3]}/></li>
                </ul>
            </div>
        </section>
    )
}

export const Items = [
    {
        img: {src: Img, alt: "دورات الشركة"},
    title: "دورة كبير مسؤولي تنفيذ نظام إدارة أمن المعلومات ISO27001 LI معتمدة من شركة PECB",
    description: "30 ساعة تدريبية مع شهادة حضور وشهادة اعتماد بعد اجتياز الامتحان"
    },
    {
        img: {src: Img, alt: "دورات الشركة"},
    title: "دورة أساسيات تنفيذ نظام إدارة أمن المعلومات ISO27001 LI معتمدة من شركة PECB",
    description: "12 ساعة تدريبية مع شهادة حضور وشهادة اعتماد بعد اجتياز الامتحان"
    },
    {
        img: {src: Img, alt: "دورات الشركة"},
    title: "دورة كبير مسؤولي تنفيذ نظام إدارة أمن المعلومات ISO27001 LI",
    description: "30 ساعة تدريبية مع شهادة حضور وشهادة اعتماد بعد اجتياز الامتحان"
    },
    {
        img: {src: Img, alt: "دورات الشركة"},
    title: "دورة مقدمة في نظام إدارة أمن المعلومات (محلية)",
    description: "4 ساعات تدريبية مع شهادة حضور"
    },
]

export default TrainingSection