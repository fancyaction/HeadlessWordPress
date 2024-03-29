import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`

export default ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <strong>Website URL:</strong>
    <a
      href={pageContext.acf.portfolio_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {pageContext.acf.portfolio_url}
    </a>
    <div>
      <FeaturedImage
        src={pageContext.featuredMedia.source_url}
        alt={
          pageContext.featuredMedia.alt_text || pageContext.featuredMedia.title
        }
      />
    </div>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
  </Layout>
)
