const { RockPaperScissors } =  require('../spec.helper')
const { ComputerChoice } =  require('../spec.helper')
let {UserChoice} = require('../spec.helper')

describe ("Rock Paper Scissors", () => {
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
    //let rockPaperScissors = new RockPaperScissors

    it("takes a user input as a user choice", async () => {
        await browser.clickOnButton("button[id='rock']")
        expect(UserChoice()).to.eql("rock")
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