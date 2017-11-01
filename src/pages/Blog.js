import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ReadMore from '../components/ReadMore'
import './Blog.styl'

// const ReadMore = styled(Link)``
const PostPreviewSection = styled.section``
const PostPreview = ({ post }) => {
  return (
    <section className="row medium-8 large-7 columns post-preview">
      <div>
        <h2>{post.frontmatter.title}</h2>
        <h3 className="date">- {post.frontmatter.date} -</h3>
        <p>{post.excerpt}</p>
      </div>
      <ReadMore path={'blog' + post.frontmatter.path} />
    </section>
  )
}
const BlogPosts = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  let posts = edges.map(edge => edge.node)

  const postsList = posts.map((post, index) => (
    <PostPreview post={post} key={index} />
  ))
  return (
    <main id="blog">
      <div className="callout large primary">
        <div className="row column text-center">
          <h1>Latest Blog Posts</h1>
        </div>
      </div>
      {postsList}
    </main>
  )
}

export default BlogPosts

export const postsQuery = graphql`
  query AllPosts {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 150)
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
