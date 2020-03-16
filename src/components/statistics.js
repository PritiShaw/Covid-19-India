import React from "react"
import { StaticQuery, graphql } from "gatsby"
import StatsMap from "./statsMap"
import stateData from "../data/stateStats"

let counter = [0, 0, 0]
stateData.map(n => {
  counter[0] += n.death
  counter[1] += n.confirmed
  counter[2] += n.discharged
})

export default () => (
  <>
    <div id='Statistics' className='wrapper'>
      <div className='container'>
        <div className='row' style={{ textAlign: "center" }}>
          <section className='col-12 feature'>
            <h2>Statistics</h2>
          </section>
          <section className='col-4'>
            <h4>Confirmed Cases</h4>
            <h2>{counter[1]}</h2>
          </section>
          <section className='col-4'>
            <h4>Recovered</h4>
            <h2>{counter[2]}</h2>
          </section>
          <section className='col-4'>
            <h4>Deaths</h4>
            <h2>{counter[0]}</h2>
          </section>
        </div>
      </div>
    </div>
    <div className='wrapper' style={{ height: "100vh" }}>
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
  </>
)
