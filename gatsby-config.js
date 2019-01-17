module.exports = {
  siteMetadata: {
    title: `Эмоциональная кухня в Туле. Паназиатская
      кухня и блюда на гриле.`,
    description: `Эмоциональная кухня и бар в Туле. Блюда паназиатской кухни и блюда на гриле. Бронируйте столик ✆ +7 4872 77 02 47`,
    author: `@MarselGabdulov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0b0b0b`,
        theme_color: `#0b0b0b`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat+Alternates`,
          `source sans pro\:400,500,600,700`, // you can also specify font weights and styles
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
