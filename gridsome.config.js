// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Awesome Blog',
  siteDescription: 'Blog about awesome lists, collections of resources around a specific technology.',
  siteUrl: 'https://serene-feynman-2c0e7e.netlify.app/',
  metadata: {
    twitter: {
      site: '@simon_mannes',
      creator: '@simon_mannes',
    }
  },

  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '1dsJ2B9eRdXaIBqHi-evES7Sos98Kbkem_NXh4SPdMaM',
        apiKey: 'AIzaSyCvEV1bvBTzfQf7vuCa_Te9rGfAwAAElqM',
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      }
    },

    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-TF72TVR',
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
            name: "Napici",
            typeName: "Event", //required - needs to match template name
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
        typeName: 'Blog',
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

  ],


  templates: {
    googleSheet: [
      {
        path: '/napici/:id',
        component: './src/templates/googleSheet.vue'
      }
    ],
    Event: "/events/:id",
  },

  chainWebpack: config => {
    config.resolve.alias.set('@img', '@/assets/img')
  },




}
