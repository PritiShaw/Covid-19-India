import React from "react"

import SEO from "../components/seo"
import HeroComponent from "../components/hero"
import SymptomsComponent from "../components/symptoms.js"
import StatisticsComponent from "../components/statistics"
import HealthCareCentersComponent from "../components/healthCareCenters"
import HealthCareNumbersComponent from "../components/healthCareNumbers"
import FeedComponent from "../components/feed"
import FooterComponent from "../components/footer"

import "../styles/css/main.css"
import "../styles/css/style.css"

export default () => (
  <>
    <SEO title='Covid19 India Help' />
    <main>
      <HeroComponent />
      <SymptomsComponent />
      <h2 style={{textAlign:"center",margin:"1em"}}>
        For more details visit following sites{" "}
        <br/>
        <a href="https://www.mohfw.gov.in/">Ministry of Health and Family Welfare, GOI</a>
        <br/>
        <a href="https://www.who.int/health-topics/coronavirus">World Health Organisation</a>
        <br/>
        <a href='https://www.cdc.gov/coronavirus/2019-ncov/'>CDC, USA</a>
      </h2>
      <StatisticsComponent />
      <HealthCareCentersComponent />
      <HealthCareNumbersComponent />
      <FeedComponent />
      <FooterComponent />
    </main>
  </>
)
