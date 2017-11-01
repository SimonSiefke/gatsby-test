import React from 'react'
import Link from 'gatsby-link'
import './index.styl'
import styled from 'styled-components'
// header {
//   width: 100%;
//   background: #9ab;
//   display: flex;
//   justify-content: space-between;
//   font-size: 1.5rem;
//   align-items: center;
//   color: #ffffff;
//   padding: 0.7rem;
// }

// header a {
//   margin: 0 0.5rem;
//   color: inherit;
// }
// header .logo {
//   font-size: 2rNameem;
// }

const Nav = styled.nav``

class MyHeader extends React.Component {
  componentDidMount() {
    $(document).foundation()
  }
  render() {
    return (
      <div className="header">
        <div className="top-bar">
          {/* Mobile Menu */}
          <div
            className="title-bar"
            data-responsive-toggle="responsive-menu"
            data-hide-for="medium"
          >
            <button className="menu-icon" type="button" data-toggle="" />
            <div className="title-bar-title">Menu</div>
            <div className="title-bar-title text-center">
              <a href="">Template One</a>
            </div>
          </div>
          {/* End Mobile Menu */}

          <Nav id="responsive-menu">
            <div className="top-bar-left">
              <ul className="vertical medium-horizontal menu">
                <li className="menu-text">Site Title</li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul
                className="vertical medium-horizontal menu"
                data-responsive-menu="drilldown medium-dropdown"
              >
                <li>
                  <Link to="/Blog">Blog</Link>
                </li>
                <li>
                  <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  <a href="#">Section Four</a>
                </li>
              </ul>
            </div>
          </Nav>
        </div>
      </div>
    )
  }
  // <header>
  //   <div classNameNameNameNameNameNameNameNameNameName="logo">Gatsby</div>
  //   <nav>
  //     <Link to="/">Home</Link>
  //     <Link to="/blog">Blog</Link>
  //     <Link to="/about">About</Link>
  //   </nav>
  // </header>
}

export default MyHeader
