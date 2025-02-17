let first = parseInt(prompt("Enter the first number: "));
let second = first + 30; 
console.log(`Displaying values from ${first} to ${second}, stopping at multiples of 7:`);
let current = first;
while (current <= second) {
    if (current % 7 === 0) {
        break;
    }
    console.log(current);
    current++;
}
