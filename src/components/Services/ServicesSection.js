import React from "react"
import "./ServicesSection.css"
import Card from "../card/Card"
import { graphql, useStaticQuery } from "gatsby"

const ServicesSection = () => {

    const data = useStaticQuery(graphql`
        query {
            file (relativePath: {eq: "lettermarkLogo1.png"}) {
                childImageSharp {
                    fluid(maxHeight:150) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const image = data.file ? data.file.childImageSharp.fluid : {}

    // Show/Hide scrolling arrow paddles
    const showHideScrollingPaddle = (direction, servicesItems) => {
        const blurRight = document.querySelector(".blur-right")
        const blurLeft = document.querySelector(".blur-left")

        if (((direction === "left")? (Math.floor(servicesItems.scrollWidth + servicesItems.scrollLeft)) <= servicesItems.clientWidth: Math.floor(servicesItems.scrollWidth + servicesItems.scrollLeft) === servicesItems.scrollWidth)) {
            (direction === "left")?
            blurLeft.setAttribute("style", "display: none"):
            blurRight.setAttribute("style", "display: none")
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

    const Items = [
        {
            img: {src: image, alt: "خدماتنا"},
        title: "الخدمات الاستشارية في مجال تقنية المعلومات، الاتصالات وأمن المعلومات",
        description: "بخبرات تراكمية تفوق الثلاثين عام لعناصر شركة التميز وشركائها في مجال الاتصالات وتقنية المعلومات ستوفر الشركة الخدمات الاستشارية لكل الجهات الراغبة بما سينعكس إيجابا على توفير الجهد، الوقت والميزانيات لصالح الجهات المستفيدة. وفي سبيل ذلك ستضمن لكم شركة التميز قدرات فريقها الاستشاري المهنية والإدارية والتواصل مع كافة الأطراف في الخدمات التي تخص المشاريع وقدرتها على توفير النصح بخصوص افضل الممارسات الدولية لانجازها."
        },
        {
            img: {src: image, alt: "خدماتنا"},
        title: "إعداد وتقديم الأبحاث الأمنية، بما في ذلك الأمن المادي للقطاع المدني والعسكري",
        description: "إن قدرة شركة التميز لتزويدكم بآخر المستجدات على الساحة الدولية العلمية فيما يخص أمن الاتصالات وتقنية المعلومات نابع من طبيعة عملها وعدم غرقها في الأعمال اليومية التشغيلية التي تعلق بها الإدارات والوحدات التابعة للمؤسسات العاملة في المجالات المختلفة والتي ترتبط بتعهدات تجاه زبائن خدماتها وفي نفس الوقت هذا ما يميز شركتنا من حيث أن هذه هي طبيعة عملنا والتي تتضمن تقديم الخدمات الاستشارية لطيف واسع ومختلف من الزبائن يحتم علينا اللحاق بكل جديد."
        },
        {
            img: {src: image, alt: "خدماتنا"},
        title: "إعداد ومراجعة المواصفات الفنية المتعلقة بتقنية المعلومات، الاتصالات وامن المعلومات",
        description: "ستعمل شركة التميز ومن خلال خبرة موظفيها وشركائها على تزويدكم بالخدمة الاستشارية والوثائق الدقيقة لطلبات العروض والعروض الفنية معتمدة في ذلك على خبرة موظفيها العالية في مجال دراسة وتقييم العروض الفنية وإعدادها التي تفوق 20 سنة خبرة تراكمية."
        },
        {
            img: {src: image, alt: "خدماتنا"},
        title: "تنفيذ نظام إدارة أمن المعلومات آيزو 27001:2013",
        description: "ستعمل شركة التميز للاستشارات وأمن المعلومات على تقديم المساعدة للمؤسسات الليبية فيما يخص تنفيذ نظام إدارة أمن المعلومات من خلال مهندسيها لتغطية جميع المتطلبات الضرورية وتنفيذ ضوابط الحماية حسب ما سيتم سرده ضمن بيان التطابق بحيث يتم وضع أداوات الحماية في مكانها المناسب وضمن افضل ميزانية وتوقيت."
        },
        {
            img: {src: image, alt: "خدماتنا"},
        title: "تنفيذ نظام استمرارية الأعمال آيزو 22301:2012",
        description: "ستعمل شركة التميز للاستشارات وأمن المعلومات مع الشريك الأساسي في الأعمال شركة زيرشانس على تقديم المساعدة للمؤسسات الليبية فيما يخص تنفيذ نظام إدارة استمرارية الأعمال بتعاون مع مهندسيها لتغطية جميع المتطلبات الضرورية وتنفيذ ضوابط الحماية ووضع أدوات الحماية في مكانها المناسب وضمن أفضل ميزانية وتوقيت."
        },
        {
            img: {src: image, alt: "خدماتنا"},
        title: "تنفيذ متطلبات نظام حماية بطاقات الدفع الائتمانية PCIDSS",
        description: "ستعمل شركة التميز للاستشارات وأمن المعلومات مع شريكها الأساسي شركة داتا بروتيكت والمعتمدة دوليا في تنفيذ مشاريع الالتزام بمتطلبات المعيار الدولي لحماية معلومات حاملي البطاقات الائتمانية من خلال تقديم المساعدة للمؤسسات الليبية في كل يخص تنفيذ الالتزام بمتطلبات المعيار، التدقيق الأولي، إدارة المخاطر، جمع الأدلة واختبار نقاط الضعف ومن ثم المعالجة ووضع أدوات الحماية في مكانها المناسب وضمن أفضل ميزانية وتوقيت."
        },
        {
            img: {src: image, alt: "خدماتنا"},
        title: "فحص نقاط الضعف والتدقيق على أمن المعلومات",
        description: "فريق من الخبراء في فحص وتقييم نقاط الضعف والتدقيق على أمن المعلومات ليشمل من تقييم بنية إدارات ووحدات أمن المعلومات، سير الاعمال ودقتها، تقييم خبرات الموظفين وكفاءاتهم، تقييم الأمن الإداري والمادي، تقييم العمليات كل ذلك استنادا لإفضل الممارسات الدولية لحماية الأهداف الحيوية."
        },
        {
            img: {src: image, alt: "خدماتنا"},
        title: "الاستشارات الخاصة بنظم التشفير والحماية",
        description: "آمر مكتب تقنية المعلومات والتشفير بالقوات البحرية هو المنصب الأخير لمؤسس شركة التميز وهو حصيلة مشروع لنقل المعرفة في مجال صناعة لوغاريثمات التشفير المشترك بين الجيش الليبي وشركة انتراكوم الدفاعية اليونانية وكواحد من عشرة مبتعثين لنقل المعرفة في المجال استطاع مع رفاقه تصميم وصناعة أول لوغاريثم تشفير ليبي ومن ذلك الوقت عمل مع رفاقه على طيف مختلف من المعدات العسكرية للتشفير وحماية المعلومات من خلال الاتصالات السلكية واللاسلكية معززا بذلك الاعتراف الممنوح له بدرجة الماجستير في مجال الاتصالات وتقنية المعلومات تخصص أمن معلومات. ولذلك فإن الخبرة التي سيتم تقديمها لكم مبنية على المعرفة الدقيقة في مجال التشفير والشبكة الواسعة من الشركات الدولية التي نمتلكها ."
        },
        {
            img: {src: image, alt: "خدماتنا"},
        title: "تقديم برامج التوعية الأمنية",
        description: "الخط الدفاعي الأول هو التدريب والتوعية ومن أجل ذلك كانت مبادرة التوعية الأمنية آمن+ هي أول ما قمنا بإنجازه منذ العام 2013 والتي كانت ولا تزال متاحة كمادة تدريبية بشكل مجاني للجهات وللأغراض الغير ربحية.كما يمكننا تصميم وتقديم دورات التوعية الأمنية لجميع الجهات الراغبة في ذلك وبأعلى مستوى من ناحية التقديم والمحتوى التدريبي.خبرة مدربين المعتمدين في المجال والتدريس بالجامعات والمعاهد الليبي هي أيضا ركيزة مهمة نعتمد عليها في طرحنا."
        },
    
    ]

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
                </ul>
                <button className="blur-circle blur-left" onClick={leftArrowPaddle} onKeyDown={leftArrowPaddle} aria-label="Mute volume"><i className="arrow left"></i></button>
            </div>
        </section>
    )
}

export default ServicesSection