// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: "Forever Living Proizvodi - Aloja Vera",
	siteUrl: "https://www.alojanaklik.rs/",

	plugins: [
		{
			use: "gridsome-plugin-gtm",
			options: {
				id: "GTM-P2PWLXN",
				enabled: true,
				debug: true
			}
		},

		{
			use: "@gridsome/plugin-sitemap",
			options: {
				exclude: ["/privacy", "/legal"]
			}
		},

		{
			use: "@gridsome/source-airtable",
			options: {
				// Add these to a .env file
				// Details on finding these values can be found at:
				// https://gridsome.org/plugins/@gridsome/source-airtable
				apiKey: process.env.AIRTABLE_KEY, //required
				baseId: process.env.AIRTABLE_BASE, //required
				tables: [
					{
						name: "ALOJA",
						typeName: "Proizvodi", //required - needs to match template name
						select: {}, //optional
						links: [
							{
								fieldName: "category",
								typeName: "Kategorija",
								linkToFirst: false // optional
							}
						] //optional
					},
					{
						name: "category",
						typeName: "Kategorija",
						links: [
							{
								fieldName: "ALOJA",
								typeName: "Proizvodi",
								linkToFirst: false // optional
							}
						] //optional //required - needs to match template name
					}
				]
			}
		},

		{
			use: "@gridsome/source-filesystem",
			options: {
				typeName: "Post",
				path: "./content/blog/**/*.md",
				remark: {
					autolinkHeadings: false
				},

				refs: {
					tags: {
						typeName: "Tag",
						create: true
					},
					category: {
						typeName: "Category",
						create: true
					}
				}
			}
		},

		{
			use: "gridsome-plugin-bundle-analyzer",
			options: {
				onlyProduction: true, // only production bundle will be analyzed by default
				analyzerOptions: {}, // see https://github.com/webpack-contrib/webpack-bundle-analyzer
				analyzerMode: "static"
			}
		}
	],

	templates: {
		Post: "/blog/:path",
		Tag: "/tag/:id",

		Proizvodi: "/:kategorija/:path",
		Kategorija: [
			{
				path: "/:slug",
				componenent: "~/templates/Kategorija.vue"
			}
		]
	},

	transformers: {
		remark: {
			externalLinksTarget: "_blank",
			externalLinksRel: ["noopener"]
		}
	},

	chainWebpack: config => {
		config.resolve.alias.set("@img", "@/assets/img");
	}
};
