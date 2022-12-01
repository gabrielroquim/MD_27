const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
   setupNodeEvents(on, config) {
    allureWriter(on, config);
    return config;
   },
   baseUrl: 'http://lojaebac.ebaconline.art.br/',
   reporter: "mochawesome",
   reporterOptions: {
    reportDir: "mochawesome-report",
    overwrite: false,
    reportFilename: "index.html",
    html: true,
    json: false
   }
  }
});
