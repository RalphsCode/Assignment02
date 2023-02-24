const prompt = require("prompt-sync")({sigint: true});

// Assign a random coin flip

let coinFlip = Math.round(Math.random())

// User picks Heads or tails

choice = prompt("What's it gonna be, heads or tails?")
choice = choice.toLowerCase();

// Conditional statement through the outcomes

if (choice == 'heads' && coinFlip == 1){
    alert("The flip was heads and you chose heads...you win!")
}
else if (choice == 'tails' && coinFlip == 1){
    alert("The flip was heads but you chose tails...you lose!")
}
else if (choice == 'heads' && coinFlip == 0){
    alert("The flip was tails but you chose heads...you lose!")
}
else if (choice == 'tails' && coinFlip == 0){
    alert("The flip was tails but you chose heads...you lose!")
}


// ALternate Refactored could be the following

// See if the user choice matches the coin flip
if ((choice == 'heads' && coinFlip == 1) || (choice == 'tails' && coinFlip == 0)){
    console.log("Winner winner chicken dinner!")
}
    else  {
    console.log("You guessed wrong. Better luck next time!")
    }

// Display the two variables to validate the logic
console.log("The coin Flip was: {coinFlip} and you chose: {choice}");