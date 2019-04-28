require('../spec.helper');
var sinon = require('sinon');

context('The game', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
    await browser.page.reload();
  });

  after(() => {
    browser.close();
  });

  it("returns 'win' message if user picks 'rock' and computer picks 'scissors'", async () => {
    before sinon.stub(Computer, 'choice').returns(computersChoice = "scissors");
    await browser.clickOnButton("button[id='rock']");
    
    let content = await browser.getContent("div[id='message']");
    expect(content).to.contain('You chose rock, computer chose scissors. You win!');
  });

});