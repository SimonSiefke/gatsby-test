import React from 'react'
import Link from 'gatsby-link'
const Home = () => {
  return (
    <main>
      <h1>HomePage</h1>
    </main>
  )
}

export default Home

// export const postsQuery = graphql`
//   query posts {
//     allMarkdownRemark {
//       edges {
//         node {
//           excerpt(pruneLength: 150)
//           frontmatter {
//             title
//             path
//           }
//         }
//       }
//     }
//   }
// `
