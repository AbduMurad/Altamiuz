import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header/header'
import ServiceSection from "../components/services/ServicesSection"
import OurVisionSection from "../components/our-vision/OurVisionSection"
import TrainingSection from "../components/training/TrainingSection"
import CoursesSection from "../components/courses/CoursesSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <ServiceSection />
    <OurVisionSection />
    <TrainingSection />
    <CoursesSection />
  </Layout>
)

export default IndexPage
