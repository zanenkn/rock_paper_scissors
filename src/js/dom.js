// Determining the winner


document.addEventListener('DOMContentLoaded', () => {
    let choice = document.querySelectorAll("button[tag='choice']")
    for(var i = 0; i < choice.length; i++){

        choice[i].addEventListener("click", function() {
            event.preventDefault();
            setComputersChoice();

            if (userChoice == computersChoice) {
                document.getElementById("message").innerHTML = `You chose ${userChoice}, computer chose ${computersChoice}. It is a tie.`
            } else if (
                (userChoice == "rock" && computersChoice == "scissors") ||
                (userChoice == "scissors" && computersChoice == "paper") ||
                (userChoice == "paper" && computersChoice == "rock")
            ) {
                document.getElementById("message").innerHTML = `You chose ${userChoice}, computer chose ${computersChoice}. You win!`
            } else {
                document.getElementById("message").innerHTML = `You chose ${userChoice}, computer chose ${computersChoice}. You lose!`
            }    
        })    
    }
})

