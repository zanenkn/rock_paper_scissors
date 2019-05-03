require('../spec.helper')

function setComputersChoice() {
  let num = Math.floor((Math.random() * 3) + 1)
  if (num==1) {
      computersChoice="rock"
  } else if (num==2) {
      computersChoice="paper"
  } else {computersChoice="scissors"}

  return computersChoice
}

describe ("Rock Paper Scissors", () => {
  it('computer has a random choice', () => {
    let choice = setComputersChoice();
    expect(choice).to.be.oneOf(["rock","paper","scissors"]) 
  });


})

