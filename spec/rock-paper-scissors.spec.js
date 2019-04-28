require('../spec.helper')
var sinon = require('sinon');

describe ("Rock Paper Scissors", () => {
    it("stub works", () => {
      let comp = new Computer
      sinon.stub(comp, 'choice').returns("rock")
      expect(comp.choice()).to.eql("rock")
    });

})
