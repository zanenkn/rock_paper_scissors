const chai = require('chai')
const sinonChai = require("sinon-chai")
chai.use(sinonChai)
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect



global.setUserChoice = require('./src/js/rock-paper-scissors')
global.Computer = require('./src/js/rock-paper-scissors')
