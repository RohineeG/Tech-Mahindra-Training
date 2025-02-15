let num = parseInt(prompt("Enter the number for multiplication table:"));
let limit = parseInt(prompt("Enter the limit:"));

let result = "";
for (let i = 1; i <= limit; i++) {
    result += `${num} * ${i} = ${num * i}\n`;
}
alert(result);
