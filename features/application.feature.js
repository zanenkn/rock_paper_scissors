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

  it("returns a message, containing 'You chose rock' after player clicks 'rock' button", async () => {
    await browser.clickOnButton("button[id='rock']");
    let content = await browser.getContent("div[id='message']");
    expect(content).to.contain('You chose rock');
  });

  it("returns a message, containing 'You chose paper' after player clicks 'paper' button", async () => {
    await browser.clickOnButton("button[id='paper']");
    let content = await browser.getContent("div[id='message']");
    expect(content).to.contain('You chose paper');
  });

  it("returns a message, containing 'You chose scissors' after player clicks 'scissors' button", async () => {
    await browser.clickOnButton("button[id='scissors']");
    let content = await browser.getContent("div[id='message']");
    expect(content).to.contain('You chose scissors');
  });

});
