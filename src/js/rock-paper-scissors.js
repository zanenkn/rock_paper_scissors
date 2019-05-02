// Users choice by clicking button
function setUserChoice(choice) {
    userChoice = choice
}

//Computers class and choice, works with stub1
// class Computer {
//     constructor(choice) {
//         this.choice = function () {
//             let num = Math.floor((Math.random() * 3) + 1)
//             if (num==1) {
//                 return "rock"
//             } else if (num==2) {
//                 return "paper"
//             } else {return "scissors"}  
//         }
//     }
// }

// works with stub2 and stub3
// const Computer = {
//     choice: function () {
//         let num = Math.floor((Math.random() * 3) + 1)
//         if (num == 1) {
//             return "rock"
//         } else if (num == 2) {
//             return "paper"
//         } else { return "scissors" }
//     }
// }


// Previous Computers choice function.
// For reference only
// Refactored into a constructor above because it is not possible to test an objectless function with Sinon.js

function setComputersChoice() {
    let num = Math.floor((Math.random() * 3) + 1)
    if (num==1) {
        computersChoice="rock"
    } else if (num==2) {
        computersChoice="paper"
    } else {computersChoice="scissors"}

    return computersChoice
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = {setUserChoice} 
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {setComputersChoice}
}