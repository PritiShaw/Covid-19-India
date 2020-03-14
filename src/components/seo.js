import React from "react"
import Helmet from "react-helmet"

const SEO = ({title}) => {
  return (
    <Helmet
    //   htmlAttributes={{
    //     lang,
    //   }}
      bodyAttributes={{
        class: 'homepage is-preload'
      }}
      title={title}
      meta={[
        {
          property: `og:title`,
          content: title,
        }
      ].concat("")}
    />
  )
}
export default SEO
