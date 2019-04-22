const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;

const fs = require('fs');
let rockPaperScissors = fs.readFileSync('src/js/rock-paper-scissors.js');

eval( rockPaperScissors + `\nexports.RockPaperScissors = RockPaperScissors;`)