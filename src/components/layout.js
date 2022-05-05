import * as React from "react"
import TopLayout from "../gatsby-theme-material-ui-top-layout/components/top-layout"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import Header from './header'
import Footer from './footer'

const Layout = ({ location, title, children }) => {
  return (
    <TopLayout theme={theme}>
        <Header location={location} />
        <main>{children}</main>
        <Footer/>
    </TopLayout>
  )
}

export default Layout
