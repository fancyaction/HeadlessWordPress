import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  //   const { allWordpressWpFavicon } = useStaticQuery(
  //     graphql`
  //       query {
  //         allWordpressWpFavicon {
  //           edges {
  //             node {
  //               url {
  //                 source_url
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `
  //   )

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
