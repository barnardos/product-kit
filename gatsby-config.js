module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`@barnardos/components`]
      }
    }
  ]
};
