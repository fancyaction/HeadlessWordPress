import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const LogoImage = styled.img`
  height: fit-content;
  margin: 0 10px;
  max-height: 39px;
`

const Logo = () => {
  const { allWordpressWpLogo } = useStaticQuery(
    graphql`
      query {
        allWordpressWpLogo {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <LogoImage
        src={allWordpressWpLogo.edges[0].node.url.source_url}
        alt="logo"
      />
    </div>
  )
}

export default Logo
