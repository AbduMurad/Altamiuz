import React from "react"
import "./header.css"


const Header = () => {
  return (
    <div className="hero">
      <div className="hero__left-side"></div>
      <div className="hero__right-side">
        <h1 className="hero__heading hero__heading-title">التميز</h1>
        <h2 className="hero__heading hero__heading-discription">للاستشارات وأمن المعلومات</h2>
        <div className="hero__heading">
          <h4 className="hero__heading hero__heading-cta">قم بتأمين وحماية بيانات مؤسستك<br/>باتباع أفضل الأساليب<br/>وأكثرها موثوقية</h4>
          <button className="hero__heading btn" id="hero__cta">تواصل معنا</button>
        </div>
      </div>
    </div>
  )
}
export default Header