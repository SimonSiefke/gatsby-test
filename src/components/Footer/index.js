import React from 'react'
import './index.css'

const Footer = () => (
  <footer>
    {/* <p>Made with &lt;3 in Germany</p> */}
    <p>{new Date().getFullYear()}</p>
  </footer>
)

export default Footer
