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
        fonts: [`Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900`],
        display: 'swap',
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-svgr',
  ],
}
