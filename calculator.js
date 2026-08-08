const calculationHistory = [];

// Primary calculator functions
function addition(a, b) {
  const result = a + b;
  addToHistory(a, "+", b, result);
  return result;
}

function subtraction(a, b) {
  const result = a - b;
  addToHistory(a, "-", b, result);
  return result;
}

function multiplication(a, b) {
  const result = a * b;
  addToHistory(a, "*", b, result);
  return result;
}

function division(a, b) {
  const result = a / b;
  addToHistory(a, "/", b, result);
  return result;
}

// History functions stored as objects
function addToHistory(num1, operator, num2, result) {
  // Create a historyObject that stores numbers, results, and operators.
  const historyObject = {
    num1: num1,
    operator: operator,
    num2: num2,
    result: result,
  };
  calculationHistory.push(historyObject);
}

// Add to history

function showHistory() {
  if (calculationHistory.length === 0) {
    console.log("No history yet.");
  }

  for (let i = 0; i < calculationHistory.length; i++) {
    console.log(calculationHistory[i]);
  }
}

let isRunning = true;

// Main user flow
while (isRunning == true) {
  let userChoice = prompt("Please enter your choice:\n 1. Addition\n 2. Subtraction\n 3. Multiplication\n 4. Division\n 5. Show History\n 6. End program.");

  if (userChoice == 1) {
    let userNumber1 = prompt("Please enter the first number, and press enter.\n\n");
    let userNumber2 = prompt("Please enter the second number, and press enter.\n\n");
    console.log(addition(Number(userNumber1), Number(userNumber2)));
  } else if (userChoice == 2) {
    let userNumber1 = prompt("Please enter the first number, and press enter.\n\n");
    let userNumber2 = prompt("Please enter the second number, and press enter.\n\n");

    console.log(subtraction(Number(userNumber1), Number(userNumber2)));
  } else if (userChoice == 3) {
    let userNumber1 = prompt("Please enter the first number, and press enter.\n\n");
    let userNumber2 = prompt("Please enter the second number, and press enter.\n\n");

    console.log(multiplication(Number(userNumber1), Number(userNumber2)));
  } else if (userChoice == 4) {
    let userNumber1 = prompt("Please enter the first number, and press enter.\n\n");
    let userNumber2 = prompt("Please enter the second number, and press enter.\n\n");

    // Prevent divide by zero, first number is okay to be zero, as it will equal 0 in that case. If number 2 is zero, a divide by zero error occurs.
    while (userNumber2 == 0) {
      userNumber2 = prompt("Your second number was zero, please choose another number.\n\n");
    }
    console.log(division(Number(userNumber1), Number(userNumber2)));
  } else if (userChoice == 5) {
    showHistory();
  } else if (userChoice == 6) {
    isRunning = false;
  }
}

console.log("Thank you for using the calculator!");
