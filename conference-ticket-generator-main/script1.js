// //Variable
// let abdulssalam = "Azeemat";
// // var abdurrahman = "Abdurrahman";
// abdulssalam = "Abdulssalam";

// //constant
// const sonic = "Sonic";
// sonic = "Sonic the Hedgehog";

// // Data Types:
// // String === text, "string"
// // number== 1, 1.3 
// // boolean == true, false

// // +, -, *, /
// let firstNumber = 10;
// let secondNumber = 5;
// let sum = firstNumber * secondNumber;
// firstNumber % secondNumber;

// firstNumber === secondNumber; // false
// firstNumber = secondNumber;	//5
// firstNumber !== secondNumber; // true

// function greet(name) {
//     console.log(name);
// }

// greet('animate');


// function checkTrue(firstNumber, secondNumber) {
//     return firstNumber === secondNumber;
// }

// function checkfalse(firstNumber, secondNumber) {
//     return firstNumber !== secondNumber;
// }

// function checkequal(firstNumber, secondNumber) {
//     return firstNumber = secondNumber;
// }

// greet("Ayo");

// if (age < 13) {
//     console.log("You're a kid!");
// } else {
//     console.log("You're a teen or older!");
// }



// if (age < 13) {
//     console.log("You're a kid!");
// } else if (age < 20) {
//     console.log("You're a teen!");
// }
// else if (age < 65) {
//     console.log("You're an adult!");
// } else {
//     console.log("You're a senior citizen!");
// }

// for (let i = 1; i <= 5; i++) {
//     console.log("Count: " + i);
// }



function miniCalculator() {
    const firstNumber = Number(prompt("Enter the first number:"));
    const secondNumber = Number(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation: +, -, *, /, %");

    let result;

    if (operation === "+") {
        result = firstNumber + secondNumber;
    } else if (operation === "-") {
        result = firstNumber - secondNumber;
    } else if (operation === "*") {
        result = firstNumber * secondNumber;
    } else if (operation === "%") {
        result = firstNumber % secondNumber;
    } else if (operation === "/") {
        if (secondNumber === 0) {
            result = "Oops! Cannot divide by zero!";
        } else {
            result = firstNumber / secondNumber;
        }
    } else {
        result = "Invalid operation! Please choose +, -, *, or /";
    }

    console.log("🎯 Your result is: " + result);
}

// Call the calculator
miniCalculator();




function maxSubArray(nums) {
    let bestSum = -Infinity
    let currentSum = 0
    let start = 0
    let bestStart = 0
    let bestEnd = 0


    for (let i = 0; i < nums.length; i++) {
        if (currentSum + nums[i] < nums[i]) {
            currentSum = nums[i];
            start = i
        }
        else {
            currentSum += nums[i]
        }

        if (currentSum > bestSum) {
            bestSum = currentSum
            bestStart = start
            bestEnd = i
        }
    }

}

function flatArray(arr) {
    const NewFlatArr = arr.flat()
}

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay)
        return () => clearTimeout(timer)
    }
        , [value, delay])

    return debounceValue
}

function isPalindrome(word) {
    const left = 0
    const right = word.length - 1

    while (left < right) {
        if (word[left] !== word[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
function reverseInPlace(str) {
    
  }
