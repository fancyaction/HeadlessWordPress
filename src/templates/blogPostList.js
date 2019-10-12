import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
`

const PageNumberWrapper = styled.div`
  border: 1px solid #eee;
  background: ${({ isCurrentPage }) => (isCurrentPage ? "#eee" : "white")};
`

const PageNumber = styled(Link)`
  display: block;
  padding: 8px 16px;
`

export default ({ pageContext }) => (
  <Layout>
    {pageContext.posts.map(post => (
      <div key={post.node.wordpressID}>
        <h1 dangerouslySetInnerHTML={{ __html: post.node.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
      </div>
    ))}
    <Pagination>
      {Array.from({ length: pageContext.numberOfPages }).map((page, index) => (
        <PageNumberWrapper
          key={index}
          isCurrentPage={index + 1 === pageContext.currentPage}
        >
          <PageNumber to={index ? `/blog/${index + 1}` : "/blog"}>
            {index + 1}
          </PageNumber>
        </PageNumberWrapper>
      ))}
    </Pagination>
  </Layout>
)
