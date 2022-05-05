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
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {


  return (
    <Box backgroundColor="black">
      <Container as='footer' id='contact'
        sx={{
          display: 'flex',
          flexDirection: "column",
          flexWrap: 'wrap',
          padding: '6rem 0 4rem 0',
          justifyContent: 'center',
          textAlign: 'center'
        }} >
        <Box>
          <Typography color='primary.light' as='p' variant='subhead2' mb='1.5rem' >
            Contact
          </Typography>
          <a href="mailto:dbozich1@gmail.com" target="_blank" rel="noopener noreferrer">
            <Typography color='primary.light' variant='body2' mb='1.5rem'>
              dbozich1@gmail.com
            </Typography>
          </a>
          <a href="https://github.com/derrickbozich" target="_blank" rel="noopener noreferrer">
            <GitHubIcon color='primary.light' sx={{ fontSize:'40px', color:'white', marginBottom: '1rem', marginRight: '0.5rem'}} />
          </a>
          <a href="mailto:dbozich1@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon color='primary.light' sx={{ fontSize:'40px', color:'white', marginBottom: '1rem'}} />
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
