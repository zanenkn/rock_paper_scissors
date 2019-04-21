const { RockPaperScissors } =  require('../spec.helper')

describe ("Rock Paper Scissors", () => {
    let rockPaperScissors = new RockPaperScissors

    it("takes a user input as a user choice", () =>{
        expect(rockPaperScissors.userChoice("Rock")).to.eql("Rock")
    });

})

describe ("Rock Paper Scissors", () => {
    let rockPaperScissors = new RockPaperScissors
    let computerChoice = new ComputerChoice
    let userChoice = "Rock"

    if(computerChoice = "Rock") {
        it("game is a tie", () =>{
            expect(rockPaperScissors.message).to.eql("Game is a tie")
        })
    } else if(computerChoice = "Paper") {
        it("game is lost", () => {
            expect(rockPaperScissors.message).to.eql("You lost!")
        })
    } else(computerChoice = "Scissors") {
        it("game is won", () => {
            expect(rockPaperScissors.message).to.eql("You won!")
        })
    }

})