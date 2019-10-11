import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

const PortfolioItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const PortfolioItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`

const PortfolioImage = styled.img`
  max-width: 100%;
`

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
    <PortfolioItemsWrapper>
      {allWordpressWpPortfolio.edges.map(({ node }) => (
        <PortfolioItem key={node.id}>
          <h2>{node.title}</h2>
          <PortfolioImage
            src={node.featured_media.source_url}
            alt={node.featured_media.alt_text || node.featured_media.title}
          />
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
          <Link to={`/portfolio/${node.slug}`}>Read More</Link>
        </PortfolioItem>
      ))}
    </PortfolioItemsWrapper>
  )
}

export default PortfolioItems
