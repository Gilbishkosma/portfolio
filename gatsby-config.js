/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  	plugins: [
  	   'gatsby-plugin-antd',
  	   {
      	resolve: `gatsby-plugin-emotion`,
      	options: {
        	// Accepts all options defined by `babel-plugin-emotion` plugin.
      			 },
       },
	]
}
