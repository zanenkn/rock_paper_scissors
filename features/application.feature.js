require('../spec.helper');
var sinon = require('sinon');

context('The game', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')  
    await sinon.stub(Math, 'floor').returns(1);
  });

  beforeEach(async () => {
    await browser.page.reload();  
  });

  after(() => {
    browser.close();
  });

  it("returns 'tie' message if user picks 'rock' and computer picks 'rock'", async () => {
    
    await browser.clickOnButton("button[id='rock']");
    let content = await browser.getContent("div[id='message']");
    expect(content).to.contain('You chose rock, computer chose rock. It is a tie.');
  });

});


// stub1
// let computer = new Computer
// await sinon.stub(computer, 'choice').returns("rock")

// stub2
// sinon.stub(Computer, 'choice').get(function getterFn() {
//   return 'rock';
// });

// stub3
// sinon.stub(Computer, 'choice').value('rock')