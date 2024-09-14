// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}

// gridsome.server.js

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const airtableApi = 'https://api.airtable.com/v0/'
    const baseId = process.env.AIRTABLE_BASE_ID
    const tableName = 'ALOJA'
    const token = process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN

    // Fetch data from Airtable using the Personal Access Token
    const response = await axios.get(`${airtableApi}${baseId}/${tableName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const items = response.data.records
    const collection = addCollection({
      typeName: 'YourDataType',
    })

    items.forEach((item) => {
      collection.addNode({
        id: item.id,
        ...item.fields,
      })
    })
  })
}
