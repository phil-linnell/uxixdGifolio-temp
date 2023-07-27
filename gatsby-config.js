/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "UXIXD Gifolio",
    subtitle: "A gif a day, showing off micro interactions and macro user experiences from UXIXD’s GIFolio.",
    siteUrl: "https://gifolio.uxixd.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/content/gifs/`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "UXIXD Gifolio",
        short_name: "UXIXD",
        start_url: "/",
        display: "minimal-ui",
        icon: "src/assets/uxixd-favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-GZBLQ7YL94",
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          respectDNT: true,
        },
      },
    },
  ],
}
