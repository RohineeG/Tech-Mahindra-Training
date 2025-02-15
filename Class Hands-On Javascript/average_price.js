let tomato = [15, 20, 27, 105, 80, 65, 45]; 
let sum = 0;
for (let price of tomato) {
    sum += price; 
}

let average = sum / tomato.length;
console.log(`Average tomato price: Rs.${average.toFixed(2)}`);

if (average > 50) {
    console.log("Tomato has given good profit.");
} else {
    console.log("No profit from tomato.");
}
