

function RockPaperScissors () {

    
}

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
}

SetComputersChoice();