let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = num2 + 40; // Third number

let result = `Multiples of ${num1} from ${num2} to ${num3}:\n`;
let current = num2;

while (current <= num3) {
    if (current % num1 === 0) {
        result += `${current}\n`;
    }
    current++;
}

alert(result);
