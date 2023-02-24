const prompt = require("prompt-sync")({sigint: true});

// Request a number be entered by the user and assign it to a variable

numberOne = parseInt(prompt("Please enter a whole number between 1 and 100  "))

// Verify the number is in range, if not display an error

if (numberOne <= 0 || numberOne >= 101)
 {
 console.log(" Oops: the number {numberOne} is not in the range of 1 and 100.")
  }

// Assign a grade to the number

  else if ((numberOne >=90) && (numberOne <=100)){
    console.log("You received an A")
  }
  else if ((numberOne >=80) && (numberOne <=89)){
    console.log("You received a B")
  }
  else if ((numberOne >=70) && (numberOne <=79)){
    console.log("You received a C")
  }
  else if ((numberOne >=60) && (numberOne <=69)){
    console.log("You received a D")
  }
  else {
    console.log("You received an F")
  }