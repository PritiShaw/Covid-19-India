
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve : `gatsby-plugin-google-analytics`,
      options : {
        trackingId: "UA-123740422-2",
        head: false
      }
    },
    { resolve: `gatsby-plugin-react-helmet` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
  ],
}
