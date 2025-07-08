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



console.log('your sum of numbers is: ', sum);

function generateTicket() {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const github = document.getElementById("GitHub");
    // const email = document.getElementById("emails

    const ticketGithub = document.getElementById("ticket-git-hub");
    const ticketName = document.getElementById("ticket-name");
    const ticketId = document.getElementById("side-digit");
    // const ticketEmail = document.getElementById("ticket-email"); 

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value;
        const gitUser = github.value;
        // const userEmail = email.value;

        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        ticketName.textContent = name;
        ticketGithub.textContent = gitUser;
        ticketId.textContent = Math.floor(1000 + Math.random() * 9000);
        // if (ticketEmail) ticketEmail.textContent = userEmail;

        document.getElementById("ticket").style.display = "block";

        // Optional: Clear inputs
        nameInput.value = "";
        github.value = "";
        // email.value = "";
    });
}

generateTicket();

        // Get the element where the answer will be shown (the <p> inside .answers)
const display = document.querySelector('.answers p');

// Get all the <h1> buttons inside the .row (these are like 1, 2, +, = buttons)
const buttons = document.querySelectorAll('.row h1');

// We'll store what the user types (like "12+3") in this variable
let currentInput = "";

// Go through each button and listen for clicks
buttons.forEach(button => {
  
  // When a button is clicked, do something
  button.addEventListener("click", () => {

    // Get the text on the button (like "1", "2", "+", "=")
    const value = button.textContent.trim();

    // If the button says "DEL", remove the last number/character typed
    if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
    
    // If the button says "RESET", clear everything
    } else if (value === "RESET") {
      currentInput = "";
    
    // If the button is "=", calculate the answer
    } else if (value === "=") {
      try {
        // Change 'x' to '*' because computers use * for multiplication
        const expression = currentInput.replace(/x/g, '*');

        // Use a math tool to evaluate (solve) the math problem
        const result = math.evaluate(expression);

        // Show the result as a string (so it displays properly)
        currentInput = result.toString();
      } catch (err) {
        // If something goes wrong, show "Error"
        currentInput = "Error";
      }
    
    // If it's a number or operator like +, -, x, / just add it to the input
    } else {
      currentInput += value;
    }

    // Show whatever the current input or answer is on the screen
    display.textContent = currentInput;
  });
});

