module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`@barnardos/components`]
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`
  ]
};
