const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "/",
    toPath: "/home",
    redirectInBrowser: true,
    isPermanent: true,
  })

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
            title
            content
          }
        }
      }

      allWordpressWpPortfolio {
        edges {
          node {
            id
            title
            excerpt
            content
            status
            template
            path
            featured_media {
              source_url
              alt_text
              title
            }
            acf {
              portfolio_url
            }
          }
        }
      }

      allWordpressPost {
        edges {
          node {
            title
            content
            wordpress_id
            date
            excerpt
            path
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const {
    allWordpressPage,
    allWordpressWpPortfolio,
    allWordpressPost,
  } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const portfolioUnderContentTemplate = path.resolve(
    `./src/templates/portfolioUnderContent.js`
  )

  const templates = {
    "portfolio_under_content.php": portfolioUnderContentTemplate,
  }

  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: edge.node.path,
      component: slash(templates[edge.node.template] || pageTemplate),
      context: {
        id: edge.node.id,
        status: edge.node.status,
        template: edge.node.template,
        format: edge.node.format,
        title: edge.node.title,
        content: edge.node.content,
      },
    })
  })

  const portfolioTemplate = path.resolve(`./src/templates/portfolio.js`)

  allWordpressWpPortfolio.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(portfolioTemplate),
      context: {
        id: edge.node.id,
        status: edge.node.status,
        template: edge.node.template,
        format: edge.node.format,
        title: edge.node.title,
        content: edge.node.content,
        featuredMedia: edge.node.featured_media,
        acf: edge.node.acf,
      },
    })
  })

  const blogPostListTemplate = path.resolve(`./src/templates/blogPostList.js`)
  const POSTS_PER_PAGE = 2
  const posts = allWordpressPost.edges
  const numberOfPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  Array.from({ length: numberOfPages }).forEach((page, index) => {
    createPage({
      path: index ? `/blog/${index + 1}` : "/blog",
      component: slash(blogPostListTemplate),
      context: {
        posts: posts.slice(
          index * POSTS_PER_PAGE,
          index * POSTS_PER_PAGE + POSTS_PER_PAGE
        ),
        numberOfPages,
        currentPage: index + 1,
      },
    })
  })
}
