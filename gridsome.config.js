// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: "Forever Living Proizvodi - Aloja Vera",
	siteUrl: "https://alojanaklik.rs/",

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
				exclude: ["/404", "/blog/2", "/blog/3"],
				config: {
					"/": {
						changefreq: "weekly",
						priority: 1.0,
						lastmod: "2021-12-25"
					},
					"/proizvodi/": {
						changefreq: "weekly",
						priority: 0.9,
						lastmod: "2021-12-25"
					},
					"/istorija-kompanije/": {
						changefreq: "weekly",
						priority: 0.7,
						lastmod: "2021-12-25"
					},

					"/postanite-saradnik/": {
						changefreq: "weekly",
						priority: 0.7,
						lastmod: "2021-12-25"
					},

					"/kontakt/": {
						changefreq: "weekly",
						priority: 0.6,
						lastmod: "2021-12-25"
					},

					"/blog/": {
						changefreq: "weekly",
						priority: 0.8,
						lastmod: "2021-12-25"
					},
					"/blog/*": {
						changefreq: "weekly",
						priority: 0.7,
						lastmod: "2021-12-25"
					},

					"/preparati-za-negu-koze/": {
						changefreq: "weekly",
						priority: 0.8,
						lastmod: "2021-12-25"
					},
					"/preparati-za-negu-koze/*": {
						changefreq: "weekly",
						priority: 0.7,
						lastmod: "2021-12-25"
					},

					"/dodaci-ishrani/": {
						changefreq: "weekly",
						priority: 0.8,
						lastmod: "2021-12-25"
					},
					"/dodaci-ishrani/*": {
						changefreq: "weekly",
						priority: 0.7,
						lastmod: "2021-12-25"
					},

					"/mrsavljenje/": {
						changefreq: "weekly",
						priority: 0.8,
						lastmod: "2021-12-25"
					},
					"/mrsavljenje/*": {
						changefreq: "weekly",
						priority: 0.7,
						lastmod: "2021-12-25"
					},

					"/mapici/": {
						changefreq: "weekly",
						priority: 0.8,
						lastmod: "2021-12-25"
					},
					"/mapici/*": {
						changefreq: "weekly",
						priority: 0.7,
						lastmod: "2021-12-25"
					},

					"/preparati-za-higijenu/": {
						changefreq: "weekly",
						priority: 0.8,
						lastmod: "2021-12-25"
					},
					"/preparati-za-higijenu/*": {
						changefreq: "weekly",
						priority: 0.7,
						lastmod: "2021-12-25"
					},

					"/pcelinji-proizvodi/": {
						changefreq: "weekly",
						priority: 0.8,
						lastmod: "2021-12-25"
					},
					"/pcelinji-proizvodi/*": {
						changefreq: "weekly",
						priority: 0.7,
						lastmod: "2021-12-25"
					}
				}
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

		// {
		// 	use: "@gridsome/source-filesystem",
		// 	options: {
		// 		typeName: "Post",
		// 		path: "./content/blog/*.md",
		// 		remark: {
		// 			autolinkHeadings: false
		// 		},

		// 		refs: {
		// 			tags: {
		// 				typeName: "Tag",
		// 				create: true
		// 			}
		// 			// category: {
		// 			// 	typeName: "Category",
		// 			// 	create: true
		// 			// }
		// 		}
		// 	}
		// },

		{
			use: "@gridsome/vue-remark",
			options: {
				typeName: "Post",
				baseDir: "./content/blog",
				route: "/blog/:slug",
				template: "./src/templates/Post.vue",
				plugins: [["gridsome-plugin-remark-shiki", { theme: "nord", skipInline: true }]],
				refs: {
					tags: {
						typeName: "Tag",
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

	// Add beforeBuild event
  hooks: {
    beforeBuild: (context) => {
      const { collection } = context.store;

      const blogPosts = collection.get('Post'); // Adjust 'Post' based on your collection type name

      // Generate routes for each blog post
      blogPosts.data().forEach((post) => {
        context.createPage({
          path: post.path,
          component: './src/templates/Post.vue', // Adjust the path based on your template file
          context: {
            id: post.id,
          },
        });
      });
    },
  },

	chainWebpack: config => {
		config.resolve.alias.set("@img", "@/assets/img");
	}
};
