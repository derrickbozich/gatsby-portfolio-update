/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {


  return (
    <Box backgroundColor="black">
      <Container as='footer' id='contact'
        sx={{
          display: 'flex',
          flexDirection: "column",
          flexWrap: 'wrap',
          padding: '8rem',
          justifyContent: 'center',
          textAlign: 'center'
        }} >
        <Box>
          <Typography color='primary.light' >
            Contact
          </Typography>
          <a href="mailto:dbozich1@gmail.com" target="_blank" rel="noopener noreferrer">
            <Typography color='primary.light' >
              dbozich1@gmail.com
            </Typography>
          </a>
          <a href="mailto:dbozich1@gmail.com" target="_blank" rel="noopener noreferrer">
            <GitHubIcon color='primary.light' />
          </a>
          <Typography color='primary.light' >
            © {new Date().getFullYear()}
          </Typography>
      
        </Box>

      </Container>

    </Box>

  )
}

export default Footer
