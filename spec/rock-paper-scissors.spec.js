require('../spec.helper')
var sinon = require('sinon');

describe ("Rock Paper Scissors", () => {
    it("stub works", () => {
      let comp = new Computer
      sinon.stub(comp, 'choice').returns("rock")
      expect(comp.choice()).to.eql("rock")
    });

})

// describe ("Rock Paper Scissors", () => {
//     // let rockPaperScissors = new RockPaperScissors
//     // let computerChoice = new ComputerChoice
//     let userChoice = "Rock"

//     if(computerChoice = "Rock") {
//         it("game is a tie", () =>{
//             expect(rockPaperScissors.message).to.eql("Game is a tie")
//         })
//     } else if(computerChoice = "Paper") {
//         it("game is lost", () => {
//             expect(rockPaperScissors.message).to.eql("You lost!")
//         })
//     } else {
//         it("game is won", () => {
//             expect(rockPaperScissors.message).to.eql("You won!")
//         })
//     }

// })