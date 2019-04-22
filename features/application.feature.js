require('../spec.helper');

 let SetUserChoice = require('../src/js/rock-paper-scissors')

context('User can input her turn and get a result', () => {
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

  it("takes a user input as a user choice", async () => {
    await browser.clickOnButton("button[id='rock']");
    SetUserChoice();
    expect(UserChoice()).to.eql("rock")
  });

  // it('by choosing a "Rock" for her turn', async () => {
  //   await browser.clickOnButton("input[id='Rock']")
  //   let message = await browser.getContent("[id='message']")
  //   expect(message).to.eql(String)
  // });
});