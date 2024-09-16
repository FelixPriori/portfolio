import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const detailsQuery = graphql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				description
				keywords
				title
				image
				siteUrl
				author
			}
		}
	}
`

export default function Seo({
	description,
	keywords,
	title,
	image,
	siteUrl,
	author,
	children,
}) {
	const data = useStaticQuery(detailsQuery)
	const metaDescription = description || data.site.siteMetadata.description
	const metaTitle = title || data.site.siteMetadata.title
	const metaAuthor = author || data.site.siteMetadata.author
	const metaUrl = siteUrl || data.site.siteMetadata.siteUrl
	const metaImage = image || data.site.siteMetadata.image

	return (
		<>
			<html lang="en" />
			<title>{metaTitle}</title>
			<meta name="description" content={metaDescription} />
			<meta name="image" content={metaImage} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={metaTitle} />
			<meta name="twitter:url" content={metaUrl} />
			<meta name="twitter:creator" content={metaAuthor} />
			<meta name="twitter:description" content={metaDescription} />
			<meta name="twitter:image" content={metaImage} />
			{children}
		</>
	)
}
