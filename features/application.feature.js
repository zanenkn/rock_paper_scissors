require('../spec.helper');

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

  it('by choosing a "Rock" for her turn', async () => {
    await browser.clickOnButton("input[id='Rock']")
    let message = await browser.getContent("[id='message']")
    expect(message).to.eql(String)
  });
});