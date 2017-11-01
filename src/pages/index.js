import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const H2 = styled.h1``

const Home = () => {
  return (
    <main>
      <H2>HomePage</H2>
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
