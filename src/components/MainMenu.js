import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import SiteInfo from "./SiteInfo"
import Logo from "./Logo"

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: rgb(3, 27, 77);
`
const MenuItemWrapper = styled(Link)`
  color: white;
  display: block;
  padding: 8px 16px;
`
const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  width: 960px;
  height: 100%;
`

const MainMenu = () => {
  const { allWordpressWpApiMenusMenusItems } = useStaticQuery(
    graphql`
      query {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main Menu" } }
        ) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `
  )

  return (
    <MainMenuWrapper>
      <MainMenuInner>
        <Logo />
        <SiteInfo />
        {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
          <MenuItemWrapper to={item.object_slug} key={item.title}>
            {item.title}
          </MenuItemWrapper>
        ))}
      </MainMenuInner>
    </MainMenuWrapper>
  )
}

export default MainMenu
