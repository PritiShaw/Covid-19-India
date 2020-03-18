import React from "react"

import SEO from "../components/seo"
import StatsMap from "../components/statsMap"
import FooterComponent from "../components/footer"

import "../styles/css/main.css"
import "../styles/css/style.css"

export default () => (
  <>
    <SEO title='Covid19 India Live Map' />
    <main>
      <div id='map' className='wrapper' style={{ height: "100vh" }}>
        <div className='container'>
          <div className='row'>
            <section className='col-12'>
              <header>
                <StatsMap />
              </header>
            </section>
          </div>
        </div>
      </div>
      <h2 style={{ textAlign: "center", margin: "1em" }}>
        For more details visit following sites <br />
        <a href='https://www.mohfw.gov.in/'>
          Ministry of Health and Family Welfare, GOI
        </a>
        <br />
        <a href='https://www.who.int/health-topics/coronavirus'>
          World Health Organisation
        </a>
        <br />
        <a href='https://www.cdc.gov/coronavirus/2019-ncov/'>CDC, USA</a>
      </h2>
      <FooterComponent />
    </main>
  </>
)
