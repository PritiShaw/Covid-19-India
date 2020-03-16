import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      {
        allNewsFeedCsv {
          edges {
            node {
              Title
              Description
              SourceName
              Url
              PublishedAt(formatString: "MMMM DD, YY")
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div id='News' className='wrapper' style={{paddingTop:"0"}}>
          <div className='container'>
            <div className='row'>
              <section className='col-12 feature'>
                <h2>News Headlines</h2>
              </section>
              <section className='col-12 col-12-narrower feature'>
                <header style={{textAlign:"left"}}>
                  {data.allNewsFeedCsv.edges.map(edge => (
                    <div>
                      <h3>
                        <a target='__blank' href={edge.node.Url}>
                          {edge.node.Title}
                        </a>
                      </h3>
                      <small>{edge.node.PublishedAt}</small>
                      <p>
                        {edge.node.Description}
                        <br />
                        <small>
                          <em>by {edge.node.SourceName}</em>
                        </small>
                      </p>
                    </div>
                  ))}
                </header>
              </section>
            </div>
          </div>
        </div>
      </>
    )}
  />
)
