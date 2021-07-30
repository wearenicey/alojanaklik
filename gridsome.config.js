// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Forever Living Proizvodi | Aloja Vera',
  siteDescription: 'Proizvodi od aloe vere koji pomažu u poboljšanju zdravlja i blagostanja. Besplatne informacije o proizvodima, ishrani i zdravlju. Kontaktirajte nas i ostvarite popuste..',
  siteUrl: 'https://www.alojanaklik.rs/',


  plugins: [
   

    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-P2PWLXN',
        enabled: true,
        debug: true
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/privacy', '/legal']
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
            name: "Aloja proizvodi",
            typeName: "Proizvodi", //required - needs to match template name
            select: {}, //optional
            links: [], //optional
          },
          // {
          //   name: "Parties",
          //   typeName: "Parties", //required - needs to match template name
          //   select: {}, //optional
          //   links: [], //optional
          // },
        ],


      },
    },

    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Author',
        path: './content/author/*.md'
      }
    },

    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/blog/**/*.md',


        refs: {
          author: 'Author',
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    },

    {
      use: 'gridsome-plugin-bundle-analyzer',
      options: {
        onlyProduction: true, // only production bundle will be analyzed by default
        analyzerOptions: {}, // see https://github.com/webpack-contrib/webpack-bundle-analyzer
        analyzerMode: 'static',
      },
    },
  ],


  templates: {
    Post: '/blog/:path',
    Tag: '/tag/:id',


    Proizvodi: "/proizvodi/:path",
  },

  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener',],
      anchorClassName: 'icon icon-link',
    }
  },

  chainWebpack: config => {
    config.resolve.alias.set('@img', '@/assets/img')
  },




}
