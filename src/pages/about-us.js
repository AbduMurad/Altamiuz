import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WeAre from "../components/about-us/WeAre"
import Partners from "../components/stakeholders/Partners"
import ContactUs from "../components/contact-us/ContactUs"
import AboutUsHeader from "../components/about-us/AboutUsHeader"
import OurVisionSection from "../components/our-vision/OurVisionSection"
import SupportedGoals from "../components/about-us/SupportedGoals"
import ISStandards from "../components/about-us/ISStandards"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutUsHeader />
    <WeAre />
    <div style={{transform: "skewY(-2.5deg)", height: "84vh", backgroundColor:"var(--color-blue-dark-1)", display: "flex", alignItems: "center"}}>
      <div style={{transform: "skewY(2.5deg) translateY(-3.9rem)"}}>
        <OurVisionSection />
      </div>
    </div>
    <SupportedGoals />
    <ISStandards />
    <Partners />
    <ContactUs />
  </Layout>
)

export default IndexPage
