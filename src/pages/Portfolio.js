import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
// Define our button
const H3 = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`

// Define what main theme will look like
const theme = {
  main: 'mediumseagreen'
}

const H2 = props => <H3>hiii {console.log(props)}</H3>

const Test = () => (
  <div>
    <ThemeProvider theme={theme}>
      <div>
        <H2 />
      </div>
    </ThemeProvider>
  </div>
)

export default Test
