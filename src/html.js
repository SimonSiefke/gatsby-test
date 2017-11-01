import React from 'react'
import { ThemeProvider } from 'styled-components'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html className="no-js">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/foundation/6.2.4/foundation.min.css"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/motion-ui/1.1.1/motion-ui.css"
          />
          <link
            rel="stylesheet"
            href="http://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Alegreya:700"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Amatic+SC|Covered+By+Your+Grace"
          />
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            src="https://code.jquery.com/jquery-3.2.1.js"
            integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
            crossOrigin="anonymous"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.js" />
        </body>
      </html>
    )
  }
}
