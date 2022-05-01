/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import { Link } from "gatsby-theme-material-ui"
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = ({ location }) => {
    const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author
    const social = data.site.siteMetadata?.social
    const rootPath = `${__PATH_PREFIX__}/`
    console.log('location', location)
    // const rootPath = `/`
    const isRootPath = location?.pathname === rootPath

    const navItems = [
        {
            to: '/#portfolio',
            title: "Portfolio",
            icon: false,
            external: false
        },
        {
            to: '/#about',
            title: "About",
            icon: false,
            external: false
        },
        {
            to: '/#contact',
            title: "Contact",
            icon: false,
            external: false
        },
        {
            to: 'https://github.com/derrickbozich',
            title: "Contact",
            icon: <GitHubIcon sx={{fontSize: '30px', color: 'black'}} />,
            external: true
        }
    ]

    return (
        <Container as='header' maxWidth={false} sx={{ display: 'flex', flexWrap: 'wrap' }} >
            <Box flexBasis={["100%", null, "50%"]}>
                {
                    !isRootPath &&
                    <Link to={'/'}>
                        <Typography>
                            Derrick Bozich
                        </Typography>

                    </Link>
                }
            </Box>

            <List
                listStyle='none'
                sx={{
                    flexBasis: ["100%", null, "50%"],
                    display: "flex",
                    gap: "30px",
                    justifyContent: 'flex-end',
                    alignItems: "center"
                }}
            >
                {navItems.map((item, i) => {
                    if (item.external) {
                        return (
                            <ListItem key={i} sx={{ display: 'inline-flex', width: 'auto', padding: 0 }}  >
                                <a href={item.to} target="_blank" rel="noopener noreferrer">
                                    {
                                        item.icon && item.icon
                                    }
                                    
                                </a>
                            </ListItem >

                        )
                    }
                    return (
                        <ListItem sx={{ display: 'inline-flex', width: 'auto',  }} disablePadding>
                            <Link href={item.to} color='primary.dark' sx={{ textDecoration:'none', '&:hover':{textDecoration: 'underline'}}}   >
                                <Typography variant='nav' as='p'>
                                    {item.title}
                                </Typography>
                            </Link>
                        </ListItem >

                    )
                })}

            </List>





        </Container>
    )
}

export default Header
