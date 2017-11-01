import React from 'react'

const PostPreview = ({ post }) => {
  console.log(post)
  return (
    <section>
      <h2>{post.frontmatter.title}</h2>
      <p>{post.excerpt}</p>
    </section>
  )
}

export default PostPreview
