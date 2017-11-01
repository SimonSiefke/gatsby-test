import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'
export default class Template extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        {this.props.children()}
        {/* <Footer /> */}
      </div>
    )
  }
}
