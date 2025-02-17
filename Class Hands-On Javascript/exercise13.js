let first = parseInt(prompt("Enter the first number: "));
let second = parseInt(prompt("Enter the second number: "));
let third = second + 40;
let current = second;
console.log(`Multiples of ${first} from ${second} to ${third}:`);
while (current <= third) {
    if (current % first === 0) {
        console.log(current);
    }
    current++;
}
