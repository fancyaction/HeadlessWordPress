import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default ({ pageContext }) => (
  <Layout>
    {pageContext.posts.map(post => (
      <div key={post.node.wordpressID}>
        <h1 dangerouslySetInnerHTML={{ __html: post.node.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
      </div>
    ))}
    {Array.from({ length: pageContext.numberOfPages }).map((page, index) => (
      <div key={index}>
        <Link to={index ? `/blog/${index + 1}` : "/blog"}>{index + 1}</Link>
      </div>
    ))}
  </Layout>
)
