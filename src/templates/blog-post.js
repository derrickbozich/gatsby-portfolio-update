import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-theme-material-ui"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';


const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const image = getImage(post.frontmatter.featuredImage)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container sx={{ paddingTop: '2rem', maxWidth: ['inherit', 'inherit', 'inherit', '1300px'], flexWrap: 'wrap', gap: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <Box flexBasis={['100%', '100%', 'calc(50% - 40px)']} position='relative'>
          <Link to='/' sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <ArrowBackIosNew sx={{ fontSize: 20, color: 'primary.dark', marginRight: '0.5rem' }} />
            <Typography color='primary.dark' variant='brand'>
              Back
            </Typography>
          </Link>
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <Typography variant='h3' as='h1'>
                {post.frontmatter.title}
              </Typography>
              {/* <p>{post.frontmatter.date}</p> */}
            </header>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            {/* {post.frontmatter.featuredImage} */}
            <a href={post.frontmatter.href} target="_blank" rel="noopener noreferrer">
              <Button variant='secondary'>
                Explore the site
              </Button>
            </a>


          </article>

        </Box>
        <Box flexBasis={['100%', '100%', "50%"]}>
          <a href={post.frontmatter.href} target="_blank" rel="noopener noreferrer">
            {/* <Box height='400px' overflow='hidden' display="flex" alignItems='center'> */}
            <GatsbyImage image={image} style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }} imgStyle={{ borderRadius: '8px' }} alt={post.frontmatter.title} />
            {/* </Box> */}
          </a>
        </Box>





      </Container>
      <Container sx={{
        paddingBottom: ['4rem', '8rem', '8rem'],
        maxWidth: ['inherit', 'inherit', 'inherit', '1300px'],
      }}>
        <Box display="flex" flexBasis={['100%', '100%', "50%"]} justifyContent='space-between' mt='3rem'  >




          <Box alignItems="center" display={['flex']} flexBasis={['45%']} >
            {previous && (
              <Link to={previous.fields.slug} rel="prev" sx={{ display: 'flex', color: 'primary.dark', gap: '8px', alignItems: 'center' }}>

                <ArrowBackIosNew sx={{ fontSize: 30 }} />
                <Typography as='p' variant='nav2' mb='0'>
                  {previous.frontmatter.title}
                </Typography>

              </Link>
            )}
          </Box>


          <Box display="flex" alignItems="center" justifyContent="flex-end" flexBasis='45%'>
            {next && (
              <Link to={next.fields.slug} rel="next" sx={{ display: 'flex', gap: '8px', color: 'primary.dark', alignItems: 'center' }}>
                <Typography as='p' variant='nav2' mb='0'>
                  {next.frontmatter.title}
                </Typography>

                <ArrowForwardIosIcon sx={{ fontSize: 30 }} />
              </Link>
            )}
          </Box>




        </Box>
      </Container>

    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        href
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 779
              height: 426
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
