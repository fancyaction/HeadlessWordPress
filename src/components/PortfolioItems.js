import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const PortfolioItems = () => {
  const { allWordpressWpPortfolio } = useStaticQuery(
    graphql`
      query {
        allWordpressWpPortfolio {
          edges {
            node {
              id
              title
              excerpt
              content
              slug
              featured_media {
                source_url
                alt_text
                title
              }
            }
          }
        }
      }
    `
  )

  return (
    <div>
      {allWordpressWpPortfolio.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>{node.title}</h2>
          <img
            src={node.featured_media.source_url}
            alt={node.featured_media.alt_text || node.featured_media.title}
          />
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
          <Link to={`/portfolio/${node.slug}`}>Read More</Link>
        </div>
      ))}
    </div>
  )
}

export default PortfolioItems
