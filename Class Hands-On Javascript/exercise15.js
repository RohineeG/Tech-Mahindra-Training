let first = parseInt(prompt("Enter the first number: "));
let second = first + 50; 
console.log(`Displaying values from ${first} to ${second}, skipping multiples of 5:`);
let current = first;
while (current <= second) {
    if (current % 5 === 0) {
        current++;
        continue;
    }
    console.log(current);
    current++;
}
