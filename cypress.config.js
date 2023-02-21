const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "2j9rqf",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://db.admin.gridedge.dev/site_selector',
    "defaultCommandTimeout": 60000,
    "chromeWebSecurity": false
  },
})
