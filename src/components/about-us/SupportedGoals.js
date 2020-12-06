import React from "react"
import "./SupportedGoals.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons"

const SupportedGoals = () => {
    return (
        <section className="supported-goals">
            <p>كما تدعم شركة التميز الأهداف العالمية السبعة عشر للتنمية المستدامة بكل الوسائل المادية والمعنوية لاجل ليبيا وأهلها</p>
            <dl>
                <dt><FontAwesomeIcon icon={faCheckSquare} /> القضاء على الفقر</dt>
                <dd>لا بد من أن يكون النمو الاقتصادي شاملا للجميع بحيث يتيح وظائف مستدام ويعزز المساواة.</dd>

                
                <dt><FontAwesomeIcon icon={faCheckSquare} /> القضاء التام على الجوع</dt>
                <dd>يتيح قطاع الغذاء والزراعة حلولا رئيسية للتنمية، وهما قطاعان محوريان في جهود القضاء على الجوع والفقر.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> الصحة الجيدة والرفاه</dt>
                <dd>ضمان أنماط العيش السليم وتعزيز الرفاه للجميع هما أمران ضروريان لتحقيق التنمية المستدامة.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> التعليم الجيد</dt>
                <dd>الحصول على التعليم الجيد هو الأساس في تحسين معايش الناس وتحقيق التنمية المستدامة.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> المساواة بين الجنسين</dt>
                <dd>المساواة بين الجنسين ليست حقا أصيلا من حقوق الإنسان وحسب، وأنما كذلك ضرورة من ضروريات وجود عالم مستدام ينعم بالإزدهار والسلام.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> المياة النظيفة والنظافة الصحية</dt>
                <dd>إمكانية حصول الجميع على المياه النظيفة هي مكون أساسي من مكونات العالم الذي نبتغيه.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> طاقة نظيفة وبأسعار معقولة</dt>
                <dd>الطاقة هي مسألة مركزية في كل التحديات الماثلة والفرص المتاحة.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> العمل اللائق ونمو الاقتصاد</dt>
                <dd>علينا أن نعيد النظر في الأفكار السائدة في اقتصادنا وأدواته والسياسات الاجتماعية الرامية إلى القضاء على الفقر</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> الصناعة والابتكار والهياكل الأساسية</dt>
                <dd>الاستثمار في الهياكل الأساسية هو شأن حاسم في تحقيق التنمية المستدامة.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> الحد من أوجه عدم المساواة</dt>
                <dd>الحد من التفاوت داخل البلدان وفي ما بينها.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> مدن ومجتمعات محلية مستدامة</dt>
                <dd>التغلب على ‏التحديات التي تواجهها المدن بطرائق تتيح لتلك المدن مواصلة الانتعاش والنمو.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> الاستهلاك والإنتاج المسؤولان</dt>
                <dd>تستهدف أنماط الاستهلاك والإنتاج المستدامة ”إنتاج المزيد بشكل أفضل وبتكلفة أقل.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> العمل المناخي</dt>
                <dd>يضمن التوصل إلى حلول لتغير المناخ عدم تعثر التقدم المحرز  بسبب تلك الظاهرة، وتمتع اقتصادات البلدان بالصحة والقدرة على التكيف.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> الحياة تحت الماء</dt>
                <dd>إن محيطات العالم هي التي تقف وراء ‏النظم العالمية التي تجعل كوكب الأرض صالحاً لسكنى البشرية.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> الحياة في البر</dt>
                <dd>تشكل إزالة الغابات والتصحر  تحديين رئيسيين يؤثران في معايش ملايين الناس. وتُبذل حثيثة في إدارة الغابات ومكافحة التصحر.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> السلام والعدل والمؤسسات القوية</dt>
                <dd>تشجيع وجود المجتمعات السلمية الشاملة للجميع، وتوفير إمكانية اللجوء إلى القضاء، وبناء مؤسسات فعالة خاضعة للمساءلة.</dd>

                <dt><FontAwesomeIcon icon={faCheckSquare} /> عقد الشراكات لتحقيق الأهداف</dt>
                <dd>يتطلب تحقيق التنمية المستدامة تكوين شراكات ناجعة بين الحكومات والقطاع الخاص والمجتمع المدني تُبنى على أهداف ورؤى مشتركة.</dd>
            </dl>
        </section>
    )
}

export default SupportedGoals