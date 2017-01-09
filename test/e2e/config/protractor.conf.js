var Server = require("../../fixtures/app/Server")

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeDriver: '../../../selenium/chromedriver',
  baseUrl: "http://localhost:3002/",
  framework: 'jasmine',
  specs: [
    '../../../lib/test/e2e/specs/*.js'
  ],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true
  },

  onPrepare: function() {
    Server.start(3002)
  }

};
