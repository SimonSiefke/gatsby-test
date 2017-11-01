import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider } from 'styled-components'
import './index.css'
import themes from '../../themes'

export default class Template extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themes.default}>
        <div id="wrapper">
          <Header />
          {this.props.children()}
          {/* <Footer /> */}
        </div>
      </ThemeProvider>
    )
  }
}
