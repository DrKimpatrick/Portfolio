import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave";
import Icons from "../components/icons";
import WelcomeInfo from "../components/welcomeInfo";

const IndexPage = () => (
  <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <WelcomeInfo/>
      <Icons/>  
      <Wave/> 
  </Layout>
)

export default IndexPage

