//Users choice by clicking button
function setUserChoice(choice) {
    userChoice = choice
}

// Computers choice (random)
// const Computer = {
//     choice: function () {
//         let num = Math.floor((Math.random() * 3) + 1)
//         if (num==1) {
//             return computersChoice = "rock"
//         } else if (num==2) {
//             return computersChoice = "paper"
//         } else {return computersChoice = "scissors"}
        
//     }
// }



class Computer {
    constructor(choice) {
        this.choice = function () {
            let num = Math.floor((Math.random() * 3) + 1)
            if (num==1) {
                return "rock"
            } else if (num==2) {
                return "paper"
            } else {return "scissors"}
            
        }
    }
}


// // function setComputersChoice() {
// //     let num = Math.floor((Math.random() * 3) + 1)
// //     if (num==1) {
// //         computersChoice="rock"
// //     } else if (num==2) {
// //         computersChoice="paper"
// //     } else {computersChoice="scissors"}
    
// //     return computersChoice
// // }





if (typeof module !== 'undefined' && module.exports) {
    module.exports = setUserChoice;
}

// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = setComputersChoice;
// }

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Computer;
}

