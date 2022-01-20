module.exports = {
	siteMetadata: {
		title: `sarah-jokhu`,
		siteUrl: `https://www.yourdomain.tld`
	},
	plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
			resolve: 'gatsby-plugin-manifest',
			options: {
				"icon": `${__dirname}/src/images/icon.png`
			}
		}, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
			resolve: `gatsby-source-filesystem`,
			options: {
				"name": "images",
				"path": `${__dirname}/src/images/`
			},
			__key: "images"
		}, {
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [{
					resolve: `gatsby-plugin-netlify-cms-paths`,
					options: {
						// Path to your Netlify CMS config file
						cmsConfig: `${__dirname}/static/admin/config.yml`,
					},
				}, ],
			},
		}, {
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "pages",
				"path": `${__dirname}/src/pages/`
			},
			__key: "pages"
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-blog`,
				path: `${__dirname}/content/blog/`,
			},
		}
	]
};
