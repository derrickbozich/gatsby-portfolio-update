import * as React from "react"
import { Link } from "gatsby"
import TopLayout from "../gatsby-theme-material-ui-top-layout/components/top-layout"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import Header from './header'
import Footer from './footer'
import Box from '@mui/material/Box'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`


  return (
    <TopLayout theme={theme}>

        <Header locaction={location} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>

     
    
       

    </TopLayout>
    
  )
}

export default Layout
