import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from '../components/header/header'
import ServicesSection from "../components/Services/ServicesSection"
import OurVisionSection from "../components/our-vision/OurVisionSection"
import TrainingSection from "../components/training/TrainingSection"
import CoursesSection from "../components/courses/CoursesSection"
// import CoursesTrainingSection from "../components/courses-training/CoursesTrainingSection"
import CeoQoute from "../components/stakeholders/CeoQoute"
import Partners from "../components/stakeholders/Partners"
import ContactUs from "../components/contact-us/ContactUs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <ServicesSection />
    <OurVisionSection />
    <div className="courses-training-section" id="courses__heading">
      <h1 className="section__heading">الدورات التدريبية والتوعية</h1>
      <TrainingSection />
      <CoursesSection />
    </div>
    {/* <CoursesTrainingSection /> */}
    <CeoQoute />
    <Partners />
    <ContactUs />
  </Layout>
)

export default IndexPage
