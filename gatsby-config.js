module.exports = {
  siteMetadata: {
    title: 'My Portfolio',
    description: "FelixPriori's web developer portfolio",
    url: 'http://www.felixpriori.dev',
    image: '/src/images/avatar.jpg',
    twitterUsername: '@FelixPriori',
    author: 'Felix Rioux Sabourin',
    keywords: ['Front-end developer', 'ReactJS', 'Web developer'],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-6KC73CRW9S', // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-svgr',
  ],
}
