const { defineConfig } = require("cypress");
// To resolve @cypress/browserify-preprocessor issue, add depedencies in package .json and after adding, close the cypress dashboard and run the command "npm install" in terminal
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  env: {
    url: "https://rahulshettyacademy.com/",
  },
  e2e: {

    setupNodeEvents,
    specPattern: 'cypress/integration/*.feature',

    supportFile: 'cypress/support/e2e.js',
  },
});
