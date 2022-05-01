import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-theme-material-ui"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container maxWidth={false} sx={{ paddingBottom: '8rem', paddingTop: '2rem', gap: '30px', display: 'flex' }}>
        <Box display="flex" alignItems="center">
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </Box>
        <Box flexBasis='40%'>
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
              {/* <p>{post.frontmatter.date}</p> */}
            </header>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            <hr />
            <footer>
              <Bio />
            </footer>
          </article>
        </Box>
        <Box flexBasis='40%'>
          <img src="" width='300px' height='300px' alt="yooo" />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
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
