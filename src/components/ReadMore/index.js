import Link from 'gatsby-link'
import React from 'react'
import './index.styl'
// import styled from 'styled-components'

// const Icon = Link.extend`background: lime;`
const ReadMore = props => (
  <Link
    className={
      'read-more fa fa-arrow-right ' + (props.reverse ? 'fa-rotate-180' : '')
    }
    to={props.path}
    title="Read more"
  >Tsest</Link>
)

export default ReadMore
