const arithmeticOperation = () => {
    let operation = prompt("Choose an operation: add, subtract, multiply, divide: ").toLowerCase();
    let num1 = parseFloat(prompt("Enter first number: "));
    let num2 = parseFloat(prompt("Enter second number: "));
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => b !== 0 
        ? `Quotient: ${Math.floor(a / b)}, Remainder: ${a % b}` 
        : "Cannot divide by zero";
    switch (operation) {
        case "add":
            console.log(`Sum: ${add(num1, num2)}`);
            break;
        case "subtract":
            console.log(`Difference: ${subtract(num1, num2)}`);
            break;
        case "multiply":
            console.log(`Product: ${multiply(num1, num2)}`);
            break;
        case "divide":
            console.log(divide(num1, num2));
            break;
        default:
            console.log("Invalid operation!");
    }
};
arithmeticOperation();
