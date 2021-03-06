require('../spec.helper')
var sinon = require('sinon');

describe ("Testing stubs:", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("stub1 works", () => {
    let comp = new Computer
    sinon.stub(comp, 'choice').returns("rock")
    expect(comp.choice()).to.eql("rock")
  });

  it("stub2 works", () => {
    sinon.stub(Computer, 'choice').get(function getterFn() {
      return 'rock';
    });

    expect(Computer.choice).to.eql("rock")
  });

  it("stub3 works", () => {
    sinon.stub(Computer, 'choice').value('rock')
    expect(Computer.choice).to.eql("rock")
  });

});

