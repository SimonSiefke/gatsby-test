import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import './postTemplate.styl'
import ArrowButton from '../components/ReadMore'
import ReadMore from '../components/ReadMore/index'
import Link from 'gatsby-link'
import { withTheme } from 'styled-components'

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

// const Main = styled.main`background: green;`

const Post = styled.article`flex: 1;`

const Text = styled.div`
  color: ${props => props.theme.colors.textColor};
  margin-top: 2rem;
`

const OtherPosts = styled.section`
  // margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  align-self: flex-end;
  margin: 1.3rem auto;
  max-width: 900px;
  padding 0 1.5rem;
  margin-top:auto;
`
const OtherPost = styled.div`
  ${props => (props['align-right'] ? 'margin-left:auto' : '')};
  align-items: center;
  display: flex;
  .text {
    font-size: ${props => props.theme.fonts.sizes.sm};

    &:hover {
      text-decoration: underline;
    }
  }
`

const PostTemplate = ({ pathContext }) => {
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
    <Post key={post.frontmatter.path}>
      <HeadingWrapper>
        <Heading>
          <Title>{post.frontmatter.title}</Title>
        </Heading>
      </HeadingWrapper>
      <Text dangerouslySetInnerHTML={{ __html: post.html }} />
    </Post>,
    <OtherPosts key="otherPosts" id="otherPosts">
      <h4>Other Blog Posts:</h4>
      <OtherPost>
        {previousPost && (
          <ArrowButton path={previousPost.frontmatter.path} reverse />
        )}
        {previous}
      </OtherPost>
      <OtherPost align-right>
        {next}
        {nextPost && <ArrowButton path={nextPost.frontmatter.path} />}
      </OtherPost>
    </OtherPosts>
  ]
}

export default withTheme(PostTemplate)
