import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header/header'
import ServiceSection from "../components/Services/ServicesSection"
import OurVision from "../components/our-vision/OurVision"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <ServiceSection />
    <OurVision />
  </Layout>
)

export default IndexPage
