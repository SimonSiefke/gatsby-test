import Link from 'gatsby-link'
import React from 'react'
import './index.styl'
const ReadMore = props => (
  <Link
    className={
      'read-more fa fa-arrow-right ' + (props.reverse ? 'fa-rotate-180' : '')
    }
    to={props.path}
    title="Read more"
  />
)

export default ReadMore
