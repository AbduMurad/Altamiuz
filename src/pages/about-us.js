import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Partners from "../components/stakeholders/Partners"
import ContactUs from "../components/contact-us/ContactUs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Partners />
    <ContactUs />
  </Layout>
)

export default IndexPage
