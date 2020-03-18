import React from "react"

export default class FooterComponent extends React.Component {
  render () {
    return (
      <div
        style={{ backgroundColor: "grey", color: "white", textAlign: "center", padding: "1em" }}
      >
        <a href="https://covid19india.netlify.com">covid19india.netlify.com</a>
        <p
          style={{
            margin: 0,
            padding: "1em",
            fontSize: "0.75em",
            lineHeight: "1em",
          }}
        >
          Please follow Government directives
          <br />
          The site/owners have tried to maintain correctness of the information,
          but errors might creep in.
          <br />
          Contact Medical Representatives to know more
          <br />
          All information are collected from Healthcare units of Governments
          across the world and UN
          <br />
          The numbers are collected from <a href="https://www.mohfw.gov.in" target="_blank">www.mohfw.gov.in</a> and are indicative
          and not real time.
        </p>
      </div>
    )
  }
}
