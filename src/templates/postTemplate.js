import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import './postTemplate.styl'
import ArrowButton from '../components/ReadMore'
import ReadMore from '../components/ReadMore/index'
import Link from 'gatsby-link'
const Heading = styled.div`
  display: flex;
  position: relative;
  background: #ff6666;
  padding: 1rem 1rem 0 1rem;
`
const Title = styled.h1`
  // margin: 0 10% 0 10%;
  // margin: 0 auto;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 1.5rem;
  padding: 0.3rem 1rem;
  font-size: 2.2rem;
  font-family: 'Alegreya', sans-serif;
  font-weight: 700;
  background: white;
  color: #ff6666;
  letter-spacing: 0.1rem;
  // @media (min-width: 400px) {
  //   margin-left: 20%;
  //   margin-right: 20%;
  // }

  &::first-letter {
    text-transform: uppercase;
  }
`

const Post = ({ pathContext }) => {
  const { post, previousPost, nextPost } = pathContext

  // create a span with a class of first-word around the first word
  // const firstWord = post.html
  //   .substr(0, post.html.indexOf(' '))
  //   .replace(/^<(?:.|\n)*?>/, '')
  // post.html = post.html.replace(
  //   firstWord,
  //   `<span class="first-word">${firstWord}</span>`
  // )

  // readNext(anotherPost){

  // }

  const next = nextPost ? (
    <Link className="text" to={nextPost.frontmatter.path}>
      {nextPost.frontmatter.title}
    </Link>
  ) : (
    ''
  )
  const previous = previousPost ? (
    <Link className="text" to={previousPost.frontmatter.path}>
      {previousPost.frontmatter.title}
    </Link>
  ) : (
    ''
  )

  return [
    <article key="article">
      <Heading>
        <Title>{post.frontmatter.title}</Title>
      </Heading>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>,
    <section id="otherPosts" key="otherPosts">
      <h4>Other Blog Posts:</h4>
      <div>
        {previousPost && (
          <ArrowButton path={previousPost.frontmatter.path} reverse />
        )}
        {previous}
      </div>
      <div>
        {next}
        {nextPost && <ArrowButton path={nextPost.frontmatter.path} />}
      </div>
    </section>
  ]
}

export default Post
