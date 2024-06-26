import React from 'react'
import { Helmet } from 'react-helmet'
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

function SEO({ description, keywords, title, image, siteUrl, author }) {
  const data = useStaticQuery(detailsQuery)
  const metaDescription = description || data.site.siteMetadata.description
  const metaTitle = title || data.site.siteMetadata.title
  const metaAuthor = author || data.site.siteMetadata.author
  const metaUrl = siteUrl || data.site.siteMetadata.siteUrl
  const metaImage = image || data.site.siteMetadata.image
  const metaKeywords = keywords || data.site.siteMetadata.keywords

  return (
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: metaDescription },
        { property: `og:title`, content: metaTitle },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: 'website' },
        { property: `og:url`, content: metaUrl },
        { property: `twitter:card`, content: 'summary_large_image' },
        { property: `twitter:creator`, content: metaAuthor },
        { property: `twitter:title`, content: metaTitle },
        { property: `twitter:description`, content: metaDescription },
        { property: `twitter:image`, content: metaImage },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
            name: `keywords`,
            content: metaKeywords.join(', '),
          }
          : [],
      )}
    >
      <html lang="en" />
    </Helmet>
  )

}

export default SEO
