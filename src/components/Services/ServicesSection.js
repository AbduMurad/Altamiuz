import React from "react"
import "./ServicesSection.css"
import Card from "../card/Card"
import Img from "../../images/enLogo.png"

const ServicesSection = () => {

    // Show/Hide scrolling arrow paddles
    const showHideScrollingPaddle = (direction, servicesItems) => {
        const blurRight = document.querySelector(".blur-right")
        const blurLeft = document.querySelector(".blur-left")

        if (((direction === "left")? (Math.floor(servicesItems.scrollWidth + servicesItems.scrollLeft)) <= servicesItems.clientWidth: (servicesItems.scrollWidth + servicesItems.scrollLeft) === servicesItems.scrollWidth)) {
            (direction === "left")?
            blurLeft.setAttribute("style", "visibility: hidden; opacity: 0; display: none;"):
            blurRight.setAttribute("style", "visibility: hidden; opacity: 0; display: none;")
        } else {
            (direction === "left")?
            blurLeft.setAttribute("style", "visibility: visible; opacity: 1; display: flex;"):
            blurRight.setAttribute("style", "visibility: visible; opacity: 1; display: flex;")
        }
        (direction === "left")?
        blurRight.setAttribute("style", "visibility: visible; opacity: 1; display: flex;"):
        blurLeft.setAttribute("style", "visibility: visible; opacity: 1; display: flex;")
    }
    // Adding scrolling behaviour to the arrows    
    const leftArrowPaddle = () => {
        const servicesItems = document.querySelector(".services__items")
        // Scrolling by card's approximate width
        servicesItems.scrollLeft -= 329
        showHideScrollingPaddle("left", servicesItems)
    }
    
    const rightArrowPaddle = () => {
        const servicesItems = document.querySelector(".services__items")
        // Scrolling by card's approximate width
        servicesItems.scrollLeft += 329
        showHideScrollingPaddle("Right", servicesItems)
    }

    


    return (
        <section className="services" id="services__section">
            <h2 className="section__heading">اختر من خدماتنا الأمنية ما تحتاجه مؤسستك</h2>
            <div className="services__container">
                <button className="blur-circle blur-right" onClick={rightArrowPaddle} onKeyDown={rightArrowPaddle} aria-label="Mute volume"><i className="arrow right"></i></button>
                <ul className="services__items">
                    <li><Card Item={Items[0]}/></li>
                    <li><Card Item={Items[1]}/></li>
                    <li><Card Item={Items[2]}/></li>
                    <li><Card Item={Items[3]}/></li>
                    <li><Card Item={Items[4]}/></li>
                    <li><Card Item={Items[5]}/></li>
                    <li><Card Item={Items[6]}/></li>
                    <li><Card Item={Items[7]}/></li>
                    <li><Card Item={Items[8]}/></li>
                    <li><Card Item={Items[9]}/></li>
                    <li><Card Item={Items[10]}/></li>
                    <li><Card Item={Items[11]}/></li>
                    <li><Card Item={Items[12]}/></li>
                    <li><Card Item={Items[13]}/></li>
                </ul>
                <button className="blur-circle blur-left" onClick={leftArrowPaddle} onKeyDown={leftArrowPaddle} aria-label="Mute volume"><i className="arrow left"></i></button>
            </div>
        </section>
    )
}

export const Items = [
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "الخدمات الاستشارية في مجال تقنية المعلومات، الاتصالات وأمن المعلومات",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "إعداد وتقديم الأبحاث الأمنية، بما في ذلك الأمن المادي للقطاع المدني والعسكري",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "إعداد ومراجعة المواصفات الفنية المتعلقة بتقنية المعلومات، الاتصالات وامن المعلومات",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "توفير خدمات كبير موظفي أمن المعلومات CISO AS A SERVICE",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "تنفيذ نظام إدارة أمن المعلومات آيزو 27001:2013",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "تنفيذ نظام استمرارية الأعمال آيزو 22301:2012",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "تنفيذ متطلبات نظام حماية بطاقات الدفع الائتمانية PCIDSS",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "فحص نقاط الضعف والتدقيق على أمن المعلومات",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "حماية قواعد البيانات",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "الاستشارات الخاصة بنظم التشفير والحماية",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "تقييمات نقاط الضعف واختبار الاختراقات",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "تقييم نقاط الضعف باستخدام تقنيات الهندسة الاجتماعية",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "طيف واسع من حلول أمن المعلومات",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },
    {
        img: {src: Img, alt: "حماية قواعد البيانات"},
    title: "تقديم برامج التوعية الأمنية",
    description: "باتباع معيار ISO وأحدث التقنيات المستخدمة لتشفير وتخزين المعلومات."
    },

]

export default ServicesSection