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

export default () => (
  <>
    <SEO title='Covid19 India Help' />
    <main>
      <HeroComponent/>
      <SymptomsComponent/>
      <StatisticsComponent/>
      <HealthCareCentersComponent/>
      <HealthCareNumbersComponent/>
      <FeedComponent/>
      <FooterComponent/>
    </main>
  </>
)
