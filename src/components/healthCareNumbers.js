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
        <div className='wrapper'>
          <div className='container'>
            <div className='row'>
              <section className='col-12 feature'>
                <h2>Statistics</h2>
              </section>
              <section className='col-12 col-12-narrower feature'>
                {/* <div className='image-wrapper first'>
                  <a href='#' className='image featured first'>
                    <img src='images/pic01.jpg' alt='' />
                  </a>
                </div> */}
                <header>
                  <table>
                    {data.allHelpingNumbersCsv.edges.map((edge) => (
                          <tr>
                            <th>{edge.node.State}</th>
                            <th><a href={"tel:" + edge.node.Number}>{edge.node.Number}</a> </th>
                          </tr>
                        )
                      )
                    }
                  </table>
                </header>
              </section>
            </div>
          </div>
        </div>
      </>
    )
    }
  />
)


