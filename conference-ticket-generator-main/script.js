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
    const nameInput = document.getElementById("nameInput");
    const github = document.getElementById("git-hub");

    // Get the ticket section and elements
    //   const ticket = document.getElementById("ticket");
    const ticketGithub = document.getElementById("ticket-git-hub");
    const ticketName = document.getElementById("ticketName");
    const ticketId = document.getElementById("ticketId");

    // When the form is submitted
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop the page from refreshing

        const name = nameInput.value;



        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        // Show the name
        ticketName.textContent = name;
        ticketGithub.textContent = github.value

        // Create a random ticket ID
        const randomId = "TICKET-" + Math.floor(100000 + Math.random() * 900000);

        // Show the ticket ID
        ticketId.textContent = randomId;

        // // Show the ticket section
        // ticket.style.display = "block";

        // Clear the input
        nameInput.value = "";
    });
}

// Call the function to set everything up
generateTicket();
