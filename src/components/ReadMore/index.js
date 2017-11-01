import Link from 'gatsby-link'
import React from 'react'
import './index.styl'
import styled from 'styled-components'
import { getLuminance } from 'polished'
const Icon = styled.i`
  background-color: ${props => props.theme.colors.primary};
  color: ${props =>
    getLuminance(props.theme.colors.primary) > 0.5 ? 'black' : 'white'}
  };
`
// const Icon = Link.extend`background: lime;`
const ReadMore = props => (
  <Link to={props.path} title="Read more">
    <Icon
      className={
        'read-more fa fa-arrow-right ' + (props.reverse ? 'fa-rotate-180' : '')
      }
    />
  </Link>
)

export default ReadMore
