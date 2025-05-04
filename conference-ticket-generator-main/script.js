//Variable
let abdulssalam = "Azeemat";
// var abdurrahman = "Abdurrahman";
abdulssalam = "Abdulssalam";

//constant
const sonic = "Sonic";
sonic = "Sonic the Hedgehog";

// Data Types:
// String === text, "string"
// number== 1, 1.3 
// boolean == true, false

// +, -, *, /
let firstNumber = 10;
let secondNumber = 5;
let sum = firstNumber * secondNumber;
firstNumber % secondNumber;

firstNumber === secondNumber; // false
firstNumber = secondNumber;	//5
firstNumber !== secondNumber; // true

function greet(name) {
    console.log(name);
}

greet('animate');


function checkTrue(firstNumber, secondNumber) {
    return firstNumber === secondNumber;
}

function checkfalse(firstNumber, secondNumber) {
    return firstNumber !== secondNumber;
}

function checkequal(firstNumber, secondNumber) {
    return firstNumber = secondNumber;
}

greet("Ayo");

if (age < 13) {
    console.log("You're a kid!");
} else {
    console.log("You're a teen or older!");
}

if (age < 13) {
    console.log("You're a kid!");
} else if (age < 20) {
    console.log("You're a teen!");
}
else if (age < 65) {
    console.log("You're an adult!");
} else {
    console.log("You're a senior citizen!");
}

const firstNumber = Number(prompt("Enter the first number:"));
  const secondNumber = Number(prompt("Enter the second number:"));
  const operation = prompt("Choose an operation: +, -, *, /");

console.log('your sum of numbers is: ', sum);

function calculator() {
  let result;
  const firstNumber = Number(prompt("Enter the first number:"));
  const secondNumber = Number(prompt("Enter the second number:"));
  const operations = prompt("Choose an operation: +, -, *, /, %");

  if (operations === "*") {
    result = firstNumber * secondNumber;
  } else if (operations === "/") {
    if (secondNumber === 0) {
      console.log("It is not eligible to divide by zero");
      return;
    } else {
      result = firstNumber / secondNumber;
    }
  } else if (operations === "%") {
    result = firstNumber % secondNumber;
  } else if (operations === "-") {
    result = firstNumber - secondNumber;
  } else if (operations === "+") {
    result = firstNumber + secondNumber;
  } else {
    console.log("Calculator cannot perform this action");
    return;
  }

  console.log("Result is: " + result);
}

calculator();

