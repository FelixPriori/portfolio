module.exports = {
	siteMetadata: {
		title: 'My Portfolio',
		description: "FelixPriori's web developer portfolio",
		siteUrl: 'http://www.felixpriori.dev',
		image: '/src/images/avatar.jpg',
		twitterUsername: '@FelixPriori',
		author: 'Felix Rioux Sabourin',
		keywords: ['Front-end developer', 'ReactJS', 'Web developer'],
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `FelixPriori's Portfolio`,
				short_name: `Portfolio`,
				start_url: `/`,
				background_color: `#eceff4`,
				theme_color: `#eceff4`,
				display: `standalone`,
				icon: `src/images/favicon-32x32.png`,
				icons: [
					{
						src: `src/images/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `src/images/android-chrome-256x256.png`,
						sizes: `256x256`,
						type: `image/png`,
					},
				],
			},
		},
		`gatsby-plugin-root-import`,
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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'images',
				path: `${__dirname}/src/images/`,
			},
		},
		{
			resolve: `gatsby-plugin-robots-txt`,
			options: {
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900`,
					`Rowdies:wght@300;400;700`,
				],
				display: 'swap',
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-svgr`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		'gatsby-plugin-dark-mode',
	],
}
