const path = require('path')
const postTemplate = path.resolve('./src/templates/postTemplate.js')
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `).then(response => {
    const edges = response.data.allMarkdownRemark.edges

    let posts = edges.map(edge => edge.node)

    // adjust the path
    for (let post of posts) {
      post.frontmatter.path = 'blog' + post.frontmatter.path
    }

    for (let i = 0; i < posts.length; i++) {
      const previousPost = posts[i - 1]
      const currentPost = posts[i]
      const nextPost = posts[i + 1]

      createPage({
        path: currentPost.frontmatter.path,
        component: postTemplate,
        context: { post: currentPost, previousPost, nextPost }
      })
    }
  })
}
