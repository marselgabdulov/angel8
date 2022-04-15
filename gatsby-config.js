module.exports = {
  pathPrefix: '/angel8',
  siteMetadata: {
    title: `Ресторан. Гриль. Бар. ✆ +7 4872 77 02 47`,
    description: `Ресторан. Гриль. Бар. ✆ +7 4872 77 02 47. Блюда паназиатской кухни и блюда на гриле`,
    author: `@MarselGabdulov`,
    siteUrl: `https://angel8bar.ru`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
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
    // `gatsby-plugin-offline`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://angel8bar.ru/',
        sitemap: 'https://angel8bar.ru/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://angel8bar.ru`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-yandex-metrika`,
    //   options: {
    //     trackingId: '55093711',
    //     webvisor: true,
    //     trackHash: true,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
}
