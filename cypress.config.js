const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o3hf43',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/report/mochawesome-report",
      overwrite: true,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss",
    },
  },
});