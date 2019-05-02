require('../spec.helper')


describe ("Rock Paper Scissors", () => {
  it('computer has a random choice', () => {
    let choice = setComputersChoice();
    expect(choice).to.be.oneOf(["rock","paper","scissors"]) 
  });


})

