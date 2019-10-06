import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => {
  const { allWordpressPage } = useStaticQuery(
    graphql`
      query {
        allWordpressPage {
          edges {
            node {
              id
              title
              content
              excerpt
              date
              modified
              slug
              status
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <div>
        {allWordpressPage.edges.map(page => (
          <div key={page.node.id}>
            <h1>{page.node.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.node.content }} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
