// Write a JavaScript program that attempts to divide a number by zero. Use trycatchto handle the error and display an appropriate error message

function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        let result = a / b;
        console.log(`The result is: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

divideNumbers(10, 0); 
divideNumbers(10, 2); 