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
        {data.allNewsFeedCsv.edges.map((edge) => (
                          <div>
                            <h3><a href={ edge.node.Url}>{edge.node.Title}</a></h3>
                            <small>{edge.node.PublishedAt}</small>
                            <p>{edge.node.Description}
                            <br/>
                            <small><em>by {edge.node.SourceName}</em></small>
                            </p>
                          </div>
                        )
                      )
                    }
      </>              
    )
    }
  />
)
