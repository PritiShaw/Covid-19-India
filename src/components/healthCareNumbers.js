import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      {
        allHelpingNumbersCsv {
          edges {
            node {
              State
              Type
              Number
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div id='HelplineNos' className='wrapper'>
          <div className='container'>
            <div className='row'>
              <section className='col-12 feature'>
                <h2>Helpline Numbers</h2>
              </section>
              <section className='col-6 off-3 col-12-narrower feature'>
                <center>
                  <strong>
                    National Helplines Number:{" "}
                    <a href='tel:+91-11-23978046'>+91-11-23978046</a>
                    <br />
                    <a
                      href='mailto:ncov2019@gmail.com'
                      target='_top'
                    >
                    ncov2019@gmail.com
                    </a>
                  </strong>
                  <br />
                  <br />
                </center>
                <header>
                  <table>
                    {data.allHelpingNumbersCsv.edges.map(edge => (
                      <tr>
                        <th>{edge.node.State}</th>
                        <th>
                          <a href={"tel:" + edge.node.Number}>
                            {edge.node.Number}
                          </a>{" "}
                        </th>
                      </tr>
                    ))}
                  </table>
                </header>
              </section>
            </div>
          </div>
        </div>
      </>
    )}
  />
)
