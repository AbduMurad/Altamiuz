import React from "react"
import {graphql, useStaticQuery } from "gatsby"
import styles from "./CoursesTrainingSection.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import Card from "../card/Card"

const TrainingSection = () => {

    const data = useStaticQuery(graphql`
        query {
            file (relativePath: {eq: "lettermarkLogo1.png"}) {
                childImageSharp {
                    fixed (width: 150) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `)

    const image = data.file.childImageSharp.fixed

    const Courses = [
        {
            img: {src: image, alt: "دورات الشركة"},
        title: "دورة كبير مسؤولي تنفيذ نظام إدارة أمن المعلومات ISO27001 LI معتمدة من شركة PECB",
        description: "30 ساعة تدريبية مع شهادة حضور وشهادة اعتماد بعد اجتياز الامتحان"
        },
        {
            img: {src: image, alt: "دورات الشركة"},
        title: "دورة أساسيات تنفيذ نظام إدارة أمن المعلومات ISO27001 LI معتمدة من شركة PECB",
        description: "12 ساعة تدريبية مع شهادة حضور وشهادة اعتماد بعد اجتياز الامتحان"
        },
        {
            img: {src: image, alt: "دورات الشركة"},
        title: "دورة كبير مسؤولي تنفيذ نظام إدارة أمن المعلومات ISO27001 LI",
        description: "30 ساعة تدريبية مع شهادة حضور وشهادة اعتماد بعد اجتياز الامتحان"
        },
        {
            img: {src: image, alt: "دورات الشركة"},
        title: "دورة مقدمة في نظام إدارة أمن المعلومات (محلية)",
        description: "4 ساعات تدريبية مع شهادة حضور"
        },
    ]

    const Training = [
        {
        title: "مقدمة نظام إدارة أمن المعلومات آيزو 27001:2013"
        },
        {
        title: "أساسيات نظام إدارة أمن المعلومات آيزو 27001:2013"
        },
        {
        title: "كبير منفذي نظام إدارة أمن المعلومات آيزو 27001:2013"
        },
        {
        title: "كبير مدققي نظام إدارة أمن المعلومات"
        },
        {
        title: "كبير منفذي نظام إدارة استمرارية الأعمال"
        },
        {
        title: "كبير مديري إدارة المخاطر آيزو 31000"
        },
        {
        title: "نظام حماية معلومات حاملي البطاقات الائتمانية"
        },
        {
        title: "التوعية الأمنية"
        },
    
    ]

    console.log(styles)
    return (
        <section id="training__section" className={styles.training}>
                <ul className={styles.training__items}>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Training[0].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Training[1].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Training[2].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Training[3].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Training[4].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Training[5].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Training[6].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Training[7].title}</li>
                </ul>
                <ul className={styles.courses__items}>
                    <li className={styles.course}>
                        <h2 className={styles.courseTitle}>{Courses[0].title}</h2>
                        <p>{document.danger}</p>
                    </li>
                    {/* <li><Card Item={Courses[0]}/></li>
                    <li><Card Item={Courses[1]}/></li>
                    <li><Card Item={Courses[2]}/></li>
                    <li><Card Item={Courses[3]}/></li> */}
                </ul>
        </section>

    )
}



export default TrainingSection