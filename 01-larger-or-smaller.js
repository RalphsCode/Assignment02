const prompt = require("prompt-sync")({sigint: true});

// Request two numbers be entered by the user and assign them to variables

    numberOne = parseInt(prompt("Please enter a whole number between 1 and 10  "))
    numberTwo = parseInt(prompt("Please enter another whole number between 1 and 10  "))

// Verify the numbers are in range, if not display an error

    if (numberOne <= 0 || numberOne >=11 || numberTwo <= 0 || numberTwo >=11)
     {
     console.log(" Oops: one number is not in range of 1 and 10.")
      }

// Check if the same number was entered twice
    else if (numberOne == numberTwo){
        console.log(" My calculations have determined both numbers are the same: {numberOne}")
    }

// If the first number is larger display it

    else if (numberOne > numberTwo) {
    console.log(" {numberOne} is the larger of the two numbers")}
    else {

// If the second number is larger display it

         console.log(" {numberTwo} is the larger of the two numbers")}