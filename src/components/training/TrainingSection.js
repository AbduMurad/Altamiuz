import React from "react"
import "./TrainingSection.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"

const TrainingSection = () => {

    const Items = [
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

    return (
        <section className="training" id="training__section">
            <h2 className="section__heading" id="training__section__heading">التدريبات اللي نقدمها في شركة التميز</h2>
            <div className="training__container">
                <ul className="training__items">
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Items[0].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Items[1].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Items[2].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Items[3].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Items[4].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Items[5].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Items[6].title}</li>
                    <li className="training__item"><FontAwesomeIcon icon={faCheckCircle} style={{marginLeft: "1rem"}} />{Items[7].title}</li>
                </ul>
            </div>
        </section>
    )
}



export default TrainingSection