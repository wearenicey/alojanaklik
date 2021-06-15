// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
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
    }


  ],
  templates: {
    googleSheet: [
      {
        path: '/napici/:id',
        component: './src/templates/googleSheet.vue'
      }
    ]
  },

  chainWebpack: config => {
    config.resolve.alias.set('@img', '@/assets/img')
  },


}
