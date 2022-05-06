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
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const image = getImage(post.frontmatter.featuredImage)

  console.log(post)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container sx={{ paddingBottom: '8rem', paddingTop: '2rem', maxWidth: ['inherit', 'inherit', 'inherit', '1300px'], flexWrap: 'wrap', gap: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <Box flexBasis={['100%', 'calc(50% - 40px)']}>
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
              <Button>
                Explore the site
              </Button>
            </a>


          </article>
        </Box>
        <Box flexBasis={['100%', '50%', "50%"]}>
          <a href={post.frontmatter.href} target="_blank" rel="noopener noreferrer">
            <Box maxHeight='330px' overflow='hidden'>
              <GatsbyImage image={image} objectPosition='top' objectFit='contain' alt={'yoo'} />
            </Box>
          </a>
        </Box>
        <Box display="flex" minWidth={['90%', null, null, "600px"]} justifyContent='center'>
      


          {previous && (
            <Box alignItems="center" display={['flex']} flexBasis={['45%']} >
              <Link to={previous.fields.slug} rel="prev" sx={{ display: 'flex', color: 'primary.dark', gap: '8px', alignItems: 'center' }}>

                <ArrowCircleLeftIcon sx={{ fontSize: 40 }} />
                <Typography as='p' mb='0'>
                  {previous.frontmatter.title}
                </Typography>

              </Link>
            </Box>
          )}
          {next && (
            <Box display="flex" alignItems="center" justifyContent="center" flexBasis='45%'>

              <Link to={next.fields.slug} rel="next" sx={{ display: 'flex', gap: '8px', color: 'primary.dark', alignItems: 'center'}}>
                <Typography as='p' mb='0'>
                  {next.frontmatter.title} 
                </Typography>
   
                <ArrowCircleRightIcon sx={{ fontSize: 40}}  />
              </Link>
            </Box>
          )}



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
              width: 626
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
