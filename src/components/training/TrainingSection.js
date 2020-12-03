import React from "react"
import "./TrainingSection.css"
import Card from "../card/Card"
import Img from "../../images/enLogo.png"

const TrainingSection = () => {
    return (
        <section className="training" id="training__section">
            <h2 className="section__heading">تدريباتنا معتمدة وبإشراف أفضل الكفاءات في المجال الأمني</h2>
            <div className="training__container">
                <ul className="training__items">
                    <li><Card Item={Items[0]}/></li>
                    <li><Card Item={Items[1]}/></li>
                    <li><Card Item={Items[2]}/></li>
                    <li><Card Item={Items[3]}/></li>
                    <li><Card Item={Items[4]}/></li>
                    <li><Card Item={Items[5]}/></li>
                    <li><Card Item={Items[6]}/></li>
                    <li><Card Item={Items[7]}/></li>
                </ul>
            </div>
        </section>
    )
}

export const Items = [
    {
        img: {src: Img, alt: "تدريبات الشركة"},
    title: "مقدمة نظام إدارة أمن المعلومات آيز 27001:2013",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "تدريبات الشركة"},
    title: "أساسيات نظام إدارة أمن المعلومات آيز 27001:2013",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "تدريبات الشركة"},
    title: "كبير منفذي نظام إدارة أمن المعلومات آيز 27001:2013",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "تدريبات الشركة"},
    title: "كبير مدققي نظام إدارة أمن المعلومات",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "تدريبات الشركة"},
    title: "كبير منفذي نظام إدارة استمرارية الأعمال",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "تدريبات الشركة"},
    title: "كبير مديري إدارة المخاطر آيزو 31000",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "تدريبات الشركة"},
    title: "نظام حماية معلومات حاملي البطاقات الائتمانية",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "تدريبات الشركة"},
    title: "التوعية الأمنية",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },

]

export default TrainingSection