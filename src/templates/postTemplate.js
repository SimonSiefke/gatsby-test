import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import './postTemplate.styl'
import ArrowButton from '../components/ReadMore'
import ReadMore from '../components/ReadMore/index'
import Link from 'gatsby-link'
const HeadingWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  padding-top: 1rem;
`

const Heading = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 600px) {
    text-align: center;
  }
`
const Title = styled.h1`
  letter-spacing: 0.1rem;
  margin-bottom: 0;
  display: inline-block;
  margin-left: 1.5rem;
  padding: 0.3rem 1rem;
  font-size: 2.2rem;
  font-family: 'Alegreya', sans-serif;
  font-weight: 700;
  background: white;
  @media (max-width: 600px) {
    margin-left: 0;
  }

  // &::first-letter {
  //   text-transform: uppercase;
  // }
`

const Text = styled.div`color: ${props => props.theme.colors.textColor};`

const OtherPosts = styled.section``
const OtherPost = styled.div``

const Post = ({ pathContext, theme }) => {
  const { post, previousPost, nextPost } = pathContext
  console.log(theme)
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
      <HeadingWrapper>
        <Heading>
          <Title>{post.frontmatter.title}</Title>
        </Heading>
      </HeadingWrapper>
      <Text dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>,
    <section id="otherPosts" key="otherPosts">
      <h4>Other Blog Posts:</h4>
      <OtherPost align-left>
        {previousPost && (
          <ArrowButton path={previousPost.frontmatter.path} reverse />
        )}
        {previous}
      </OtherPost>
      <OtherPost align-right>
        {next}
        {nextPost && <ArrowButton path={nextPost.frontmatter.path} />}
      </OtherPost>
    </section>
  ]
}

export default Post
