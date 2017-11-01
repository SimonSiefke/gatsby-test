const path = require('path')
module.exports = {
  plugins: [
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/_posts`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-stylus',
      options: {
        import: [path.resolve('./style/all.styl')]
      }
    }
  ]
}
