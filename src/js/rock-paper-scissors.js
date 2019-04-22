//Users choice by clicking button

function SetUserChoice(choice) {
    UserChoice = choice
}

// Computers choice (random)
function SetComputersChoice() {
    let num = Math.floor((Math.random() * 3) + 1)
    if (num==1) {
        ComputersChoice="rock"
    } else if (num==2) {
        ComputersChoice="paper"
    } else {ComputersChoice="scissors"}
    
    return ComputersChoice
}


// Determining the winner
document.addEventListener('DOMContentLoaded', () => {
    let choice = document.querySelectorAll("button[tag='choice']")
    for(var i = 0; i < choice.length; i++){

        choice[i].addEventListener("click", function() {
            event.preventDefault();
            SetComputersChoice();

            if (UserChoice == ComputersChoice) {
                document.getElementById("message").innerHTML = `You chose ${UserChoice}, computer chose ${ComputersChoice}. It is a tie.`
            } else if (
                (UserChoice == "rock" && ComputersChoice == "scissors") ||
                (UserChoice == "scissors" && ComputersChoice == "paper") ||
                (UserChoice == "paper" && ComputersChoice == "rock")
            ) {
                document.getElementById("message").innerHTML = `You chose ${UserChoice}, computer chose ${ComputersChoice}. You win!`
            } else {
                document.getElementById("message").innerHTML = `You chose ${UserChoice}, computer chose ${ComputersChoice}. You lose!`
            }    
        })    
    }

})