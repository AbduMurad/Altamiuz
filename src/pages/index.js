import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header/header'
import ServicesSection from "../components/Services/ServicesSection"
import OurVisionSection from "../components/our-vision/OurVisionSection"
import TrainingSection from "../components/training/TrainingSection"
import CoursesSection from "../components/courses/CoursesSection"
import CeoQoute from "../components/stakeholders/CeoQoute"
import Partners from "../components/stakeholders/Partners"
import ContactUs from "../components/contact-us/ContactUs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <ServicesSection />
    <OurVisionSection />
    <TrainingSection />
    <CoursesSection />
    <CeoQoute />
    <Partners />
    <ContactUs />
  </Layout>
)

export default IndexPage
