import * as React from "react"
import { graphql } from "gatsby"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Layout from "../components/layout"
import Seo from "../components/seo"
import sinwav from "../svg/sinwav.svg"
import Blob from "../components/blob/blob-react"
import Slider from "react-slick";
import { Link } from 'gatsby-theme-material-ui'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const clients = [
    {
      to: 'https://cactusinc.com',
      title: 'Cactus Inc'
    },
    {
      to: 'https://gritdigitalhealth.com',
      title: 'Grit Digital Health'
    },
    {
      to: 'https://kemado.com/',
      title: 'Kemado Media Group'
    },
    {
      to: 'https://www.dominomusic.com/us',
      title: 'Domino Records'
    }
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      }
    ]
  };

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />

      <Box minHeight='max(700px,calc(100vh - 63px))' display='flex' alignItems='center'>
        <Container sx={{ display: 'flex', maxWidth:'1100px', alignItems: 'center', flexWrap: 'wrap', justifyContent: ['flex-start', 'center', 'flex-start'] }}>

          <Box flexBasis={['100%', '100%', '100%', '50%']} textAlign={['left', 'center', 'center', 'left']}>
            <Typography variant='h1'>
              Derrick Bozich
            </Typography>
            <Typography variant='subhead1'>
              Full Stack Developer
            </Typography>
          </Box>
          <Box flexBasis={['100%', '100%', '100%', '50%']} pt={['30px']} display='flex' justifyContent={['flex-start', 'center', 'center', 'flex-start']}>
            <img src={sinwav} alt="sin wave" width='518px' style={{ maxWidth: '100%' }} />
          </Box>

        </Container>

      </Box>

      <Box backgroundColor='white' minHeight='max(700px, 80vh)'>

        <Container id='portfolio' >
          <Box >
            <Typography variant='h2' pt='6rem'>
              Portfolio
            </Typography>
            <Typography variant='body2' mb='1rem'>
              Click on a blob to explore a project.
            </Typography>
          </Box>
        </Container>
        <ol style={{ listStyle: `none`, paddingLeft: 0, maxWidth: '1200px', margin: '0 auto' }}>
          <Slider {...settings}>
            {posts.filter(post => post.featured !== true).map((post, i) => {
              const title = post.frontmatter.title || post.fields.slug

              if(!post.frontmatter.featured){
                return null
              }

              return (
                <div key={post.fields.slug}>
                  <Link href={post.fields.slug} color='primary.dark'>
                    <Blob title={title} />

                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >

                     
                    </article>

                  </Link>


                </div>
              )
            })}

          </Slider>

        </ol>

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Container id='about' sx={{ paddingBottom: '6rem' }}>
          <Typography variant='h2' pt='6rem'>
            About
          </Typography>
          <Typography variant='body1'>
            Hi! I'm Derrick Bozich, a full stack developer living in Denver, CO. I have been coding since 2017 and have a certificate in full stack web development from The Flatiron School (NYC). I spend most of my time working with marketing agencies, musicians, small businesses and non-profit organizations. I love the process of learning, collaboration and doing quality work. Please feel free to contact me, I would love to help you with your project.
          </Typography>

          <Typography as='h2' variant='subhead2'>
            Tools
          </Typography>
          <Typography variant='body1'>
            Node, Express, MongoDB, React, Redux, Wordpress, PHP, Apache, Sage, Pantheon, Gatsby, Netlify, Prismic.io, GraphQL, Spotify API, The Slim Framework, Ruby on Rails, CSS3, HTML5, JavaScript, Git, Grunt, Processing , p5.js , Photoshop , Sketch , Object Oriented Programming.
          </Typography>
          <Typography as='h2' variant='subhead2'>
            What I'm practicing:
          </Typography>
          <Typography variant='body1'>
            I am always learning new frameworks, languages, coding practices or strengthening my knowledge of what I am already familiar with. Right now, I am focusing on learning more advanced React concepts. I am also am beginning my studies of Digital Signal Processing.
          </Typography>
          <Typography as='h2' variant='subhead2'>
            Clients
          </Typography>
          <Box as='ul' sx={{ listStyle: 'none', paddingLeft: '0', marginTop: 0, marginBottom: '3rem' }}>
            {
              clients.map((item, i) => {
                return (
                  <Box as='li' key={i} sx={{ marginBotton: '1rem' }}>
                    <a href={item.to} target="_blank" rel="noreferrer nofollow" key={i} style={{":hover": {textDecoration: "underline"}}}>
                      <Typography variant='body1' mb='0' color='primary.dark' sx={{ ":hover": { textDecoration: "underline" } }}>
                        {item.title}
                      </Typography>
                    </a>
                  </Box>

                )
              })
            }
          </Box>
        </Container>

      </Box>





    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          featured
        }
      }
    }
  }
`
