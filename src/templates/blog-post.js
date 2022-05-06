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
      <Container sx={{ paddingBottom: '8rem', paddingTop: '2rem', maxWidth: ['inherit', 'inherit', 'inherit',  '1300px'], flexWrap: 'wrap', gap: '40px', display: 'flex', justifyContent: 'center' }}>
     
        <Box flexBasis={['100%','calc(50% - 40px)']}>
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
          {/* <img src={post.frontmatter.featuredImage} width='300px' height='300px' alt="yooo" /> */}
          <GatsbyImage image={image} objectPosition='top' objectFit='contain' alt={'yoo'} />
        </Box>
        <Box alignItems="center" display={['flex']} flexBasis={['15%']}>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" flexBasis='15%'>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
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
              height: 340
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
