import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-theme-material-ui"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const image = getImage(data.imageSharp.gatsbyImageData)

  console.log('data', data)
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container maxWidth={false} sx={{ paddingBottom: '8rem', paddingTop: '2rem', flexWrap: 'wrap', gap: '40px', display: 'flex', justifyContent: 'center' }}>
     
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
            {post.frontmatter.featuredImage}
           
          </article>
        </Box>
        <Box flexBasis={['100%', '50%', "50%"]}>
          {/* <img src={post.frontmatter.featuredImage} width='300px' height='300px' alt="yooo" /> */}
          <GatsbyImage image={image} alt={'yooo'} />
          <img src="" alt="" srcSet={data.imageSharp.gatsbyImageData.images.fallback.srcSet } />
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
    $featuredImage: String
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
        featuredImage
      }
    }
    imageSharp(resize: {originalName: {eq: $featuredImage }}) {
    gatsbyImageData
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
